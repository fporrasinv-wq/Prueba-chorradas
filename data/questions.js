/* Banc de preguntes unificat de totes les apps "Repassa'l!".

   Cada pregunta és un objecte pla amb aquests camps comuns:
     id, curs, cicle, materia, tema, dificultat (1-3), tipus, origen, explicacio

   I, segons el "tipus", aquests camps propis:
     - test:             pregunta, opcions[], resposta_correcta
     - veritat_fals:      pregunta, resposta_correcta (true/false)
     - resposta_escrita:  pregunta, resposta_correcta, respostes_acceptades[]
     - ordenar:           pregunta, elements_ordre_correcte[]
     - emparellar:        pregunta, parelles[] ({a, b})

   Aquest fitxer es va generar automàticament a partir dels antics
   content.js (arrel, curs 4t) i petits/content.js (curs 1r) amb un
   script de transformació — el text de les preguntes i les respostes
   correctes NO s'ha retocat ni retranscrit a mà en aquest procés.

   El camp "dificultat" es va assignar amb una heurística (no és una
   valoració pedagògica exacta): la posició de la pregunta dins la
   lliçó (primer terç = 1, últim terç = 3), amb un ajust pel tipus
   (emparellar +1, ordenar amb 4+ elements +1, veritat_fals -1),
   limitat entre 1 i 3. Es pot afinar més endavant sense canviar el
   contingut de les preguntes. */

const QUESTIONS = [
  {
    "id": "1r_mat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin número ve just abans del 15?",
    "opcions": [
      "14",
      "16",
      "13",
      "17"
    ],
    "resposta_correcta": "14"
  },
  {
    "id": "1r_mat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin número és més gran?",
    "opcions": [
      "17",
      "12",
      "Són iguals",
      "Cap dels dos"
    ],
    "resposta_correcta": "17"
  },
  {
    "id": "1r_mat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El número 20 té dues xifres.",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Compta de 2 en 2: 2, 4, 6, __?",
    "opcions": [
      "8",
      "7",
      "10",
      "9"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants ous hi ha? 🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚",
    "resposta_correcta": "12",
    "respostes_acceptades": [
      "12"
    ]
  },
  {
    "id": "1r_mat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe fem servir quan un número és més gran que un altre?",
    "opcions": [
      ">",
      "+",
      "=",
      "-"
    ],
    "resposta_correcta": ">"
  },
  {
    "id": "1r_mat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "8 + 5 = ?",
    "opcions": [
      "13",
      "12",
      "14",
      "11"
    ],
    "resposta_correcta": "13"
  },
  {
    "id": "1r_mat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "12 - 4 = ?",
    "opcions": [
      "8",
      "9",
      "7",
      "6"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9 + 7 = ?",
    "resposta_correcta": "16",
    "respostes_acceptades": [
      "16"
    ]
  },
  {
    "id": "1r_mat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "15 - 6 = ?",
    "opcions": [
      "9",
      "8",
      "10",
      "7"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "1r_mat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "10 + 10 = 20",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "20 - 5 = ?",
    "resposta_correcta": "15",
    "respostes_acceptades": [
      "15"
    ]
  },
  {
    "id": "1r_mat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el doble de 4?",
    "opcions": [
      "8",
      "6",
      "4",
      "10"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la meitat de 10?",
    "opcions": [
      "5",
      "4",
      "6",
      "2"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "1r_mat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El doble de 3 és 6.",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el doble de 6?",
    "opcions": [
      "12",
      "10",
      "8",
      "14"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "1r_mat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la meitat de 8?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_mat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El doble de 5 és quant?",
    "resposta_correcta": "10",
    "respostes_acceptades": [
      "10"
    ]
  },
  {
    "id": "1r_mat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En Joan té 8 caramels i li'n regalen 5 més. Quants en té ara?",
    "opcions": [
      "13",
      "12",
      "14",
      "11"
    ],
    "resposta_correcta": "13"
  },
  {
    "id": "1r_mat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La Laia tenia 15 cromos i n'ha perdut 6. Quants li queden?",
    "opcions": [
      "9",
      "8",
      "10",
      "7"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "1r_mat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina hora marca un rellotge quan les dues agulles apunten al 12?",
    "opcions": [
      "Les 12 en punt",
      "Les 6 en punt",
      "Les 3 en punt",
      "Les 9 en punt"
    ],
    "resposta_correcta": "Les 12 en punt"
  },
  {
    "id": "1r_mat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Una setmana té 7 dies.",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants mesos té un any?",
    "opcions": [
      "12",
      "10",
      "6",
      "24"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "1r_mat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquests números de més petit a més gran.",
    "elements_ordre_correcte": [
      "3",
      "9",
      "14",
      "18"
    ]
  },
  {
    "id": "1r_cat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té la paraula «Pilota»?",
    "opcions": [
      "3",
      "2",
      "4",
      "1"
    ],
    "resposta_correcta": "3"
  },
  {
    "id": "1r_cat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula comença amb consonant?",
    "opcions": [
      "Taula",
      "Ocell",
      "Elefant",
      "Aranya"
    ],
    "resposta_correcta": "Taula"
  },
  {
    "id": "1r_cat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La paraula «Cotxe» té dues síl·labes.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes lletres és una vocal?",
    "opcions": [
      "E",
      "T",
      "M",
      "S"
    ],
    "resposta_correcta": "E"
  },
  {
    "id": "1r_cat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té «Mariposa»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_cat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les síl·labes per formar la paraula «Pilota».",
    "elements_ordre_correcte": [
      "Pi",
      "lo",
      "ta"
    ]
  },
  {
    "id": "1r_cat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «Casa»?",
    "opcions": [
      "Cases",
      "Casa",
      "Casos",
      "Caseta"
    ],
    "resposta_correcta": "Cases"
  },
  {
    "id": "1r_cat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «Flor»?",
    "opcions": [
      "Flors",
      "Flores",
      "Flor",
      "Florns"
    ],
    "resposta_correcta": "Flors"
  },
  {
    "id": "1r_cat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El plural de «Llibre» és «Llibres».",
    "resposta_correcta": true
  },
  {
    "id": "1r_cat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el singular de «Gats»?",
    "opcions": [
      "Gat",
      "Gata",
      "Gates",
      "Gat's"
    ],
    "resposta_correcta": "Gat"
  },
  {
    "id": "1r_cat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és el contrari de «Gran»?",
    "opcions": [
      "Petit",
      "Alt",
      "Llarg",
      "Fort"
    ],
    "resposta_correcta": "Petit"
  },
  {
    "id": "1r_cat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb la seva forma femenina.",
    "parelles": [
      {
        "a": "Nen",
        "b": "Nena"
      },
      {
        "a": "Gat",
        "b": "Gata"
      },
      {
        "a": "Gos",
        "b": "Gossa"
      },
      {
        "a": "Avi",
        "b": "Àvia"
      }
    ]
  },
  {
    "id": "1r_cat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Llegeix: «En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota.» Com es diu el gos d'en Pol?",
    "opcions": [
      "Bolet",
      "Pol",
      "Pilota",
      "Parc"
    ],
    "resposta_correcta": "Bolet"
  },
  {
    "id": "1r_cat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Amb el mateix text d'abans: on van cada tarda en Pol i el seu gos?",
    "opcions": [
      "Al parc",
      "A l'escola",
      "A la platja",
      "Al riu"
    ],
    "resposta_correcta": "Al parc"
  },
  {
    "id": "1r_cat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Segons el text, en Pol té un gat.",
    "resposta_correcta": false
  },
  {
    "id": "1r_cat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Amb què juguen al parc en Pol i el seu gos?",
    "opcions": [
      "Amb la pilota",
      "Amb un cotxe",
      "Amb un llibre",
      "Amb un ordinador"
    ],
    "resposta_correcta": "Amb la pilota"
  },
  {
    "id": "1r_cat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina mida té el gos d'en Pol?",
    "opcions": [
      "Petit",
      "Gran",
      "Gegant",
      "No se sap"
    ],
    "resposta_correcta": "Petit"
  },
  {
    "id": "1r_cat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En Pol i el seu gos van al parc cada tarda.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO és una fruita?",
    "opcions": [
      "Cadira",
      "Poma",
      "Pera",
      "Plàtan"
    ],
    "resposta_correcta": "Cadira"
  },
  {
    "id": "1r_cat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula rima amb «Pastís»?",
    "opcions": [
      "Anís",
      "Cadira",
      "Taula",
      "Pilota"
    ],
    "resposta_correcta": "Anís"
  },
  {
    "id": "1r_cat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Gos» i «Ós» rimen.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO és un animal?",
    "opcions": [
      "Cadira",
      "Gat",
      "Peix",
      "Ocell"
    ],
    "resposta_correcta": "Cadira"
  },
  {
    "id": "1r_cat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula rima amb «Casa»?",
    "opcions": [
      "Massa",
      "Cotxe",
      "Llibre",
      "Pilota"
    ],
    "resposta_correcta": "Massa"
  },
  {
    "id": "1r_cat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula comença amb la mateixa lletra que «Sol»?",
    "opcions": [
      "Sabata",
      "Taula",
      "Cadira",
      "Ocell"
    ],
    "resposta_correcta": "Sabata"
  },
  {
    "id": "1r_cas-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «Pelota»?",
    "opcions": [
      "3",
      "2",
      "4",
      "1"
    ],
    "resposta_correcta": "3"
  },
  {
    "id": "1r_cas-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra empieza con consonante?",
    "opcions": [
      "Mesa",
      "Oso",
      "Elefante",
      "Araña"
    ],
    "resposta_correcta": "Mesa"
  },
  {
    "id": "1r_cas-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La palabra «Coche» tiene dos sílabas.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cas-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas letras es una vocal?",
    "opcions": [
      "E",
      "T",
      "M",
      "S"
    ],
    "resposta_correcta": "E"
  },
  {
    "id": "1r_cas-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene «Mariposa»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_cas-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las sílabas para formar la palabra «Pelota».",
    "elements_ordre_correcte": [
      "Pe",
      "lo",
      "ta"
    ]
  },
  {
    "id": "1r_cas-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el plural de «Casa»?",
    "opcions": [
      "Casas",
      "Casa",
      "Casos",
      "Caseta"
    ],
    "resposta_correcta": "Casas"
  },
  {
    "id": "1r_cas-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el plural de «Flor»?",
    "opcions": [
      "Flores",
      "Flors",
      "Flor",
      "Florns"
    ],
    "resposta_correcta": "Flores"
  },
  {
    "id": "1r_cas-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El plural de «Libro» es «Libros».",
    "resposta_correcta": true
  },
  {
    "id": "1r_cas-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el singular de «Gatos»?",
    "opcions": [
      "Gato",
      "Gata",
      "Gatas",
      "Gato's"
    ],
    "resposta_correcta": "Gato"
  },
  {
    "id": "1r_cas-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el contrario de «Grande»?",
    "opcions": [
      "Pequeño",
      "Alto",
      "Largo",
      "Fuerte"
    ],
    "resposta_correcta": "Pequeño"
  },
  {
    "id": "1r_cas-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su forma femenina.",
    "parelles": [
      {
        "a": "Niño",
        "b": "Niña"
      },
      {
        "a": "Gato",
        "b": "Gata"
      },
      {
        "a": "Perro",
        "b": "Perra"
      },
      {
        "a": "Abuelo",
        "b": "Abuela"
      }
    ]
  },
  {
    "id": "1r_cas-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Lee: «Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio.» ¿Cómo se llama el pez de Ana?",
    "opcions": [
      "Nemo",
      "Ana",
      "Colegio",
      "Naranja"
    ],
    "resposta_correcta": "Nemo"
  },
  {
    "id": "1r_cas-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Con el mismo texto de antes: ¿de qué color es el pez?",
    "opcions": [
      "Naranja",
      "Azul",
      "Verde",
      "Rojo"
    ],
    "resposta_correcta": "Naranja"
  },
  {
    "id": "1r_cas-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Según el texto, Ana le da de comer al pez cada mañana.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cas-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuándo le da de comer Ana al pez?",
    "opcions": [
      "Antes de ir al colegio",
      "Por la noche",
      "Nunca",
      "Los domingos"
    ],
    "resposta_correcta": "Antes de ir al colegio"
  },
  {
    "id": "1r_cas-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué animal tiene Ana?",
    "opcions": [
      "Un pez",
      "Un perro",
      "Un gato",
      "Un pájaro"
    ],
    "resposta_correcta": "Un pez"
  },
  {
    "id": "1r_cas-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Según el texto, el pez de Ana es azul.",
    "resposta_correcta": false
  },
  {
    "id": "1r_cas-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra NO es una fruta?",
    "opcions": [
      "Silla",
      "Manzana",
      "Pera",
      "Plátano"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_cas-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra rima con «Ratón»?",
    "opcions": [
      "Camión",
      "Casa",
      "Mesa",
      "Silla"
    ],
    "resposta_correcta": "Camión"
  },
  {
    "id": "1r_cas-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Gato» y «Pato» riman.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cas-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra NO es un animal?",
    "opcions": [
      "Silla",
      "Gato",
      "Pez",
      "Pájaro"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_cas-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra rima con «Pan»?",
    "opcions": [
      "Flan",
      "Mesa",
      "Libro",
      "Pelota"
    ],
    "resposta_correcta": "Flan"
  },
  {
    "id": "1r_cas-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra empieza con la misma letra que «Sol»?",
    "opcions": [
      "Silla",
      "Mesa",
      "Casa",
      "Pato"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_eng-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «6» in English?",
    "opcions": [
      "Six",
      "Seven",
      "Five",
      "Nine"
    ],
    "resposta_correcta": "Six"
  },
  {
    "id": "1r_eng-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «9» in English?",
    "opcions": [
      "Nine",
      "Eight",
      "Ten",
      "Six"
    ],
    "resposta_correcta": "Nine"
  },
  {
    "id": "1r_eng-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Ten» is number 10.",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What number is «eight»?",
    "opcions": [
      "8",
      "7",
      "9",
      "6"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_eng-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Write the number for «seven».",
    "resposta_correcta": "7",
    "respostes_acceptades": [
      "7"
    ]
  },
  {
    "id": "1r_eng-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order these numbers from smallest to biggest.",
    "elements_ordre_correcte": [
      "three",
      "six",
      "eight",
      "ten"
    ]
  },
  {
    "id": "1r_eng-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «pare» in English?",
    "opcions": [
      "Father",
      "Mother",
      "Brother",
      "Sister"
    ],
    "resposta_correcta": "Father"
  },
  {
    "id": "1r_eng-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «mà» in English? ✋",
    "opcions": [
      "Hand",
      "Foot",
      "Head",
      "Eye"
    ],
    "resposta_correcta": "Hand"
  },
  {
    "id": "1r_eng-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Head» means «cap».",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «germana» in English?",
    "opcions": [
      "Sister",
      "Brother",
      "Mother",
      "Father"
    ],
    "resposta_correcta": "Sister"
  },
  {
    "id": "1r_eng-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «peu» in English? 🦶",
    "opcions": [
      "Foot",
      "Hand",
      "Head",
      "Ear"
    ],
    "resposta_correcta": "Foot"
  },
  {
    "id": "1r_eng-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each family word.",
    "parelles": [
      {
        "a": "Mare",
        "b": "Mother"
      },
      {
        "a": "Pare",
        "b": "Father"
      },
      {
        "a": "Germà",
        "b": "Brother"
      },
      {
        "a": "Ull",
        "b": "Eye"
      }
    ]
  },
  {
    "id": "1r_eng-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «poma» in English? 🍎",
    "opcions": [
      "Apple",
      "Bread",
      "Milk",
      "Fish"
    ],
    "resposta_correcta": "Apple"
  },
  {
    "id": "1r_eng-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «pa» in English? 🍞",
    "opcions": [
      "Bread",
      "Apple",
      "Water",
      "Egg"
    ],
    "resposta_correcta": "Bread"
  },
  {
    "id": "1r_eng-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Milk» means «llet».",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «cavall» in English? 🐴",
    "opcions": [
      "Horse",
      "Cow",
      "Sheep",
      "Pig"
    ],
    "resposta_correcta": "Horse"
  },
  {
    "id": "1r_eng-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «porc» in English? 🐷",
    "opcions": [
      "Pig",
      "Horse",
      "Cow",
      "Sheep"
    ],
    "resposta_correcta": "Pig"
  },
  {
    "id": "1r_eng-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "I",
      "like",
      "apples"
    ]
  },
  {
    "id": "1r_eng-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «This ___ a dog.»",
    "opcions": [
      "is",
      "are",
      "am",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "1r_eng-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «These ___ cats.»",
    "opcions": [
      "are",
      "is",
      "am",
      "be"
    ],
    "resposta_correcta": "are"
  },
  {
    "id": "1r_eng-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«This is a book» is correct English.",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «I ___ six years old.»",
    "opcions": [
      "am",
      "is",
      "are",
      "be"
    ],
    "resposta_correcta": "am"
  },
  {
    "id": "1r_eng-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «She ___ happy.»",
    "resposta_correcta": "is",
    "respostes_acceptades": [
      "is"
    ]
  },
  {
    "id": "1r_eng-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "He",
      "has",
      "got",
      "a",
      "cat"
    ]
  },
  {
    "id": "1r_soc-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el fill del teu germà?",
    "opcions": [
      "Nebot",
      "Cosí",
      "Net",
      "Fillol"
    ],
    "resposta_correcta": "Nebot"
  },
  {
    "id": "1r_soc-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viuen normalment els avis?",
    "opcions": [
      "A casa seva",
      "Al cotxe",
      "A l'escola",
      "Al bosc"
    ],
    "resposta_correcta": "A casa seva"
  },
  {
    "id": "1r_soc-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Els cosins són fills dels teus oncles i ties.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la filla dels teus pares que no ets tu?",
    "opcions": [
      "Germana",
      "Cosina",
      "Neboda",
      "Tia"
    ],
    "resposta_correcta": "Germana"
  },
  {
    "id": "1r_soc-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests NO forma part de la família?",
    "opcions": [
      "El veí",
      "El pare",
      "La mare",
      "L'avi"
    ],
    "resposta_correcta": "El veí"
  },
  {
    "id": "1r_soc-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui sol ser més gran, l'avi o el nét?",
    "opcions": [
      "L'avi",
      "El nét",
      "Són iguals",
      "Cap dels dos"
    ],
    "resposta_correcta": "L'avi"
  },
  {
    "id": "1r_soc-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què hem de fer quan algú parla a classe?",
    "opcions": [
      "Escoltar en silenci",
      "Cridar",
      "Sortir corrents",
      "Jugar"
    ],
    "resposta_correcta": "Escoltar en silenci"
  },
  {
    "id": "1r_soc-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens ajuda si ens fem mal a l'escola?",
    "opcions": [
      "El mestre o la mestra",
      "Un desconegut",
      "Ningú",
      "Un altre alumne sol"
    ],
    "resposta_correcta": "El mestre o la mestra"
  },
  {
    "id": "1r_soc-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Hem de compartir les joguines amb els companys.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fem a la biblioteca de l'escola?",
    "opcions": [
      "Llegir llibres en silenci",
      "Jugar a futbol",
      "Dormir",
      "Cuinar"
    ],
    "resposta_correcta": "Llegir llibres en silenci"
  },
  {
    "id": "1r_soc-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com hem de demanar les coses?",
    "opcions": [
      "Si us plau i gràcies",
      "Cridant",
      "Sense dir res",
      "Empenyent"
    ],
    "resposta_correcta": "Si us plau i gràcies"
  },
  {
    "id": "1r_soc-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fem abans d'entrar a classe?",
    "opcions": [
      "Fer una fila",
      "Córrer",
      "Amagar-nos",
      "Cridar"
    ],
    "resposta_correcta": "Fer una fila"
  },
  {
    "id": "1r_soc-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On podem agafar llibres en préstec?",
    "opcions": [
      "A la biblioteca",
      "Al forn",
      "A l'hospital",
      "Al riu"
    ],
    "resposta_correcta": "A la biblioteca"
  },
  {
    "id": "1r_soc-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens porta les cartes i els paquets a casa?",
    "opcions": [
      "El carter o la cartera",
      "El metge",
      "El mestre",
      "El bomber"
    ],
    "resposta_correcta": "El carter o la cartera"
  },
  {
    "id": "1r_soc-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Els semàfors ens ajuden a creuar el carrer amb seguretat.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On comprem la carn i el peix?",
    "opcions": [
      "Al mercat",
      "A la biblioteca",
      "A l'escola",
      "Al riu"
    ],
    "resposta_correcta": "Al mercat"
  },
  {
    "id": "1r_soc-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens ajuda a apagar un incendi?",
    "opcions": [
      "Els bombers",
      "Els mestres",
      "Els forners",
      "Els jardiners"
    ],
    "resposta_correcta": "Els bombers"
  },
  {
    "id": "1r_soc-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin color té el semàfor quan hem d'esperar?",
    "opcions": [
      "Vermell",
      "Verd",
      "Groc",
      "Blau"
    ],
    "resposta_correcta": "Vermell"
  },
  {
    "id": "1r_soc-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens cuida les dents?",
    "opcions": [
      "El dentista",
      "El bomber",
      "El forner",
      "El jardiner"
    ],
    "resposta_correcta": "El dentista"
  },
  {
    "id": "1r_soc-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui fa el pa cada dia?",
    "opcions": [
      "El forner o la fornera",
      "El dentista",
      "El bomber",
      "El jardiner"
    ],
    "resposta_correcta": "El forner o la fornera"
  },
  {
    "id": "1r_soc-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El metge o la metgessa ens cuida quan estem malalts.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui cuida les plantes i els jardins?",
    "opcions": [
      "El jardiner o la jardinera",
      "El dentista",
      "El carter",
      "El forner"
    ],
    "resposta_correcta": "El jardiner o la jardinera"
  },
  {
    "id": "1r_soc-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui condueix l'autobús?",
    "opcions": [
      "El conductor o la conductora",
      "El mestre",
      "El metge",
      "El forner"
    ],
    "resposta_correcta": "El conductor o la conductora"
  },
  {
    "id": "1r_soc-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui apaga els incendis?",
    "opcions": [
      "Els bombers",
      "Els dentistes",
      "Els forners",
      "Els conductors"
    ],
    "resposta_correcta": "Els bombers"
  },
  {
    "id": "1r_nat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del gos?",
    "opcions": [
      "Cadell",
      "Vedell",
      "Poltre",
      "Xai"
    ],
    "resposta_correcta": "Cadell"
  },
  {
    "id": "1r_nat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del gat?",
    "opcions": [
      "Gatet",
      "Cadell",
      "Vedell",
      "Poltre"
    ],
    "resposta_correcta": "Gatet"
  },
  {
    "id": "1r_nat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La cria de la vaca es diu vedell.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del cavall?",
    "opcions": [
      "Poltre",
      "Xai",
      "Cadell",
      "Gatet"
    ],
    "resposta_correcta": "Poltre"
  },
  {
    "id": "1r_nat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria de l'ovella?",
    "opcions": [
      "Xai",
      "Poltre",
      "Vedell",
      "Cadell"
    ],
    "resposta_correcta": "Xai"
  },
  {
    "id": "1r_nat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada animal amb la seva cria.",
    "parelles": [
      {
        "a": "Gos",
        "b": "Cadell"
      },
      {
        "a": "Gat",
        "b": "Gatet"
      },
      {
        "a": "Vaca",
        "b": "Vedell"
      },
      {
        "a": "Cavall",
        "b": "Poltre"
      }
    ]
  },
  {
    "id": "1r_nat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el peix?",
    "opcions": [
      "A l'aigua",
      "A l'arbre",
      "Sota terra",
      "A l'aire"
    ],
    "resposta_correcta": "A l'aigua"
  },
  {
    "id": "1r_nat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el conill?",
    "opcions": [
      "En una cova sota terra",
      "A l'aigua",
      "A l'arbre",
      "Al núvol"
    ],
    "resposta_correcta": "En una cova sota terra"
  },
  {
    "id": "1r_nat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "L'ocell fa el niu als arbres.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu l'ós polar?",
    "opcions": [
      "A llocs molt freds",
      "A llocs molt calents",
      "Al desert",
      "A l'aigua sempre"
    ],
    "resposta_correcta": "A llocs molt freds"
  },
  {
    "id": "1r_nat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el camell?",
    "opcions": [
      "Al desert",
      "A l'aigua",
      "Als llocs freds",
      "Al bosc humit"
    ],
    "resposta_correcta": "Al desert"
  },
  {
    "id": "1r_nat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viuen els peixos del mar?",
    "opcions": [
      "A l'aigua salada",
      "A l'aigua dolça",
      "A la terra",
      "A l'aire"
    ],
    "resposta_correcta": "A l'aigua salada"
  },
  {
    "id": "1r_nat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "D'on surt un pollet?",
    "opcions": [
      "D'un ou",
      "D'una llavor",
      "D'una fulla",
      "D'una arrel"
    ],
    "resposta_correcta": "D'un ou"
  },
  {
    "id": "1r_nat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què necessita una llavor per créixer?",
    "opcions": [
      "Aigua, llum i terra",
      "Només fosca",
      "Res",
      "Sorra seca"
    ],
    "resposta_correcta": "Aigua, llum i terra"
  },
  {
    "id": "1r_nat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Una granota comença sent capgròs.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què es converteix en una papallona?",
    "opcions": [
      "Una eruga",
      "Un peix",
      "Un ocell",
      "Una granota"
    ],
    "resposta_correcta": "Una eruga"
  },
  {
    "id": "1r_nat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'ordre correcte de creixement d'una planta?",
    "opcions": [
      "Llavor → Planta → Flor",
      "Flor → Llavor → Planta",
      "Planta → Flor → Llavor",
      "Flor → Planta → Llavor"
    ],
    "resposta_correcta": "Llavor → Planta → Flor"
  },
  {
    "id": "1r_nat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 2,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Els humans neixen, creixen, es fan grans i envelleixen.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument mesura la temperatura?",
    "opcions": [
      "El termòmetre",
      "El rellotge",
      "La balança",
      "El regle"
    ],
    "resposta_correcta": "El termòmetre"
  },
  {
    "id": "1r_nat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quina estació els arbres es queden sense fulles?",
    "opcions": [
      "Tardor",
      "Estiu",
      "Primavera",
      "Totes"
    ],
    "resposta_correcta": "Tardor"
  },
  {
    "id": "1r_nat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A l'hivern sol fer més fred que a l'estiu.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fa que es formin els núvols?",
    "opcions": [
      "L'aigua que s'evapora",
      "El foc",
      "La terra",
      "Els arbres"
    ],
    "resposta_correcta": "L'aigua que s'evapora"
  },
  {
    "id": "1r_nat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina estació ve just abans de l'estiu?",
    "opcions": [
      "Primavera",
      "Hivern",
      "Tardor",
      "Cap"
    ],
    "resposta_correcta": "Primavera"
  },
  {
    "id": "1r_nat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quan és més probable que nevi?",
    "opcions": [
      "A l'hivern",
      "A l'estiu",
      "A la primavera",
      "Mai"
    ],
    "resposta_correcta": "A l'hivern"
  },
  {
    "id": "4t_mat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el valor posicional del 7 en el nombre 47.208?",
    "opcions": [
      "Unitats de miler",
      "Centenes",
      "Desenes de miler",
      "Unitats"
    ],
    "resposta_correcta": "Unitats de miler"
  },
  {
    "id": "4t_mat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'escriu amb xifres «trenta-quatre mil dos-cents setze»?",
    "opcions": [
      "34.216",
      "34.126",
      "3.416",
      "340.216"
    ],
    "resposta_correcta": "34.216"
  },
  {
    "id": "4t_mat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El nombre 12.345 és més gran que 12.435.",
    "resposta_correcta": false
  },
  {
    "id": "4t_mat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre és el més gran?",
    "opcions": [
      "45.982",
      "45.928",
      "45.899",
      "45.980"
    ],
    "resposta_correcta": "45.982"
  },
  {
    "id": "4t_mat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu amb xifres el nombre «vuit mil noranta».",
    "resposta_correcta": "8090",
    "respostes_acceptades": [
      "8090"
    ]
  },
  {
    "id": "4t_mat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Arrodoneix 4.678 a la centena més propera.",
    "opcions": [
      "4.700",
      "4.600",
      "4.680",
      "5.000"
    ],
    "resposta_correcta": "4.700"
  },
  {
    "id": "4t_mat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes desenes hi ha en 350?",
    "opcions": [
      "35",
      "350",
      "3",
      "5"
    ],
    "resposta_correcta": "35"
  },
  {
    "id": "4t_mat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada nombre escrit amb lletres amb les seves xifres.",
    "parelles": [
      {
        "a": "Quatre mil",
        "b": "4.000"
      },
      {
        "a": "Deu mil cinc-cents",
        "b": "10.500"
      },
      {
        "a": "Dos-cents tres",
        "b": "203"
      },
      {
        "a": "Setanta mil",
        "b": "70.000"
      }
    ]
  },
  {
    "id": "4t_mat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "4.325 + 1.876 = ?",
    "resposta_correcta": "6201",
    "respostes_acceptades": [
      "6201"
    ]
  },
  {
    "id": "4t_mat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9.004 − 2.568 = ?",
    "resposta_correcta": "6436",
    "respostes_acceptades": [
      "6436"
    ]
  },
  {
    "id": "4t_mat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En Marc té 245 cromos i en compra 178 més. Quants cromos té ara?",
    "opcions": [
      "423",
      "413",
      "433",
      "313"
    ],
    "resposta_correcta": "423"
  },
  {
    "id": "4t_mat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Una botiga tenia 600 € i ven productes per 235 € i gasta 90 € en lloguer. Quants diners li queden?",
    "opcions": [
      "275 €",
      "365 €",
      "245 €",
      "315 €"
    ],
    "resposta_correcta": "275 €"
  },
  {
    "id": "4t_mat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La resta és l'operació inversa de la suma.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el resultat de 999 + 1?",
    "opcions": [
      "1.000",
      "990",
      "1.090",
      "900"
    ],
    "resposta_correcta": "1.000"
  },
  {
    "id": "4t_mat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "7.200 − 3.450 = ?",
    "resposta_correcta": "3750",
    "respostes_acceptades": [
      "3750"
    ]
  },
  {
    "id": "4t_mat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquests nombres de més petit a més gran.",
    "elements_ordre_correcte": [
      "120",
      "450",
      "980",
      "1.200"
    ]
  },
  {
    "id": "4t_mat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "7 × 8 = ?",
    "opcions": [
      "56",
      "54",
      "64",
      "48"
    ],
    "resposta_correcta": "56"
  },
  {
    "id": "4t_mat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9 × 6 = ?",
    "opcions": [
      "54",
      "45",
      "56",
      "63"
    ],
    "resposta_correcta": "54"
  },
  {
    "id": "4t_mat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "124 × 3 = ?",
    "resposta_correcta": "372",
    "respostes_acceptades": [
      "372"
    ]
  },
  {
    "id": "4t_mat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una caixa hi ha 12 pomes. Quantes pomes hi ha en 15 caixes?",
    "opcions": [
      "180",
      "170",
      "190",
      "160"
    ],
    "resposta_correcta": "180"
  },
  {
    "id": "4t_mat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Multiplicar per 10 és afegir un zero al final del nombre.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "45 × 20 = ?",
    "resposta_correcta": "900",
    "respostes_acceptades": [
      "900"
    ]
  },
  {
    "id": "4t_mat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el resultat de 8 × 0?",
    "opcions": [
      "0",
      "8",
      "80",
      "1"
    ],
    "resposta_correcta": "0"
  },
  {
    "id": "4t_mat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada multiplicació amb el seu resultat.",
    "parelles": [
      {
        "a": "6 × 7",
        "b": "42"
      },
      {
        "a": "8 × 9",
        "b": "72"
      },
      {
        "a": "5 × 5",
        "b": "25"
      },
      {
        "a": "4 × 6",
        "b": "24"
      }
    ]
  },
  {
    "id": "4t_mat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "84 : 4 = ?",
    "resposta_correcta": "21",
    "respostes_acceptades": [
      "21"
    ]
  },
  {
    "id": "4t_mat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "45 : 9 = ?",
    "opcions": [
      "5",
      "6",
      "4",
      "9"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "4t_mat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Reparteixo 72 caramels entre 8 nens i nenes. Quants en toquen a cadascú?",
    "opcions": [
      "9",
      "8",
      "7",
      "10"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "4t_mat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una divisió, el residu ha de ser sempre més petit que el divisor.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "96 : 6 = ?",
    "resposta_correcta": "16",
    "respostes_acceptades": [
      "16"
    ]
  },
  {
    "id": "4t_mat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el divisor a l'operació 63 : 7 = 9?",
    "opcions": [
      "7",
      "9",
      "63",
      "0"
    ],
    "resposta_correcta": "7"
  },
  {
    "id": "4t_mat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "100 : 5 = ?",
    "opcions": [
      "20",
      "25",
      "15",
      "10"
    ],
    "resposta_correcta": "20"
  },
  {
    "id": "4t_mat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada divisió amb el seu quocient.",
    "parelles": [
      {
        "a": "36 : 6",
        "b": "6"
      },
      {
        "a": "49 : 7",
        "b": "7"
      },
      {
        "a": "81 : 9",
        "b": "9"
      },
      {
        "a": "64 : 8",
        "b": "8"
      }
    ]
  },
  {
    "id": "4t_mat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció representa la meitat d'un pastís?",
    "opcions": [
      "1/2",
      "1/4",
      "2/1",
      "1/3"
    ],
    "resposta_correcta": "1/2"
  },
  {
    "id": "4t_mat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una pizza tallada en 8 trossos, si en menges 3, quina fracció has menjat?",
    "opcions": [
      "3/8",
      "8/3",
      "3/5",
      "5/8"
    ],
    "resposta_correcta": "3/8"
  },
  {
    "id": "4t_mat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "0,5 és el mateix que 1/2.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre decimal representa «tres unitats i quatre dècimes»?",
    "opcions": [
      "3,4",
      "3,04",
      "34",
      "0,34"
    ],
    "resposta_correcta": "3,4"
  },
  {
    "id": "4t_mat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció és més gran?",
    "opcions": [
      "1/3",
      "1/5",
      "Són iguals",
      "Cap de les dues"
    ],
    "resposta_correcta": "1/3"
  },
  {
    "id": "4t_mat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu en xifres «cinc dècimes» com a nombre decimal.",
    "resposta_correcta": "0,5",
    "respostes_acceptades": [
      "0,5",
      "0.5"
    ]
  },
  {
    "id": "4t_mat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "2/4 és equivalent a...",
    "opcions": [
      "1/2",
      "1/4",
      "2/8",
      "3/4"
    ],
    "resposta_correcta": "1/2"
  },
  {
    "id": "4t_mat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada fracció amb el seu decimal.",
    "parelles": [
      {
        "a": "1/2",
        "b": "0,5"
      },
      {
        "a": "1/4",
        "b": "0,25"
      },
      {
        "a": "3/4",
        "b": "0,75"
      },
      {
        "a": "1/10",
        "b": "0,1"
      }
    ]
  },
  {
    "id": "4t_mat-6_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants centímetres té un metre?",
    "opcions": [
      "100",
      "10",
      "1.000",
      "50"
    ],
    "resposta_correcta": "100"
  },
  {
    "id": "4t_mat-6_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument es fa servir per mesurar angles?",
    "opcions": [
      "El transportador d'angles",
      "El regle",
      "La balança",
      "El rellotge"
    ],
    "resposta_correcta": "El transportador d'angles"
  },
  {
    "id": "4t_mat-6_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula el perímetre d'un quadrat de costat 5 cm (en cm).",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "4t_mat-6_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants grams té un quilogram?",
    "opcions": [
      "1.000",
      "100",
      "10",
      "10.000"
    ],
    "resposta_correcta": "1.000"
  },
  {
    "id": "4t_mat-6_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Un angle recte mesura 90°.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-6_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina figura té tres costats?",
    "opcions": [
      "El triangle",
      "El quadrat",
      "El pentàgon",
      "L'hexàgon"
    ],
    "resposta_correcta": "El triangle"
  },
  {
    "id": "4t_mat-6_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula l'àrea d'un rectangle de 4 cm de base i 3 cm d'alçada (en cm²).",
    "resposta_correcta": "12",
    "respostes_acceptades": [
      "12"
    ]
  },
  {
    "id": "4t_mat-6_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquestes longituds de la més petita a la més gran.",
    "elements_ordre_correcte": [
      "5 mm",
      "5 cm",
      "5 dm",
      "5 m"
    ]
  },
  {
    "id": "4t_cat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta l·l (ela geminada)?",
    "opcions": [
      "novel·la",
      "cavall",
      "milió",
      "carrer"
    ],
    "resposta_correcta": "novel·la"
  },
  {
    "id": "4t_cat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'escriu correctament el mes que ve després de l'abril?",
    "opcions": [
      "maig",
      "matx",
      "maitx",
      "mag"
    ],
    "resposta_correcta": "maig"
  },
  {
    "id": "4t_cat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La paraula «any» s'escriu amb ny.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula està ben escrita?",
    "opcions": [
      "cel·la",
      "cela",
      "cel.la",
      "cella"
    ],
    "resposta_correcta": "cel·la"
  },
  {
    "id": "4t_cat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com sona el dígraf l·l?",
    "opcions": [
      "Es pronuncien les dues eles",
      "Sona com una ela sola",
      "Sona com una ena",
      "No es pronuncia"
    ],
    "resposta_correcta": "Es pronuncien les dues eles"
  },
  {
    "id": "4t_cat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO porta erra doble (rr)?",
    "opcions": [
      "cotxe",
      "carro",
      "terra",
      "gorra"
    ],
    "resposta_correcta": "cotxe"
  },
  {
    "id": "4t_cat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta ny?",
    "opcions": [
      "canya",
      "cana",
      "cania",
      "cañia"
    ],
    "resposta_correcta": "canya"
  },
  {
    "id": "4t_cat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "gat",
      "dorm",
      "a",
      "la",
      "cadira"
    ]
  },
  {
    "id": "4t_cat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta accent obert (è)?",
    "opcions": [
      "cafè",
      "més",
      "això",
      "número"
    ],
    "resposta_correcta": "cafè"
  },
  {
    "id": "4t_cat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes paraules és aguda (l'accent tònic va a l'última síl·laba)?",
    "opcions": [
      "camió",
      "taula",
      "cadira",
      "arbre"
    ],
    "resposta_correcta": "camió"
  },
  {
    "id": "4t_cat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Totes les paraules catalanes porten accent gràfic.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la síl·laba tònica de la paraula «pàgina»?",
    "opcions": [
      "PÀ (primera)",
      "GI (segona)",
      "NA (tercera)"
    ],
    "resposta_correcta": "PÀ (primera)"
  },
  {
    "id": "4t_cat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té la paraula «biblioteca»?",
    "opcions": [
      "5",
      "4",
      "6",
      "3"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "4t_cat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és plana (l'accent va a la penúltima síl·laba)?",
    "opcions": [
      "taula",
      "camió",
      "sofà",
      "ordinador"
    ],
    "resposta_correcta": "taula"
  },
  {
    "id": "4t_cat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta accent diacrític per diferenciar-se d'una altra amb el mateix so?",
    "opcions": [
      "món",
      "casa",
      "llibre",
      "cadira"
    ],
    "resposta_correcta": "món"
  },
  {
    "id": "4t_cat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb el nombre de síl·labes que té.",
    "parelles": [
      {
        "a": "Sol",
        "b": "1"
      },
      {
        "a": "Taula",
        "b": "2"
      },
      {
        "a": "Ordinador",
        "b": "4"
      },
      {
        "a": "Biblioteca",
        "b": "5"
      }
    ]
  },
  {
    "id": "4t_cat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un nom (substantiu)?",
    "opcions": [
      "gos",
      "córrer",
      "ràpid",
      "molt"
    ],
    "resposta_correcta": "gos"
  },
  {
    "id": "4t_cat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un adjectiu?",
    "opcions": [
      "bonic",
      "casa",
      "cantar",
      "amb"
    ],
    "resposta_correcta": "bonic"
  },
  {
    "id": "4t_cat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A la frase «El gat negre dorm», quina paraula és el verb?",
    "opcions": [
      "dorm",
      "gat",
      "negre",
      "el"
    ],
    "resposta_correcta": "dorm"
  },
  {
    "id": "4t_cat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin determinant acompanya un nom femení plural?",
    "opcions": [
      "les",
      "el",
      "els",
      "un"
    ],
    "resposta_correcta": "les"
  },
  {
    "id": "4t_cat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "L'adjectiu concorda en gènere i nombre amb el nom.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «flor»?",
    "opcions": [
      "flors",
      "flores",
      "flor",
      "florns"
    ],
    "resposta_correcta": "flors"
  },
  {
    "id": "4t_cat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un article?",
    "opcions": [
      "la",
      "casa",
      "gran",
      "córrer"
    ],
    "resposta_correcta": "la"
  },
  {
    "id": "4t_cat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "La",
      "nena",
      "llegeix",
      "un",
      "conte"
    ]
  },
  {
    "id": "4t_cat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «content»?",
    "opcions": [
      "alegre",
      "trist",
      "cansat",
      "enfadat"
    ],
    "resposta_correcta": "alegre"
  },
  {
    "id": "4t_cat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim de «gran»?",
    "opcions": [
      "petit",
      "alt",
      "fort",
      "ample"
    ],
    "resposta_correcta": "petit"
  },
  {
    "id": "4t_cat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «ràpid»?",
    "opcions": [
      "veloç",
      "lent",
      "petit",
      "fosc"
    ],
    "resposta_correcta": "veloç"
  },
  {
    "id": "4t_cat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim de «dia»?",
    "opcions": [
      "nit",
      "sol",
      "matí",
      "tarda"
    ],
    "resposta_correcta": "nit"
  },
  {
    "id": "4t_cat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «bonic»?",
    "opcions": [
      "maco",
      "lleig",
      "vell",
      "petit"
    ],
    "resposta_correcta": "maco"
  },
  {
    "id": "4t_cat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Fosc» i «clar» són antònims.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim d'«obrir»?",
    "opcions": [
      "tancar",
      "entrar",
      "sortir",
      "pujar"
    ],
    "resposta_correcta": "tancar"
  },
  {
    "id": "4t_cat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb el seu sinònim.",
    "parelles": [
      {
        "a": "Content",
        "b": "Alegre"
      },
      {
        "a": "Ràpid",
        "b": "Veloç"
      },
      {
        "a": "Bonic",
        "b": "Maco"
      },
      {
        "a": "Gran",
        "b": "Enorme"
      }
    ]
  },
  {
    "id": "4t_cat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe de puntuació es fa servir al final d'una pregunta?",
    "opcions": [
      "?",
      ".",
      ",",
      ";"
    ],
    "resposta_correcta": "?"
  },
  {
    "id": "4t_cat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe s'utilitza per separar elements d'una llista dins una frase?",
    "opcions": [
      "la coma (,)",
      "el punt (.)",
      "l'interrogant (?)",
      "el guió (-)"
    ],
    "resposta_correcta": "la coma (,)"
  },
  {
    "id": "4t_cat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Un punt i final (.) indica que la frase ha acabat.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe s'utilitza al final d'una frase exclamativa?",
    "opcions": [
      "!",
      "?",
      ".",
      ":"
    ],
    "resposta_correcta": "!"
  },
  {
    "id": "4t_cat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la funció dels dos punts (:) abans d'una llista?",
    "opcions": [
      "Introduir una enumeració",
      "Acabar la frase",
      "Fer una pregunta",
      "Separar paràgrafs"
    ],
    "resposta_correcta": "Introduir una enumeració"
  },
  {
    "id": "4t_cat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On has de posar majúscula sempre?",
    "opcions": [
      "A l'inici de frase",
      "Al mig de la paraula",
      "Al final de la frase",
      "Mai"
    ],
    "resposta_correcta": "A l'inici de frase"
  },
  {
    "id": "4t_cat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe indica que algú parla en un diàleg?",
    "opcions": [
      "el guió (—)",
      "la coma (,)",
      "l'interrogant (?)",
      "el punt (.)"
    ],
    "resposta_correcta": "el guió (—)"
  },
  {
    "id": "4t_cat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "meu",
      "gos",
      "es",
      "diu",
      "Rex"
    ]
  },
  {
    "id": "4t_cas-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se escribe correctamente?",
    "opcions": [
      "árbol",
      "árvol",
      "albol",
      "álbol"
    ],
    "resposta_correcta": "árbol"
  },
  {
    "id": "4t_cas-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué letra es muda al principio de «huevo»?",
    "opcions": [
      "la h",
      "la u",
      "la e",
      "la v"
    ],
    "resposta_correcta": "la h"
  },
  {
    "id": "4t_cas-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La palabra «jirafa» se escribe con g.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cas-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras está bien escrita?",
    "opcions": [
      "coger",
      "cojer",
      "coyer",
      "cojel"
    ],
    "resposta_correcta": "coger"
  },
  {
    "id": "4t_cas-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Completa: «El pájaro vuela por el ___.»",
    "resposta_correcta": "cielo",
    "respostes_acceptades": [
      "cielo"
    ]
  },
  {
    "id": "4t_cas-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras se escribe con v?",
    "opcions": [
      "ventana",
      "bonito",
      "burro",
      "abrigo"
    ],
    "resposta_correcta": "ventana"
  },
  {
    "id": "4t_cas-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "perro",
      "ladra",
      "fuerte"
    ]
  },
  {
    "id": "4t_cas-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra en singular con su plural.",
    "parelles": [
      {
        "a": "Flor",
        "b": "Flores"
      },
      {
        "a": "Lápiz",
        "b": "Lápices"
      },
      {
        "a": "Pez",
        "b": "Peces"
      },
      {
        "a": "Luz",
        "b": "Luces"
      }
    ]
  },
  {
    "id": "4t_cas-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un sustantivo?",
    "opcions": [
      "perro",
      "correr",
      "bonito",
      "con"
    ],
    "resposta_correcta": "perro"
  },
  {
    "id": "4t_cas-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un adjetivo?",
    "opcions": [
      "alto",
      "casa",
      "comer",
      "muy"
    ],
    "resposta_correcta": "alto"
  },
  {
    "id": "4t_cas-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En la frase «El niño come manzanas», ¿cuál es el verbo?",
    "opcions": [
      "come",
      "niño",
      "manzanas",
      "el"
    ],
    "resposta_correcta": "come"
  },
  {
    "id": "4t_cas-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El adjetivo concuerda en género y número con el sustantivo.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escribe el plural de «flor».",
    "resposta_correcta": "flores",
    "respostes_acceptades": [
      "flores"
    ]
  },
  {
    "id": "4t_cas-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un artículo?",
    "opcions": [
      "la",
      "casa",
      "gran",
      "correr"
    ],
    "resposta_correcta": "la"
  },
  {
    "id": "4t_cas-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "La",
      "gata",
      "negra",
      "duerme"
    ]
  },
  {
    "id": "4t_cas-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su categoría gramatical.",
    "parelles": [
      {
        "a": "Casa",
        "b": "Sustantivo"
      },
      {
        "a": "Bonito",
        "b": "Adjetivo"
      },
      {
        "a": "Saltar",
        "b": "Verbo"
      },
      {
        "a": "Rápidamente",
        "b": "Adverbio"
      }
    ]
  },
  {
    "id": "4t_cas-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se llaman las palabras que llevan el acento en la última sílaba?",
    "opcions": [
      "agudas",
      "llanas",
      "esdrújulas",
      "sobresdrújulas"
    ],
    "resposta_correcta": "agudas"
  },
  {
    "id": "4t_cas-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es esdrújula?",
    "opcions": [
      "página",
      "camión",
      "pared",
      "reloj"
    ],
    "resposta_correcta": "página"
  },
  {
    "id": "4t_cas-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La palabra «árbol» es llana (grave).",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «mariposa»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "4t_cas-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «sol»? Escribe el número.",
    "resposta_correcta": "1",
    "respostes_acceptades": [
      "1"
    ]
  },
  {
    "id": "4t_cas-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es aguda?",
    "opcions": [
      "camión",
      "mesa",
      "música",
      "lápiz"
    ],
    "resposta_correcta": "camión"
  },
  {
    "id": "4t_cas-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena estas palabras de menos a más sílabas.",
    "elements_ordre_correcte": [
      "sol",
      "casa",
      "ventana",
      "mariposa"
    ]
  },
  {
    "id": "4t_cas-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su tipo de acentuación.",
    "parelles": [
      {
        "a": "Camión",
        "b": "Aguda"
      },
      {
        "a": "Mesa",
        "b": "Llana"
      },
      {
        "a": "Música",
        "b": "Esdrújula"
      }
    ]
  },
  {
    "id": "4t_cas-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es un sinónimo de «contento»?",
    "opcions": [
      "alegre",
      "triste",
      "cansado",
      "enfadado"
    ],
    "resposta_correcta": "alegre"
  },
  {
    "id": "4t_cas-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el antónimo de «grande»?",
    "opcions": [
      "pequeño",
      "alto",
      "fuerte",
      "ancho"
    ],
    "resposta_correcta": "pequeño"
  },
  {
    "id": "4t_cas-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es un sinónimo de «rápido»?",
    "opcions": [
      "veloz",
      "lento",
      "pequeño",
      "oscuro"
    ],
    "resposta_correcta": "veloz"
  },
  {
    "id": "4t_cas-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Oscuro» y «claro» son antónimos.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escribe un antónimo de «abrir».",
    "resposta_correcta": "cerrar",
    "respostes_acceptades": [
      "cerrar"
    ]
  },
  {
    "id": "4t_cas-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el antónimo de «subir»?",
    "opcions": [
      "bajar",
      "correr",
      "saltar",
      "andar"
    ],
    "resposta_correcta": "bajar"
  },
  {
    "id": "4t_cas-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "sol",
      "brilla",
      "mucho"
    ]
  },
  {
    "id": "4t_cas-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su sinónimo.",
    "parelles": [
      {
        "a": "Bonito",
        "b": "Hermoso"
      },
      {
        "a": "Feliz",
        "b": "Contento"
      },
      {
        "a": "Veloz",
        "b": "Rápido"
      },
      {
        "a": "Enorme",
        "b": "Grande"
      }
    ]
  },
  {
    "id": "4t_cas-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signo se usa al final de una pregunta?",
    "opcions": [
      "?",
      "·",
      ",",
      ";"
    ],
    "resposta_correcta": "?"
  },
  {
    "id": "4t_cas-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signo se usa al final de una exclamación?",
    "opcions": [
      "!",
      "?",
      ".",
      ":"
    ],
    "resposta_correcta": "!"
  },
  {
    "id": "4t_cas-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En español, las preguntas llevan signo de interrogación al principio y al final.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué se usa para separar los elementos de una lista?",
    "opcions": [
      "la coma",
      "el punto",
      "el guion",
      "los dos puntos"
    ],
    "resposta_correcta": "la coma"
  },
  {
    "id": "4t_cas-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Con qué tipo de letra se escribe siempre el principio de una frase?",
    "resposta_correcta": "mayuscula",
    "respostes_acceptades": [
      "mayuscula",
      "mayúscula"
    ]
  },
  {
    "id": "4t_cas-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signos rodean una pregunta en español?",
    "opcions": [
      "¿ y ?",
      "¡ y !",
      ": y ;",
      "( y )"
    ],
    "resposta_correcta": "¿ y ?"
  },
  {
    "id": "4t_cas-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "Mi",
      "perro",
      "se",
      "llama",
      "Rex"
    ]
  },
  {
    "id": "4t_cas-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada signo con su función.",
    "parelles": [
      {
        "a": "?",
        "b": "Pregunta"
      },
      {
        "a": "!",
        "b": "Exclamación"
      },
      {
        "a": ",",
        "b": "Separar elementos"
      },
      {
        "a": ".",
        "b": "Final de frase"
      }
    ]
  },
  {
    "id": "4t_eng-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «hola» in English?",
    "opcions": [
      "Hello",
      "Goodbye",
      "Please",
      "Thanks"
    ],
    "resposta_correcta": "Hello"
  },
  {
    "id": "4t_eng-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What colour is the sky?",
    "opcions": [
      "Blue",
      "Red",
      "Green",
      "Black"
    ],
    "resposta_correcta": "Blue"
  },
  {
    "id": "4t_eng-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Goodbye» means «adéu».",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What colour is a banana?",
    "opcions": [
      "Yellow",
      "Purple",
      "Blue",
      "Grey"
    ],
    "resposta_correcta": "Yellow"
  },
  {
    "id": "4t_eng-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «vermell»",
    "resposta_correcta": "red",
    "respostes_acceptades": [
      "red"
    ]
  },
  {
    "id": "4t_eng-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «si us plau» in English?",
    "opcions": [
      "Please",
      "Sorry",
      "Thanks",
      "Hello"
    ],
    "resposta_correcta": "Please"
  },
  {
    "id": "4t_eng-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "My",
      "name",
      "is",
      "Anna"
    ]
  },
  {
    "id": "4t_eng-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each Catalan colour with its English word.",
    "parelles": [
      {
        "a": "Verd",
        "b": "Green"
      },
      {
        "a": "Groc",
        "b": "Yellow"
      },
      {
        "a": "Vermell",
        "b": "Red"
      },
      {
        "a": "Blau",
        "b": "Blue"
      }
    ]
  },
  {
    "id": "4t_eng-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «set» in English?",
    "opcions": [
      "Seven",
      "Six",
      "Eight",
      "Five"
    ],
    "resposta_correcta": "Seven"
  },
  {
    "id": "4t_eng-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What number is «twelve»?",
    "opcions": [
      "12",
      "11",
      "13",
      "20"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "4t_eng-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Ten» is number 10.",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «quinze» in English?",
    "opcions": [
      "Fifteen",
      "Fourteen",
      "Fifty",
      "Sixteen"
    ],
    "resposta_correcta": "Fifteen"
  },
  {
    "id": "4t_eng-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Write the number for «three».",
    "resposta_correcta": "3",
    "respostes_acceptades": [
      "3"
    ]
  },
  {
    "id": "4t_eng-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «vint» in English?",
    "opcions": [
      "Twenty",
      "Twelve",
      "Ten",
      "Two"
    ],
    "resposta_correcta": "Twenty"
  },
  {
    "id": "4t_eng-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order these numbers from smallest to biggest.",
    "elements_ordre_correcte": [
      "two",
      "five",
      "nine",
      "twelve"
    ]
  },
  {
    "id": "4t_eng-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each number with its word.",
    "parelles": [
      {
        "a": "4",
        "b": "Four"
      },
      {
        "a": "8",
        "b": "Eight"
      },
      {
        "a": "10",
        "b": "Ten"
      },
      {
        "a": "20",
        "b": "Twenty"
      }
    ]
  },
  {
    "id": "4t_eng-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «gos» in English?",
    "opcions": [
      "Dog",
      "Cat",
      "Bird",
      "Fish"
    ],
    "resposta_correcta": "Dog"
  },
  {
    "id": "4t_eng-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What is «mare» in English?",
    "opcions": [
      "Mother",
      "Father",
      "Sister",
      "Brother"
    ],
    "resposta_correcta": "Mother"
  },
  {
    "id": "4t_eng-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Cat» means «gat».",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «germà» in English?",
    "opcions": [
      "Brother",
      "Sister",
      "Mother",
      "Father"
    ],
    "resposta_correcta": "Brother"
  },
  {
    "id": "4t_eng-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «peix»",
    "resposta_correcta": "fish",
    "respostes_acceptades": [
      "fish"
    ]
  },
  {
    "id": "4t_eng-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «ocell» in English?",
    "opcions": [
      "Bird",
      "Fish",
      "Dog",
      "Cat"
    ],
    "resposta_correcta": "Bird"
  },
  {
    "id": "4t_eng-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "I",
      "have",
      "got",
      "a",
      "dog"
    ]
  },
  {
    "id": "4t_eng-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each family member.",
    "parelles": [
      {
        "a": "Pare",
        "b": "Father"
      },
      {
        "a": "Germana",
        "b": "Sister"
      },
      {
        "a": "Avi",
        "b": "Grandfather"
      },
      {
        "a": "Fill",
        "b": "Son"
      }
    ]
  },
  {
    "id": "4t_eng-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What day comes after «Monday»?",
    "opcions": [
      "Tuesday",
      "Wednesday",
      "Sunday",
      "Friday"
    ],
    "resposta_correcta": "Tuesday"
  },
  {
    "id": "4t_eng-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «llibre» in English?",
    "opcions": [
      "Book",
      "Pencil",
      "Table",
      "Chair"
    ],
    "resposta_correcta": "Book"
  },
  {
    "id": "4t_eng-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«Sunday» is a day of the week.",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «cadira» in English?",
    "opcions": [
      "Chair",
      "Table",
      "Door",
      "Window"
    ],
    "resposta_correcta": "Chair"
  },
  {
    "id": "4t_eng-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «llapis»",
    "resposta_correcta": "pencil",
    "respostes_acceptades": [
      "pencil"
    ]
  },
  {
    "id": "4t_eng-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «taula» in English?",
    "opcions": [
      "Table",
      "Chair",
      "Book",
      "Door"
    ],
    "resposta_correcta": "Table"
  },
  {
    "id": "4t_eng-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the days of the week.",
    "elements_ordre_correcte": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ]
  },
  {
    "id": "4t_eng-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each object with its Catalan word.",
    "parelles": [
      {
        "a": "Book",
        "b": "Llibre"
      },
      {
        "a": "Pencil",
        "b": "Llapis"
      },
      {
        "a": "Table",
        "b": "Taula"
      },
      {
        "a": "Door",
        "b": "Porta"
      }
    ]
  },
  {
    "id": "4t_eng-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «I ___ a student.»",
    "opcions": [
      "am",
      "is",
      "are",
      "be"
    ],
    "resposta_correcta": "am"
  },
  {
    "id": "4t_eng-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «She ___ happy.»",
    "opcions": [
      "is",
      "am",
      "are",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "4t_eng-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "«They are» is correct for a plural subject.",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «We ___ friends.»",
    "opcions": [
      "are",
      "is",
      "am",
      "be"
    ],
    "resposta_correcta": "are"
  },
  {
    "id": "4t_eng-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 2,
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «You ___ tall.»",
    "resposta_correcta": "are",
    "respostes_acceptades": [
      "are"
    ]
  },
  {
    "id": "4t_eng-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «It ___ a big dog.»",
    "opcions": [
      "is",
      "am",
      "are",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "4t_eng-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "He",
      "is",
      "my",
      "friend"
    ]
  },
  {
    "id": "4t_eng-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each pronoun with its form of «to be».",
    "parelles": [
      {
        "a": "I",
        "b": "am"
      },
      {
        "a": "He",
        "b": "is"
      },
      {
        "a": "You",
        "b": "are"
      }
    ]
  },
  {
    "id": "4t_soc-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina serralada forma la frontera nord de Catalunya?",
    "opcions": [
      "els Pirineus",
      "la Serralada Litoral",
      "la Serralada Prelitoral",
      "els Alps"
    ],
    "resposta_correcta": "els Pirineus"
  },
  {
    "id": "4t_soc-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina depressió se situa al centre de Catalunya, entre els Pirineus i les serralades costaneres?",
    "opcions": [
      "la Depressió Central",
      "la Depressió Litoral",
      "la Serralada Litoral",
      "el Pla de Lleida"
    ],
    "resposta_correcta": "la Depressió Central"
  },
  {
    "id": "4t_soc-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la muntanya més alta de Catalunya?",
    "opcions": [
      "la Pica d'Estats",
      "el Montseny",
      "Montserrat",
      "el Puigmal"
    ],
    "resposta_correcta": "la Pica d'Estats"
  },
  {
    "id": "4t_soc-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Catalunya té costa al mar Mediterrani.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diuen les muntanyes properes a la costa, entre el mar i la Depressió Central?",
    "opcions": [
      "la Serralada Litoral i la Prelitoral",
      "els Pirineus",
      "els Pirineus Orientals",
      "la Serralada Cantàbrica"
    ],
    "resposta_correcta": "la Serralada Litoral i la Prelitoral"
  },
  {
    "id": "4t_soc-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Montserrat és...",
    "opcions": [
      "una muntanya emblemàtica de Catalunya",
      "un riu",
      "una comarca",
      "una platja"
    ],
    "resposta_correcta": "una muntanya emblemàtica de Catalunya"
  },
  {
    "id": "4t_soc-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin tipus de costa predomina a la Costa Brava?",
    "opcions": [
      "platges i cales",
      "grans glaceres",
      "dunes de desert",
      "volcans actius"
    ],
    "resposta_correcta": "platges i cales"
  },
  {
    "id": "4t_soc-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada element del relleu amb la seva descripció.",
    "parelles": [
      {
        "a": "Pica d'Estats",
        "b": "Muntanya més alta"
      },
      {
        "a": "Montserrat",
        "b": "Muntanya emblemàtica"
      },
      {
        "a": "Pirineus",
        "b": "Frontera nord"
      },
      {
        "a": "Costa Brava",
        "b": "Costa amb cales"
      }
    ]
  },
  {
    "id": "4t_soc-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el riu més llarg que passa per Catalunya?",
    "opcions": [
      "l'Ebre",
      "el Ter",
      "el Llobregat",
      "el Segre"
    ],
    "resposta_correcta": "l'Ebre"
  },
  {
    "id": "4t_soc-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin clima predomina a la costa catalana?",
    "opcions": [
      "el clima mediterrani",
      "el clima polar",
      "el clima tropical",
      "el clima desèrtic"
    ],
    "resposta_correcta": "el clima mediterrani"
  },
  {
    "id": "4t_soc-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Als Pirineus, a l'hivern, sol nevar.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins rius passen per Barcelona?",
    "opcions": [
      "el Llobregat i el Besòs",
      "el Segre i el Cinca",
      "el Ter i el Fluvià",
      "l'Ebre i el Sió"
    ],
    "resposta_correcta": "el Llobregat i el Besòs"
  },
  {
    "id": "4t_soc-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diuen els llacs d'origen glacial que trobem als Pirineus?",
    "opcions": [
      "estanys",
      "aiguamolls",
      "deltes",
      "embassaments"
    ],
    "resposta_correcta": "estanys"
  },
  {
    "id": "4t_soc-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On es troba el delta de l'Ebre?",
    "opcions": [
      "a la desembocadura del riu Ebre, al sud de Catalunya",
      "als Pirineus",
      "a Barcelona ciutat",
      "al Maresme"
    ],
    "resposta_correcta": "a la desembocadura del riu Ebre, al sud de Catalunya"
  },
  {
    "id": "4t_soc-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A l'estiu, el clima mediterrani sol ser...",
    "opcions": [
      "càlid i sec",
      "fred i plujós",
      "nevat",
      "molt humit tot l'any"
    ],
    "resposta_correcta": "càlid i sec"
  },
  {
    "id": "4t_soc-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb la seva definició.",
    "parelles": [
      {
        "a": "Ebre",
        "b": "Riu més llarg"
      },
      {
        "a": "Besòs",
        "b": "Passa per Barcelona"
      },
      {
        "a": "Delta",
        "b": "Desembocadura d'un riu"
      },
      {
        "a": "Estany",
        "b": "Llac d'origen glacial"
      }
    ]
  },
  {
    "id": "4t_soc-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la capital de Catalunya?",
    "opcions": [
      "Barcelona",
      "Girona",
      "Lleida",
      "Tarragona"
    ],
    "resposta_correcta": "Barcelona"
  },
  {
    "id": "4t_soc-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena el conjunt de persones que viuen en un mateix territori?",
    "opcions": [
      "la població",
      "el municipi",
      "la comarca",
      "el govern"
    ],
    "resposta_correcta": "la població"
  },
  {
    "id": "4t_soc-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Un municipi el governa l'ajuntament, dirigit per l'alcalde o alcaldessa.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quines són les quatre capitals de província de Catalunya?",
    "opcions": [
      "Barcelona, Girona, Lleida i Tarragona",
      "Barcelona, Reus, Sabadell i Mataró",
      "Girona, Figueres, Vic i Manresa",
      "Lleida, Balaguer, Tremp i Sort"
    ],
    "resposta_correcta": "Barcelona, Girona, Lleida i Tarragona"
  },
  {
    "id": "4t_soc-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el registre on s'inscriuen els habitants d'un municipi?",
    "opcions": [
      "el padró municipal",
      "el DNI",
      "el mapa",
      "el cens escolar"
    ],
    "resposta_correcta": "el padró municipal"
  },
  {
    "id": "4t_soc-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la ciutat més poblada de Catalunya?",
    "opcions": [
      "Barcelona",
      "Girona",
      "Tarragona",
      "Lleida"
    ],
    "resposta_correcta": "Barcelona"
  },
  {
    "id": "4t_soc-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui governa un ajuntament?",
    "opcions": [
      "l'alcalde o alcaldessa i els regidors",
      "el rei",
      "el mestre",
      "el president de l'Estat"
    ],
    "resposta_correcta": "l'alcalde o alcaldessa i els regidors"
  },
  {
    "id": "4t_soc-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte amb la seva definició.",
    "parelles": [
      {
        "a": "Alcalde o alcaldessa",
        "b": "Governa l'ajuntament"
      },
      {
        "a": "Padró",
        "b": "Registre d'habitants"
      },
      {
        "a": "Barcelona",
        "b": "Capital de Catalunya"
      },
      {
        "a": "Municipi",
        "b": "Unitat administrativa bàsica"
      }
    ]
  },
  {
    "id": "4t_soc-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quina comarca pertany la ciutat de Barcelona?",
    "opcions": [
      "el Barcelonès",
      "el Bages",
      "el Vallès Oriental",
      "el Maresme"
    ],
    "resposta_correcta": "el Barcelonès"
  },
  {
    "id": "4t_soc-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la capital de la comarca del Bages?",
    "opcions": [
      "Manresa",
      "Vic",
      "Igualada",
      "Berga"
    ],
    "resposta_correcta": "Manresa"
  },
  {
    "id": "4t_soc-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Catalunya està dividida en comarques i aquestes, en municipis.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Girona com a capital?",
    "opcions": [
      "el Gironès",
      "l'Alt Empordà",
      "la Selva",
      "la Garrotxa"
    ],
    "resposta_correcta": "el Gironès"
  },
  {
    "id": "4t_soc-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Lleida com a capital?",
    "opcions": [
      "el Segrià",
      "l'Urgell",
      "la Noguera",
      "el Pla d'Urgell"
    ],
    "resposta_correcta": "el Segrià"
  },
  {
    "id": "4t_soc-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Tarragona com a capital?",
    "opcions": [
      "el Tarragonès",
      "el Baix Camp",
      "l'Alt Camp",
      "el Priorat"
    ],
    "resposta_correcta": "el Tarragonès"
  },
  {
    "id": "4t_soc-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes comarques té Catalunya aproximadament?",
    "opcions": [
      "unes 42",
      "unes 10",
      "unes 100",
      "unes 4"
    ],
    "resposta_correcta": "unes 42"
  },
  {
    "id": "4t_soc-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada capital amb la seva comarca.",
    "parelles": [
      {
        "a": "Manresa",
        "b": "Bages"
      },
      {
        "a": "Vic",
        "b": "Osona"
      },
      {
        "a": "Igualada",
        "b": "Anoia"
      },
      {
        "a": "Berga",
        "b": "Berguedà"
      }
    ]
  },
  {
    "id": "4t_soc-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertanyen l'agricultura i la ramaderia?",
    "opcions": [
      "el sector primari",
      "el sector secundari",
      "el sector terciari",
      "el sector quaternari"
    ],
    "resposta_correcta": "el sector primari"
  },
  {
    "id": "4t_soc-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertany la indústria (fabricar productes)?",
    "opcions": [
      "el sector secundari",
      "el sector primari",
      "el sector terciari",
      "cap"
    ],
    "resposta_correcta": "el sector secundari"
  },
  {
    "id": "4t_soc-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertanyen serveis com l'ensenyament, el comerç o la sanitat?",
    "opcions": [
      "el sector terciari",
      "el sector primari",
      "el sector secundari",
      "el sector agrari"
    ],
    "resposta_correcta": "el sector terciari"
  },
  {
    "id": "4t_soc-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La pesca forma part del sector primari.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina activitat és pròpia del sector secundari?",
    "opcions": [
      "construir cotxes en una fàbrica",
      "collir olives",
      "vendre roba en una botiga",
      "cuidar pacients a l'hospital"
    ],
    "resposta_correcta": "construir cotxes en una fàbrica"
  },
  {
    "id": "4t_soc-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El turisme, molt important a Catalunya, pertany a quin sector?",
    "opcions": [
      "el terciari",
      "el primari",
      "el secundari",
      "cap"
    ],
    "resposta_correcta": "el terciari"
  },
  {
    "id": "4t_soc-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes és una feina del sector primari?",
    "opcions": [
      "pagès o pagesa",
      "mestre o mestra",
      "metge o metgessa",
      "informàtic o informàtica"
    ],
    "resposta_correcta": "pagès o pagesa"
  },
  {
    "id": "4t_soc-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada activitat amb el seu sector econòmic.",
    "parelles": [
      {
        "a": "Pescar",
        "b": "Sector primari"
      },
      {
        "a": "Fabricar cotxes",
        "b": "Sector secundari"
      },
      {
        "a": "Ensenyar",
        "b": "Sector terciari"
      },
      {
        "a": "Investigar noves tecnologies",
        "b": "Sector quaternari"
      }
    ]
  },
  {
    "id": "4t_nat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins animals tenen esquelet intern amb columna vertebral?",
    "opcions": [
      "els vertebrats",
      "els invertebrats",
      "els insectes",
      "les meduses"
    ],
    "resposta_correcta": "els vertebrats"
  },
  {
    "id": "4t_nat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin grup de vertebrats pertany la granota?",
    "opcions": [
      "els amfibis",
      "els rèptils",
      "els mamífers",
      "els peixos"
    ],
    "resposta_correcta": "els amfibis"
  },
  {
    "id": "4t_nat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin grup de vertebrats respira per brànquies?",
    "opcions": [
      "els peixos",
      "els mamífers",
      "els ocells",
      "els rèptils"
    ],
    "resposta_correcta": "els peixos"
  },
  {
    "id": "4t_nat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Els insectes són animals invertebrats.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina característica tenen tots els mamífers?",
    "opcions": [
      "alimenten les cries amb llet",
      "posen ous sempre",
      "tenen plomes",
      "viuen només a l'aigua"
    ],
    "resposta_correcta": "alimenten les cries amb llet"
  },
  {
    "id": "4t_nat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests animals és un rèptil?",
    "opcions": [
      "la serp",
      "el gos",
      "el tauró",
      "l'àguila"
    ],
    "resposta_correcta": "la serp"
  },
  {
    "id": "4t_nat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin grup d'invertebrats té el cos tou, com el cargol?",
    "opcions": [
      "els mol·luscs",
      "els insectes",
      "els aràcnids",
      "els crustacis"
    ],
    "resposta_correcta": "els mol·luscs"
  },
  {
    "id": "4t_nat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada animal amb el seu grup.",
    "parelles": [
      {
        "a": "Granota",
        "b": "Amfibi"
      },
      {
        "a": "Serp",
        "b": "Rèptil"
      },
      {
        "a": "Tauró",
        "b": "Peix"
      },
      {
        "a": "Gat",
        "b": "Mamífer"
      }
    ]
  },
  {
    "id": "4t_nat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta absorbeix l'aigua i les sals minerals del sòl?",
    "opcions": [
      "l'arrel",
      "la tija",
      "la fulla",
      "la flor"
    ],
    "resposta_correcta": "l'arrel"
  },
  {
    "id": "4t_nat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el procés pel qual les plantes fabriquen el seu propi aliment amb la llum del sol?",
    "opcions": [
      "la fotosíntesi",
      "la respiració",
      "la reproducció",
      "la digestió"
    ],
    "resposta_correcta": "la fotosíntesi"
  },
  {
    "id": "4t_nat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin gas alliberen les plantes durant la fotosíntesi?",
    "opcions": [
      "l'oxigen",
      "el diòxid de carboni",
      "el nitrogen",
      "l'hidrogen"
    ],
    "resposta_correcta": "l'oxigen"
  },
  {
    "id": "4t_nat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Les arrels, la tija i les fulles són òrgans de la planta.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta es transforma en fruit després de la pol·linització?",
    "opcions": [
      "la flor",
      "l'arrel",
      "la tija",
      "la fulla"
    ],
    "resposta_correcta": "la flor"
  },
  {
    "id": "4t_nat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què les plantes necessiten la llum del sol?",
    "opcions": [
      "per fer la fotosíntesi",
      "només per créixer les arrels",
      "no la necessiten",
      "per respirar oxigen"
    ],
    "resposta_correcta": "per fer la fotosíntesi"
  },
  {
    "id": "4t_nat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta transporta la saba des de l'arrel fins a les fulles?",
    "opcions": [
      "la tija",
      "la flor",
      "el fruit",
      "la llavor"
    ],
    "resposta_correcta": "la tija"
  },
  {
    "id": "4t_nat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquestes parts de la planta de sota (arrel) a dalt (flor).",
    "elements_ordre_correcte": [
      "Arrel",
      "Tija",
      "Fulla",
      "Flor"
    ]
  },
  {
    "id": "4t_nat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és un ecosistema?",
    "opcions": [
      "el conjunt d'éssers vius i el medi on viuen",
      "només els animals d'un lloc",
      "només les plantes",
      "un tipus de roca"
    ],
    "resposta_correcta": "el conjunt d'éssers vius i el medi on viuen"
  },
  {
    "id": "4t_nat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomenen els éssers vius que fabriquen el seu propi aliment, com les plantes?",
    "opcions": [
      "productors",
      "consumidors",
      "descomponedors",
      "depredadors"
    ],
    "resposta_correcta": "productors"
  },
  {
    "id": "4t_nat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomenen els animals que es mengen altres animals?",
    "opcions": [
      "consumidors",
      "productors",
      "descomponedors",
      "cap dels anteriors"
    ],
    "resposta_correcta": "consumidors"
  },
  {
    "id": "4t_nat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Els bolets i alguns bacteris són descomponedors que reciclen la matèria orgànica.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin ecosistema trobem als Pirineus?",
    "opcions": [
      "un ecosistema de muntanya",
      "un ecosistema marí",
      "un desert",
      "una selva tropical"
    ],
    "resposta_correcta": "un ecosistema de muntanya"
  },
  {
    "id": "4t_nat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és una cadena alimentària?",
    "opcions": [
      "la relació de qui es menja a qui dins un ecosistema",
      "un tipus de planta",
      "un aparell del cos",
      "un instrument de mesura"
    ],
    "resposta_correcta": "la relació de qui es menja a qui dins un ecosistema"
  },
  {
    "id": "4t_nat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important protegir la biodiversitat?",
    "opcions": [
      "perquè manté l'equilibri dels ecosistemes",
      "perquè no serveix de res",
      "només per motius estètics",
      "perquè així hi ha més contaminació"
    ],
    "resposta_correcta": "perquè manté l'equilibri dels ecosistemes"
  },
  {
    "id": "4t_nat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte amb la seva definició.",
    "parelles": [
      {
        "a": "Productors",
        "b": "Fabriquen el seu aliment"
      },
      {
        "a": "Consumidors",
        "b": "Es mengen altres éssers vius"
      },
      {
        "a": "Descomponedors",
        "b": "Reciclen la matèria orgànica"
      },
      {
        "a": "Ecosistema",
        "b": "Éssers vius i el medi"
      }
    ]
  },
  {
    "id": "4t_nat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin aparell s'encarrega de portar l'oxigen de l'aire cap a la sang?",
    "opcions": [
      "l'aparell respiratori",
      "l'aparell digestiu",
      "l'aparell circulatori",
      "l'aparell locomotor"
    ],
    "resposta_correcta": "l'aparell respiratori"
  },
  {
    "id": "4t_nat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin òrgan bombeja la sang per tot el cos?",
    "opcions": [
      "el cor",
      "el pulmó",
      "l'estómac",
      "el fetge"
    ],
    "resposta_correcta": "el cor"
  },
  {
    "id": "4t_nat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On es fa la primera digestió dels aliments?",
    "opcions": [
      "a la boca",
      "a l'estómac",
      "als pulmons",
      "al cor"
    ],
    "resposta_correcta": "a la boca"
  },
  {
    "id": "4t_nat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "L'aparell locomotor està format pels ossos i els músculs.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants ossos té aproximadament l'esquelet d'una persona adulta?",
    "opcions": [
      "206",
      "50",
      "1.000",
      "20"
    ],
    "resposta_correcta": "206"
  },
  {
    "id": "4t_nat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin aparell permet moure el cos gràcies als ossos i els músculs?",
    "opcions": [
      "l'aparell locomotor",
      "l'aparell digestiu",
      "l'aparell respiratori",
      "l'aparell circulatori"
    ],
    "resposta_correcta": "l'aparell locomotor"
  },
  {
    "id": "4t_nat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On van a parar els aliments després de l'estómac?",
    "opcions": [
      "a l'intestí",
      "als pulmons",
      "al cor",
      "al cervell"
    ],
    "resposta_correcta": "a l'intestí"
  },
  {
    "id": "4t_nat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada òrgan amb la seva funció.",
    "parelles": [
      {
        "a": "Cor",
        "b": "Bombeja la sang"
      },
      {
        "a": "Pulmons",
        "b": "Intercanvien l'oxigen"
      },
      {
        "a": "Estómac",
        "b": "Fa la digestió"
      },
      {
        "a": "Ossos",
        "b": "Formen l'esquelet"
      }
    ]
  },
  {
    "id": "4t_nat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins són els tres estats de la matèria?",
    "opcions": [
      "sòlid, líquid i gasós",
      "calent, fred i tebi",
      "dur, tou i elàstic",
      "gran, mitjà i petit"
    ],
    "resposta_correcta": "sòlid, líquid i gasós"
  },
  {
    "id": "4t_nat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin procés fa que l'aigua líquida es converteixi en gel?",
    "opcions": [
      "la solidificació",
      "l'evaporació",
      "la fusió",
      "la condensació"
    ],
    "resposta_correcta": "la solidificació"
  },
  {
    "id": "4t_nat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el pas de l'aigua líquida a vapor d'aigua?",
    "opcions": [
      "l'evaporació",
      "la solidificació",
      "la fusió",
      "la condensació"
    ],
    "resposta_correcta": "l'evaporació"
  },
  {
    "id": "4t_nat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El gel és aigua en estat sòlid.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 2,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina font d'energia prové directament del Sol?",
    "opcions": [
      "l'energia solar",
      "l'energia del carbó",
      "l'energia nuclear",
      "l'energia del petroli"
    ],
    "resposta_correcta": "l'energia solar"
  },
  {
    "id": "4t_nat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes és una font d'energia renovable?",
    "opcions": [
      "l'energia eòlica (del vent)",
      "el petroli",
      "el carbó",
      "el gas natural"
    ],
    "resposta_correcta": "l'energia eòlica (del vent)"
  },
  {
    "id": "4t_nat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el pas de vapor d'aigua a aigua líquida, per exemple als núvols?",
    "opcions": [
      "la condensació",
      "l'evaporació",
      "la solidificació",
      "la fusió"
    ],
    "resposta_correcta": "la condensació"
  },
  {
    "id": "4t_nat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les fases del cicle de l'aigua.",
    "elements_ordre_correcte": [
      "Evaporació",
      "Condensació",
      "Precipitació",
      "Recollida"
    ]
  }
];
