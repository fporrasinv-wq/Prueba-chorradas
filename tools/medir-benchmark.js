#!/usr/bin/env node
/* tools/medir-benchmark.js — llegeix les respostes d'un solucionador
   sobre el conjunt mutants+controls (tools/benchmark/preguntes-cegues.json)
   i tools/benchmark/claves.json, i calcula quants errors sembrats va
   detectar i quantes falses alarmes va donar sobre les preguntes netes.
   Escriu documentos/informe-benchmark.md. Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const { arrel } = require("./lib/dades");
const { respostaCoincideix } = require("./lib/comparacio");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
}
const resultatsDir = getArg("--resultados");
if (!resultatsDir) {
  console.error("Ús: node tools/medir-benchmark.js --resultados <carpeta>");
  process.exit(2);
}

const ROOT = arrel();
const clausPath = path.join(ROOT, "tools", "benchmark", "claves.json");
if (!fs.existsSync(clausPath)) {
  console.error(`No existeix ${path.relative(ROOT, clausPath)}. Executa primer tools/sembrar-fallos.js.`);
  process.exit(2);
}
const claus = JSON.parse(fs.readFileSync(clausPath, "utf8"));
const items = [...claus.mutants, ...claus.controls];
const itemsPerId = new Map(items.map((x) => [x.id, x]));

const dir = path.isAbsolute(resultatsDir) ? resultatsDir : path.join(ROOT, resultatsDir);
if (!fs.existsSync(dir)) {
  console.error(`No existeix la carpeta de resultats: ${dir}`);
  process.exit(2);
}
const fitxers = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
const respostesPerId = new Map();
fitxers.forEach((f) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    (data.respostes || []).forEach((r) => respostesPerId.set(r.id, r));
  } catch (e) {
    console.error(`No s'ha pogut llegir ${f}: ${e.message}`);
  }
});

const detectatsPerTipus = {};
const totalPerTipus = {};
const noDetectats = [];
let mutantsResposts = 0;
let falsesAlarmes = 0;
let controlsResposts = 0;
const falsesAlarmesIds = [];
const noRetornats = [];

claus.mutants.forEach((m) => {
  totalPerTipus[m.tipusMutacio] = (totalPerTipus[m.tipusMutacio] || 0) + 1;
  const r = respostesPerId.get(m.id);
  if (!r) {
    noRetornats.push(m.id);
    return;
  }
  mutantsResposts++;
  const coincideix = respostaCoincideix(m.clau, r.resposta);
  // el mutant té la clau ESTROPEJADA: si el solucionador hi coincideix,
  // vol dir que NO ha detectat l'error (ha "confirmat" la resposta dolenta)
  const detectat = !coincideix || !!r.ambigua;
  if (detectat) detectatsPerTipus[m.tipusMutacio] = (detectatsPerTipus[m.tipusMutacio] || 0) + 1;
  else noDetectats.push(m.id);
});

claus.controls.forEach((c) => {
  const r = respostesPerId.get(c.id);
  if (!r) {
    noRetornats.push(c.id);
    return;
  }
  controlsResposts++;
  const coincideix = respostaCoincideix(c.clau, r.resposta);
  if (!coincideix || r.ambigua) {
    falsesAlarmes++;
    falsesAlarmesIds.push(c.id);
  }
});

console.log(`Mutants: ${claus.mutants.length} (respostos: ${mutantsResposts})`);
console.log("Detecció per tipus de mutació:");
Object.keys(totalPerTipus).forEach((t) => {
  const n = detectatsPerTipus[t] || 0;
  console.log(`  - ${t}: ${n}/${totalPerTipus[t]}`);
});
console.log(`Controls: ${claus.controls.length} (respostos: ${controlsResposts})`);
console.log(`Falses alarmes sobre controls: ${falsesAlarmes}/${controlsResposts} (${controlsResposts ? ((falsesAlarmes / controlsResposts) * 100).toFixed(1) : "0.0"}%)`);
console.log(`No retornats (ni mutants ni controls): ${noRetornats.length}`);

const lines = [];
lines.push("# Informe de benchmark (mutants vs controls)");
lines.push("");
lines.push(`Generat: ${new Date().toISOString()}`);
lines.push(`Curs: ${claus.curs} · Llavor: ${claus.llavor} · Carpeta de resultats: ${resultatsDir}`);
lines.push("");
lines.push("## Detecció per tipus de mutació");
lines.push("");
lines.push("| tipus de mutació | detectats | total |");
lines.push("|---|---|---|");
Object.keys(totalPerTipus).forEach((t) => lines.push(`| ${t} | ${detectatsPerTipus[t] || 0} | ${totalPerTipus[t]} |`));
lines.push("");
lines.push(`**Total detectats: ${Object.values(detectatsPerTipus).reduce((a, b) => a + b, 0)} / ${claus.mutants.length}**`);
lines.push("");
lines.push("## Falses alarmes sobre controls (preguntes netes)");
lines.push("");
lines.push(`${falsesAlarmes} / ${controlsResposts} (${controlsResposts ? ((falsesAlarmes / controlsResposts) * 100).toFixed(1) : "0.0"}%)`);
lines.push("");
falsesAlarmesIds.forEach((id) => lines.push(`- ${id}`));
lines.push("");
lines.push("## Mutants NO detectats");
lines.push("");
noDetectats.forEach((id) => lines.push(`- ${id}`));
lines.push("");
lines.push("## No retornats pel solucionador");
lines.push("");
noRetornats.forEach((id) => lines.push(`- ${id}`));
lines.push("");

const outPath = path.join(ROOT, "documentos", "informe-benchmark.md");
fs.writeFileSync(outPath, lines.join("\n"));
console.log(`\nInforme escrit a ${path.relative(ROOT, outPath)}`);
