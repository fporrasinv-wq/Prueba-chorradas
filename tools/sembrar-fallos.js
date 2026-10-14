#!/usr/bin/env node
/* tools/sembrar-fallos.js — tria preguntes d'un curs amb una llavor
   fixa (reproduïble) i genera versions "mutants" (amb un error
   introduït a propòsit) i "controls" (preguntes netes), barrejades
   sense indicar quines són quines, per mesurar després si un
   solucionador cec les detecta (tools/medir-benchmark.js). Mai toca
   data/questions.js. Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const { carregarDades, arrel } = require("./lib/dades");
const { mulberry32, shuffleAmbRng } = require("./lib/text");

const args = process.argv.slice(2);
function getArg(name, def) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : def;
}
const curs = getArg("--curs");
const llavor = parseInt(getArg("--llavor", "20261014"), 10);
const OBJECTIU_PER_TIPUS = 10;
const TOTAL_MUTANTS = 60;
const TOTAL_CONTROLS = 60;

if (!curs) {
  console.error("Ús: node tools/sembrar-fallos.js --curs 4t [--llavor 20261014]");
  process.exit(2);
}

const ROOT = arrel();
const { QUESTIONS } = carregarDades();
const rng = mulberry32(llavor);

const pool = QUESTIONS.filter((q) => q.curs === curs && !q.id.startsWith("TEST_"));
if (pool.length < TOTAL_MUTANTS + TOTAL_CONTROLS) {
  console.error(`El curs "${curs}" només té ${pool.length} preguntes; calen com a mínim ${TOTAL_MUTANTS + TOTAL_CONTROLS} (60 mutants + 60 controls).`);
  process.exit(2);
}

function parseAritmetica(pregunta) {
  const net = String(pregunta || "").trim();
  const m = net.match(/^(-?\d+(?:,\d+)?)\s*([+\-−x×·÷:])\s*(-?\d+(?:,\d+)?)\s*(?:=\s*\?)?$/);
  if (!m) return null;
  return { aStr: m[1], op: m[2], bStr: m[3] };
}

const TIPUS_MUTACIO = [
  {
    id: "test-clau-canviada",
    candidats: (q) => q.tipus === "test" && Array.isArray(q.opcions) && q.opcions.some((o) => o !== q.resposta_correcta),
    aplica: (q) => {
      const distractors = q.opcions.filter((o) => o !== q.resposta_correcta);
      const nova = distractors[Math.floor(rng() * distractors.length)];
      return { ...q, resposta_correcta: nova };
    }
  },
  {
    id: "aritmetica-numero-alterat",
    candidats: (q) => q.materia === "mat" && (q.tipus === "test" || q.tipus === "resposta_escrita") && !!parseAritmetica(q.pregunta),
    aplica: (q) => {
      const p = parseAritmetica(q.pregunta);
      const aNum = parseFloat(p.aStr.replace(",", "."));
      const nouA = aNum + 1;
      const novaAStr = p.aStr.includes(",") ? String(nouA).replace(".", ",") : String(nouA);
      const novaPregunta = q.pregunta.replace(p.aStr, novaAStr);
      return { ...q, pregunta: novaPregunta };
    }
  },
  {
    id: "veritat-fals-invertit",
    candidats: (q) => q.tipus === "veritat_fals",
    aplica: (q) => ({ ...q, resposta_correcta: !q.resposta_correcta })
  },
  {
    id: "test-opcio-duplicada",
    candidats: (q) => q.tipus === "test" && Array.isArray(q.opcions) && q.opcions.length >= 2,
    aplica: (q) => {
      const opcions = q.opcions.slice();
      let i = Math.floor(rng() * opcions.length);
      let j = Math.floor(rng() * opcions.length);
      while (j === i) j = Math.floor(rng() * opcions.length);
      opcions[j] = opcions[i];
      return { ...q, opcions };
    }
  },
  {
    id: "emparellar-dreta-duplicada",
    candidats: (q) => q.tipus === "emparellar" && Array.isArray(q.parelles) && q.parelles.length >= 2,
    aplica: (q) => {
      const parelles = q.parelles.map((p) => ({ ...p }));
      let i = Math.floor(rng() * parelles.length);
      let j = Math.floor(rng() * parelles.length);
      while (j === i) j = Math.floor(rng() * parelles.length);
      parelles[j].b = parelles[i].b;
      return { ...q, parelles };
    }
  },
  {
    id: "ordenar-elements-intercanviats",
    candidats: (q) => q.tipus === "ordenar" && Array.isArray(q.elements_ordre_correcte) && q.elements_ordre_correcte.length >= 2,
    aplica: (q) => {
      const elements = q.elements_ordre_correcte.slice();
      let i = Math.floor(rng() * elements.length);
      let j = Math.floor(rng() * elements.length);
      while (j === i) j = Math.floor(rng() * elements.length);
      [elements[i], elements[j]] = [elements[j], elements[i]];
      return { ...q, elements_ordre_correcte: elements };
    }
  }
];

const usats = new Set();
const assignacions = []; // { tipusMutacio, original }

// Ronda 1: fins a OBJECTIU_PER_TIPUS per tipus, barrejant els candidats
TIPUS_MUTACIO.forEach((tm) => {
  const candidats = shuffleAmbRng(pool.filter((q) => !usats.has(q.id) && tm.candidats(q)), rng);
  candidats.slice(0, OBJECTIU_PER_TIPUS).forEach((q) => {
    usats.add(q.id);
    assignacions.push({ tipusMutacio: tm.id, original: q });
  });
});

// Ronda 2: si falten per arribar a 60, repartim entre els tipus amb candidats sobrants
let intents = 0;
while (assignacions.length < TOTAL_MUTANTS && intents < 1000) {
  intents++;
  let afegit = false;
  for (const tm of TIPUS_MUTACIO) {
    if (assignacions.length >= TOTAL_MUTANTS) break;
    const candidats = pool.filter((q) => !usats.has(q.id) && tm.candidats(q));
    if (candidats.length === 0) continue;
    const q = candidats[Math.floor(rng() * candidats.length)];
    usats.add(q.id);
    assignacions.push({ tipusMutacio: tm.id, original: q });
    afegit = true;
  }
  if (!afegit) break;
}

if (assignacions.length < TOTAL_MUTANTS) {
  console.error(`Només s'han pogut generar ${assignacions.length} mutants (calien ${TOTAL_MUTANTS}); el curs "${curs}" no té prou preguntes variades de cada tipus.`);
}

const mutants = assignacions.map(({ tipusMutacio, original }) => {
  const tm = TIPUS_MUTACIO.find((t) => t.id === tipusMutacio);
  const mutat = tm.aplica(original);
  return { id: original.id, tipusMutacio, original, mutat };
});

// Controls: preguntes netes, distintes dels mutants
const restants = shuffleAmbRng(
  pool.filter((q) => !usats.has(q.id)),
  rng
);
const controls = restants.slice(0, TOTAL_CONTROLS);
if (controls.length < TOTAL_CONTROLS) {
  console.error(`Només s'han pogut triar ${controls.length} controls (calien ${TOTAL_CONTROLS}).`);
}

const outDir = path.join(ROOT, "tools", "benchmark");
fs.mkdirSync(outDir, { recursive: true });

function versioCega(q) {
  const base = { id: q.id, tipus: q.tipus, pregunta: q.pregunta };
  if (q.text) base.text = q.text;
  if (q.tipus === "test") base.opcions = shuffleAmbRng(q.opcions, rng);
  else if (q.tipus === "ordenar") base.elements = shuffleAmbRng(q.elements_ordre_correcte, rng);
  else if (q.tipus === "emparellar") {
    base.part_esquerra = shuffleAmbRng(q.parelles.map((p) => p.a), rng);
    base.part_dreta = shuffleAmbRng(q.parelles.map((p) => p.b), rng);
  }
  return base;
}

const itemsCecs = [
  ...mutants.map((m) => versioCega(m.mutat)),
  ...controls.map((c) => versioCega(c))
];
const itemsBarrejats = shuffleAmbRng(itemsCecs, rng);

fs.writeFileSync(
  path.join(outDir, "preguntes-cegues.json"),
  JSON.stringify({ curs, total: itemsBarrejats.length, preguntes: itemsBarrejats }, null, 2)
);

fs.writeFileSync(path.join(outDir, "mutantes.json"), JSON.stringify(mutants.map((m) => ({ id: m.id, tipusMutacio: m.tipusMutacio, original: m.original, mutat: m.mutat })), null, 2));
fs.writeFileSync(path.join(outDir, "controles.json"), JSON.stringify(controls, null, 2));

const claus = {
  curs,
  llavor,
  mutants: mutants.map((m) => ({ id: m.id, esMutant: true, tipusMutacio: m.tipusMutacio, clau: m.mutat })),
  controls: controls.map((c) => ({ id: c.id, esMutant: false, tipusMutacio: null, clau: c }))
};
fs.writeFileSync(path.join(outDir, "claves.json"), JSON.stringify(claus, null, 2));

console.log(`Curs: ${curs} (llavor ${llavor})`);
console.log(`Mutants generats: ${mutants.length}`);
const perTipus = {};
mutants.forEach((m) => (perTipus[m.tipusMutacio] = (perTipus[m.tipusMutacio] || 0) + 1));
Object.entries(perTipus).forEach(([t, n]) => console.log(`  - ${t}: ${n}`));
console.log(`Controls generats: ${controls.length}`);
console.log(`\nFitxers escrits a tools/benchmark/:`);
console.log(`  - preguntes-cegues.json (${itemsBarrejats.length} preguntes barrejades, SENSE indicar quines son mutants)`);
console.log(`  - mutantes.json, controles.json (desglossats, per inspecció)`);
console.log(`  - claves.json (claus per a tools/medir-benchmark.js)`);
