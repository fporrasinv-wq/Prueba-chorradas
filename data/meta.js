/* Metadades de presentació — NO són contingut de preguntes.

   SUBJECTS_META: nom, icona i color de cada matèria. És el mateix
   per a tots els cursos (es va comprovar que "mat", "cat", etc. tenen
   sempre el mateix nom/icona/color a totes dues apps originals), per
   això no porta el camp "curs".

   LESSON_META: per a cada lliçó (identificada per curs+materia+tema)
   guarda la icona i l'ordre dins la matèria, perquè el mapa de
   lliçons pugui mostrar el mateix disseny que abans.

   CURSOS: cursos disponibles al selector de perfil, amb els paràmetres
   visuals que abans vivien en dos style.css/app.js diferents (p. ex.
   "1r" mostrava el text en majúscules i amb lletra més grossa). Ara
   són només dades: el motor únic les llegeix per adaptar l'aparença
   segons el curs del perfil actiu. */

const SUBJECTS_META = [
  {
    "materia": "mat",
    "name": "Matemàtiques",
    "icon": "🔢",
    "color": "#58cc02",
    "colorDark": "#4caf00"
  },
  {
    "materia": "cat",
    "name": "Llengua catalana",
    "icon": "📚",
    "color": "#1cb0f6",
    "colorDark": "#0a91d1"
  },
  {
    "materia": "cas",
    "name": "Llengua castellana",
    "icon": "🇪🇸",
    "color": "#f94144",
    "colorDark": "#d92d30"
  },
  {
    "materia": "eng",
    "name": "Anglès",
    "icon": "🇬🇧",
    "color": "#4361ee",
    "colorDark": "#2f43c9"
  },
  {
    "materia": "soc",
    "name": "Ciències socials",
    "icon": "🗺️",
    "color": "#ff9600",
    "colorDark": "#e08600"
  },
  {
    "materia": "nat",
    "name": "Ciències naturals",
    "icon": "🌱",
    "color": "#ce82ff",
    "colorDark": "#a855f7"
  }
];

const LESSON_META = [
  {
    "curs": "1r",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "icona": "🔢",
    "ordre": 0,
    "lessonId": "mat-1"
  },
  {
    "curs": "1r",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "icona": "➕",
    "ordre": 1,
    "lessonId": "mat-2"
  },
  {
    "curs": "1r",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "icona": "✖️",
    "ordre": 2,
    "lessonId": "mat-3"
  },
  {
    "curs": "1r",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "icona": "⏰",
    "ordre": 3,
    "lessonId": "mat-4"
  },
  {
    "curs": "1r",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "icona": "🔤",
    "ordre": 0,
    "lessonId": "cat-1"
  },
  {
    "curs": "1r",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "icona": "📝",
    "ordre": 1,
    "lessonId": "cat-2"
  },
  {
    "curs": "1r",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "icona": "📖",
    "ordre": 2,
    "lessonId": "cat-3"
  },
  {
    "curs": "1r",
    "materia": "cat",
    "tema": "Rimes i categories",
    "icona": "🎵",
    "ordre": 3,
    "lessonId": "cat-4"
  },
  {
    "curs": "1r",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "icona": "🔠",
    "ordre": 0,
    "lessonId": "cas-1"
  },
  {
    "curs": "1r",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "icona": "📗",
    "ordre": 1,
    "lessonId": "cas-2"
  },
  {
    "curs": "1r",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "icona": "📘",
    "ordre": 2,
    "lessonId": "cas-3"
  },
  {
    "curs": "1r",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "icona": "🎨",
    "ordre": 3,
    "lessonId": "cas-4"
  },
  {
    "curs": "1r",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "icona": "🔟",
    "ordre": 0,
    "lessonId": "eng-1"
  },
  {
    "curs": "1r",
    "materia": "eng",
    "tema": "Family & body",
    "icona": "👪",
    "ordre": 1,
    "lessonId": "eng-2"
  },
  {
    "curs": "1r",
    "materia": "eng",
    "tema": "Food & animals",
    "icona": "🍎",
    "ordre": 2,
    "lessonId": "eng-3"
  },
  {
    "curs": "1r",
    "materia": "eng",
    "tema": "Simple sentences",
    "icona": "🙋",
    "ordre": 3,
    "lessonId": "eng-4"
  },
  {
    "curs": "1r",
    "materia": "soc",
    "tema": "La família",
    "icona": "👨‍👩‍👧",
    "ordre": 0,
    "lessonId": "soc-1"
  },
  {
    "curs": "1r",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "icona": "🏫",
    "ordre": 1,
    "lessonId": "soc-2"
  },
  {
    "curs": "1r",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "icona": "🏘️",
    "ordre": 2,
    "lessonId": "soc-3"
  },
  {
    "curs": "1r",
    "materia": "soc",
    "tema": "Feines i oficis",
    "icona": "💼",
    "ordre": 3,
    "lessonId": "soc-4"
  },
  {
    "curs": "1r",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "icona": "🐣",
    "ordre": 0,
    "lessonId": "nat-1"
  },
  {
    "curs": "1r",
    "materia": "nat",
    "tema": "On viuen els animals",
    "icona": "🏞️",
    "ordre": 1,
    "lessonId": "nat-2"
  },
  {
    "curs": "1r",
    "materia": "nat",
    "tema": "El cicle de vida",
    "icona": "🐛",
    "ordre": 2,
    "lessonId": "nat-3"
  },
  {
    "curs": "1r",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "icona": "🌡️",
    "ordre": 3,
    "lessonId": "nat-4"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "icona": "🔢",
    "ordre": 0,
    "lessonId": "mat-1"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Suma i resta",
    "icona": "➕",
    "ordre": 1,
    "lessonId": "mat-2"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Multiplicació",
    "icona": "✖️",
    "ordre": 2,
    "lessonId": "mat-3"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Divisió",
    "icona": "➗",
    "ordre": 3,
    "lessonId": "mat-4"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "icona": "🍕",
    "ordre": 4,
    "lessonId": "mat-5"
  },
  {
    "curs": "4t",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "icona": "📐",
    "ordre": 5,
    "lessonId": "mat-6"
  },
  {
    "curs": "4t",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "icona": "✏️",
    "ordre": 0,
    "lessonId": "cat-1"
  },
  {
    "curs": "4t",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "icona": "🔤",
    "ordre": 1,
    "lessonId": "cat-2"
  },
  {
    "curs": "4t",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "icona": "📝",
    "ordre": 2,
    "lessonId": "cat-3"
  },
  {
    "curs": "4t",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "icona": "🔄",
    "ordre": 3,
    "lessonId": "cat-4"
  },
  {
    "curs": "4t",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "icona": "📖",
    "ordre": 4,
    "lessonId": "cat-5"
  },
  {
    "curs": "4t",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "icona": "✒️",
    "ordre": 0,
    "lessonId": "cas-1"
  },
  {
    "curs": "4t",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "icona": "📗",
    "ordre": 1,
    "lessonId": "cas-2"
  },
  {
    "curs": "4t",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "icona": "🔠",
    "ordre": 2,
    "lessonId": "cas-3"
  },
  {
    "curs": "4t",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "icona": "🔀",
    "ordre": 3,
    "lessonId": "cas-4"
  },
  {
    "curs": "4t",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "icona": "❓",
    "ordre": 4,
    "lessonId": "cas-5"
  },
  {
    "curs": "4t",
    "materia": "eng",
    "tema": "Greetings & colours",
    "icona": "👋",
    "ordre": 0,
    "lessonId": "eng-1"
  },
  {
    "curs": "4t",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "icona": "🔟",
    "ordre": 1,
    "lessonId": "eng-2"
  },
  {
    "curs": "4t",
    "materia": "eng",
    "tema": "Animals & family",
    "icona": "🐶",
    "ordre": 2,
    "lessonId": "eng-3"
  },
  {
    "curs": "4t",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "icona": "🎒",
    "ordre": 3,
    "lessonId": "eng-4"
  },
  {
    "curs": "4t",
    "materia": "eng",
    "tema": "The verb «to be»",
    "icona": "🙋",
    "ordre": 4,
    "lessonId": "eng-5"
  },
  {
    "curs": "4t",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "icona": "⛰️",
    "ordre": 0,
    "lessonId": "soc-1"
  },
  {
    "curs": "4t",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "icona": "🌦️",
    "ordre": 1,
    "lessonId": "soc-2"
  },
  {
    "curs": "4t",
    "materia": "soc",
    "tema": "La població i els municipis",
    "icona": "🏙️",
    "ordre": 2,
    "lessonId": "soc-3"
  },
  {
    "curs": "4t",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "icona": "🧭",
    "ordre": 3,
    "lessonId": "soc-4"
  },
  {
    "curs": "4t",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "icona": "💼",
    "ordre": 4,
    "lessonId": "soc-5"
  },
  {
    "curs": "4t",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "icona": "🐸",
    "ordre": 0,
    "lessonId": "nat-1"
  },
  {
    "curs": "4t",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "icona": "🌿",
    "ordre": 1,
    "lessonId": "nat-2"
  },
  {
    "curs": "4t",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "icona": "🌳",
    "ordre": 2,
    "lessonId": "nat-3"
  },
  {
    "curs": "4t",
    "materia": "nat",
    "tema": "El cos humà",
    "icona": "🫀",
    "ordre": 3,
    "lessonId": "nat-4"
  },
  {
    "curs": "4t",
    "materia": "nat",
    "tema": "Matèria i energia",
    "icona": "💧",
    "ordre": 4,
    "lessonId": "nat-5"
  }
];

const CURSOS = [
  {
    "id": "1r",
    "label": "1r de primària",
    "cicle": "inicial",
    "edat": "6 anys",
    "visual": {
      "uppercase": true,
      "mida": "gran",
      "maxOpcionsPerPregunta": 4
    }
  },
  {
    "id": "4t",
    "label": "4t de primària",
    "cicle": "mitjà",
    "edat": "9-10 anys",
    "visual": {
      "uppercase": false,
      "mida": "normal",
      "maxOpcionsPerPregunta": 4
    }
  }
];
