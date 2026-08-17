/* Contingut educatiu per a nens i nenes de 6 anys (1r de primària),
   pensat per ser molt senzill: poques opcions, vocabulari bàsic i
   molts emojis per ajudar a qui encara està aprenent a llegir.

   Tipus de pregunta suportats (mateix motor que l'app de 4t):
   - mcq:   { q, options:[...], correct: index }
   - tf:    { q, correct: true/false }
   - fill:  { q, answers:[...] }
   - order: { q, tokens:[...] }
   - match: { q, pairs:[[esquerra,dreta],...] }
*/

const SUBJECTS = [
  {
    id: "mat",
    name: "Matemàtiques",
    icon: "🔢",
    color: "#58cc02",
    colorDark: "#4caf00",
    lessons: [
      {
        id: "mat-1",
        title: "Comptem de l'1 al 10",
        icon: "🔢",
        questions: [
          { type: "mcq", q: "Quants gats hi ha? 🐱🐱🐱", options: ["3", "2", "4"], correct: 0 },
          { type: "mcq", q: "Quin número ve després del 5?", options: ["6", "4", "8"], correct: 0 },
          { type: "tf", q: "El número 10 és més gran que el número 3.", correct: true },
          { type: "mcq", q: "Quants dits tens en una mà? 🖐️", options: ["5", "10", "3"], correct: 0 },
          { type: "fill", q: "Quants sols hi ha? ☀️☀️", answers: ["2"] },
          { type: "mcq", q: "Quin número ve abans del 4?", options: ["3", "5", "2"], correct: 0 }
        ]
      },
      {
        id: "mat-2",
        title: "Sumes fins a 10",
        icon: "➕",
        questions: [
          { type: "mcq", q: "2 + 3 = ?", options: ["5", "4", "6"], correct: 0 },
          { type: "mcq", q: "1 + 1 = ?", options: ["2", "3", "1"], correct: 0 },
          { type: "fill", q: "4 + 2 = ?", answers: ["6"] },
          { type: "mcq", q: "3 + 3 = ?", options: ["6", "5", "7"], correct: 0 },
          { type: "tf", q: "5 + 0 = 5", correct: true },
          { type: "fill", q: "1 + 4 = ?", answers: ["5"] }
        ]
      },
      {
        id: "mat-3",
        title: "Formes i mides",
        icon: "📐",
        questions: [
          { type: "mcq", q: "Quina figura té 3 costats? 🔺", options: ["Triangle", "Quadrat", "Cercle"], correct: 0 },
          { type: "mcq", q: "Quina figura és rodona? ⚪", options: ["Cercle", "Triangle", "Quadrat"], correct: 0 },
          { type: "tf", q: "Un elefant és més gran que un ratolí.", correct: true },
          { type: "mcq", q: "Quina figura té 4 costats iguals? 🟧", options: ["Quadrat", "Triangle", "Cercle"], correct: 0 },
          { type: "mcq", q: "Quin animal és més petit?", options: ["Formiga 🐜", "Elefant 🐘", "Gos 🐶"], correct: 0 },
          { type: "tf", q: "Un quadrat té 4 costats.", correct: true }
        ]
      }
    ]
  },
  {
    id: "cat",
    name: "Llengua catalana",
    icon: "📚",
    color: "#1cb0f6",
    colorDark: "#0a91d1",
    lessons: [
      {
        id: "cat-1",
        title: "Les vocals",
        icon: "🔤",
        questions: [
          { type: "mcq", q: "Quina és la primera vocal?", options: ["A", "B", "O"], correct: 0 },
          { type: "mcq", q: "Amb quina vocal comença «Ocell»? 🐦", options: ["O", "A", "E"], correct: 0 },
          { type: "tf", q: "La paraula «Iogurt» comença amb la vocal I.", correct: true },
          { type: "mcq", q: "Amb quina vocal comença «Elefant»? 🐘", options: ["E", "A", "U"], correct: 0 },
          { type: "mcq", q: "Quantes vocals té l'abecedari?", options: ["5", "3", "10"], correct: 0 },
          { type: "order", q: "Ordena les vocals.", tokens: ["A", "E", "I"] }
        ]
      },
      {
        id: "cat-2",
        title: "Paraules senzilles",
        icon: "📝",
        questions: [
          { type: "mcq", q: "Com es diu l'animal que fa «Meu»? 🐱", options: ["Gat", "Gos", "Ocell"], correct: 0 },
          { type: "mcq", q: "Com es diu l'animal que fa «Bup bup»? 🐶", options: ["Gos", "Gat", "Peix"], correct: 0 },
          { type: "mcq", q: "Quina d'aquestes és una fruita? 🍎", options: ["Poma", "Cadira", "Cotxe"], correct: 0 },
          { type: "tf", q: "El sol surt de dia.", correct: true },
          { type: "mcq", q: "Com es diu la casa on vius amb la família?", options: ["Casa", "Escola", "Cotxe"], correct: 0 },
          { type: "mcq", q: "Què beus per esmorzar? 🥛", options: ["Llet", "Sabata", "Llibre"], correct: 0 }
        ]
      },
      {
        id: "cat-3",
        title: "Rimes i sons",
        icon: "🎵",
        questions: [
          { type: "mcq", q: "Quina paraula rima amb «Gat»?", options: ["Plat", "Cadira", "Pilota"], correct: 0 },
          { type: "mcq", q: "Quina paraula rima amb «Sol»?", options: ["Col", "Taula", "Llapis"], correct: 0 },
          { type: "tf", q: "«Pa» i «Ma» rimen perquè acaben igual.", correct: true },
          { type: "mcq", q: "Quina paraula comença igual que «Casa»?", options: ["Cadira", "Taula", "Pilota"], correct: 0 },
          { type: "mcq", q: "Quants cops de mans té la paraula «Pa-pa»?", options: ["2", "1", "3"], correct: 0 },
          { type: "mcq", q: "Quants cops de mans té la paraula «Sol»?", options: ["1", "2", "3"], correct: 0 }
        ]
      }
    ]
  },
  {
    id: "cas",
    name: "Llengua castellana",
    icon: "🇪🇸",
    color: "#f94144",
    colorDark: "#d92d30",
    lessons: [
      {
        id: "cas-1",
        title: "Las vocales",
        icon: "🔠",
        questions: [
          { type: "mcq", q: "¿Cuál es la primera vocal?", options: ["A", "B", "O"], correct: 0 },
          { type: "mcq", q: "¿Con qué vocal empieza «Oso»? 🐻", options: ["O", "A", "E"], correct: 0 },
          { type: "tf", q: "La palabra «Iglú» empieza con la vocal I.", correct: true },
          { type: "mcq", q: "¿Con qué vocal empieza «Elefante»? 🐘", options: ["E", "A", "U"], correct: 0 },
          { type: "mcq", q: "¿Cuántas vocales tiene el abecedario?", options: ["5", "3", "10"], correct: 0 },
          { type: "order", q: "Ordena las vocales.", tokens: ["A", "E", "I"] }
        ]
      },
      {
        id: "cas-2",
        title: "Palabras sencillas",
        icon: "📗",
        questions: [
          { type: "mcq", q: "¿Cómo se llama el animal que hace «Miau»? 🐱", options: ["Gato", "Perro", "Pájaro"], correct: 0 },
          { type: "mcq", q: "¿Cómo se llama el animal que hace «Guau»? 🐶", options: ["Perro", "Gato", "Pez"], correct: 0 },
          { type: "mcq", q: "¿Cuál de estas es una fruta? 🍌", options: ["Plátano", "Silla", "Coche"], correct: 0 },
          { type: "tf", q: "El sol sale de día.", correct: true },
          { type: "mcq", q: "¿Dónde vives con tu familia?", options: ["Casa", "Escuela", "Coche"], correct: 0 },
          { type: "mcq", q: "¿Qué bebes por la mañana? 🥛", options: ["Leche", "Zapato", "Libro"], correct: 0 }
        ]
      },
      {
        id: "cas-3",
        title: "Colores y objetos",
        icon: "🎨",
        questions: [
          { type: "mcq", q: "¿De qué color es el sol? ☀️", options: ["Amarillo", "Azul", "Negro"], correct: 0 },
          { type: "mcq", q: "¿De qué color es el cielo? 🌤️", options: ["Azul", "Rojo", "Marrón"], correct: 0 },
          { type: "mcq", q: "¿De qué color es una fresa? 🍓", options: ["Rojo", "Verde", "Azul"], correct: 0 },
          { type: "tf", q: "La hierba es verde.", correct: true },
          { type: "mcq", q: "¿Qué usamos para escribir? ✏️", options: ["Lápiz", "Cuchara", "Zapato"], correct: 0 },
          { type: "mcq", q: "¿Qué usamos para dormir? 🛏️", options: ["Cama", "Silla", "Mesa"], correct: 0 }
        ]
      }
    ]
  },
  {
    id: "eng",
    name: "Anglès",
    icon: "🇬🇧",
    color: "#4361ee",
    colorDark: "#2f43c9",
    lessons: [
      {
        id: "eng-1",
        title: "Colours",
        icon: "🌈",
        questions: [
          { type: "mcq", q: "What colour is the sun? ☀️", options: ["Yellow", "Blue", "Black"], correct: 0 },
          { type: "mcq", q: "What colour is the sky? 🌤️", options: ["Blue", "Red", "Green"], correct: 0 },
          { type: "tf", q: "Grass is green.", correct: true },
          { type: "mcq", q: "What colour is a strawberry? 🍓", options: ["Red", "Blue", "Grey"], correct: 0 },
          { type: "mcq", q: "What colour is a banana? 🍌", options: ["Yellow", "Purple", "Black"], correct: 0 },
          { type: "match", q: "Match each colour.", pairs: [["Vermell", "Red"], ["Blau", "Blue"], ["Groc", "Yellow"]] }
        ]
      },
      {
        id: "eng-2",
        title: "Numbers 1-5",
        icon: "🔢",
        questions: [
          { type: "mcq", q: "How do you say «1» in English?", options: ["One", "Two", "Three"], correct: 0 },
          { type: "mcq", q: "How do you say «3» in English?", options: ["Three", "Four", "One"], correct: 0 },
          { type: "tf", q: "«Five» is number 5.", correct: true },
          { type: "mcq", q: "How do you say «2» in English?", options: ["Two", "Five", "Four"], correct: 0 },
          { type: "fill", q: "Write the number for «four».", answers: ["4"] },
          { type: "mcq", q: "How do you say «5» in English?", options: ["Five", "Three", "One"], correct: 0 }
        ]
      },
      {
        id: "eng-3",
        title: "Animals",
        icon: "🐶",
        questions: [
          { type: "mcq", q: "How do you say «gos» in English? 🐶", options: ["Dog", "Cat", "Bird"], correct: 0 },
          { type: "mcq", q: "How do you say «gat» in English? 🐱", options: ["Cat", "Dog", "Fish"], correct: 0 },
          { type: "tf", q: "«Bird» means «ocell».", correct: true },
          { type: "mcq", q: "How do you say «peix» in English? 🐟", options: ["Fish", "Dog", "Cat"], correct: 0 },
          { type: "mcq", q: "How do you say «ocell» in English? 🐦", options: ["Bird", "Fish", "Dog"], correct: 0 },
          { type: "mcq", q: "What sound does a dog make?", options: ["Woof", "Meow", "Tweet"], correct: 0 }
        ]
      }
    ]
  },
  {
    id: "soc",
    name: "Ciències socials",
    icon: "🗺️",
    color: "#ff9600",
    colorDark: "#e08600",
    lessons: [
      {
        id: "soc-1",
        title: "La meva família",
        icon: "👨‍👩‍👧",
        questions: [
          { type: "mcq", q: "Com es diu la mare de la teva mare?", options: ["Àvia", "Tieta", "Cosina"], correct: 0 },
          { type: "mcq", q: "Qui et cuida quan ets petit?", options: ["La família", "Els desconeguts", "Ningú"], correct: 0 },
          { type: "tf", q: "Un germà o germana forma part de la família.", correct: true },
          { type: "mcq", q: "Com es diu el pare del teu pare?", options: ["Avi", "Oncle", "Cosí"], correct: 0 },
          { type: "mcq", q: "Qui sol viure amb tu a casa?", options: ["La meva família", "Un lleó", "Un desconegut"], correct: 0 },
          { type: "mcq", q: "Què fem en família els caps de setmana?", options: ["Jugar i estar junts", "Res", "Barallar-nos sempre"], correct: 0 }
        ]
      },
      {
        id: "soc-2",
        title: "L'escola",
        icon: "🏫",
        questions: [
          { type: "mcq", q: "Qui ens ensenya a l'escola?", options: ["El mestre o la mestra", "El metge", "El cuiner"], correct: 0 },
          { type: "mcq", q: "On aprenem a llegir i escriure?", options: ["A l'escola", "Al mar", "Al cotxe"], correct: 0 },
          { type: "tf", q: "Els companys de classe ens ajuden a aprendre.", correct: true },
          { type: "mcq", q: "Què fem al pati de l'escola?", options: ["Jugar", "Dormir", "Cuinar"], correct: 0 },
          { type: "mcq", q: "Què portem a la motxilla?", options: ["Llibres i llapis", "Un cotxe", "Un sofà"], correct: 0 },
          { type: "mcq", q: "Com hem de tractar els companys?", options: ["Amb respecte", "Amb crits", "Ignorant-los"], correct: 0 }
        ]
      },
      {
        id: "soc-3",
        title: "El meu poble o ciutat",
        icon: "🏘️",
        questions: [
          { type: "mcq", q: "On comprem el pa?", options: ["Al forn", "A l'hospital", "Al riu"], correct: 0 },
          { type: "mcq", q: "Qui ens ajuda si estem malalts?", options: ["El metge o la metgessa", "El forner", "El mestre"], correct: 0 },
          { type: "tf", q: "Els bombers apaguen els focs.", correct: true },
          { type: "mcq", q: "On juguem amb els amics?", options: ["Al parc", "A l'hospital", "Al banc"], correct: 0 },
          { type: "mcq", q: "Qui ens ajuda quan ens perdem?", options: ["La policia", "El forner", "El jardiner"], correct: 0 },
          { type: "mcq", q: "Com hem de creuar el carrer?", options: ["Pel pas de vianants", "Corrent sempre", "Amb els ulls tancats"], correct: 0 }
        ]
      }
    ]
  },
  {
    id: "nat",
    name: "Ciències naturals",
    icon: "🌱",
    color: "#ce82ff",
    colorDark: "#a855f7",
    lessons: [
      {
        id: "nat-1",
        title: "Els animals",
        icon: "🦁",
        questions: [
          { type: "mcq", q: "Quin animal fa «Bèee»? 🐑", options: ["Ovella", "Vaca", "Gat"], correct: 0 },
          { type: "mcq", q: "Quin animal fa «Muuu»? 🐮", options: ["Vaca", "Ovella", "Gos"], correct: 0 },
          { type: "tf", q: "Els peixos viuen a l'aigua.", correct: true },
          { type: "mcq", q: "Quin animal té el coll molt llarg? 🦒", options: ["Girafa", "Ratolí", "Peix"], correct: 0 },
          { type: "mcq", q: "Quin animal vola? 🦅", options: ["Àguila", "Elefant", "Tortuga"], correct: 0 },
          { type: "mcq", q: "Quin animal és el rei de la selva? 🦁", options: ["Lleó", "Conill", "Peix"], correct: 0 }
        ]
      },
      {
        id: "nat-2",
        title: "El meu cos",
        icon: "🧒",
        questions: [
          { type: "mcq", q: "Amb què veiem? 👀", options: ["Els ulls", "Les orelles", "Els peus"], correct: 0 },
          { type: "mcq", q: "Amb què escoltem? 👂", options: ["Les orelles", "Els ulls", "Les mans"], correct: 0 },
          { type: "tf", q: "Tenim dues mans.", correct: true },
          { type: "mcq", q: "Amb què caminem? 🦵", options: ["Els peus", "Les mans", "Els ulls"], correct: 0 },
          { type: "mcq", q: "Amb què olorem? 👃", options: ["El nas", "La boca", "Els peus"], correct: 0 },
          { type: "mcq", q: "Quants ulls tens?", options: ["2", "1", "4"], correct: 0 }
        ]
      },
      {
        id: "nat-3",
        title: "Les estacions de l'any",
        icon: "🍂",
        questions: [
          { type: "mcq", q: "A quina estació fa molta calor? ☀️", options: ["Estiu", "Hivern", "Tardor"], correct: 0 },
          { type: "mcq", q: "A quina estació neva? ❄️", options: ["Hivern", "Estiu", "Primavera"], correct: 0 },
          { type: "tf", q: "A la primavera surten les flors.", correct: true },
          { type: "mcq", q: "A quina estació cauen les fulles dels arbres? 🍂", options: ["Tardor", "Estiu", "Hivern"], correct: 0 },
          { type: "mcq", q: "Quantes estacions té l'any?", options: ["4", "2", "10"], correct: 0 },
          { type: "mcq", q: "Quina roba portem a l'hivern? 🧥", options: ["Abric", "Banyador", "Xancletes"], correct: 0 }
        ]
      }
    ]
  }
];
