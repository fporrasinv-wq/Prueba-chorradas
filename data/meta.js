/* Metadades de presentació — NO són contingut de preguntes.

   SUBJECTS_META: nom, icona i color de cada matèria. És el mateix per a
   tots els cursos.

   LESSON_META: per a cada lliçó (identificada per curs+materia+tema)
   guarda la icona i l'ordre dins la matèria.

   CURSOS: cursos disponibles al selector de perfil, amb els paràmetres
   visuals que el motor únic llegeix per adaptar l'aparença segons el
   curs del perfil actiu (majúscules i mida a 1r; aparença estàndard a
   4t, 5è i 6è). */

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
  },
  {
    "curs": "5è",
    "materia": "mat",
    "tema": "Nombres decimals",
    "icona": "🔢",
    "ordre": 0,
    "lessonId": "mat-5-1"
  },
  {
    "curs": "5è",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "icona": "🍰",
    "ordre": 1,
    "lessonId": "mat-5-2"
  },
  {
    "curs": "5è",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "icona": "➗",
    "ordre": 2,
    "lessonId": "mat-5-3"
  },
  {
    "curs": "5è",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "icona": "📐",
    "ordre": 3,
    "lessonId": "mat-5-4"
  },
  {
    "curs": "5è",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "icona": "📊",
    "ordre": 4,
    "lessonId": "mat-5-5"
  },
  {
    "curs": "6è",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "icona": "🧮",
    "ordre": 0,
    "lessonId": "mat-6-1"
  },
  {
    "curs": "6è",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "icona": "💯",
    "ordre": 1,
    "lessonId": "mat-6-2"
  },
  {
    "curs": "6è",
    "materia": "mat",
    "tema": "Educació financera",
    "icona": "💶",
    "ordre": 2,
    "lessonId": "mat-6-3"
  },
  {
    "curs": "6è",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "icona": "📐",
    "ordre": 3,
    "lessonId": "mat-6-4"
  },
  {
    "curs": "6è",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "icona": "🎲",
    "ordre": 4,
    "lessonId": "mat-6-5"
  },
  {
    "curs": "5è",
    "materia": "cat",
    "tema": "Tipus de textos",
    "icona": "📝",
    "ordre": 0,
    "lessonId": "cat-5-1"
  },
  {
    "curs": "5è",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "icona": "📚",
    "ordre": 1,
    "lessonId": "cat-5-2"
  },
  {
    "curs": "5è",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "icona": "✏️",
    "ordre": 2,
    "lessonId": "cat-5-3"
  },
  {
    "curs": "5è",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "icona": "📖",
    "ordre": 3,
    "lessonId": "cat-5-4"
  },
  {
    "curs": "5è",
    "materia": "cat",
    "tema": "Comunicació oral",
    "icona": "🗣️",
    "ordre": 4,
    "lessonId": "cat-5-5"
  },
  {
    "curs": "6è",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "icona": "❓",
    "ordre": 0,
    "lessonId": "cat-6-1"
  },
  {
    "curs": "6è",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "icona": "🔗",
    "ordre": 1,
    "lessonId": "cat-6-2"
  },
  {
    "curs": "6è",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "icona": "✒️",
    "ordre": 2,
    "lessonId": "cat-6-3"
  },
  {
    "curs": "6è",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "icona": "🔍",
    "ordre": 3,
    "lessonId": "cat-6-4"
  },
  {
    "curs": "6è",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "icona": "📗",
    "ordre": 4,
    "lessonId": "cat-6-5"
  },
  {
    "curs": "5è",
    "materia": "cas",
    "tema": "Tipos de textos",
    "icona": "📝",
    "ordre": 0,
    "lessonId": "cas-5-1"
  },
  {
    "curs": "5è",
    "materia": "cas",
    "tema": "Géneros literarios",
    "icona": "📚",
    "ordre": 1,
    "lessonId": "cas-5-2"
  },
  {
    "curs": "5è",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "icona": "✏️",
    "ordre": 2,
    "lessonId": "cas-5-3"
  },
  {
    "curs": "5è",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "icona": "📖",
    "ordre": 3,
    "lessonId": "cas-5-4"
  },
  {
    "curs": "5è",
    "materia": "cas",
    "tema": "Comunicación oral",
    "icona": "🗣️",
    "ordre": 4,
    "lessonId": "cas-5-5"
  },
  {
    "curs": "6è",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "icona": "❓",
    "ordre": 0,
    "lessonId": "cas-6-1"
  },
  {
    "curs": "6è",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "icona": "🔗",
    "ordre": 1,
    "lessonId": "cas-6-2"
  },
  {
    "curs": "6è",
    "materia": "cas",
    "tema": "Escritura creativa",
    "icona": "✒️",
    "ordre": 2,
    "lessonId": "cas-6-3"
  },
  {
    "curs": "6è",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "icona": "🔍",
    "ordre": 3,
    "lessonId": "cas-6-4"
  },
  {
    "curs": "6è",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "icona": "📗",
    "ordre": 4,
    "lessonId": "cas-6-5"
  },
  {
    "curs": "5è",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "icona": "🙋",
    "ordre": 0,
    "lessonId": "eng-5-1"
  },
  {
    "curs": "5è",
    "materia": "eng",
    "tema": "Places and everyday life",
    "icona": "🏙️",
    "ordre": 1,
    "lessonId": "eng-5-2"
  },
  {
    "curs": "5è",
    "materia": "eng",
    "tema": "Present simple",
    "icona": "⏳",
    "ordre": 2,
    "lessonId": "eng-5-3"
  },
  {
    "curs": "5è",
    "materia": "eng",
    "tema": "Reading short texts",
    "icona": "📖",
    "ordre": 3,
    "lessonId": "eng-5-4"
  },
  {
    "curs": "5è",
    "materia": "eng",
    "tema": "Basic writing",
    "icona": "✍️",
    "ordre": 4,
    "lessonId": "eng-5-5"
  },
  {
    "curs": "6è",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "icona": "🤝",
    "ordre": 0,
    "lessonId": "eng-6-1"
  },
  {
    "curs": "6è",
    "materia": "eng",
    "tema": "Past simple",
    "icona": "⏰",
    "ordre": 1,
    "lessonId": "eng-6-2"
  },
  {
    "curs": "6è",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "icona": "🌍",
    "ordre": 2,
    "lessonId": "eng-6-3"
  },
  {
    "curs": "6è",
    "materia": "eng",
    "tema": "Reading comprehension",
    "icona": "📗",
    "ordre": 3,
    "lessonId": "eng-6-4"
  },
  {
    "curs": "6è",
    "materia": "eng",
    "tema": "Structured writing",
    "icona": "📝",
    "ordre": 4,
    "lessonId": "eng-6-5"
  },
  {
    "curs": "5è",
    "materia": "nat",
    "tema": "El mètode científic",
    "icona": "🔬",
    "ordre": 0,
    "lessonId": "nat-5-1"
  },
  {
    "curs": "5è",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "icona": "🌿",
    "ordre": 1,
    "lessonId": "nat-5-2"
  },
  {
    "curs": "5è",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "icona": "🦎",
    "ordre": 2,
    "lessonId": "nat-5-3"
  },
  {
    "curs": "5è",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "icona": "🫀",
    "ordre": 3,
    "lessonId": "nat-5-4"
  },
  {
    "curs": "5è",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "icona": "💧",
    "ordre": 4,
    "lessonId": "nat-5-5"
  },
  {
    "curs": "6è",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "icona": "🔌",
    "ordre": 0,
    "lessonId": "nat-6-1"
  },
  {
    "curs": "6è",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "icona": "⚙️",
    "ordre": 1,
    "lessonId": "nat-6-2"
  },
  {
    "curs": "6è",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "icona": "🥗",
    "ordre": 2,
    "lessonId": "nat-6-3"
  },
  {
    "curs": "6è",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "icona": "💻",
    "ordre": 3,
    "lessonId": "nat-6-4"
  },
  {
    "curs": "6è",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "icona": "♻️",
    "ordre": 4,
    "lessonId": "nat-6-5"
  },
  {
    "curs": "5è",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "icona": "🌍",
    "ordre": 0,
    "lessonId": "soc-5-1"
  },
  {
    "curs": "5è",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "icona": "🌦️",
    "ordre": 1,
    "lessonId": "soc-5-2"
  },
  {
    "curs": "5è",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "icona": "🏛️",
    "ordre": 2,
    "lessonId": "soc-5-3"
  },
  {
    "curs": "5è",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "icona": "🏺",
    "ordre": 3,
    "lessonId": "soc-5-4"
  },
  {
    "curs": "5è",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "icona": "⚖️",
    "ordre": 4,
    "lessonId": "soc-5-5"
  },
  {
    "curs": "6è",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "icona": "🌱",
    "ordre": 0,
    "lessonId": "soc-6-1"
  },
  {
    "curs": "6è",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "icona": "🗳️",
    "ordre": 1,
    "lessonId": "soc-6-2"
  },
  {
    "curs": "6è",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "icona": "🌡️",
    "ordre": 2,
    "lessonId": "soc-6-3"
  },
  {
    "curs": "6è",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "icona": "🇪🇺",
    "ordre": 3,
    "lessonId": "soc-6-4"
  },
  {
    "curs": "6è",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "icona": "💰",
    "ordre": 4,
    "lessonId": "soc-6-5"
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
  },
  {
    "id": "5è",
    "label": "5è de primària",
    "cicle": "superior",
    "edat": "10-11 anys",
    "visual": {
      "uppercase": false,
      "mida": "normal",
      "maxOpcionsPerPregunta": 4
    }
  },
  {
    "id": "6è",
    "label": "6è de primària",
    "cicle": "superior",
    "edat": "11-12 anys",
    "visual": {
      "uppercase": false,
      "mida": "normal",
      "maxOpcionsPerPregunta": 4
    }
  }
];
