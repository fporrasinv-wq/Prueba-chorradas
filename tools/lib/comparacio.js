/* Compara la resposta d'un "solucionador" (format usat per
   tools/exportar-ciego.js / tools/sembrar-fallos.js) amb una clau de
   resposta. S'usa des de tools/comparar.js i tools/medir-benchmark.js
   perquè totes dues necessiten exactament la mateixa lògica de
   comparació. */

const { normalitza } = require("./text");

function respostaCoincideix(clau, resposta) {
  if (clau.tipus === "test") {
    return normalitza(resposta) === normalitza(clau.resposta_correcta);
  }
  if (clau.tipus === "veritat_fals") {
    return !!resposta === !!clau.resposta_correcta;
  }
  if (clau.tipus === "resposta_escrita") {
    const candidats = [clau.resposta_correcta, ...(clau.respostes_acceptades || [])];
    return candidats.some((c) => normalitza(c) === normalitza(resposta));
  }
  if (clau.tipus === "ordenar") {
    if (!Array.isArray(resposta)) return false;
    const a = resposta.map((x) => normalitza(x)).join("|");
    const b = clau.elements_ordre_correcte.map((x) => normalitza(x)).join("|");
    return a === b;
  }
  if (clau.tipus === "emparellar") {
    if (!Array.isArray(resposta) || resposta.length !== clau.parelles.length) return false;
    return clau.parelles.every((p) => resposta.some((rp) => normalitza(rp.a) === normalitza(p.a) && normalitza(rp.b) === normalitza(p.b)));
  }
  return false;
}

module.exports = { respostaCoincideix };
