/* Repassa'l! — app de repàs a l'estil Duolingo per a 4t de primària.
   Vanilla JS, sense dependències. Estat persistit a localStorage. */

const STORAGE_KEY = "repassal_state_v1";
const root = document.getElementById("app");

const MASCOT_MESSAGES = [
  "Avui toca repassar una mica! 💪",
  "Cada lliçó et fa una mica més savi o sàvia! 🧠",
  "Equivocar-se també és aprendre. Endavant! 🙌",
  "Quants punts d'experiència aconseguiràs avui? ✨",
  "Recorda: la pràctica fa el mestre! 📚",
  "Tria una matèria i comencem a jugar! 🎮"
];

/* ---------------- State ---------------- */

function defaultState() {
  return { xp: 0, streak: 0, lastPlayISO: null, lessons: {} };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

/* ---------------- Navigation (in-memory) ---------------- */

let nav = { view: "home" };
let session = null;
let mascotMsgIndex = Math.floor(Math.random() * MASCOT_MESSAGES.length);

function goHome() {
  mascotMsgIndex = Math.floor(Math.random() * MASCOT_MESSAGES.length);
  nav = { view: "home" };
  render();
}

function openSubject(subjectId) {
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
  return SUBJECTS.find((s) => s.id === id);
}

function findLessonLocation(lessonId) {
  for (const subject of SUBJECTS) {
    const idx = subject.lessons.findIndex((l) => l.id === lessonId);
    if (idx !== -1) return { subject, lesson: subject.lessons[idx], idx };
  }
  return null;
}

function lessonProgress(lessonId) {
  return state.lessons[lessonId] || { stars: 0, bestAccuracy: 0, timesCompleted: 0 };
}

function isLessonUnlocked(subject, idx) {
  if (idx === 0) return true;
  const prev = subject.lessons[idx - 1];
  return lessonProgress(prev.id).stars > 0;
}

function subjectStats(subject) {
  const total = subject.lessons.length;
  const done = subject.lessons.filter((l) => lessonProgress(l.id).stars > 0).length;
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

/* ---------------- Lesson session ---------------- */

function buildQueueItem(question) {
  if (question.type === "mcq") {
    const opts = question.options.map((text, i) => ({ text, isCorrect: i === question.correct }));
    const shuffled = shuffle(opts);
    return { ...question, shuffledOptions: shuffled };
  }
  return { ...question };
}

function startLesson(subjectId, lessonId) {
  const subject = getSubject(subjectId);
  const lesson = subject.lessons.find((l) => l.id === lessonId);
  session = {
    subjectId,
    lessonId,
    queue: lesson.questions.map(buildQueueItem),
    idx: 0,
    hearts: 5,
    correctCount: 0,
    mistakes: [],
    xp: 0,
    selected: null,
    answered: false,
    wasCorrect: null
  };
  nav = { view: "lesson" };
  render();
}

function retryLesson() {
  startLesson(session.subjectId, session.lessonId);
}

function currentQuestion() {
  return session.queue[session.idx];
}

function selectOption(index) {
  if (session.answered) return;
  session.selected = index;
  render();
}

function selectTF(value) {
  if (session.answered) return;
  session.selected = value;
  render();
}

function checkAnswer() {
  if (session.answered) return;
  const q = currentQuestion();
  let correct = false;

  if (q.type === "mcq") {
    if (session.selected === null) return;
    correct = q.shuffledOptions[session.selected].isCorrect;
  } else if (q.type === "tf") {
    if (session.selected === null) return;
    correct = session.selected === q.correct;
  } else if (q.type === "fill") {
    const val = (document.getElementById("fill-input") || {}).value || "";
    if (!val.trim()) return;
    session.fillValue = val;
    correct = q.answers.some((a) => normalizeAnswer(a) === normalizeAnswer(val));
  }

  session.answered = true;
  session.wasCorrect = correct;

  if (correct) {
    session.correctCount += 1;
    session.xp += 10;
  } else {
    session.hearts = Math.max(0, session.hearts - 1);
    session.mistakes.push({
      question: q.q,
      correctText: correctAnswerText(q)
    });
  }
  render();
}

function correctAnswerText(q) {
  if (q.type === "mcq") return q.options[q.correct];
  if (q.type === "tf") return q.correct ? "Cert" : "Fals";
  if (q.type === "fill") return q.answers[0];
  return "";
}

function nextQuestion() {
  session.idx += 1;
  session.selected = null;
  session.answered = false;
  session.wasCorrect = null;
  session.fillValue = "";

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

  const prev = lessonProgress(session.lessonId);
  state.lessons[session.lessonId] = {
    stars: Math.max(prev.stars, stars),
    bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
    timesCompleted: prev.timesCompleted + 1
  };
  state.xp += xpEarned;
  updateStreakOnFinish();
  saveState();

  session.finalStars = stars;
  session.finalAccuracy = accuracy;
  session.xpEarned = xpEarned;

  nav = { view: "results" };
  render();
}

function resetProgress() {
  if (!confirm("Segur que vols esborrar tot el progrés? Aquesta acció no es pot desfer.")) return;
  state = defaultState();
  saveState();
  goHome();
}

/* ---------------- Rendering ---------------- */

function render() {
  root.innerHTML = "";
  if (nav.view === "home") root.appendChild(renderHome());
  else if (nav.view === "path") root.appendChild(renderPath());
  else if (nav.view === "lesson") root.appendChild(renderLesson());
  else if (nav.view === "results") root.appendChild(renderResults());

  requestAnimationFrame(() => {
    const input = document.getElementById("fill-input");
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
    else node.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}

function renderTopStats() {
  return el("div", { class: "stats-row" }, [
    el("div", { class: "stat-pill" }, `🔥 ${state.streak}`),
    el("div", { class: "stat-pill" }, `⭐ ${state.xp}`)
  ]);
}

function renderHome() {
  const wrap = el("div", {});
  wrap.appendChild(
    el("div", { class: "topbar" }, [
      el("div", { class: "brand" }, [document.createTextNode("🦉 Repassa'l!")]),
      renderTopStats()
    ])
  );
  wrap.appendChild(
    el("div", { class: "hero" }, [
      el("h1", {}, "Hola! Què repassem avui?"),
      el("p", {}, "4t de primària · Currículum de Catalunya")
    ])
  );

  wrap.appendChild(
    el("div", { class: "mascot-box" }, [
      el("div", { class: "emoji" }, "🦉"),
      el("div", {}, MASCOT_MESSAGES[mascotMsgIndex])
    ])
  );

  const grid = el("div", { class: "subject-grid" });
  SUBJECTS.forEach((subject) => {
    const { total, done } = subjectStats(subject);
    const pct = Math.round((done / total) * 100);
    const card = el(
      "button",
      {
        class: "subject-card pop",
        style: `--card-border:${subject.colorDark}`,
        onclick: () => openSubject(subject.id)
      },
      [
        el("div", { class: "icon" }, subject.icon),
        el("div", { class: "name" }, subject.name),
        el("div", { class: "progress-track" }, [
          el("div", { class: "progress-fill", style: `width:${pct}%; background:${subject.color}` })
        ]),
        el("div", { class: "sub" }, `${done}/${total} lliçons`)
      ]
    );
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  wrap.appendChild(
    el("div", { class: "footer-note" }, [
      document.createTextNode(
        "Contingut basat en el currículum d'Educació Primària de la Generalitat de Catalunya (4t curs)."
      ),
      document.createElement("br"),
      el("button", { class: "reset-link", onclick: resetProgress }, "Esborra el progrés")
    ])
  );

  return wrap;
}

function renderPath() {
  const subject = getSubject(nav.subjectId);
  const wrap = el("div", {});

  wrap.appendChild(
    el("div", { class: "path-header" }, [
      el("button", { class: "back-btn", onclick: goHome }, "←"),
      el("div", { class: "path-title" }, `${subject.icon} ${subject.name}`),
    ])
  );

  const path = el("div", { class: "path" });
  subject.lessons.forEach((lesson, idx) => {
    const unlocked = isLessonUnlocked(subject, idx);
    const prog = lessonProgress(lesson.id);
    const offset = idx % 2 === 0 ? "0" : idx % 4 === 1 ? "70px" : "-70px";

    const node = el(
      "button",
      {
        class: `lesson-node ${unlocked ? "" : "locked"}`,
        style: unlocked ? `background:${subject.color}` : "",
        onclick: () => (unlocked ? startLesson(subject.id, lesson.id) : null),
        disabled: unlocked ? undefined : "true"
      },
      [
        document.createTextNode(unlocked ? lesson.icon : "🔒"),
        prog.stars > 0 ? el("div", { class: "stars" }, "⭐".repeat(prog.stars)) : null
      ]
    );

    const rowWrap = el("div", { class: "lesson-wrap", style: `transform: translateX(${offset})` }, [
      node,
      el("div", { class: "lesson-label" }, lesson.title)
    ]);
    path.appendChild(rowWrap);
  });

  wrap.appendChild(path);
  return wrap;
}

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
  qArea.appendChild(el("div", { class: "q-text pop" }, q.q));

  if (q.type === "mcq") {
    const opts = el("div", { class: "options" });
    q.shuffledOptions.forEach((opt, i) => {
      let cls = "option-btn";
      if (session.answered) {
        if (opt.isCorrect) cls += " correct";
        else if (i === session.selected) cls += " incorrect";
      } else if (i === session.selected) cls += " selected";
      opts.appendChild(
        el(
          "button",
          { class: cls, disabled: session.answered ? "true" : undefined, onclick: () => selectOption(i) },
          [el("span", { class: "option-letter" }, "ABCD"[i]), document.createTextNode(opt.text)]
        )
      );
    });
    qArea.appendChild(opts);
  } else if (q.type === "tf") {
    const opts = el("div", { class: "tf-options" });
    [
      { label: "✅ Cert", value: true },
      { label: "❌ Fals", value: false }
    ].forEach((opt) => {
      let cls = "option-btn";
      if (session.answered) {
        if (opt.value === q.correct) cls += " correct";
        else if (opt.value === session.selected) cls += " incorrect";
      } else if (opt.value === session.selected) cls += " selected";
      opts.appendChild(
        el("button", { class: cls, disabled: session.answered ? "true" : undefined, onclick: () => selectTF(opt.value) }, opt.label)
      );
    });
    qArea.appendChild(opts);
  } else if (q.type === "fill") {
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
      onkeydown: (e) => {
        if (e.key === "Enter") session.answered ? nextQuestion() : checkAnswer();
      }
    });
    if (session.fillValue) input.value = session.fillValue;
    qArea.appendChild(input);
  }

  wrap.appendChild(qArea);
  wrap.appendChild(renderBottomBar());
  return wrap;
}

function renderBottomBar() {
  if (!session.answered) {
    const canCheck =
      (currentQuestion().type !== "fill" && session.selected !== null) ||
      (currentQuestion().type === "fill");
    return el("div", { class: "bottom-bar" }, [
      el("div", { class: "bottom-bar-inner" }, [
        el(
          "button",
          {
            class: "btn btn-primary btn-full",
            disabled: canCheck ? undefined : "true",
            onclick: checkAnswer
          },
          "Comprova"
        )
      ])
    ]);
  }

  const ok = session.wasCorrect;
  const bar = el("div", { class: `bottom-bar ${ok ? "state-ok" : "state-bad"}` });
  const inner = el("div", { class: "bottom-bar-inner" }, [
    el("div", { class: "feedback-text" }, [
      el("div", { class: `feedback-title ${ok ? "ok" : "bad"}` }, ok ? "Molt bé! 🎉" : "Ui, no és correcte 😕"),
      ok ? null : el("div", { class: "feedback-sub" }, `Resposta correcta: ${correctAnswerText(currentQuestion())}`)
    ]),
    el("button", { class: `btn ${ok ? "btn-primary" : "btn-danger"}`, onclick: nextQuestion }, "Continua")
  ]);
  bar.appendChild(inner);
  return bar;
}

function renderResults() {
  const stars = session.finalStars;
  const accuracyPct = Math.round(session.finalAccuracy * 100);
  const loc = findLessonLocation(session.lessonId);

  const emoji = stars === 3 ? "🏆" : stars >= 1 ? "🎉" : "💪";
  const title = stars === 3 ? "Perfecte!" : stars >= 1 ? "Molt bé!" : "Segueix practicant!";

  const wrap = el("div", { class: "results" });
  wrap.appendChild(el("div", { class: "big-emoji pop" }, emoji));
  wrap.appendChild(el("h2", {}, title));
  wrap.appendChild(el("div", {}, loc ? loc.lesson.title : ""));
  wrap.appendChild(
    el("div", { class: "stars-row" }, "⭐".repeat(stars) + "☆".repeat(3 - stars))
  );

  wrap.appendChild(
    el("div", { class: "results-stats" }, [
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `+${session.xpEarned}`), el("div", { class: "lbl" }, "XP")]),
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `${accuracyPct}%`), el("div", { class: "lbl" }, "Encert")]),
      el("div", { class: "results-stat" }, [el("div", { class: "val" }, `${session.hearts}`), el("div", { class: "lbl" }, "Vides")])
    ])
  );

  if (session.mistakes.length > 0) {
    const box = el("div", { class: "mistakes-box" }, [el("h3", {}, "Repassa els errors")]);
    session.mistakes.forEach((m) => {
      box.appendChild(
        el("div", { class: "mistake-item" }, [
          el("div", { class: "mq" }, m.question),
          el("div", { class: "ma" }, `✔ ${m.correctText}`)
        ])
      );
    });
    wrap.appendChild(box);
  }

  const actions = el("div", { class: "actions-col" }, [
    el(
      "button",
      {
        class: "btn btn-primary btn-full",
        onclick: () => {
          const subjectId = loc.subject.id;
          session = null;
          openSubject(subjectId);
        }
      },
      "Continua"
    ),
    el("button", { class: "btn btn-outline btn-full", onclick: retryLesson }, "Torna-ho a fer")
  ]);
  wrap.appendChild(actions);

  return wrap;
}

/* ---------------- Init ---------------- */
render();
