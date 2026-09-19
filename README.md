# Repassa'l! 🤖

Una única app web d'estil Duolingo per repassar el currículum
d'Educació Primària de la Generalitat de Catalunya, jugant. Sense
dependències, sense backend: HTML, CSS i JavaScript purs, amb el
progrés desat al navegador (localStorage).

Admet diversos perfils (per exemple, germans que comparteixen el
mateix ordinador) i diversos cursos — actualment **1r de primària**
(6 anys), **4t de primària** (9-10 anys), **5è de primària** (10-11
anys) i **6è de primària** (11-12 anys) — dins d'un sol motor de
joc.

## Com funciona

- **Perfils**: en obrir l'app es demana un nom i un curs. Cada perfil
  desa el seu propi progrés (XP, ratxa, estrelles per lliçó) sota una
  clau de `localStorage` pròpia, de manera que dos perfils no es
  trepitgen. Es pot canviar de perfil en qualsevol moment sense perdre
  res ("Canvia de perfil" a la pantalla d'inici).
- Cada matèria té un recorregut de lliçons que es va desbloquejant.
- Mascota "Robi", un robot que dona ànims, reacciona a les respostes i
  pot llegir els missatges en veu alta (síntesi de veu del navegador).
- Sons generats amb Web Audio API (encert, error, pista, lliçó
  completada), amb interruptor de so a la barra superior.
- Preguntes de tipus test, veritat/fals, resposta escrita, ordenar
  elements i emparellar conceptes, amb un botó de pista (💡) en
  algunes.
- **Aparença per curs**: el curs del perfil actiu determina si el text
  es mostra en majúscules i amb lletra/botons més grans (1r) o amb
  l'aparença estàndard (4t). És un paràmetre de dades (`data/meta.js`
  → `CURSOS[].visual`), no dos apps ni dos fulls d'estil diferents.

## Com executar-la

Només cal obrir `index.html` al navegador, o servir la carpeta amb
qualsevol servidor estàtic, per exemple:

```bash
python3 -m http.server 8000
```

I després visitar `http://localhost:8000`.

## Estructura

- `index.html` — punt d'entrada.
- `style.css` — estils visuals. Les diferències entre cursos viuen com
  a variants sota les classes `body.visual-uppercase` /
  `body.visual-gran`, aplicades segons el curs del perfil actiu.
- `app.js` — tot el motor: perfils, navegació, joc, progrés, so i
  mascota.
- `data/questions.js` — banc de preguntes unificat (vegeu més avall).
- `data/meta.js` — metadades de presentació: nom/icona/color de cada
  matèria (`SUBJECTS_META`), icona i ordre de cada lliçó
  (`LESSON_META`) i els cursos disponibles amb els seus paràmetres
  visuals (`CURSOS`).

## El banc de preguntes (`data/questions.js`)

Totes les preguntes, de tots els cursos, viuen en un únic array pla
`QUESTIONS`. Es va triar un sol fitxer (en lloc d'un per curs) perquè
`curs`, `cicle`, `materia`, etc. són simplement camps d'una mateixa
"taula" de preguntes: mantenir-los junts fa trivial filtrar-los o
consultar-los amb `Array.filter` (p. ex. "totes les preguntes de
matemàtiques de dificultat 3, sigui quin sigui el curs") i afegir
cursos nous en el futur és només afegir-hi objectes, sense haver de
crear ni connectar cap fitxer nou. Amb ~400 preguntes el fitxer no és
prou gran com perquè calgui partir-lo per rendiment.

Cada pregunta té aquests camps comuns:

```
id, curs, cicle, materia, tema, dificultat (1-3), tipus, origen, explicacio
```

I, segons el `tipus`, aquests camps propis:

| tipus               | camps propis                                              |
|----------------------|-----------------------------------------------------------|
| `test`               | `pregunta`, `opcions[]`, `resposta_correcta`               |
| `veritat_fals`       | `pregunta`, `resposta_correcta` (true/false)                |
| `resposta_escrita`   | `pregunta`, `resposta_correcta`, `respostes_acceptades[]`   |
| `ordenar`            | `pregunta`, `elements_ordre_correcte[]`                     |
| `emparellar`         | `pregunta`, `parelles[]` (`{a, b}`)                          |

El camp `dificultat` es va assignar amb una heurística basada en la
posició de la pregunta dins la lliçó i el seu tipus — no és una
valoració pedagògica exacta, es pot afinar sense tocar el contingut.
(Aquesta heurística només es va fer servir per a 1r i 4t; el contingut
de 5è i 6è porta una dificultat assignada amb criteri pedagògic real,
vegeu més avall.)

### Contingut de cicle superior (5è i 6è)

El banc de preguntes de 5è i 6è es va generar a partir del currículum
oficial (Decret 175/2022, "sabers" de cicle superior), guardat a
`docs/curriculum-cicle-superior.md` per a referència i traçabilitat.
A diferència de 1r i 4t, aquí el camp `dificultat` es va assignar
llegint la progressió que el propi document mostra dins 5è i 6è (què
és un saber més bàsic i què és més avançat), no amb una heurística de
posició.

Ciències socials i Ciències naturals comparteixen font oficial
("Coneixement del Medi Natural, Social i Cultural"): la part "Cultura
científica" es va assignar a Ciències naturals i la part "Societats i
territoris" a Ciències socials.

## Ampliar continguts

Per afegir o editar preguntes, edita `data/questions.js` seguint
l'esquema d'aquí sobre. Per afegir una lliçó nova cal, a més, afegir
la seva entrada a `LESSON_META` a `data/meta.js` (icona i ordre). Per
afegir un curs nou, cal afegir-lo a `CURSOS` a `data/meta.js`.
