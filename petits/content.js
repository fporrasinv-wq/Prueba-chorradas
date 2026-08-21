/* Contingut educatiu per a nens i nenes de 6 anys (1r de primària),
   nivell una mica més exigent: 4 opcions per pregunta (en lloc de 3),
   distractors més semblants a la resposta correcta, sumes i restes
   fins a 20, dobles/meitats, comprensió lectora breu i vocabulari
   una mica més ampli. Encara pensat per a qui just aprèn a llegir.

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
        title: "Nombres fins a 20",
        icon: "🔢",
        questions: [
          { type: "mcq", q: "Quin número ve just abans del 15?", options: ["14", "16", "13", "17"], correct: 0 },
          { type: "mcq", q: "Quin número és més gran?", options: ["17", "12", "Són iguals", "Cap dels dos"], correct: 0 },
          { type: "tf", q: "El número 20 té dues xifres.", correct: true },
          { type: "mcq", q: "Compta de 2 en 2: 2, 4, 6, __?", options: ["8", "7", "10", "9"], correct: 0 },
          { type: "fill", q: "Quants ous hi ha? 🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚", answers: ["12"] },
          { type: "mcq", q: "Quin signe fem servir quan un número és més gran que un altre?", options: [">", "+", "=", "-"], correct: 0 }
        ]
      },
      {
        id: "mat-2",
        title: "Sumes i restes fins a 20",
        icon: "➕",
        questions: [
          { type: "mcq", q: "8 + 5 = ?", options: ["13", "12", "14", "11"], correct: 0 },
          { type: "mcq", q: "12 - 4 = ?", options: ["8", "9", "7", "6"], correct: 0 },
          { type: "fill", q: "9 + 7 = ?", answers: ["16"] },
          { type: "mcq", q: "15 - 6 = ?", options: ["9", "8", "10", "7"], correct: 0 },
          { type: "tf", q: "10 + 10 = 20", correct: true },
          { type: "fill", q: "20 - 5 = ?", answers: ["15"] }
        ]
      },
      {
        id: "mat-3",
        title: "El doble i la meitat",
        icon: "✖️",
        questions: [
          { type: "mcq", q: "Quin és el doble de 4?", options: ["8", "6", "4", "10"], correct: 0 },
          { type: "mcq", q: "Quina és la meitat de 10?", options: ["5", "4", "6", "2"], correct: 0 },
          { type: "tf", q: "El doble de 3 és 6.", correct: true },
          { type: "mcq", q: "Quin és el doble de 6?", options: ["12", "10", "8", "14"], correct: 0 },
          { type: "mcq", q: "Quina és la meitat de 8?", options: ["4", "3", "5", "2"], correct: 0 },
          { type: "fill", q: "El doble de 5 és quant?", answers: ["10"] }
        ]
      },
      {
        id: "mat-4",
        title: "Problemes i mesures",
        icon: "⏰",
        questions: [
          { type: "mcq", q: "En Joan té 8 caramels i li'n regalen 5 més. Quants en té ara?", options: ["13", "12", "14", "11"], correct: 0 },
          { type: "mcq", q: "La Laia tenia 15 cromos i n'ha perdut 6. Quants li queden?", options: ["9", "8", "10", "7"], correct: 0 },
          { type: "mcq", q: "Quina hora marca un rellotge quan les dues agulles apunten al 12?", options: ["Les 12 en punt", "Les 6 en punt", "Les 3 en punt", "Les 9 en punt"], correct: 0 },
          { type: "tf", q: "Una setmana té 7 dies.", correct: true },
          { type: "mcq", q: "Quants mesos té un any?", options: ["12", "10", "6", "24"], correct: 0 },
          { type: "order", q: "Ordena aquests números de més petit a més gran.", tokens: ["3", "9", "14", "18"] }
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
        title: "Síl·labes i lletres",
        icon: "🔤",
        questions: [
          { type: "mcq", q: "Quantes síl·labes té la paraula «Pilota»?", options: ["3", "2", "4", "1"], correct: 0 },
          { type: "mcq", q: "Quina paraula comença amb consonant?", options: ["Taula", "Ocell", "Elefant", "Aranya"], correct: 0 },
          { type: "tf", q: "La paraula «Cotxe» té dues síl·labes.", correct: true },
          { type: "mcq", q: "Quina d'aquestes lletres és una vocal?", options: ["E", "T", "M", "S"], correct: 0 },
          { type: "mcq", q: "Quantes síl·labes té «Mariposa»?", options: ["4", "3", "5", "2"], correct: 0 },
          { type: "order", q: "Ordena les síl·labes per formar la paraula «Pilota».", tokens: ["Pi", "lo", "ta"] }
        ]
      },
      {
        id: "cat-2",
        title: "Plurals i paraules",
        icon: "📝",
        questions: [
          { type: "mcq", q: "Quin és el plural de «Casa»?", options: ["Cases", "Casa", "Casos", "Caseta"], correct: 0 },
          { type: "mcq", q: "Quin és el plural de «Flor»?", options: ["Flors", "Flores", "Flor", "Florns"], correct: 0 },
          { type: "tf", q: "El plural de «Llibre» és «Llibres».", correct: true },
          { type: "mcq", q: "Quin és el singular de «Gats»?", options: ["Gat", "Gata", "Gates", "Gat's"], correct: 0 },
          { type: "mcq", q: "Quina paraula és el contrari de «Gran»?", options: ["Petit", "Alt", "Llarg", "Fort"], correct: 0 },
          { type: "match", q: "Relaciona cada paraula amb la seva forma femenina.", pairs: [["Nen", "Nena"], ["Gat", "Gata"], ["Gos", "Gossa"], ["Avi", "Àvia"]] }
        ]
      },
      {
        id: "cat-3",
        title: "Comprensió lectora",
        icon: "📖",
        questions: [
          { type: "mcq", q: "Llegeix: «En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota.» Com es diu el gos d'en Pol?", options: ["Bolet", "Pol", "Pilota", "Parc"], correct: 0 },
          { type: "mcq", q: "Amb el mateix text d'abans: on van cada tarda en Pol i el seu gos?", options: ["Al parc", "A l'escola", "A la platja", "Al riu"], correct: 0 },
          { type: "tf", q: "Segons el text, en Pol té un gat.", correct: false },
          { type: "mcq", q: "Amb què juguen al parc en Pol i el seu gos?", options: ["Amb la pilota", "Amb un cotxe", "Amb un llibre", "Amb un ordinador"], correct: 0 },
          { type: "mcq", q: "Quina mida té el gos d'en Pol?", options: ["Petit", "Gran", "Gegant", "No se sap"], correct: 0 },
          { type: "tf", q: "En Pol i el seu gos van al parc cada tarda.", correct: true }
        ]
      },
      {
        id: "cat-4",
        title: "Rimes i categories",
        icon: "🎵",
        questions: [
          { type: "mcq", q: "Quina paraula NO és una fruita?", options: ["Cadira", "Poma", "Pera", "Plàtan"], correct: 0 },
          { type: "mcq", q: "Quina paraula rima amb «Pastís»?", options: ["Anís", "Cadira", "Taula", "Pilota"], correct: 0 },
          { type: "tf", q: "«Gos» i «Ós» rimen.", correct: true },
          { type: "mcq", q: "Quina paraula NO és un animal?", options: ["Cadira", "Gat", "Peix", "Ocell"], correct: 0 },
          { type: "mcq", q: "Quina paraula rima amb «Casa»?", options: ["Massa", "Cotxe", "Llibre", "Pilota"], correct: 0 },
          { type: "mcq", q: "Quina paraula comença amb la mateixa lletra que «Sol»?", options: ["Sabata", "Taula", "Cadira", "Ocell"], correct: 0 }
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
        title: "Sílabas y letras",
        icon: "🔠",
        questions: [
          { type: "mcq", q: "¿Cuántas sílabas tiene la palabra «Pelota»?", options: ["3", "2", "4", "1"], correct: 0 },
          { type: "mcq", q: "¿Qué palabra empieza con consonante?", options: ["Mesa", "Oso", "Elefante", "Araña"], correct: 0 },
          { type: "tf", q: "La palabra «Coche» tiene dos sílabas.", correct: true },
          { type: "mcq", q: "¿Cuál de estas letras es una vocal?", options: ["E", "T", "M", "S"], correct: 0 },
          { type: "mcq", q: "¿Cuántas sílabas tiene «Mariposa»?", options: ["4", "3", "5", "2"], correct: 0 },
          { type: "order", q: "Ordena las sílabas para formar la palabra «Pelota».", tokens: ["Pe", "lo", "ta"] }
        ]
      },
      {
        id: "cas-2",
        title: "Plurales y palabras",
        icon: "📗",
        questions: [
          { type: "mcq", q: "¿Cuál es el plural de «Casa»?", options: ["Casas", "Casa", "Casos", "Caseta"], correct: 0 },
          { type: "mcq", q: "¿Cuál es el plural de «Flor»?", options: ["Flores", "Flors", "Flor", "Florns"], correct: 0 },
          { type: "tf", q: "El plural de «Libro» es «Libros».", correct: true },
          { type: "mcq", q: "¿Cuál es el singular de «Gatos»?", options: ["Gato", "Gata", "Gatas", "Gato's"], correct: 0 },
          { type: "mcq", q: "¿Cuál es el contrario de «Grande»?", options: ["Pequeño", "Alto", "Largo", "Fuerte"], correct: 0 },
          { type: "match", q: "Relaciona cada palabra con su forma femenina.", pairs: [["Niño", "Niña"], ["Gato", "Gata"], ["Perro", "Perra"], ["Abuelo", "Abuela"]] }
        ]
      },
      {
        id: "cas-3",
        title: "Comprensión lectora",
        icon: "📘",
        questions: [
          { type: "mcq", q: "Lee: «Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio.» ¿Cómo se llama el pez de Ana?", options: ["Nemo", "Ana", "Colegio", "Naranja"], correct: 0 },
          { type: "mcq", q: "Con el mismo texto de antes: ¿de qué color es el pez?", options: ["Naranja", "Azul", "Verde", "Rojo"], correct: 0 },
          { type: "tf", q: "Según el texto, Ana le da de comer al pez cada mañana.", correct: true },
          { type: "mcq", q: "¿Cuándo le da de comer Ana al pez?", options: ["Antes de ir al colegio", "Por la noche", "Nunca", "Los domingos"], correct: 0 },
          { type: "mcq", q: "¿Qué animal tiene Ana?", options: ["Un pez", "Un perro", "Un gato", "Un pájaro"], correct: 0 },
          { type: "tf", q: "Según el texto, el pez de Ana es azul.", correct: false }
        ]
      },
      {
        id: "cas-4",
        title: "Rimas y categorías",
        icon: "🎨",
        questions: [
          { type: "mcq", q: "¿Qué palabra NO es una fruta?", options: ["Silla", "Manzana", "Pera", "Plátano"], correct: 0 },
          { type: "mcq", q: "¿Qué palabra rima con «Ratón»?", options: ["Camión", "Casa", "Mesa", "Silla"], correct: 0 },
          { type: "tf", q: "«Gato» y «Pato» riman.", correct: true },
          { type: "mcq", q: "¿Qué palabra NO es un animal?", options: ["Silla", "Gato", "Pez", "Pájaro"], correct: 0 },
          { type: "mcq", q: "¿Qué palabra rima con «Pan»?", options: ["Flan", "Mesa", "Libro", "Pelota"], correct: 0 },
          { type: "mcq", q: "¿Qué palabra empieza con la misma letra que «Sol»?", options: ["Silla", "Mesa", "Casa", "Pato"], correct: 0 }
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
        title: "Numbers 1-10",
        icon: "🔟",
        questions: [
          { type: "mcq", q: "How do you say «6» in English?", options: ["Six", "Seven", "Five", "Nine"], correct: 0 },
          { type: "mcq", q: "How do you say «9» in English?", options: ["Nine", "Eight", "Ten", "Six"], correct: 0 },
          { type: "tf", q: "«Ten» is number 10.", correct: true },
          { type: "mcq", q: "What number is «eight»?", options: ["8", "7", "9", "6"], correct: 0 },
          { type: "fill", q: "Write the number for «seven».", answers: ["7"] },
          { type: "order", q: "Order these numbers from smallest to biggest.", tokens: ["three", "six", "eight", "ten"] }
        ]
      },
      {
        id: "eng-2",
        title: "Family & body",
        icon: "👪",
        questions: [
          { type: "mcq", q: "How do you say «pare» in English?", options: ["Father", "Mother", "Brother", "Sister"], correct: 0 },
          { type: "mcq", q: "How do you say «mà» in English? ✋", options: ["Hand", "Foot", "Head", "Eye"], correct: 0 },
          { type: "tf", q: "«Head» means «cap».", correct: true },
          { type: "mcq", q: "How do you say «germana» in English?", options: ["Sister", "Brother", "Mother", "Father"], correct: 0 },
          { type: "mcq", q: "How do you say «peu» in English? 🦶", options: ["Foot", "Hand", "Head", "Ear"], correct: 0 },
          { type: "match", q: "Match each family word.", pairs: [["Mare", "Mother"], ["Pare", "Father"], ["Germà", "Brother"], ["Ull", "Eye"]] }
        ]
      },
      {
        id: "eng-3",
        title: "Food & animals",
        icon: "🍎",
        questions: [
          { type: "mcq", q: "How do you say «poma» in English? 🍎", options: ["Apple", "Bread", "Milk", "Fish"], correct: 0 },
          { type: "mcq", q: "How do you say «pa» in English? 🍞", options: ["Bread", "Apple", "Water", "Egg"], correct: 0 },
          { type: "tf", q: "«Milk» means «llet».", correct: true },
          { type: "mcq", q: "How do you say «cavall» in English? 🐴", options: ["Horse", "Cow", "Sheep", "Pig"], correct: 0 },
          { type: "mcq", q: "How do you say «porc» in English? 🐷", options: ["Pig", "Horse", "Cow", "Sheep"], correct: 0 },
          { type: "order", q: "Order the words to make a sentence.", tokens: ["I", "like", "apples"] }
        ]
      },
      {
        id: "eng-4",
        title: "Simple sentences",
        icon: "🙋",
        questions: [
          { type: "mcq", q: "Complete: «This ___ a dog.»", options: ["is", "are", "am", "be"], correct: 0 },
          { type: "mcq", q: "Complete: «These ___ cats.»", options: ["are", "is", "am", "be"], correct: 0 },
          { type: "tf", q: "«This is a book» is correct English.", correct: true },
          { type: "mcq", q: "Complete: «I ___ six years old.»", options: ["am", "is", "are", "be"], correct: 0 },
          { type: "fill", q: "Complete: «She ___ happy.»", answers: ["is"] },
          { type: "order", q: "Order the words to make a sentence.", tokens: ["He", "has", "got", "a", "cat"] }
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
        title: "La família",
        icon: "👨‍👩‍👧",
        questions: [
          { type: "mcq", q: "Com es diu el fill del teu germà?", options: ["Nebot", "Cosí", "Net", "Fillol"], correct: 0 },
          { type: "mcq", q: "On viuen normalment els avis?", options: ["A casa seva", "Al cotxe", "A l'escola", "Al bosc"], correct: 0 },
          { type: "tf", q: "Els cosins són fills dels teus oncles i ties.", correct: true },
          { type: "mcq", q: "Com es diu la filla dels teus pares que no ets tu?", options: ["Germana", "Cosina", "Neboda", "Tia"], correct: 0 },
          { type: "mcq", q: "Quin d'aquests NO forma part de la família?", options: ["El veí", "El pare", "La mare", "L'avi"], correct: 0 },
          { type: "mcq", q: "Qui sol ser més gran, l'avi o el nét?", options: ["L'avi", "El nét", "Són iguals", "Cap dels dos"], correct: 0 }
        ]
      },
      {
        id: "soc-2",
        title: "L'escola i les normes",
        icon: "🏫",
        questions: [
          { type: "mcq", q: "Què hem de fer quan algú parla a classe?", options: ["Escoltar en silenci", "Cridar", "Sortir corrents", "Jugar"], correct: 0 },
          { type: "mcq", q: "Qui ens ajuda si ens fem mal a l'escola?", options: ["El mestre o la mestra", "Un desconegut", "Ningú", "Un altre alumne sol"], correct: 0 },
          { type: "tf", q: "Hem de compartir les joguines amb els companys.", correct: true },
          { type: "mcq", q: "Què fem a la biblioteca de l'escola?", options: ["Llegir llibres en silenci", "Jugar a futbol", "Dormir", "Cuinar"], correct: 0 },
          { type: "mcq", q: "Com hem de demanar les coses?", options: ["Si us plau i gràcies", "Cridant", "Sense dir res", "Empenyent"], correct: 0 },
          { type: "mcq", q: "Què fem abans d'entrar a classe?", options: ["Fer una fila", "Córrer", "Amagar-nos", "Cridar"], correct: 0 }
        ]
      },
      {
        id: "soc-3",
        title: "El poble o la ciutat",
        icon: "🏘️",
        questions: [
          { type: "mcq", q: "On podem agafar llibres en préstec?", options: ["A la biblioteca", "Al forn", "A l'hospital", "Al riu"], correct: 0 },
          { type: "mcq", q: "Qui ens porta les cartes i els paquets a casa?", options: ["El carter o la cartera", "El metge", "El mestre", "El bomber"], correct: 0 },
          { type: "tf", q: "Els semàfors ens ajuden a creuar el carrer amb seguretat.", correct: true },
          { type: "mcq", q: "On comprem la carn i el peix?", options: ["Al mercat", "A la biblioteca", "A l'escola", "Al riu"], correct: 0 },
          { type: "mcq", q: "Qui ens ajuda a apagar un incendi?", options: ["Els bombers", "Els mestres", "Els forners", "Els jardiners"], correct: 0 },
          { type: "mcq", q: "Quin color té el semàfor quan hem d'esperar?", options: ["Vermell", "Verd", "Groc", "Blau"], correct: 0 }
        ]
      },
      {
        id: "soc-4",
        title: "Feines i oficis",
        icon: "💼",
        questions: [
          { type: "mcq", q: "Qui ens cuida les dents?", options: ["El dentista", "El bomber", "El forner", "El jardiner"], correct: 0 },
          { type: "mcq", q: "Qui fa el pa cada dia?", options: ["El forner o la fornera", "El dentista", "El bomber", "El jardiner"], correct: 0 },
          { type: "tf", q: "El metge o la metgessa ens cuida quan estem malalts.", correct: true },
          { type: "mcq", q: "Qui cuida les plantes i els jardins?", options: ["El jardiner o la jardinera", "El dentista", "El carter", "El forner"], correct: 0 },
          { type: "mcq", q: "Qui condueix l'autobús?", options: ["El conductor o la conductora", "El mestre", "El metge", "El forner"], correct: 0 },
          { type: "mcq", q: "Qui apaga els incendis?", options: ["Els bombers", "Els dentistes", "Els forners", "Els conductors"], correct: 0 }
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
        title: "Animals i les seves cries",
        icon: "🐣",
        questions: [
          { type: "mcq", q: "Com es diu la cria del gos?", options: ["Cadell", "Vedell", "Poltre", "Xai"], correct: 0 },
          { type: "mcq", q: "Com es diu la cria del gat?", options: ["Gatet", "Cadell", "Vedell", "Poltre"], correct: 0 },
          { type: "tf", q: "La cria de la vaca es diu vedell.", correct: true },
          { type: "mcq", q: "Com es diu la cria del cavall?", options: ["Poltre", "Xai", "Cadell", "Gatet"], correct: 0 },
          { type: "mcq", q: "Com es diu la cria de l'ovella?", options: ["Xai", "Poltre", "Vedell", "Cadell"], correct: 0 },
          { type: "match", q: "Relaciona cada animal amb la seva cria.", pairs: [["Gos", "Cadell"], ["Gat", "Gatet"], ["Vaca", "Vedell"], ["Cavall", "Poltre"]] }
        ]
      },
      {
        id: "nat-2",
        title: "On viuen els animals",
        icon: "🏞️",
        questions: [
          { type: "mcq", q: "On viu el peix?", options: ["A l'aigua", "A l'arbre", "Sota terra", "A l'aire"], correct: 0 },
          { type: "mcq", q: "On viu el conill?", options: ["En una cova sota terra", "A l'aigua", "A l'arbre", "Al núvol"], correct: 0 },
          { type: "tf", q: "L'ocell fa el niu als arbres.", correct: true },
          { type: "mcq", q: "On viu l'ós polar?", options: ["A llocs molt freds", "A llocs molt calents", "Al desert", "A l'aigua sempre"], correct: 0 },
          { type: "mcq", q: "On viu el camell?", options: ["Al desert", "A l'aigua", "Als llocs freds", "Al bosc humit"], correct: 0 },
          { type: "mcq", q: "On viuen els peixos del mar?", options: ["A l'aigua salada", "A l'aigua dolça", "A la terra", "A l'aire"], correct: 0 }
        ]
      },
      {
        id: "nat-3",
        title: "El cicle de vida",
        icon: "🐛",
        questions: [
          { type: "mcq", q: "D'on surt un pollet?", options: ["D'un ou", "D'una llavor", "D'una fulla", "D'una arrel"], correct: 0 },
          { type: "mcq", q: "Què necessita una llavor per créixer?", options: ["Aigua, llum i terra", "Només fosca", "Res", "Sorra seca"], correct: 0 },
          { type: "tf", q: "Una granota comença sent capgròs.", correct: true },
          { type: "mcq", q: "Què es converteix en una papallona?", options: ["Una eruga", "Un peix", "Un ocell", "Una granota"], correct: 0 },
          { type: "mcq", q: "Quin és l'ordre correcte de creixement d'una planta?", options: ["Llavor → Planta → Flor", "Flor → Llavor → Planta", "Planta → Flor → Llavor", "Flor → Planta → Llavor"], correct: 0 },
          { type: "tf", q: "Els humans neixen, creixen, es fan grans i envelleixen.", correct: true }
        ]
      },
      {
        id: "nat-4",
        title: "El temps i les estacions",
        icon: "🌡️",
        questions: [
          { type: "mcq", q: "Quin instrument mesura la temperatura?", options: ["El termòmetre", "El rellotge", "La balança", "El regle"], correct: 0 },
          { type: "mcq", q: "A quina estació els arbres es queden sense fulles?", options: ["Tardor", "Estiu", "Primavera", "Totes"], correct: 0 },
          { type: "tf", q: "A l'hivern sol fer més fred que a l'estiu.", correct: true },
          { type: "mcq", q: "Què fa que es formin els núvols?", options: ["L'aigua que s'evapora", "El foc", "La terra", "Els arbres"], correct: 0 },
          { type: "mcq", q: "Quina estació ve just abans de l'estiu?", options: ["Primavera", "Hivern", "Tardor", "Cap"], correct: 0 },
          { type: "mcq", q: "Quan és més probable que nevi?", options: ["A l'hivern", "A l'estiu", "A la primavera", "Mai"], correct: 0 }
        ]
      }
    ]
  }
];
