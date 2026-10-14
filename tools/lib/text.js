/* Petites utilitats de text compartides pels scripts de tools/. */

// Normalització "literal": NOMÉS trim + espais col·lapsats. NO passa a
// minúscules ni toca accents ni diacrítics. Cal fer-la servir per
// detectar duplicats estructurals dins d'una mateixa pregunta (opcions
// d'un test, parelles d'un emparellar, elements d'un ordenar) perquè en
// moltes preguntes d'ortografia/accentuació/majúscules l'accent, la
// lletra exacta o la caixa (majúscula/minúscula) SÓN el contingut que
// es vol distingir (p. ex. "árbol" vs "albol", o "My name is Laura."
// vs "my name is laura." en una pregunta de majúscules) — si aquesta
// funció tragués els accents o la caixa, aquestes preguntes semblarien
// tenir opcions duplicades quan en realitat no ho són.
function normalitzaLiteral(str) {
  return String(str || "").trim().replace(/\s+/g, " ");
}

function normalitza(str) {
  return String(str || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ");
}

function tokenitza(str) {
  const net = normalitza(str).replace(/[^a-z0-9\s]/g, " ");
  return new Set(net.split(/\s+/).filter(Boolean));
}

function jaccard(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1;
  let interseccio = 0;
  setA.forEach((x) => {
    if (setB.has(x)) interseccio++;
  });
  const unio = setA.size + setB.size - interseccio;
  return unio === 0 ? 0 : interseccio / unio;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleAmbRng(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = { normalitza, normalitzaLiteral, tokenitza, jaccard, mulberry32, shuffleAmbRng };
