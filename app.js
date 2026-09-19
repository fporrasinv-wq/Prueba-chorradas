/* Repassa'l! — motor únic per a totes les apps de repàs a l'estil
   Duolingo (currículum de la Generalitat de Catalunya). Vanilla JS,
   sense dependències. Mascota: Robi, el robot ajudant. Sons generats
   amb Web Audio API. El contingut viu a data/questions.js i les
   metadades de presentació a data/meta.js — aquest fitxer només en
   conté la lògica del joc, els perfils i el rendering. */

const root = document.getElementById("app");

const MASCOT_MESSAGES = [
  "Hola! Sóc en Robi! 🤖",
  "Vinga, juguem junts! 🎮",
  "Tu pots fer-ho molt bé! 💪",
  "Cada estrella és un èxit! ⭐",
  "Anem a aprendre jugant! 📚",
  "M'agrada molt jugar amb tu! 🙌"
];

/* ---------------- Sound engine (Web Audio, sense fitxers externs) ---------------- */

let audioCtx = null;
const SOUND_KEY = "repassal_sound_v2";

function loadSoundPref() {
  try {
    return localStorage.getItem(SOUND_KEY) !== "off";
  } catch (e) {
    return true;
  }
}

let soundOn = loadSoundPref();

function toggleSound() {
  soundOn = !soundOn;
  try {
    localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off");
  } catch (e) {}
  if (soundOn) playClick();
  render();
}

function ensureAudio() {
  if (!soundOn) return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone(freq, start, dur, type, gain) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.value = freq;
  g.gain.value = 0;
  osc.connect(g);
  g.connect(ctx.destination);
  const t0 = ctx.currentTime + start;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain || 0.15, t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.start(t0);
  osc.stop(t0 + dur + 0.03);
}

function playClick() { tone(600, 0, 0.05, "sine", 0.05); }
function playCorrect() { tone(880, 0, 0.12, "sine", 0.14); tone(1175, 0.09, 0.18, "sine", 0.14); }
function playWrong() { tone(220, 0, 0.16, "square", 0.08); tone(160, 0.11, 0.2, "square", 0.08); }
function playHint() { tone(700, 0, 0.1, "sine", 0.08); tone(950, 0.08, 0.12, "sine", 0.08); }
function playComplete(perfect) {
  const notes = perfect ? [523, 659, 784, 1047, 1319] : [523, 659, 784];
  notes.forEach((f, i) => tone(f, i * 0.11, 0.2, "triangle", 0.13));
}

/* ---------------- Speech (mascota) ---------------- */

function hasSpeech() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function speak(text) {
  if (!hasSpeech()) return;
  try {
    window.speechSynthesis.cancel();
    const clean = text.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, "").trim();
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = "ca-ES";
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

/* ---------------- Perfils ---------------- */

const PROFILES_KEY = "repassal_profiles_v1";
const CURRENT_PROFILE_KEY = "repassal_current_profile_v1";

function loadProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveProfiles(list) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(list));
}

function slugify(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "nen";
}

function createProfile(name, curs) {
  const profiles = loadProfiles();
  let base = slugify(name) + "-" + curs;
  let id = base;
  let n = 2;
  while (profiles.some((p) => p.id === id)) {
    id = base + "-" + n;
    n++;
  }
  const profile = { id, name: name.trim(), curs, createdAt: new Date().toISOString() };
  profiles.push(profile);
  saveProfiles(profiles);
  return profile;
}

function getCurrentProfileId() {
  try {
    return localStorage.getItem(CURRENT_PROFILE_KEY);
  } catch (e) {
    return null;
  }
}

function setCurrentProfileId(id) {
  try {
    if (id) localStorage.setItem(CURRENT_PROFILE_KEY, id);
    else localStorage.removeItem(CURRENT_PROFILE_KEY);
  } catch (e) {}
}

function getProfileById(id) {
  return loadProfiles().find((p) => p.id === id) || null;
}

function cursInfo(cursId) {
  return CURSOS.find((c) => c.id === cursId) || CURSOS[0];
}

/* ---------------- Contingut derivat (data/questions.js + data/meta.js) ---------------- */

function subjectsForCurs(curs) {
  const lessonsMeta = LESSON_META.filter((l) => l.curs === curs).sort((a, b) => a.ordre - b.ordre);
  const materiaOrder = [];
  lessonsMeta.forEach((l) => {
    if (!materiaOrder.includes(l.materia)) materiaOrder.push(l.materia);
  });

  return materiaOrder.map((materiaId) => {
    const meta = SUBJECTS_META.find((s) => s.materia === materiaId) || { name: materiaId, icon: "❓", color: "#999", colorDark: "#777" };
    const lessons = lessonsMeta
      .filter((l) => l.materia === materiaId)
      .map((l) => ({
        key: `${curs}::${materiaId}::${l.tema}`,
        title: l.tema,
        icon: l.icona,
        questions: QUESTIONS.filter((q) => q.curs === curs && q.materia === materiaId && q.tema === l.tema)
      }));
    return { id: materiaId, name: meta.name, icon: meta.icon, color: meta.color, colorDark: meta.colorDark, lessons };
  });
}

/* ---------------- Estat de joc (per perfil) ---------------- */

function stateKeyFor(profileId) {
  return "repassal_state_v1__" + profileId;
}

function defaultGameState() {
  return { xp: 0, streak: 0, lastPlayISO: null, lessons: {} };
}

function loadGameState(profileId) {
  try {
    const raw = localStorage.getItem(stateKeyFor(profileId));
    if (!raw) return defaultGameState();
    return Object.assign(defaultGameState(), JSON.parse(raw));
  } catch (e) {
    return defaultGameState();
  }
}

function saveGameState() {
  if (!profile) return;
  localStorage.setItem(stateKeyFor(profile.id), JSON.stringify(state));
}

/* ---------------- Navegació i estat en memòria ---------------- */

let profile = null;
let state = defaultGameState();
let subjects = [];
let nav = { view: "profile-select" };
let session = null;
let mascotMsgIndex = Math.floor(Math.random() * MASCOT_MESSAGES.length);
let newProfileDraft = { name: "", curs: CURSOS[0].id };

function bootProfile() {
  const id = getCurrentProfileId();
  const found = id ? getProfileById(id) : null;
  if (found) {
    activateProfile(found, { goHomeAfter: false });
    nav = { view: "home" };
  } else {
    nav = { view: "profile-select" };
  }
}

function activateProfile(p, opts) {
  profile = p;
  state = loadGameState(p.id);
  subjects = subjectsForCurs(p.curs);
  setCurrentProfileId(p.id);
  applyCursVisual(p.curs);
  if (!opts || opts.goHomeAfter !== false) {
    mascotMsgIndex = Math.floor(Math.random() * MASCOT_MESSAGES.length);
    nav = { view: "home" };
  }
}

function applyCursVisual(curs) {
  const info = cursInfo(curs);
  document.body.classList.toggle("visual-uppercase", !!(info.visual && info.visual.uppercase));
  document.body.classList.toggle("visual-gran", !!(info.visual && info.visual.mida === "gran"));
}

function switchProfile() {
  playClick();
  nav = { view: "profile-select" };
  render();
}

function selectProfile(id) {
  const p = getProfileById(id);
  if (!p) return;
  playClick();
  activateProfile(p);
  render();
}

function submitNewProfile() {
  const name = (newProfileDraft.name || "").trim();
  if (!name) return;
  const p = createProfile(name, newProfileDraft.curs);
  newProfileDraft = { name: "", curs: CURSOS[0].id };
  playComplete(false);
  activateProfile(p);
  render();
}

function goHome() {
  mascotMsgIndex = Math.floor(Math.random() * MASCOT_MESSAGES.length);
  playClick();
  nav = { view: "home" };
  render();
}

function openSubject(subjectId) {
  playClick();
  nav = { view: "path", subjectId };
  render();
}

/* ---------------- Helpers ---------------- */

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function addDaysISO(iso, days) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function getSubject(id) {
  return subjects.find((s) => s.id === id);
}

function findLessonLocation(lessonKey) {
  for (const subject of subjects) {
    const idx = subject.lessons.findIndex((l) => l.key === lessonKey);
    if (idx !== -1) return { subject, lesson: subject.lessons[idx], idx };
  }
  return null;
}

function lessonProgress(lessonKey) {
  return state.lessons[lessonKey] || { stars: 0, bestAccuracy: 0, timesCompleted: 0 };
}

function isLessonUnlocked(subject, idx) {
  if (idx === 0) return true;
  const prev = subject.lessons[idx - 1];
  return lessonProgress(prev.key).stars > 0;
}

function subjectStats(subject) {
  const total = subject.lessons.length;
  const done = subject.lessons.filter((l) => lessonProgress(l.key).stars > 0).length;
  return { total, done };
}

function normalizeAnswer(str) {
  return String(str).trim().toLowerCase().replace(/\s+/g, " ");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateStreakOnFinish() {
  const today = todayISO();
  if (state.lastPlayISO === today) return;
  const yesterday = addDaysISO(today, -1);
  if (state.lastPlayISO === yesterday) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }
  state.lastPlayISO = today;
}

/* ---------------- Sessió de lliçó ---------------- */

function buildQueueItem(question) {
  if (question.tipus === "test") {
    const opts = question.opcions.map((text) => ({ text, isCorrect: text === question.resposta_correcta }));
    return { ...question, shuffledOptions: shuffle(opts) };
  }
  if (question.tipus === "ordenar") {
    const bank = shuffle(question.elements_ordre_correcte.map((text, i) => ({ text, origIndex: i })));
    return { ...question, orderBank: bank };
  }
  if (question.tipus === "emparellar") {
    const leftItems = question.parelles.map((p, i) => ({ text: p.a, pairIdx: i }));
    const rightItems = shuffle(question.parelles.map((p, i) => ({ text: p.b, pairIdx: i })));
    return { ...question, leftItems, rightItems };
  }
  return { ...question };
}

function startLesson(subjectId, lessonKey) {
  const subject = getSubject(subjectId);
  const lesson = subject.lessons.find((l) => l.key === lessonKey);
  playClick();
  session = {
    subjectId,
    lessonKey,
    queue: lesson.questions.map(buildQueueItem),
    idx: 0,
    hearts: 5,
    correctCount: 0,
    mistakes: [],
    xp: 0,
    selected: null,
    answered: false,
    wasCorrect: null,
    fillValue: "",
    hintUsed: false,
    hintDisabled: [],
    hintShown: false,
    matchState: null
  };
  nav = { view: "lesson" };
  render();
}

function retryLesson() {
  startLesson(session.subjectId, session.lessonKey);
}

function currentQuestion() {
  return session.queue[session.idx];
}

function ensureMatchState() {
  if (!session.matchState) {
    session.matchState = { selectedLeft: null, matched: new Set(), wrongFlash: null, mistakes: 0 };
  }
  return session.matchState;
}

function selectOption(index) {
  if (session.answered) return;
  if ((session.hintDisabled || []).includes(index)) return;
  session.selected = index;
  playClick();
  render();
}

function selectTF(value) {
  if (session.answered) return;
  session.selected = value;
  playClick();
  render();
}

function selectOrderToken(bankIdx) {
  if (session.answered) return;
  if (!session.selected) session.selected = [];
  if (session.selected.includes(bankIdx)) return;
  session.selected.push(bankIdx);
  playClick();
  render();
}

function removeOrderToken(posInSelected) {
  if (session.answered) return;
  session.selected.splice(posInSelected, 1);
  playClick();
  render();
}

function clickMatchLeft(pairIdx) {
  const ms = ensureMatchState();
  if (ms.matched.has(pairIdx)) return;
  ms.selectedLeft = pairIdx;
  playClick();
  render();
}

function clickMatchRight(pairIdx) {
  const q = currentQuestion();
  const ms = ensureMatchState();
  if (ms.matched.has(pairIdx) || ms.selectedLeft === null) return;

  if (ms.selectedLeft === pairIdx) {
    ms.matched.add(pairIdx);
    ms.selectedLeft = null;
    playCorrect();
    if (ms.matched.size === q.parelles.length) {
      session.answered = true;
      session.wasCorrect = ms.mistakes === 0;
      if (session.wasCorrect) {
        session.correctCount += 1;
        session.xp += 10;
      } else {
        session.mistakes.push({ question: q.pregunta, correctText: correctAnswerText(q) });
      }
    }
  } else {
    ms.mistakes += 1;
    ms.selectedLeft = null;
    ms.wrongFlash = pairIdx;
    playWrong();
    setTimeout(() => {
      if (session && session.matchState) {
        session.matchState.wrongFlash = null;
        render();
      }
    }, 450);
  }
  render();
}

function useHint() {
  if (session.answered || session.hintUsed) return;
  const q = currentQuestion();
  session.hintUsed = true;
  if (q.tipus === "test") {
    const disabledSoFar = session.hintDisabled || [];
    const wrongIndexes = q.shuffledOptions
      .map((o, i) => i)
      .filter((i) => !q.shuffledOptions[i].isCorrect && !disabledSoFar.includes(i));
    if (wrongIndexes.length > 0) {
      const pick = wrongIndexes[Math.floor(Math.random() * wrongIndexes.length)];
      session.hintDisabled = [...disabledSoFar, pick];
      if (session.selected === pick) session.selected = null;
    }
  } else if (q.tipus === "resposta_escrita") {
    session.hintShown = true;
  }
  playHint();
  render();
}

function checkAnswer() {
  if (session.answered) return;
  const q = currentQuestion();
  if (q.tipus === "emparellar") return;
  let correct = false;

  if (q.tipus === "test") {
    if (session.selected === null) return;
    correct = q.shuffledOptions[session.selected].isCorrect;
  } else if (q.tipus === "veritat_fals") {
    if (session.selected === null) return;
    correct = session.selected === q.resposta_correcta;
  } else if (q.tipus === "resposta_escrita") {
    const val = (document.getElementById("fill-input") || {}).value || "";
    if (!val.trim()) return;
    session.fillValue = val;
    correct = q.respostes_acceptades.some((a) => normalizeAnswer(a) === normalizeAnswer(val));
  } else if (q.tipus === "ordenar") {
    if (!session.selected || session.selected.length !== q.elements_ordre_correcte.length) return;
    const assembled = session.selected.map((i) => q.orderBank[i].text).join(" ");
    correct = assembled === q.elements_ordre_correcte.join(" ");
  }

  session.answered = true;
  session.wasCorrect = correct;

  if (correct) {
    session.correctCount += 1;
    session.xp += 10;
    playCorrect();
  } else {
    session.hearts = Math.max(0, session.hearts - 1);
    session.mistakes.push({ question: q.pregunta, correctText: correctAnswerText(q) });
    playWrong();
  }
  render();
}

function correctAnswerText(q) {
  if (q.tipus === "test") return q.resposta_correcta;
  if (q.tipus === "veritat_fals") return q.resposta_correcta ? "Cert" : "Fals";
  if (q.tipus === "resposta_escrita") return q.resposta_correcta;
  if (q.tipus === "ordenar") return q.elements_ordre_correcte.join(" ");
  if (q.tipus === "emparellar") return "Repassa totes les parelles correctes.";
  return "";
}

function nextQuestion() {
  session.idx += 1;
  session.selected = null;
  session.answered = false;
  session.wasCorrect = null;
  session.fillValue = "";
  session.hintUsed = false;
  session.hintDisabled = [];
  session.hintShown = false;
  session.matchState = null;

  if (session.idx >= session.queue.length) {
    finishLesson();
  } else {
    render();
  }
}

function finishLesson() {
  const total = session.queue.length;
  const accuracy = session.correctCount / total;
  let stars = 0;
  if (accuracy === 1) stars = 3;
  else if (accuracy >= 0.8) stars = 2;
  else if (accuracy >= 0.5) stars = 1;

  let xpEarned = session.xp;
  if (stars === 3) xpEarned += 20;

  const prev = lessonProgress(session.lessonKey);
  state.lessons[session.lessonKey] = {
    stars: Math.max(prev.stars, stars),
    bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
    timesCompleted: prev.timesCompleted + 1
  };
  state.xp += xpEarned;
  updateStreakOnFinish();
  saveGameState();

  session.finalStars = stars;
  session.finalAccuracy = accuracy;
  session.xpEarned = xpEarned;

  playComplete(stars === 3);

  nav = { view: "results" };
  render();
}

function resetProgress() {
  if (!confirm(`Segur que vols esborrar tot el progrés de ${profile.name}? Aquesta acció no es pot desfer.`)) return;
  state = defaultGameState();
  saveGameState();
  goHome();
}

/* ---------------- Rendering ---------------- */

function render() {
  root.innerHTML = "";
  if (nav.view === "profile-select") root.appendChild(renderProfileSelect());
  else if (nav.view === "home") root.appendChild(renderHome());
  else if (nav.view === "path") root.appendChild(renderPath());
  else if (nav.view === "lesson") root.appendChild(renderLesson());
  else if (nav.view === "results") root.appendChild(renderResults());

  requestAnimationFrame(() => {
    const input = document.getElementById("fill-input") || document.getElementById("profile-name-input");
    if (input) input.focus();
  });
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null) continue;
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (k === "html") node.innerHTML = v;
    else if (k === "value") node.value = v;
    else node.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}

/* ---------------- Pantalla: selecció de perfil ---------------- */

function renderProfileSelect() {
  const wrap = el("div", { class: "profile-screen" });
  const profiles = loadProfiles();

  wrap.appendChild(
    el("div", { class: "topbar" }, [
      el("div", { class: "brand" }, "🤖 Repassa'l!"),
      el("button", { class: "stat-pill sound-toggle", onclick: toggleSound, title: "So" }, soundOn ? "🔊" : "🔇")
    ])
  );

  wrap.appendChild(
    el("div", { class: "hero" }, [
      el("h1", {}, profiles.length ? "Qui juga avui?" : "Benvingut o benvinguda!"),
      el("p", {}, "Tria el teu perfil o crea'n un de nou")
    ])
  );

  if (profile) {
    wrap.appendChild(
      el("div", { class: "mascot-box" }, [
        el("div", { class: "emoji" }, "🤖"),
        el("div", { class: "mascot-text" }, `Ara mateix jugaves com a ${profile.name}. Pots seguir o canviar de perfil.`)
      ])
    );
  }

  if (profiles.length > 0) {
    const list = el("div", { class: "profile-list" });
    profiles.forEach((p) => {
      const info = cursInfo(p.curs);
      const isCurrent = profile && profile.id === p.id;
      list.appendChild(
        el(
          "button",
          { class: `profile-card ${isCurrent ? "current" : ""}`, onclick: () => selectProfile(p.id) },
          [
            el("div", { class: "profile-avatar" }, "🧒"),
            el("div", { class: "profile-info" }, [
              el("div", { class: "profile-name" }, p.name),
              el("div", { class: "profile-curs" }, `${info.label} · ${info.edat}`)
            ]),
            isCurrent ? el("div", { class: "profile-badge" }, "Actiu") : null
          ]
        )
      );
    });
    wrap.appendChild(list);
  }

  const form = el("div", { class: "new-profile-box" }, [
    el("h3", {}, "➕ Nou perfil"),
    el("input", {
      id: "profile-name-input",
      class: "profile-input",
      type: "text",
      maxlength: "24",
      placeholder: "Nom del nen o la nena",
      value: newProfileDraft.name,
      oninput: (e) => { newProfileDraft.name = e.target.value; },
      onkeydown: (e) => { if (e.key === "Enter") submitNewProfile(); }
    }),
    el(
      "div",
      { class: "curs-options" },
      CURSOS.map((c) =>
        el(
          "button",
          {
            class: `curs-btn ${newProfileDraft.curs === c.id ? "selected" : ""}`,
            onclick: () => { newProfileDraft.curs = c.id; render(); }
          },
          [el("div", { class: "curs-btn-label" }, c.label), el("div", { class: "curs-btn-sub" }, c.edat)]
        )
      )
    ),
    el("button", { class: "btn btn-primary btn-full", onclick: submitNewProfile }, "Comença a jugar")
  ]);
  wrap.appendChild(form);

  return wrap;
}

/* ---------------- Pantalla: inici ---------------- */

function renderTopStats() {
  return el("div", { class: "stats-row" }, [
    el("div", { class: "stat-pill" }, `🔥 ${state.streak}`),
    el("div", { class: "stat-pill" }, `⭐ ${state.xp}`),
    el("button", { class: "stat-pill sound-toggle", onclick: toggleSound, title: "So" }, soundOn ? "🔊" : "🔇")
  ]);
}

function renderHome() {
  const wrap = el("div", {});
  wrap.appendChild(
    el("div", { class: "topbar" }, [
      el("div", { class: "brand" }, "🤖 Repassa'l!"),
      renderTopStats()
    ])
  );
  wrap.appendChild(
    el("div", { class: "hero" }, [
      el("h1", {}, `Hola, ${profile.name}!`),
      el("p", {}, `${cursInfo(profile.curs).label} · Currículum de Catalunya`)
    ])
  );

  wrap.appendChild(
    el("div", { class: "mascot-box" }, [
      el("div", { class: "emoji" }, "🤖"),
      el("div", { class: "mascot-text" }, MASCOT_MESSAGES[mascotMsgIndex]),
      hasSpeech()
        ? el("button", { class: "speak-btn", title: "Escolta en Robi", onclick: () => speak(MASCOT_MESSAGES[mascotMsgIndex]) }, "🔊")
        : null
    ])
  );

  const grid = el("div", { class: "subject-grid" });
  subjects.forEach((subject) => {
    const { total, done } = subjectStats(subject);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const card = el(
      "button",
      { class: "subject-card pop", style: `--card-border:${subject.colorDark}`, onclick: () => openSubject(subject.id) },
      [
        el("div", { class: "icon" }, subject.icon),
        el("div", { class: "name" }, subject.name),
        el("div", { class: "progress-track" }, [el("div", { class: "progress-fill", style: `width:${pct}%; background:${subject.color}` })]),
        el("div", { class: "sub" }, `${done}/${total}`)
      ]
    );
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  wrap.appendChild(
    el("div", { class: "footer-note" }, [
      document.createTextNode("Contingut basat en el currículum d'Educació Primària de la Generalitat de Catalunya."),
      document.createElement("br"),
      el("button", { class: "reset-link", onclick: switchProfile }, "Canvia de perfil"),
      document.createTextNode(" · "),
      el("button", { class: "reset-link", onclick: resetProgress }, "Esborra el progrés")
    ])
  );

  return wrap;
}

/* ---------------- Pantalla: recorregut de lliçons ---------------- */

function renderPath() {
  const subject = getSubject(nav.subjectId);
  const wrap = el("div", {});

  wrap.appendChild(
    el("div", { class: "path-header" }, [
      el("button", { class: "back-btn", onclick: goHome }, "←"),
      el("div", { class: "path-title" }, `${subject.icon} ${subject.name}`),
      el("div", { style: "flex:1" }),
      el("button", { class: "back-btn", onclick: toggleSound, title: "So" }, soundOn ? "🔊" : "🔇")
    ])
  );

  const path = el("div", { class: "path" });
  let nextFound = false;
  subject.lessons.forEach((lesson, idx) => {
    const unlocked = isLessonUnlocked(subject, idx);
    const prog = lessonProgress(lesson.key);
    const isNext = unlocked && prog.stars === 0 && !nextFound;
    if (isNext) nextFound = true;
    const offset = idx % 2 === 0 ? "0" : idx % 4 === 1 ? "70px" : "-70px";

    const node = el(
      "button",
      {
        class: `lesson-node ${unlocked ? "" : "locked"} ${isNext ? "next" : ""}`,
        style: unlocked ? `background:${subject.color}` : "",
        onclick: () => (unlocked ? startLesson(subject.id, lesson.key) : null),
        disabled: unlocked ? undefined : "true"
      },
      [
        document.createTextNode(unlocked ? lesson.icon : "🔒"),
        prog.stars > 0 ? el("div", { class: "stars" }, "⭐".repeat(prog.stars)) : null
      ]
    );

    const rowWrap = el("div", { class: "lesson-wrap", style: `transform: translateX(${offset})` }, [
      isNext ? el("div", { class: "start-bubble" }, "Vine! 🤖") : null,
      node,
      el("div", { class: "lesson-label" }, lesson.title)
    ]);
    path.appendChild(rowWrap);
  });

  wrap.appendChild(path);
  return wrap;
}

/* ---------------- Pantalla: lliçó en curs ---------------- */

function renderLesson() {
  const q = currentQuestion();
  const total = session.queue.length;
  const pct = Math.round((session.idx / total) * 100);

  const wrap = el("div", {});

  wrap.appendChild(
    el("div", { class: "lesson-header" }, [
      el("button", { class: "back-btn", onclick: () => { const subjectId = session.subjectId; session = null; openSubject(subjectId); } }, "✕"),
      el("div", { class: "bar-track" }, [el("div", { class: "bar-fill", style: `width:${pct}%` })]),
      el("div", { class: "hearts" }, "❤️ ".repeat(session.hearts) || "💔")
    ])
  );

  const qArea = el("div", { class: "question-area" });
  qArea.appendChild(el("div", { class: "q-kicker" }, `Pregunta ${session.idx + 1} de ${total}`));
  qArea.appendChild(el("div", { class: "q-text pop" }, q.pregunta));

  if (q.tipus === "test") {
    const opts = el("div", { class: "options" });
    q.shuffledOptions.forEach((opt, i) => {
      const isHintDisabled = (session.hintDisabled || []).includes(i);
      let cls = "option-btn";
      if (session.answered) {
        if (opt.isCorrect) cls += " correct";
        else if (i === session.selected) cls += " incorrect";
      } else {
        if (i === session.selected) cls += " selected";
        if (isHintDisabled) cls += " hint-disabled";
      }
      opts.appendChild(
        el(
          "button",
          { class: cls, disabled: session.answered || isHintDisabled ? "true" : undefined, onclick: () => selectOption(i) },
          [el("span", { class: "option-letter" }, "ABCD"[i] || "•"), document.createTextNode(opt.text)]
        )
      );
    });
    qArea.appendChild(opts);
  } else if (q.tipus === "veritat_fals") {
    const opts = el("div", { class: "tf-options" });
    [
      { label: "✅ Cert", value: true },
      { label: "❌ Fals", value: false }
    ].forEach((opt) => {
      let cls = "option-btn";
      if (session.answered) {
        if (opt.value === q.resposta_correcta) cls += " correct";
        else if (opt.value === session.selected) cls += " incorrect";
      } else if (opt.value === session.selected) cls += " selected";
      opts.appendChild(
        el("button", { class: cls, disabled: session.answered ? "true" : undefined, onclick: () => selectTF(opt.value) }, opt.label)
      );
    });
    qArea.appendChild(opts);
  } else if (q.tipus === "resposta_escrita") {
    let cls = "fill-input";
    if (session.answered) cls += session.wasCorrect ? " correct" : " incorrect";
    const input = el("input", {
      id: "fill-input",
      class: cls,
      type: "text",
      inputmode: "text",
      autocomplete: "off",
      placeholder: "Escriu la resposta...",
      disabled: session.answered ? "true" : undefined,
      onkeydown: (e) => { if (e.key === "Enter") (session.answered ? nextQuestion() : checkAnswer()); }
    });
    if (session.fillValue) input.value = session.fillValue;
    qArea.appendChild(input);
    if (session.hintShown && !session.answered) {
      qArea.appendChild(el("div", { class: "hint-line" }, `🤖 Pista: comença per «${q.resposta_correcta[0].toUpperCase()}»`));
    }
  } else if (q.tipus === "ordenar") {
    const selected = session.selected || [];
    let slotCls = "order-answer";
    if (session.answered) slotCls += session.wasCorrect ? " correct" : " incorrect";
    const answerSlot = el("div", { class: slotCls });
    if (selected.length === 0) {
      answerSlot.appendChild(el("div", { class: "order-placeholder" }, "Toca per respondre..."));
    } else {
      selected.forEach((bankIdx, pos) => {
        answerSlot.appendChild(
          el("button", { class: "order-chip placed", disabled: session.answered ? "true" : undefined, onclick: () => removeOrderToken(pos) }, q.orderBank[bankIdx].text)
        );
      });
    }
    qArea.appendChild(answerSlot);

    const bank = el("div", { class: "order-bank" });
    q.orderBank.forEach((tok, bankIdx) => {
      if (selected.includes(bankIdx)) return;
      bank.appendChild(
        el("button", { class: "order-chip", disabled: session.answered ? "true" : undefined, onclick: () => selectOrderToken(bankIdx) }, tok.text)
      );
    });
    qArea.appendChild(bank);
  } else if (q.tipus === "emparellar") {
    const ms = ensureMatchState();
    const grid = el("div", { class: "match-grid" });
    const leftCol = el("div", { class: "match-col" });
    q.leftItems.forEach((item) => {
      const isMatched = ms.matched.has(item.pairIdx);
      const isSelected = ms.selectedLeft === item.pairIdx;
      let cls = "match-item";
      if (isMatched) cls += " matched";
      else if (isSelected) cls += " selected";
      leftCol.appendChild(
        el("button", { class: cls, disabled: isMatched ? "true" : undefined, onclick: () => clickMatchLeft(item.pairIdx) }, item.text)
      );
    });
    const rightCol = el("div", { class: "match-col" });
    q.rightItems.forEach((item) => {
      const isMatched = ms.matched.has(item.pairIdx);
      let cls = "match-item";
      if (isMatched) cls += " matched";
      if (ms.wrongFlash === item.pairIdx) cls += " wrong-flash";
      rightCol.appendChild(
        el("button", { class: cls, disabled: isMatched ? "true" : undefined, onclick: () => clickMatchRight(item.pairIdx) }, item.text)
      );
    });
    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    qArea.appendChild(grid);
  }

  wrap.appendChild(qArea);
  wrap.appendChild(renderBottomBar());
  return wrap;
}

function renderBottomBar() {
  const q = currentQuestion();

  if (q.tipus === "emparellar" && !session.answered) {
    const ms = ensureMatchState();
    return el("div", { class: "bottom-bar" }, [
      el("div", { class: "bottom-bar-inner" }, [el("div", { class: "match-hint" }, `🤖 Aparella-ho tot (${ms.matched.size}/${q.parelles.length})`)])
    ]);
  }

  if (!session.answered) {
    let canCheck = false;
    if (q.tipus === "test" || q.tipus === "veritat_fals") canCheck = session.selected !== null;
    else if (q.tipus === "resposta_escrita") canCheck = true;
    else if (q.tipus === "ordenar") canCheck = session.selected && session.selected.length === q.elements_ordre_correcte.length;

    const showHint = (q.tipus === "test" || q.tipus === "resposta_escrita") && !session.hintUsed;

    return el("div", { class: "bottom-bar" }, [
      el("div", { class: "bottom-bar-inner" }, [
        showHint ? el("button", { class: "btn btn-hint", onclick: useHint }, "💡 Pista") : null,
        el("button", { class: "btn btn-primary btn-full", disabled: canCheck ? undefined : "true", onclick: checkAnswer }, "Comprova")
      ])
    ]);
  }

  const ok = session.wasCorrect;
  const bar = el("div", { class: `bottom-bar ${ok ? "state-ok" : "state-bad"}` });
  const inner = el("div", { class: "bottom-bar-inner" }, [
    el("div", { class: "feedback-text" }, [
      el("div", { class: `feedback-title ${ok ? "ok" : "bad"}` }, ok ? "🤖 Molt bé! 🎉" : "🤖 Ui, no és correcte 😕"),
      ok ? null : el("div", { class: "feedback-sub" }, `Resposta correcta: ${correctAnswerText(q)}`)
    ]),
    el("button", { class: `btn ${ok ? "btn-primary" : "btn-danger"}`, onclick: nextQuestion }, "Continua")
  ]);
  bar.appendChild(inner);
  return bar;
}

/* ---------------- Pantalla: resultats ---------------- */

function renderResults() {
  const stars = session.finalStars;
  const accuracyPct = Math.round(session.finalAccuracy * 100);
  const loc = findLessonLocation(session.lessonKey);

  const emoji = stars === 3 ? "🤖🏆" : stars >= 1 ? "🤖🎉" : "🤖💪";
  const title = stars === 3 ? "Perfecte!" : stars >= 1 ? "Molt bé!" : "Segueix practicant!";

  const wrap = el("div", { class: "results" });
  wrap.appendChild(el("div", { class: "big-emoji pop" }, emoji));
  wrap.appendChild(el("h2", {}, title));
  wrap.appendChild(el("div", {}, loc ? loc.lesson.title : ""));
  wrap.appendChild(el("div", { class: "stars-row" }, "⭐".repeat(stars) + "☆".repeat(3 - stars)));

  wrap.appendChild(
    el("div", { class: "results-stats" }, [
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `+${session.xpEarned}`), el("div", { class: "lbl" }, "XP")]),
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `${accuracyPct}%`), el("div", { class: "lbl" }, "Encert")]),
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `${session.hearts}`), el("div", { class: "lbl" }, "Vides")])
    ])
  );

  if (session.mistakes.length > 0) {
    const box = el("div", { class: "mistakes-box" }, [el("h3", {}, "🤖 Repassa els errors")]);
    session.mistakes.forEach((m) => {
      box.appendChild(el("div", { class: "mistake-item" }, [el("div", { class: "mq" }, m.question), el("div", { class: "ma" }, `✔ ${m.correctText}`)]));
    });
    wrap.appendChild(box);
  }

  const actions = el("div", { class: "actions-col" }, [
    el(
      "button",
      { class: "btn btn-primary btn-full", onclick: () => { const subjectId = loc.subject.id; session = null; openSubject(subjectId); } },
      "Continua"
    ),
    el("button", { class: "btn btn-outline btn-full", onclick: retryLesson }, "Torna-ho a fer")
  ]);
  wrap.appendChild(actions);

  return wrap;
}

/* ---------------- Init ---------------- */
bootProfile();
render();
