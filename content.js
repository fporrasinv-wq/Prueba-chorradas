/* Contingut educatiu per a 4t de primària, basat en el currículum
   de la Generalitat de Catalunya (Matemàtiques, Llengua catalana,
   Llengua castellana, Anglès, Ciències socials i Ciències naturals).

   Tipus de pregunta suportats:
   - mcq:   { q, options:[...], correct: index }
   - tf:    { q, correct: true/false }
   - fill:  { q, answers:[...] }               resposta escrita
   - order: { q, tokens:[...] }                ordenar paraules/elements
   - match: { q, pairs:[[esquerra,dreta],...] } relacionar parelles
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
        title: "Nombres fins a 999.999",
        icon: "🔢",
        questions: [
          { type: "mcq", q: "Quin és el valor posicional del 7 en el nombre 47.208?", options: ["Unitats de miler", "Centenes", "Desenes de miler", "Unitats"], correct: 0 },
          { type: "mcq", q: "Com s'escriu amb xifres «trenta-quatre mil dos-cents setze»?", options: ["34.216", "34.126", "3.416", "340.216"], correct: 0 },
          { type: "tf", q: "El nombre 12.345 és més gran que 12.435.", correct: false },
          { type: "mcq", q: "Quin nombre és el més gran?", options: ["45.982", "45.928", "45.899", "45.980"], correct: 0 },
          { type: "fill", q: "Escriu amb xifres el nombre «vuit mil noranta».", answers: ["8090"] },
          { type: "mcq", q: "Arrodoneix 4.678 a la centena més propera.", options: ["4.700", "4.600", "4.680", "5.000"], correct: 0 },
          { type: "mcq", q: "Quantes desenes hi ha en 350?", options: ["35", "350", "3", "5"], correct: 0 },
          { type: "match", q: "Relaciona cada nombre escrit amb lletres amb les seves xifres.", pairs: [["Quatre mil", "4.000"], ["Deu mil cinc-cents", "10.500"], ["Dos-cents tres", "203"], ["Setanta mil", "70.000"]] }
        ]
      },
      {
        id: "mat-2",
        title: "Suma i resta",
        icon: "➕",
        questions: [
          { type: "fill", q: "4.325 + 1.876 = ?", answers: ["6201"] },
          { type: "fill", q: "9.004 − 2.568 = ?", answers: ["6436"] },
          { type: "mcq", q: "En Marc té 245 cromos i en compra 178 més. Quants cromos té ara?", options: ["423", "413", "433", "313"], correct: 0 },
          { type: "mcq", q: "Una botiga tenia 600 € i ven productes per 235 € i gasta 90 € en lloguer. Quants diners li queden?", options: ["275 €", "365 €", "245 €", "315 €"], correct: 0 },
          { type: "tf", q: "La resta és l'operació inversa de la suma.", correct: true },
          { type: "mcq", q: "Quin és el resultat de 999 + 1?", options: ["1.000", "990", "1.090", "900"], correct: 0 },
          { type: "fill", q: "7.200 − 3.450 = ?", answers: ["3750"] },
          { type: "order", q: "Ordena aquests nombres de més petit a més gran.", tokens: ["120", "450", "980", "1.200"] }
        ]
      },
      {
        id: "mat-3",
        title: "Multiplicació",
        icon: "✖️",
        questions: [
          { type: "mcq", q: "7 × 8 = ?", options: ["56", "54", "64", "48"], correct: 0 },
          { type: "mcq", q: "9 × 6 = ?", options: ["54", "45", "56", "63"], correct: 0 },
          { type: "fill", q: "124 × 3 = ?", answers: ["372"] },
          { type: "mcq", q: "En una caixa hi ha 12 pomes. Quantes pomes hi ha en 15 caixes?", options: ["180", "170", "190", "160"], correct: 0 },
          { type: "tf", q: "Multiplicar per 10 és afegir un zero al final del nombre.", correct: true },
          { type: "fill", q: "45 × 20 = ?", answers: ["900"] },
          { type: "mcq", q: "Quin és el resultat de 8 × 0?", options: ["0", "8", "80", "1"], correct: 0 },
          { type: "match", q: "Relaciona cada multiplicació amb el seu resultat.", pairs: [["6 × 7", "42"], ["8 × 9", "72"], ["5 × 5", "25"], ["4 × 6", "24"]] }
        ]
      },
      {
        id: "mat-4",
        title: "Divisió",
        icon: "➗",
        questions: [
          { type: "fill", q: "84 : 4 = ?", answers: ["21"] },
          { type: "mcq", q: "45 : 9 = ?", options: ["5", "6", "4", "9"], correct: 0 },
          { type: "mcq", q: "Reparteixo 72 caramels entre 8 nens i nenes. Quants en toquen a cadascú?", options: ["9", "8", "7", "10"], correct: 0 },
          { type: "tf", q: "En una divisió, el residu ha de ser sempre més petit que el divisor.", correct: true },
          { type: "fill", q: "96 : 6 = ?", answers: ["16"] },
          { type: "mcq", q: "Quin és el divisor a l'operació 63 : 7 = 9?", options: ["7", "9", "63", "0"], correct: 0 },
          { type: "mcq", q: "100 : 5 = ?", options: ["20", "25", "15", "10"], correct: 0 },
          { type: "match", q: "Relaciona cada divisió amb el seu quocient.", pairs: [["36 : 6", "6"], ["49 : 7", "7"], ["81 : 9", "9"], ["64 : 8", "8"]] }
        ]
      },
      {
        id: "mat-5",
        title: "Fraccions i decimals",
        icon: "🍕",
        questions: [
          { type: "mcq", q: "Quina fracció representa la meitat d'un pastís?", options: ["1/2", "1/4", "2/1", "1/3"], correct: 0 },
          { type: "mcq", q: "En una pizza tallada en 8 trossos, si en menges 3, quina fracció has menjat?", options: ["3/8", "8/3", "3/5", "5/8"], correct: 0 },
          { type: "tf", q: "0,5 és el mateix que 1/2.", correct: true },
          { type: "mcq", q: "Quin nombre decimal representa «tres unitats i quatre dècimes»?", options: ["3,4", "3,04", "34", "0,34"], correct: 0 },
          { type: "mcq", q: "Quina fracció és més gran?", options: ["1/3", "1/5", "Són iguals", "Cap de les dues"], correct: 0 },
          { type: "fill", q: "Escriu en xifres «cinc dècimes» com a nombre decimal.", answers: ["0,5", "0.5"] },
          { type: "mcq", q: "2/4 és equivalent a...", options: ["1/2", "1/4", "2/8", "3/4"], correct: 0 },
          { type: "match", q: "Relaciona cada fracció amb el seu decimal.", pairs: [["1/2", "0,5"], ["1/4", "0,25"], ["3/4", "0,75"], ["1/10", "0,1"]] }
        ]
      },
      {
        id: "mat-6",
        title: "Mesures i geometria",
        icon: "📐",
        questions: [
          { type: "mcq", q: "Quants centímetres té un metre?", options: ["100", "10", "1.000", "50"], correct: 0 },
          { type: "mcq", q: "Quin instrument es fa servir per mesurar angles?", options: ["El transportador d'angles", "El regle", "La balança", "El rellotge"], correct: 0 },
          { type: "fill", q: "Calcula el perímetre d'un quadrat de costat 5 cm (en cm).", answers: ["20"] },
          { type: "mcq", q: "Quants grams té un quilogram?", options: ["1.000", "100", "10", "10.000"], correct: 0 },
          { type: "tf", q: "Un angle recte mesura 90°.", correct: true },
          { type: "mcq", q: "Quina figura té tres costats?", options: ["El triangle", "El quadrat", "El pentàgon", "L'hexàgon"], correct: 0 },
          { type: "fill", q: "Calcula l'àrea d'un rectangle de 4 cm de base i 3 cm d'alçada (en cm²).", answers: ["12"] },
          { type: "order", q: "Ordena aquestes longituds de la més petita a la més gran.", tokens: ["5 mm", "5 cm", "5 dm", "5 m"] }
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
        title: "Ortografia: dígrafs",
        icon: "✏️",
        questions: [
          { type: "mcq", q: "Quina paraula porta l·l (ela geminada)?", options: ["novel·la", "cavall", "milió", "carrer"], correct: 0 },
          { type: "mcq", q: "Com s'escriu correctament el mes que ve després de l'abril?", options: ["maig", "matx", "maitx", "mag"], correct: 0 },
          { type: "tf", q: "La paraula «any» s'escriu amb ny.", correct: true },
          { type: "mcq", q: "Quina paraula està ben escrita?", options: ["cel·la", "cela", "cel.la", "cella"], correct: 0 },
          { type: "mcq", q: "Com sona el dígraf l·l?", options: ["Es pronuncien les dues eles", "Sona com una ela sola", "Sona com una ena", "No es pronuncia"], correct: 0 },
          { type: "mcq", q: "Quina paraula NO porta erra doble (rr)?", options: ["cotxe", "carro", "terra", "gorra"], correct: 0 },
          { type: "mcq", q: "Quina paraula porta ny?", options: ["canya", "cana", "cania", "cañia"], correct: 0 },
          { type: "order", q: "Ordena les paraules per formar una frase.", tokens: ["El", "gat", "dorm", "a", "la", "cadira"] }
        ]
      },
      {
        id: "cat-2",
        title: "Accentuació i síl·labes",
        icon: "🔤",
        questions: [
          { type: "mcq", q: "Quina paraula porta accent obert (è)?", options: ["cafè", "més", "això", "número"], correct: 0 },
          { type: "mcq", q: "Quina d'aquestes paraules és aguda (l'accent tònic va a l'última síl·laba)?", options: ["camió", "taula", "cadira", "arbre"], correct: 0 },
          { type: "tf", q: "Totes les paraules catalanes porten accent gràfic.", correct: false },
          { type: "mcq", q: "Quina és la síl·laba tònica de la paraula «pàgina»?", options: ["PÀ (primera)", "GI (segona)", "NA (tercera)"], correct: 0 },
          { type: "mcq", q: "Quantes síl·labes té la paraula «biblioteca»?", options: ["5", "4", "6", "3"], correct: 0 },
          { type: "mcq", q: "Quina paraula és plana (l'accent va a la penúltima síl·laba)?", options: ["taula", "camió", "sofà", "ordinador"], correct: 0 },
          { type: "mcq", q: "Quina paraula porta accent diacrític per diferenciar-se d'una altra amb el mateix so?", options: ["món", "casa", "llibre", "cadira"], correct: 0 },
          { type: "match", q: "Relaciona cada paraula amb el nombre de síl·labes que té.", pairs: [["Sol", "1"], ["Taula", "2"], ["Ordinador", "4"], ["Biblioteca", "5"]] }
        ]
      },
      {
        id: "cat-3",
        title: "Gramàtica: nom, adjectiu i verb",
        icon: "📝",
        questions: [
          { type: "mcq", q: "Quina paraula és un nom (substantiu)?", options: ["gos", "córrer", "ràpid", "molt"], correct: 0 },
          { type: "mcq", q: "Quina paraula és un adjectiu?", options: ["bonic", "casa", "cantar", "amb"], correct: 0 },
          { type: "mcq", q: "A la frase «El gat negre dorm», quina paraula és el verb?", options: ["dorm", "gat", "negre", "el"], correct: 0 },
          { type: "mcq", q: "Quin determinant acompanya un nom femení plural?", options: ["les", "el", "els", "un"], correct: 0 },
          { type: "tf", q: "L'adjectiu concorda en gènere i nombre amb el nom.", correct: true },
          { type: "mcq", q: "Quin és el plural de «flor»?", options: ["flors", "flores", "flor", "florns"], correct: 0 },
          { type: "mcq", q: "Quina paraula és un article?", options: ["la", "casa", "gran", "córrer"], correct: 0 },
          { type: "order", q: "Ordena les paraules per formar una frase.", tokens: ["La", "nena", "llegeix", "un", "conte"] }
        ]
      },
      {
        id: "cat-4",
        title: "Sinònims i antònims",
        icon: "🔄",
        questions: [
          { type: "mcq", q: "Quin és un sinònim de «content»?", options: ["alegre", "trist", "cansat", "enfadat"], correct: 0 },
          { type: "mcq", q: "Quin és l'antònim de «gran»?", options: ["petit", "alt", "fort", "ample"], correct: 0 },
          { type: "mcq", q: "Quin és un sinònim de «ràpid»?", options: ["veloç", "lent", "petit", "fosc"], correct: 0 },
          { type: "mcq", q: "Quin és l'antònim de «dia»?", options: ["nit", "sol", "matí", "tarda"], correct: 0 },
          { type: "mcq", q: "Quin és un sinònim de «bonic»?", options: ["maco", "lleig", "vell", "petit"], correct: 0 },
          { type: "tf", q: "«Fosc» i «clar» són antònims.", correct: true },
          { type: "mcq", q: "Quin és l'antònim d'«obrir»?", options: ["tancar", "entrar", "sortir", "pujar"], correct: 0 },
          { type: "match", q: "Relaciona cada paraula amb el seu sinònim.", pairs: [["Content", "Alegre"], ["Ràpid", "Veloç"], ["Bonic", "Maco"], ["Gran", "Enorme"]] }
        ]
      },
      {
        id: "cat-5",
        title: "Comprensió i puntuació",
        icon: "📖",
        questions: [
          { type: "mcq", q: "Quin signe de puntuació es fa servir al final d'una pregunta?", options: ["?", ".", ",", ";"], correct: 0 },
          { type: "mcq", q: "Quin signe s'utilitza per separar elements d'una llista dins una frase?", options: ["la coma (,)", "el punt (.)", "l'interrogant (?)", "el guió (-)"], correct: 0 },
          { type: "tf", q: "Un punt i final (.) indica que la frase ha acabat.", correct: true },
          { type: "mcq", q: "Quin signe s'utilitza al final d'una frase exclamativa?", options: ["!", "?", ".", ":"], correct: 0 },
          { type: "mcq", q: "Quina és la funció dels dos punts (:) abans d'una llista?", options: ["Introduir una enumeració", "Acabar la frase", "Fer una pregunta", "Separar paràgrafs"], correct: 0 },
          { type: "mcq", q: "On has de posar majúscula sempre?", options: ["A l'inici de frase", "Al mig de la paraula", "Al final de la frase", "Mai"], correct: 0 },
          { type: "mcq", q: "Quin signe indica que algú parla en un diàleg?", options: ["el guió (—)", "la coma (,)", "l'interrogant (?)", "el punt (.)"], correct: 0 },
          { type: "order", q: "Ordena les paraules per formar una frase.", tokens: ["El", "meu", "gos", "es", "diu", "Rex"] }
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
        title: "Ortografía: b, v y h",
        icon: "✒️",
        questions: [
          { type: "mcq", q: "¿Cómo se escribe correctamente?", options: ["árbol", "árvol", "albol", "álbol"], correct: 0 },
          { type: "mcq", q: "¿Qué letra es muda al principio de «huevo»?", options: ["la h", "la u", "la e", "la v"], correct: 0 },
          { type: "tf", q: "La palabra «jirafa» se escribe con g.", correct: false },
          { type: "mcq", q: "¿Cuál de estas palabras está bien escrita?", options: ["coger", "cojer", "coyer", "cojel"], correct: 0 },
          { type: "fill", q: "Completa: «El pájaro vuela por el ___.»", answers: ["cielo"] },
          { type: "mcq", q: "¿Cuál de estas palabras se escribe con v?", options: ["ventana", "bonito", "burro", "abrigo"], correct: 0 },
          { type: "order", q: "Ordena las palabras para formar una frase.", tokens: ["El", "perro", "ladra", "fuerte"] },
          { type: "match", q: "Relaciona cada palabra en singular con su plural.", pairs: [["Flor", "Flores"], ["Lápiz", "Lápices"], ["Pez", "Peces"], ["Luz", "Luces"]] }
        ]
      },
      {
        id: "cas-2",
        title: "Gramática: sustantivo, adjetivo y verbo",
        icon: "📗",
        questions: [
          { type: "mcq", q: "¿Cuál de estas palabras es un sustantivo?", options: ["perro", "correr", "bonito", "con"], correct: 0 },
          { type: "mcq", q: "¿Cuál de estas palabras es un adjetivo?", options: ["alto", "casa", "comer", "muy"], correct: 0 },
          { type: "mcq", q: "En la frase «El niño come manzanas», ¿cuál es el verbo?", options: ["come", "niño", "manzanas", "el"], correct: 0 },
          { type: "tf", q: "El adjetivo concuerda en género y número con el sustantivo.", correct: true },
          { type: "fill", q: "Escribe el plural de «flor».", answers: ["flores"] },
          { type: "mcq", q: "¿Cuál de estas palabras es un artículo?", options: ["la", "casa", "gran", "correr"], correct: 0 },
          { type: "order", q: "Ordena las palabras para formar una frase.", tokens: ["La", "gata", "negra", "duerme"] },
          { type: "match", q: "Relaciona cada palabra con su categoría gramatical.", pairs: [["Casa", "Sustantivo"], ["Bonito", "Adjetivo"], ["Saltar", "Verbo"], ["Rápidamente", "Adverbio"]] }
        ]
      },
      {
        id: "cas-3",
        title: "Acentuación: agudas, llanas y esdrújulas",
        icon: "🔠",
        questions: [
          { type: "mcq", q: "¿Cómo se llaman las palabras que llevan el acento en la última sílaba?", options: ["agudas", "llanas", "esdrújulas", "sobresdrújulas"], correct: 0 },
          { type: "mcq", q: "¿Cuál de estas palabras es esdrújula?", options: ["página", "camión", "pared", "reloj"], correct: 0 },
          { type: "tf", q: "La palabra «árbol» es llana (grave).", correct: true },
          { type: "mcq", q: "¿Cuántas sílabas tiene la palabra «mariposa»?", options: ["4", "3", "5", "2"], correct: 0 },
          { type: "fill", q: "¿Cuántas sílabas tiene la palabra «sol»? Escribe el número.", answers: ["1"] },
          { type: "mcq", q: "¿Cuál de estas palabras es aguda?", options: ["camión", "mesa", "música", "lápiz"], correct: 0 },
          { type: "order", q: "Ordena estas palabras de menos a más sílabas.", tokens: ["sol", "casa", "ventana", "mariposa"] },
          { type: "match", q: "Relaciona cada palabra con su tipo de acentuación.", pairs: [["Camión", "Aguda"], ["Mesa", "Llana"], ["Música", "Esdrújula"]] }
        ]
      },
      {
        id: "cas-4",
        title: "Sinónimos y antónimos",
        icon: "🔀",
        questions: [
          { type: "mcq", q: "¿Cuál es un sinónimo de «contento»?", options: ["alegre", "triste", "cansado", "enfadado"], correct: 0 },
          { type: "mcq", q: "¿Cuál es el antónimo de «grande»?", options: ["pequeño", "alto", "fuerte", "ancho"], correct: 0 },
          { type: "mcq", q: "¿Cuál es un sinónimo de «rápido»?", options: ["veloz", "lento", "pequeño", "oscuro"], correct: 0 },
          { type: "tf", q: "«Oscuro» y «claro» son antónimos.", correct: true },
          { type: "fill", q: "Escribe un antónimo de «abrir».", answers: ["cerrar"] },
          { type: "mcq", q: "¿Cuál es el antónimo de «subir»?", options: ["bajar", "correr", "saltar", "andar"], correct: 0 },
          { type: "order", q: "Ordena las palabras para formar una frase.", tokens: ["El", "sol", "brilla", "mucho"] },
          { type: "match", q: "Relaciona cada palabra con su sinónimo.", pairs: [["Bonito", "Hermoso"], ["Feliz", "Contento"], ["Veloz", "Rápido"], ["Enorme", "Grande"]] }
        ]
      },
      {
        id: "cas-5",
        title: "Comprensión y puntuación",
        icon: "❓",
        questions: [
          { type: "mcq", q: "¿Qué signo se usa al final de una pregunta?", options: ["?", "·", ",", ";"], correct: 0 },
          { type: "mcq", q: "¿Qué signo se usa al final de una exclamación?", options: ["!", "?", ".", ":"], correct: 0 },
          { type: "tf", q: "En español, las preguntas llevan signo de interrogación al principio y al final.", correct: true },
          { type: "mcq", q: "¿Qué se usa para separar los elementos de una lista?", options: ["la coma", "el punto", "el guion", "los dos puntos"], correct: 0 },
          { type: "fill", q: "¿Con qué tipo de letra se escribe siempre el principio de una frase?", answers: ["mayuscula", "mayúscula"] },
          { type: "mcq", q: "¿Qué signos rodean una pregunta en español?", options: ["¿ y ?", "¡ y !", ": y ;", "( y )"], correct: 0 },
          { type: "order", q: "Ordena las palabras para formar una frase.", tokens: ["Mi", "perro", "se", "llama", "Rex"] },
          { type: "match", q: "Relaciona cada signo con su función.", pairs: [["?", "Pregunta"], ["!", "Exclamación"], [",", "Separar elementos"], [".", "Final de frase"]] }
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
        title: "Greetings & colours",
        icon: "👋",
        questions: [
          { type: "mcq", q: "How do you say «hola» in English?", options: ["Hello", "Goodbye", "Please", "Thanks"], correct: 0 },
          { type: "mcq", q: "What colour is the sky?", options: ["Blue", "Red", "Green", "Black"], correct: 0 },
          { type: "tf", q: "«Goodbye» means «adéu».", correct: true },
          { type: "mcq", q: "What colour is a banana?", options: ["Yellow", "Purple", "Blue", "Grey"], correct: 0 },
          { type: "fill", q: "Translate to English: «vermell»", answers: ["red"] },
          { type: "mcq", q: "How do you say «si us plau» in English?", options: ["Please", "Sorry", "Thanks", "Hello"], correct: 0 },
          { type: "order", q: "Order the words to make a sentence.", tokens: ["My", "name", "is", "Anna"] },
          { type: "match", q: "Match each Catalan colour with its English word.", pairs: [["Verd", "Green"], ["Groc", "Yellow"], ["Vermell", "Red"], ["Blau", "Blue"]] }
        ]
      },
      {
        id: "eng-2",
        title: "Numbers 1-20",
        icon: "🔟",
        questions: [
          { type: "mcq", q: "How do you say «set» in English?", options: ["Seven", "Six", "Eight", "Five"], correct: 0 },
          { type: "mcq", q: "What number is «twelve»?", options: ["12", "11", "13", "20"], correct: 0 },
          { type: "tf", q: "«Ten» is number 10.", correct: true },
          { type: "mcq", q: "How do you say «quinze» in English?", options: ["Fifteen", "Fourteen", "Fifty", "Sixteen"], correct: 0 },
          { type: "fill", q: "Write the number for «three».", answers: ["3"] },
          { type: "mcq", q: "How do you say «vint» in English?", options: ["Twenty", "Twelve", "Ten", "Two"], correct: 0 },
          { type: "order", q: "Order these numbers from smallest to biggest.", tokens: ["two", "five", "nine", "twelve"] },
          { type: "match", q: "Match each number with its word.", pairs: [["4", "Four"], ["8", "Eight"], ["10", "Ten"], ["20", "Twenty"]] }
        ]
      },
      {
        id: "eng-3",
        title: "Animals & family",
        icon: "🐶",
        questions: [
          { type: "mcq", q: "How do you say «gos» in English?", options: ["Dog", "Cat", "Bird", "Fish"], correct: 0 },
          { type: "mcq", q: "What is «mare» in English?", options: ["Mother", "Father", "Sister", "Brother"], correct: 0 },
          { type: "tf", q: "«Cat» means «gat».", correct: true },
          { type: "mcq", q: "How do you say «germà» in English?", options: ["Brother", "Sister", "Mother", "Father"], correct: 0 },
          { type: "fill", q: "Translate to English: «peix»", answers: ["fish"] },
          { type: "mcq", q: "How do you say «ocell» in English?", options: ["Bird", "Fish", "Dog", "Cat"], correct: 0 },
          { type: "order", q: "Order the words to make a sentence.", tokens: ["I", "have", "got", "a", "dog"] },
          { type: "match", q: "Match each family member.", pairs: [["Pare", "Father"], ["Germana", "Sister"], ["Avi", "Grandfather"], ["Fill", "Son"]] }
        ]
      },
      {
        id: "eng-4",
        title: "Days & classroom objects",
        icon: "🎒",
        questions: [
          { type: "mcq", q: "What day comes after «Monday»?", options: ["Tuesday", "Wednesday", "Sunday", "Friday"], correct: 0 },
          { type: "mcq", q: "How do you say «llibre» in English?", options: ["Book", "Pencil", "Table", "Chair"], correct: 0 },
          { type: "tf", q: "«Sunday» is a day of the week.", correct: true },
          { type: "mcq", q: "How do you say «cadira» in English?", options: ["Chair", "Table", "Door", "Window"], correct: 0 },
          { type: "fill", q: "Translate to English: «llapis»", answers: ["pencil"] },
          { type: "mcq", q: "How do you say «taula» in English?", options: ["Table", "Chair", "Book", "Door"], correct: 0 },
          { type: "order", q: "Order the days of the week.", tokens: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
          { type: "match", q: "Match each object with its Catalan word.", pairs: [["Book", "Llibre"], ["Pencil", "Llapis"], ["Table", "Taula"], ["Door", "Porta"]] }
        ]
      },
      {
        id: "eng-5",
        title: "The verb «to be»",
        icon: "🙋",
        questions: [
          { type: "mcq", q: "Complete: «I ___ a student.»", options: ["am", "is", "are", "be"], correct: 0 },
          { type: "mcq", q: "Complete: «She ___ happy.»", options: ["is", "am", "are", "be"], correct: 0 },
          { type: "tf", q: "«They are» is correct for a plural subject.", correct: true },
          { type: "mcq", q: "Complete: «We ___ friends.»", options: ["are", "is", "am", "be"], correct: 0 },
          { type: "fill", q: "Complete: «You ___ tall.»", answers: ["are"] },
          { type: "mcq", q: "Complete: «It ___ a big dog.»", options: ["is", "am", "are", "be"], correct: 0 },
          { type: "order", q: "Order the words to make a sentence.", tokens: ["He", "is", "my", "friend"] },
          { type: "match", q: "Match each pronoun with its form of «to be».", pairs: [["I", "am"], ["He", "is"], ["You", "are"]] }
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
        title: "El relleu de Catalunya",
        icon: "⛰️",
        questions: [
          { type: "mcq", q: "Quina serralada forma la frontera nord de Catalunya?", options: ["els Pirineus", "la Serralada Litoral", "la Serralada Prelitoral", "els Alps"], correct: 0 },
          { type: "mcq", q: "Quina depressió se situa al centre de Catalunya, entre els Pirineus i les serralades costaneres?", options: ["la Depressió Central", "la Depressió Litoral", "la Serralada Litoral", "el Pla de Lleida"], correct: 0 },
          { type: "mcq", q: "Quina és la muntanya més alta de Catalunya?", options: ["la Pica d'Estats", "el Montseny", "Montserrat", "el Puigmal"], correct: 0 },
          { type: "tf", q: "Catalunya té costa al mar Mediterrani.", correct: true },
          { type: "mcq", q: "Com es diuen les muntanyes properes a la costa, entre el mar i la Depressió Central?", options: ["la Serralada Litoral i la Prelitoral", "els Pirineus", "els Pirineus Orientals", "la Serralada Cantàbrica"], correct: 0 },
          { type: "mcq", q: "Montserrat és...", options: ["una muntanya emblemàtica de Catalunya", "un riu", "una comarca", "una platja"], correct: 0 },
          { type: "mcq", q: "Quin tipus de costa predomina a la Costa Brava?", options: ["platges i cales", "grans glaceres", "dunes de desert", "volcans actius"], correct: 0 },
          { type: "match", q: "Relaciona cada element del relleu amb la seva descripció.", pairs: [["Pica d'Estats", "Muntanya més alta"], ["Montserrat", "Muntanya emblemàtica"], ["Pirineus", "Frontera nord"], ["Costa Brava", "Costa amb cales"]] }
        ]
      },
      {
        id: "soc-2",
        title: "El clima i les aigües",
        icon: "🌦️",
        questions: [
          { type: "mcq", q: "Quin és el riu més llarg que passa per Catalunya?", options: ["l'Ebre", "el Ter", "el Llobregat", "el Segre"], correct: 0 },
          { type: "mcq", q: "Quin clima predomina a la costa catalana?", options: ["el clima mediterrani", "el clima polar", "el clima tropical", "el clima desèrtic"], correct: 0 },
          { type: "tf", q: "Als Pirineus, a l'hivern, sol nevar.", correct: true },
          { type: "mcq", q: "Quins rius passen per Barcelona?", options: ["el Llobregat i el Besòs", "el Segre i el Cinca", "el Ter i el Fluvià", "l'Ebre i el Sió"], correct: 0 },
          { type: "mcq", q: "Com es diuen els llacs d'origen glacial que trobem als Pirineus?", options: ["estanys", "aiguamolls", "deltes", "embassaments"], correct: 0 },
          { type: "mcq", q: "On es troba el delta de l'Ebre?", options: ["a la desembocadura del riu Ebre, al sud de Catalunya", "als Pirineus", "a Barcelona ciutat", "al Maresme"], correct: 0 },
          { type: "mcq", q: "A l'estiu, el clima mediterrani sol ser...", options: ["càlid i sec", "fred i plujós", "nevat", "molt humit tot l'any"], correct: 0 },
          { type: "match", q: "Relaciona cada paraula amb la seva definició.", pairs: [["Ebre", "Riu més llarg"], ["Besòs", "Passa per Barcelona"], ["Delta", "Desembocadura d'un riu"], ["Estany", "Llac d'origen glacial"]] }
        ]
      },
      {
        id: "soc-3",
        title: "La població i els municipis",
        icon: "🏙️",
        questions: [
          { type: "mcq", q: "Quina és la capital de Catalunya?", options: ["Barcelona", "Girona", "Lleida", "Tarragona"], correct: 0 },
          { type: "mcq", q: "Com s'anomena el conjunt de persones que viuen en un mateix territori?", options: ["la població", "el municipi", "la comarca", "el govern"], correct: 0 },
          { type: "tf", q: "Un municipi el governa l'ajuntament, dirigit per l'alcalde o alcaldessa.", correct: true },
          { type: "mcq", q: "Quines són les quatre capitals de província de Catalunya?", options: ["Barcelona, Girona, Lleida i Tarragona", "Barcelona, Reus, Sabadell i Mataró", "Girona, Figueres, Vic i Manresa", "Lleida, Balaguer, Tremp i Sort"], correct: 0 },
          { type: "mcq", q: "Com es diu el registre on s'inscriuen els habitants d'un municipi?", options: ["el padró municipal", "el DNI", "el mapa", "el cens escolar"], correct: 0 },
          { type: "mcq", q: "Quina és la ciutat més poblada de Catalunya?", options: ["Barcelona", "Girona", "Tarragona", "Lleida"], correct: 0 },
          { type: "mcq", q: "Qui governa un ajuntament?", options: ["l'alcalde o alcaldessa i els regidors", "el rei", "el mestre", "el president de l'Estat"], correct: 0 },
          { type: "match", q: "Relaciona cada concepte amb la seva definició.", pairs: [["Alcalde o alcaldessa", "Governa l'ajuntament"], ["Padró", "Registre d'habitants"], ["Barcelona", "Capital de Catalunya"], ["Municipi", "Unitat administrativa bàsica"]] }
        ]
      },
      {
        id: "soc-4",
        title: "Les comarques de Catalunya",
        icon: "🧭",
        questions: [
          { type: "mcq", q: "A quina comarca pertany la ciutat de Barcelona?", options: ["el Barcelonès", "el Bages", "el Vallès Oriental", "el Maresme"], correct: 0 },
          { type: "mcq", q: "Quina és la capital de la comarca del Bages?", options: ["Manresa", "Vic", "Igualada", "Berga"], correct: 0 },
          { type: "tf", q: "Catalunya està dividida en comarques i aquestes, en municipis.", correct: true },
          { type: "mcq", q: "Quina comarca té Girona com a capital?", options: ["el Gironès", "l'Alt Empordà", "la Selva", "la Garrotxa"], correct: 0 },
          { type: "mcq", q: "Quina comarca té Lleida com a capital?", options: ["el Segrià", "l'Urgell", "la Noguera", "el Pla d'Urgell"], correct: 0 },
          { type: "mcq", q: "Quina comarca té Tarragona com a capital?", options: ["el Tarragonès", "el Baix Camp", "l'Alt Camp", "el Priorat"], correct: 0 },
          { type: "mcq", q: "Quantes comarques té Catalunya aproximadament?", options: ["unes 42", "unes 10", "unes 100", "unes 4"], correct: 0 },
          { type: "match", q: "Relaciona cada capital amb la seva comarca.", pairs: [["Manresa", "Bages"], ["Vic", "Osona"], ["Igualada", "Anoia"], ["Berga", "Berguedà"]] }
        ]
      },
      {
        id: "soc-5",
        title: "Els sectors econòmics",
        icon: "💼",
        questions: [
          { type: "mcq", q: "A quin sector pertanyen l'agricultura i la ramaderia?", options: ["el sector primari", "el sector secundari", "el sector terciari", "el sector quaternari"], correct: 0 },
          { type: "mcq", q: "A quin sector pertany la indústria (fabricar productes)?", options: ["el sector secundari", "el sector primari", "el sector terciari", "cap"], correct: 0 },
          { type: "mcq", q: "A quin sector pertanyen serveis com l'ensenyament, el comerç o la sanitat?", options: ["el sector terciari", "el sector primari", "el sector secundari", "el sector agrari"], correct: 0 },
          { type: "tf", q: "La pesca forma part del sector primari.", correct: true },
          { type: "mcq", q: "Quina activitat és pròpia del sector secundari?", options: ["construir cotxes en una fàbrica", "collir olives", "vendre roba en una botiga", "cuidar pacients a l'hospital"], correct: 0 },
          { type: "mcq", q: "El turisme, molt important a Catalunya, pertany a quin sector?", options: ["el terciari", "el primari", "el secundari", "cap"], correct: 0 },
          { type: "mcq", q: "Quina d'aquestes és una feina del sector primari?", options: ["pagès o pagesa", "mestre o mestra", "metge o metgessa", "informàtic o informàtica"], correct: 0 },
          { type: "match", q: "Relaciona cada activitat amb el seu sector econòmic.", pairs: [["Pescar", "Sector primari"], ["Fabricar cotxes", "Sector secundari"], ["Ensenyar", "Sector terciari"], ["Investigar noves tecnologies", "Sector quaternari"]] }
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
        title: "Animals vertebrats i invertebrats",
        icon: "🐸",
        questions: [
          { type: "mcq", q: "Quins animals tenen esquelet intern amb columna vertebral?", options: ["els vertebrats", "els invertebrats", "els insectes", "les meduses"], correct: 0 },
          { type: "mcq", q: "A quin grup de vertebrats pertany la granota?", options: ["els amfibis", "els rèptils", "els mamífers", "els peixos"], correct: 0 },
          { type: "mcq", q: "Quin grup de vertebrats respira per brànquies?", options: ["els peixos", "els mamífers", "els ocells", "els rèptils"], correct: 0 },
          { type: "tf", q: "Els insectes són animals invertebrats.", correct: true },
          { type: "mcq", q: "Quina característica tenen tots els mamífers?", options: ["alimenten les cries amb llet", "posen ous sempre", "tenen plomes", "viuen només a l'aigua"], correct: 0 },
          { type: "mcq", q: "Quin d'aquests animals és un rèptil?", options: ["la serp", "el gos", "el tauró", "l'àguila"], correct: 0 },
          { type: "mcq", q: "Quin grup d'invertebrats té el cos tou, com el cargol?", options: ["els mol·luscs", "els insectes", "els aràcnids", "els crustacis"], correct: 0 },
          { type: "match", q: "Relaciona cada animal amb el seu grup.", pairs: [["Granota", "Amfibi"], ["Serp", "Rèptil"], ["Tauró", "Peix"], ["Gat", "Mamífer"]] }
        ]
      },
      {
        id: "nat-2",
        title: "Les plantes i la fotosíntesi",
        icon: "🌿",
        questions: [
          { type: "mcq", q: "Quina part de la planta absorbeix l'aigua i les sals minerals del sòl?", options: ["l'arrel", "la tija", "la fulla", "la flor"], correct: 0 },
          { type: "mcq", q: "Com es diu el procés pel qual les plantes fabriquen el seu propi aliment amb la llum del sol?", options: ["la fotosíntesi", "la respiració", "la reproducció", "la digestió"], correct: 0 },
          { type: "mcq", q: "Quin gas alliberen les plantes durant la fotosíntesi?", options: ["l'oxigen", "el diòxid de carboni", "el nitrogen", "l'hidrogen"], correct: 0 },
          { type: "tf", q: "Les arrels, la tija i les fulles són òrgans de la planta.", correct: true },
          { type: "mcq", q: "Quina part de la planta es transforma en fruit després de la pol·linització?", options: ["la flor", "l'arrel", "la tija", "la fulla"], correct: 0 },
          { type: "mcq", q: "Per què les plantes necessiten la llum del sol?", options: ["per fer la fotosíntesi", "només per créixer les arrels", "no la necessiten", "per respirar oxigen"], correct: 0 },
          { type: "mcq", q: "Quina part de la planta transporta la saba des de l'arrel fins a les fulles?", options: ["la tija", "la flor", "el fruit", "la llavor"], correct: 0 },
          { type: "order", q: "Ordena aquestes parts de la planta de sota (arrel) a dalt (flor).", tokens: ["Arrel", "Tija", "Fulla", "Flor"] }
        ]
      },
      {
        id: "nat-3",
        title: "Ecosistemes i biodiversitat",
        icon: "🌳",
        questions: [
          { type: "mcq", q: "Què és un ecosistema?", options: ["el conjunt d'éssers vius i el medi on viuen", "només els animals d'un lloc", "només les plantes", "un tipus de roca"], correct: 0 },
          { type: "mcq", q: "Com s'anomenen els éssers vius que fabriquen el seu propi aliment, com les plantes?", options: ["productors", "consumidors", "descomponedors", "depredadors"], correct: 0 },
          { type: "mcq", q: "Com s'anomenen els animals que es mengen altres animals?", options: ["consumidors", "productors", "descomponedors", "cap dels anteriors"], correct: 0 },
          { type: "tf", q: "Els bolets i alguns bacteris són descomponedors que reciclen la matèria orgànica.", correct: true },
          { type: "mcq", q: "Quin ecosistema trobem als Pirineus?", options: ["un ecosistema de muntanya", "un ecosistema marí", "un desert", "una selva tropical"], correct: 0 },
          { type: "mcq", q: "Què és una cadena alimentària?", options: ["la relació de qui es menja a qui dins un ecosistema", "un tipus de planta", "un aparell del cos", "un instrument de mesura"], correct: 0 },
          { type: "mcq", q: "Per què és important protegir la biodiversitat?", options: ["perquè manté l'equilibri dels ecosistemes", "perquè no serveix de res", "només per motius estètics", "perquè així hi ha més contaminació"], correct: 0 },
          { type: "match", q: "Relaciona cada concepte amb la seva definició.", pairs: [["Productors", "Fabriquen el seu aliment"], ["Consumidors", "Es mengen altres éssers vius"], ["Descomponedors", "Reciclen la matèria orgànica"], ["Ecosistema", "Éssers vius i el medi"]] }
        ]
      },
      {
        id: "nat-4",
        title: "El cos humà",
        icon: "🫀",
        questions: [
          { type: "mcq", q: "Quin aparell s'encarrega de portar l'oxigen de l'aire cap a la sang?", options: ["l'aparell respiratori", "l'aparell digestiu", "l'aparell circulatori", "l'aparell locomotor"], correct: 0 },
          { type: "mcq", q: "Quin òrgan bombeja la sang per tot el cos?", options: ["el cor", "el pulmó", "l'estómac", "el fetge"], correct: 0 },
          { type: "mcq", q: "On es fa la primera digestió dels aliments?", options: ["a la boca", "a l'estómac", "als pulmons", "al cor"], correct: 0 },
          { type: "tf", q: "L'aparell locomotor està format pels ossos i els músculs.", correct: true },
          { type: "mcq", q: "Quants ossos té aproximadament l'esquelet d'una persona adulta?", options: ["206", "50", "1.000", "20"], correct: 0 },
          { type: "mcq", q: "Quin aparell permet moure el cos gràcies als ossos i els músculs?", options: ["l'aparell locomotor", "l'aparell digestiu", "l'aparell respiratori", "l'aparell circulatori"], correct: 0 },
          { type: "mcq", q: "On van a parar els aliments després de l'estómac?", options: ["a l'intestí", "als pulmons", "al cor", "al cervell"], correct: 0 },
          { type: "match", q: "Relaciona cada òrgan amb la seva funció.", pairs: [["Cor", "Bombeja la sang"], ["Pulmons", "Intercanvien l'oxigen"], ["Estómac", "Fa la digestió"], ["Ossos", "Formen l'esquelet"]] }
        ]
      },
      {
        id: "nat-5",
        title: "Matèria i energia",
        icon: "💧",
        questions: [
          { type: "mcq", q: "Quins són els tres estats de la matèria?", options: ["sòlid, líquid i gasós", "calent, fred i tebi", "dur, tou i elàstic", "gran, mitjà i petit"], correct: 0 },
          { type: "mcq", q: "Quin procés fa que l'aigua líquida es converteixi en gel?", options: ["la solidificació", "l'evaporació", "la fusió", "la condensació"], correct: 0 },
          { type: "mcq", q: "Com es diu el pas de l'aigua líquida a vapor d'aigua?", options: ["l'evaporació", "la solidificació", "la fusió", "la condensació"], correct: 0 },
          { type: "tf", q: "El gel és aigua en estat sòlid.", correct: true },
          { type: "mcq", q: "Quina font d'energia prové directament del Sol?", options: ["l'energia solar", "l'energia del carbó", "l'energia nuclear", "l'energia del petroli"], correct: 0 },
          { type: "mcq", q: "Quina d'aquestes és una font d'energia renovable?", options: ["l'energia eòlica (del vent)", "el petroli", "el carbó", "el gas natural"], correct: 0 },
          { type: "mcq", q: "Com es diu el pas de vapor d'aigua a aigua líquida, per exemple als núvols?", options: ["la condensació", "l'evaporació", "la solidificació", "la fusió"], correct: 0 },
          { type: "order", q: "Ordena les fases del cicle de l'aigua.", tokens: ["Evaporació", "Condensació", "Precipitació", "Recollida"] }
        ]
      }
    ]
  }
];
