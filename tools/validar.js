#!/usr/bin/env node
/* tools/validar.js — valida data/questions.js sense tocar-lo.
   Veure tools/README.md per a una explicació en llenguatge planer.
   Ús: node tools/validar.js [--curs 5è] */

const fs = require("fs");
const path = require("path");
const { carregarDades, arrel } = require("./lib/dades");
const { normalitza, normalitzaLiteral, tokenitza, jaccard } = require("./lib/text");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
}
const cursFiltre = getArg("--curs");
const fitxerOverride = getArg("--fitxer"); // ús intern/proves: valida un altre fitxer amb forma "const QUESTIONS = [...]"

const ROOT = arrel();
const { QUESTIONS: TOTES, LESSON_META, NIVELLS } = carregarDades(fitxerOverride);
const QUESTIONS = cursFiltre ? TOTES.filter((q) => q.curs === cursFiltre) : TOTES;

if (cursFiltre && QUESTIONS.length === 0) {
  console.error(`No s'ha trobat cap pregunta per al curs "${cursFiltre}".`);
  process.exit(2);
}

const errors = [];
const avisos = [];

function err(regla, q, msg) {
  errors.push({
    regla,
    id: q ? q.id : null,
    curs: q ? q.curs : null,
    materia: q ? q.materia : null,
    tema: q ? q.tema : null,
    nivell: q ? q.nivell : null,
    msg
  });
}
function avisa(regla, q, msg) {
  avisos.push({
    regla,
    id: q ? q.id : null,
    curs: q ? q.curs : null,
    materia: q ? q.materia : null,
    tema: q ? q.tema : null,
    nivell: q ? q.nivell : null,
    msg
  });
}

/* ============== ERRORS ============== */

// Ids únics
const comptId = new Map();
QUESTIONS.forEach((q) => comptId.set(q.id, (comptId.get(q.id) || 0) + 1));
QUESTIONS.forEach((q) => {
  if (comptId.get(q.id) > 1) err("ids-unics", q, `id duplicat (apareix ${comptId.get(q.id)} vegades)`);
});

// Camps obligatoris per tipus
QUESTIONS.forEach((q) => {
  if (q.tipus === "test") {
    if (!Array.isArray(q.opcions) || q.opcions.length === 0) err("camps-obligatoris", q, "falta el camp opcions[] o és buit");
    if (q.resposta_correcta === undefined || q.resposta_correcta === null || q.resposta_correcta === "")
      err("camps-obligatoris", q, "falta resposta_correcta");
  } else if (q.tipus === "veritat_fals") {
    if (typeof q.resposta_correcta !== "boolean") err("camps-obligatoris", q, "resposta_correcta ha de ser true/false (booleà)");
  } else if (q.tipus === "resposta_escrita") {
    if (q.resposta_correcta === undefined || q.resposta_correcta === null || q.resposta_correcta === "")
      err("camps-obligatoris", q, "falta resposta_correcta");
    if (!Array.isArray(q.respostes_acceptades) || q.respostes_acceptades.length === 0)
      err("camps-obligatoris", q, "falta respostes_acceptades[] o és buit");
  } else if (q.tipus === "ordenar") {
    if (!Array.isArray(q.elements_ordre_correcte) || q.elements_ordre_correcte.length === 0)
      err("camps-obligatoris", q, "falta elements_ordre_correcte[] o és buit");
  } else if (q.tipus === "emparellar") {
    if (!Array.isArray(q.parelles) || q.parelles.length === 0) {
      err("camps-obligatoris", q, "falta parelles[] o és buit");
    } else {
      q.parelles.forEach((p, i) => {
        if (p.a === undefined || p.a === null || p.a === "" || p.b === undefined || p.b === null || p.b === "")
          err("camps-obligatoris", q, `la parella #${i + 1} no té "a" i/o "b"`);
      });
    }
  } else {
    err("tipus-desconegut", q, `tipus de pregunta desconegut: "${q.tipus}"`);
  }
});

// Camp nivell obligatori i vàlid
const nivellsValids = NIVELLS.map((n) => n.id);
QUESTIONS.forEach((q) => {
  if (!q.nivell) err("nivell-obligatori", q, "falta el camp nivell (la pregunta desapareixeria de l'app sense avisar)");
  else if (!nivellsValids.includes(q.nivell)) err("nivell-obligatori", q, `nivell invàlid: "${q.nivell}" (valors vàlids: ${nivellsValids.join(", ")})`);
});

// Esquema d'ids (normal vs facil/dificil)
function trobaLlicoNormal(q) {
  return TOTES.find((o) => o.curs === q.curs && o.materia === q.materia && o.tema === q.tema && o.nivell === "normal");
}
QUESTIONS.forEach((q) => {
  if (!q.nivell || !nivellsValids.includes(q.nivell)) return; // ja reportat
  const parts = q.id.split("_");
  if (q.nivell === "normal") {
    if (parts.length !== 3 || !/^q\d+$/.test(parts[2])) {
      err("esquema-id", q, `id amb format inesperat per a nivell normal (s'esperava <curs>_<lessonId>_q<1-6>): "${q.id}"`);
      return;
    }
    if (parts[0] !== q.curs) err("esquema-id", q, `el curs dins l'id ("${parts[0]}") no coincideix amb curs="${q.curs}"`);
  } else {
    const sufixEsperat = q.nivell === "facil" ? "f" : "d";
    if (parts.length !== 4 || !/^q\d+$/.test(parts[3])) {
      err(
        "esquema-id",
        q,
        `id amb format inesperat per a nivell ${q.nivell} (s'esperava <curs>_<lessonId>_${sufixEsperat}_q<1-6>): "${q.id}"`
      );
      return;
    }
    if (parts[0] !== q.curs) err("esquema-id", q, `el curs dins l'id ("${parts[0]}") no coincideix amb curs="${q.curs}"`);
    if (parts[2] !== sufixEsperat) err("esquema-id", q, `sufix de nivell incoherent: l'id porta "${parts[2]}" però nivell="${q.nivell}" (s'esperava "${sufixEsperat}")`);
    const normalRef = trobaLlicoNormal(q);
    if (normalRef) {
      const refParts = normalRef.id.split("_");
      if (refParts.length === 3 && refParts[1] !== parts[1])
        err("esquema-id", q, `lessonId "${parts[1]}" no coincideix amb el de la lliçó normal equivalent ("${refParts[1]}", de ${normalRef.id})`);
    }
  }
});

// test: resposta dins opcions, sense duplicades, 4 opcions
QUESTIONS.filter((q) => q.tipus === "test" && Array.isArray(q.opcions)).forEach((q) => {
  if (!q.opcions.includes(q.resposta_correcta)) err("test-resposta-a-opcions", q, `resposta_correcta ("${q.resposta_correcta}") no és cap de les opcions`);
  const norm = q.opcions.map((o) => normalitzaLiteral(o));
  if (new Set(norm).size !== norm.length) err("test-opcions-duplicades", q, "hi ha opcions duplicades (mateix text normalitzat)");
  if (q.opcions.length < 3 || q.opcions.length > 5) err("test-opcions-rang", q, `té ${q.opcions.length} opcions, s'esperen entre 3 i 5`);
  else if (q.opcions.length !== 4) avisa("test-4-opcions", q, `té ${q.opcions.length} opcions: comprova que és intencionat`);
});

// emparellar: sense duplicats a ni b, mínim 3 parelles
QUESTIONS.filter((q) => q.tipus === "emparellar" && Array.isArray(q.parelles)).forEach((q) => {
  if (q.parelles.length < 3) err("emparellar-minim", q, `només ${q.parelles.length} parelles, mínim 3`);
  const as = q.parelles.map((p) => normalitzaLiteral(p.a));
  const bs = q.parelles.map((p) => normalitzaLiteral(p.b));
  if (new Set(as).size !== as.length) err("emparellar-duplicats", q, 'valors "a" duplicats entre parelles');
  if (new Set(bs).size !== bs.length) err("emparellar-duplicats", q, 'valors "b" duplicats entre parelles');
});

// ordenar: mínim 3 elements, sense duplicats
QUESTIONS.filter((q) => q.tipus === "ordenar" && Array.isArray(q.elements_ordre_correcte)).forEach((q) => {
  if (q.elements_ordre_correcte.length < 3) err("ordenar-minim", q, `només ${q.elements_ordre_correcte.length} elements, mínim 3`);
  const norm = q.elements_ordre_correcte.map((e) => normalitzaLiteral(e));
  if (new Set(norm).size !== norm.length) avisa("ordenar-duplicats", q, "elements repetits (pot ser correcte si la frase repeteix una paraula)");
});

// Aritmètica: parser conservador d'expressions "a op b"
function parseAritmetica(pregunta) {
  const net = String(pregunta || "").trim();
  const m = net.match(/^(-?\d+(?:,\d+)?)\s*([+\-−x×·÷:])\s*(-?\d+(?:,\d+)?)\s*(?:=\s*\?)?$/);
  if (!m) return null;
  const [, aStr, opRaw, bStr] = m;
  const a = parseFloat(aStr.replace(",", "."));
  const b = parseFloat(bStr.replace(",", "."));
  let resultat;
  if (opRaw === "+") resultat = a + b;
  else if (opRaw === "-" || opRaw === "−") resultat = a - b;
  else if (opRaw === "x" || opRaw === "×" || opRaw === "·") resultat = a * b;
  else if (opRaw === "÷" || opRaw === ":") {
    if (b === 0) return null;
    resultat = a / b;
  } else return null;
  return { aStr, bStr, op: opRaw, resultat };
}
function formataNumero(n) {
  const arrodonit = Math.round(n * 1e6) / 1e6;
  return String(arrodonit).replace(".", ",");
}
const operacionsAvaluades = [];
QUESTIONS.filter((q) => q.materia === "mat" && (q.tipus === "test" || q.tipus === "resposta_escrita")).forEach((q) => {
  const parsed = parseAritmetica(q.pregunta);
  if (!parsed) return;
  const candidats = [q.resposta_correcta];
  if (q.tipus === "resposta_escrita" && Array.isArray(q.respostes_acceptades)) candidats.push(...q.respostes_acceptades);
  const coincideix = candidats.some((c) => {
    const num = parseFloat(String(c).replace(",", "."));
    return !isNaN(num) && Math.abs(num - parsed.resultat) < 1e-6;
  });
  const expressio = `${parsed.aStr} ${parsed.op} ${parsed.bStr}`;
  const resultatText = formataNumero(parsed.resultat);
  operacionsAvaluades.push({ id: q.id, expressio, resultatCalculat: resultatText, clau: q.resposta_correcta, coincideix });
  if (!coincideix) err("aritmetica", q, `${expressio} = ${resultatText} segons el càlcul, però la clau diu "${q.resposta_correcta}"`);
});

// Lliçons amb "text": coherència dins la mateixa lliçó+nivell
const grupsText = {};
QUESTIONS.forEach((q) => {
  const key = `${q.curs}|${q.materia}|${q.tema}|${q.nivell}`;
  grupsText[key] = grupsText[key] || [];
  grupsText[key].push(q);
});
Object.values(grupsText).forEach((qs) => {
  const ambText = qs.filter((q) => q.text);
  if (ambText.length === 0) return;
  if (ambText.length !== qs.length) {
    qs.filter((q) => !q.text).forEach((q) => err("text-coherent", q, "altres preguntes de la mateixa lliçó tenen el camp text però aquesta no"));
  }
  const textosUnics = new Set(ambText.map((q) => q.text));
  if (textosUnics.size > 1) ambText.forEach((q) => err("text-coherent", q, "el camp text varia entre preguntes de la mateixa lliçó"));
});

/* ============== AVISOS ============== */

// Duplicats exactes i quasi-duplicats, dins el mateix curs (entre nivells inclosos).
// No n'hi ha prou que l'enunciat sigui igual: cal que el CONTINGUT també ho sigui
// (opcions+resposta en un test, elements en un ordenar, parelles en un emparellar,
// resposta en un veritat_fals/resposta_escrita), perquè moltes preguntes reutilitzen
// el mateix enunciat genèric ("Ordena les paraules per formar una frase.") amb
// contingut totalment diferent.
function signaturaContingut(q) {
  if (q.tipus === "test" && Array.isArray(q.opcions)) {
    const opcionsNorm = q.opcions.map((o) => normalitza(o)).sort().join("|");
    return `test:${opcionsNorm}::${normalitza(q.resposta_correcta)}`;
  }
  if (q.tipus === "ordenar" && Array.isArray(q.elements_ordre_correcte)) {
    return `ordenar:${q.elements_ordre_correcte.map((e) => normalitza(e)).join("|")}`;
  }
  if (q.tipus === "emparellar" && Array.isArray(q.parelles)) {
    const parells = q.parelles.map((p) => `${normalitza(p.a)}=${normalitza(p.b)}`).sort().join("|");
    return `emparellar:${parells}`;
  }
  if (q.tipus === "veritat_fals") return `vf:${String(q.resposta_correcta)}`;
  if (q.tipus === "resposta_escrita") return `escrita:${normalitza(q.resposta_correcta)}`;
  return "";
}
// Per a ordenar/emparellar, la similitud de "quasi-duplicat" s'ha de mirar sobre el
// contingut (elements/parelles), no sobre l'enunciat genèric de la instrucció.
function tokenContingut(q) {
  if (q.tipus === "ordenar" && Array.isArray(q.elements_ordre_correcte)) {
    return tokenitza(q.elements_ordre_correcte.join(" "));
  }
  if (q.tipus === "emparellar" && Array.isArray(q.parelles)) {
    return tokenitza(q.parelles.map((p) => `${p.a} ${p.b}`).join(" "));
  }
  return null;
}
const cursosPresents = [...new Set(QUESTIONS.map((q) => q.curs))];
cursosPresents.forEach((curs) => {
  const qs = QUESTIONS.filter((q) => q.curs === curs && q.pregunta);
  const prep = qs.map((q) => ({
    q,
    norm: normalitza(q.pregunta),
    tok: tokenitza(q.pregunta),
    sig: signaturaContingut(q),
    tokContingut: tokenContingut(q)
  }));
  for (let i = 0; i < prep.length; i++) {
    for (let j = i + 1; j < prep.length; j++) {
      const A = prep[i];
      const B = prep[j];
      if (A.norm === B.norm && A.sig === B.sig) {
        avisa("duplicat-exacte", A.q, `mateix enunciat i mateix contingut (normalitzats) que ${B.q.id}`);
      } else {
        const mateixTipus = A.q.tipus === B.q.tipus;
        const usaContingut = mateixTipus && A.tokContingut && B.tokContingut;
        const sim = usaContingut ? jaccard(A.tokContingut, B.tokContingut) : jaccard(A.tok, B.tok);
        if (sim > 0.8) avisa("quasi-duplicat", A.q, `molt similar a ${B.q.id} (similitud de tokens ${sim.toFixed(2)})`);
      }
    }
  }
});

// Equilibri veritat_fals (40-60%) per curs i per curs+matèria
function comprovaEquilibri(qs, etiqueta) {
  if (qs.length === 0) return;
  const certes = qs.filter((q) => q.resposta_correcta === true).length;
  const pct = (certes / qs.length) * 100;
  if (pct < 40 || pct > 60) avisos.push({ regla: "equilibri-vf", id: null, curs: null, materia: null, tema: null, nivell: null, msg: `${etiqueta}: ${pct.toFixed(1)}% vertaderes (${certes}/${qs.length})` });
}
cursosPresents.forEach((curs) => {
  const vf = QUESTIONS.filter((q) => q.curs === curs && q.tipus === "veritat_fals");
  comprovaEquilibri(vf, `curs ${curs}`);
  const materies = [...new Set(vf.map((q) => q.materia))];
  materies.forEach((m) => comprovaEquilibri(vf.filter((q) => q.materia === m), `curs ${curs} / matèria ${m}`));
});

// Paraules absolutes en veritat_fals amb resposta false
const PARAULES_ABSOLUTES = [
  "sempre", "mai", "tots", "totes", "cap", "només", "únicament", "unicament",
  "siempre", "nunca", "todos", "todas", "ninguno", "ninguna", "solo", "sólo",
  "only", "always", "never", "all", "none"
];
QUESTIONS.filter((q) => q.tipus === "veritat_fals" && q.resposta_correcta === false).forEach((q) => {
  const text = q.pregunta || "";
  PARAULES_ABSOLUTES.forEach((w) => {
    const re = new RegExp(`\\b${w}\\b`, "i");
    if (!re.test(text)) return;
    if (w === "cap") {
      const sensesCapA = text.replace(/\bcap\s+a\b/gi, "");
      if (!/\bcap\b/i.test(sensesCapA)) return; // totes les "cap" eren "cap a"
    }
    avisa("paraula-absoluta", q, `conté la paraula absoluta "${w}"`);
  });
});

// Biaix de llargada (resposta correcta = opció més llarga, de manera única)
cursosPresents.forEach((curs) => {
  const tests = QUESTIONS.filter((q) => q.curs === curs && q.tipus === "test" && Array.isArray(q.opcions));
  if (tests.length === 0) return;
  let llargues = 0;
  tests.forEach((q) => {
    const longituds = q.opcions.map((o) => String(o).length);
    const maxLen = Math.max(...longituds);
    const correctaLen = String(q.resposta_correcta).length;
    const nQueArribenAlMax = longituds.filter((l) => l === maxLen).length;
    if (correctaLen === maxLen && nQueArribenAlMax === 1) llargues++;
  });
  const pct = (llargues / tests.length) * 100;
  if (pct > 40) avisos.push({ regla: "biaix-llargada", id: null, curs, materia: null, tema: null, nivell: null, msg: `curs ${curs}: ${pct.toFixed(1)}% dels test tenen la resposta correcta com a opció més llarga (${llargues}/${tests.length})` });
});

// Per lliçó (curs+materia+tema+nivell): >3 test (si no té "text"), 3+ seguides del mateix tipus (excepte V/F)
function numeroQ(id) {
  const m = id.match(/_q(\d+)$/);
  return m ? parseInt(m[1], 10) : 0;
}
Object.entries(grupsText).forEach(([key, qs]) => {
  const [curs, materia, tema, nivell] = key.split("|");
  const teText = qs.some((q) => q.text);
  const testCount = qs.filter((q) => q.tipus === "test").length;
  if (!teText && testCount > 3)
    avisos.push({ regla: "massa-test", id: null, curs, materia, tema, nivell, msg: `${testCount} preguntes de tipus test (recomanat ≤3)` });
  const ordenades = qs.slice().sort((a, b) => numeroQ(a.id) - numeroQ(b.id));
  let ratxa = 1;
  for (let i = 1; i < ordenades.length; i++) {
    const mateixTipus = ordenades[i].tipus === ordenades[i - 1].tipus && ordenades[i].tipus !== "veritat_fals";
    if (mateixTipus) {
      ratxa++;
      if (ratxa === 3) avisa("tipus-seguits", ordenades[i], `3 o més preguntes seguides del tipus "${ordenades[i].tipus}" a la lliçó ${tema} (${nivell})`);
    } else ratxa = 1;
  }
});

// Cobertura per lliçó i nivell (totes les combinacions de LESSON_META × NIVELLS)
const coberturaPerCursNivell = {};
const lessonMetaFiltrat = cursFiltre ? LESSON_META.filter((l) => l.curs === cursFiltre) : LESSON_META;
lessonMetaFiltrat.forEach((l) => {
  NIVELLS.forEach((niv) => {
    const n = QUESTIONS.filter((q) => q.curs === l.curs && q.materia === l.materia && q.tema === l.tema && q.nivell === niv.id).length;
    const key = `${l.curs}|${niv.id}`;
    if (!coberturaPerCursNivell[key]) coberturaPerCursNivell[key] = { curs: l.curs, nivell: niv.id, total: 0, ge5: 0, ge6: 0 };
    coberturaPerCursNivell[key].total++;
    if (n >= 5) coberturaPerCursNivell[key].ge5++;
    if (n >= 6) coberturaPerCursNivell[key].ge6++;
    // No llistem cada lliçó amb 0 preguntes a facil/dificil: és l'estat esperat
    // mentre aquests nivells no estiguin implementats. Només avisem d'una lliçó
    // concreta quan ja té alguna pregunta però encara li'n falten (1-4), o quan
    // és el nivell "normal" (que sí hauria de tenir-ne sempre ≥6).
    const calAvisar = (n >= 1 && n <= 4) || (niv.id === "normal" && n < 6);
    if (calAvisar) {
      const etiqueta = n < 5 ? "menys de 5 (nivell no disponible a l'app)" : "menys de 6 (objectiu habitual)";
      avisos.push({ regla: "cobertura", id: null, curs: l.curs, materia: l.materia, tema: l.tema, nivell: niv.id, msg: `${n} preguntes — ${etiqueta}` });
    }
  });
});

/* ============== INFORME ============== */

function comptaPerRegla(llista) {
  const m = new Map();
  llista.forEach((x) => m.set(x.regla, (m.get(x.regla) || 0) + 1));
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}

const errorsPerRegla = comptaPerRegla(errors);
const avisosPerRegla = comptaPerRegla(avisos);

function formataEntrada(x) {
  const loc = [x.curs, x.materia, x.tema, x.nivell].filter(Boolean).join(" / ");
  const idPart = x.id ? `[${x.id}] ` : "";
  return `${idPart}${loc ? loc + ": " : ""}${x.msg}`;
}

console.log("=== Validació de data/questions.js ===");
console.log(`Preguntes analitzades: ${QUESTIONS.length}${cursFiltre ? ` (curs: ${cursFiltre})` : " (tots els cursos)"}`);
console.log(`ERRORS: ${errors.length} | AVISOS: ${avisos.length}`);
console.log("");

if (errorsPerRegla.length) {
  console.log("--- Errors per regla ---");
  errorsPerRegla.forEach(([regla, n]) => console.log(`  ${regla}: ${n}`));
  console.log("");
}
if (avisosPerRegla.length) {
  console.log("--- Avisos per regla ---");
  avisosPerRegla.forEach(([regla, n]) => console.log(`  ${regla}: ${n}`));
  console.log("");
}

if (errors.length) {
  console.log("--- Detall d'errors (tots) ---");
  errorsPerRegla.forEach(([regla]) => {
    console.log(`\n[ERROR: ${regla}]`);
    errors.filter((x) => x.regla === regla).forEach((x) => console.log("  - " + formataEntrada(x)));
  });
  console.log("");
}

console.log("--- Avisos (primers 20 per regla; l'informe complet és a documentos/informe-validacio.md) ---");
avisosPerRegla.forEach(([regla]) => {
  const items = avisos.filter((x) => x.regla === regla);
  console.log(`\n[AVIS: ${regla}] (${items.length} en total)`);
  items.slice(0, 20).forEach((x) => console.log("  - " + formataEntrada(x)));
  if (items.length > 20) console.log(`  ... i ${items.length - 20} més`);
});

console.log("\n--- Operacions aritmètiques avaluades ---");
console.log(`Total: ${operacionsAvaluades.length}`);
operacionsAvaluades.forEach((o) => console.log(`  [${o.id}] ${o.expressio} = ${o.resultatCalculat} | clau: ${o.clau} | ${o.coincideix ? "OK" : "DISCREPÀNCIA"}`));

// ---- Escriu l'informe Markdown ----
const lines = [];
lines.push("# Informe de validació — data/questions.js");
lines.push("");
lines.push(`Generat: ${new Date().toISOString()}`);
lines.push(`Preguntes analitzades: ${QUESTIONS.length}${cursFiltre ? ` (curs: ${cursFiltre})` : " (tots els cursos)"}`);
lines.push("");
lines.push(`**ERRORS: ${errors.length}** (bloquejant) · **AVISOS: ${avisos.length}** (requereixen criteri humà)`);
lines.push("");

lines.push("## Resum per regla");
lines.push("");
lines.push("| Gravetat | Regla | Nº |");
lines.push("|---|---|---|");
errorsPerRegla.forEach(([regla, n]) => lines.push(`| ERROR | ${regla} | ${n} |`));
avisosPerRegla.forEach(([regla, n]) => lines.push(`| AVÍS | ${regla} | ${n} |`));
lines.push("");

if (errors.length) {
  lines.push("## Errors (detall complet)");
  lines.push("");
  errorsPerRegla.forEach(([regla]) => {
    lines.push(`### ERROR: ${regla}`);
    errors.filter((x) => x.regla === regla).forEach((x) => lines.push(`- ${formataEntrada(x)}`));
    lines.push("");
  });
}

lines.push("## Avisos (detall complet)");
lines.push("");
avisosPerRegla.forEach(([regla]) => {
  lines.push(`### AVÍS: ${regla}`);
  avisos.filter((x) => x.regla === regla).forEach((x) => lines.push(`- ${formataEntrada(x)}`));
  lines.push("");
});

lines.push("## Operacions aritmètiques avaluades");
lines.push("");
lines.push(`El parser només avalua enunciats que són EXACTAMENT una operació simple ("a + b", "a - b", "a × b", "a ÷ b", amb "= ?" opcional). Total avaluades: ${operacionsAvaluades.length}.`);
lines.push("");
lines.push("| id | expressió | resultat calculat | clau (resposta_correcta) | coincideix |");
lines.push("|---|---|---|---|---|");
operacionsAvaluades.forEach((o) => lines.push(`| ${o.id} | ${o.expressio} | ${o.resultatCalculat} | ${o.clau} | ${o.coincideix ? "✅" : "❌"} |`));
lines.push("");

lines.push("## Cobertura per curs i nivell (totes les lliçons)");
lines.push("");
lines.push("| curs | nivell | lliçons totals | ≥5 preguntes | ≥6 preguntes |");
lines.push("|---|---|---|---|---|");
Object.values(coberturaPerCursNivell)
  .sort((a, b) => (a.curs + a.nivell).localeCompare(b.curs + b.nivell))
  .forEach((c) => lines.push(`| ${c.curs} | ${c.nivell} | ${c.total} | ${c.ge5} | ${c.ge6} |`));
lines.push("");

const outPath = path.join(ROOT, "documentos", "informe-validacio.md");
fs.writeFileSync(outPath, lines.join("\n"));
console.log(`\nInforme complet escrit a ${path.relative(ROOT, outPath)}`);

process.exitCode = errors.length > 0 ? 1 : 0;
