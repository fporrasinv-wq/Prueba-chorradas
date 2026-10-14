/* Carrega data/questions.js i data/meta.js en un context vm aïllat
   (igual que fan els tests de Playwright del projecte) i retorna els
   arrays que exporten, sense necessitat d'un navegador ni de DOM. */

const vm = require("vm");
const fs = require("fs");
const path = require("path");

function arrel() {
  return path.resolve(__dirname, "..", "..");
}

function carregarDades(questionsPathOverride) {
  const root = arrel();
  const qPath = questionsPathOverride ? path.resolve(questionsPathOverride) : path.join(root, "data/questions.js");
  const qCode = fs.readFileSync(qPath, "utf8");
  const mCode = fs.readFileSync(path.join(root, "data/meta.js"), "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(
    qCode +
      "\n" +
      mCode +
      "\nthis.QUESTIONS = QUESTIONS; this.LESSON_META = LESSON_META; this.SUBJECTS_META = SUBJECTS_META; this.CURSOS = CURSOS; this.NIVELLS = NIVELLS;",
    sandbox
  );
  return {
    QUESTIONS: sandbox.QUESTIONS,
    LESSON_META: sandbox.LESSON_META,
    SUBJECTS_META: sandbox.SUBJECTS_META,
    CURSOS: sandbox.CURSOS,
    NIVELLS: sandbox.NIVELLS
  };
}

module.exports = { carregarDades, arrel };
