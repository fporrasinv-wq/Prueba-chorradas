# Esquema d'id per a preguntes de nivell fàcil/difícil

A partir del Bloc 7, cada pregunta de `data/questions.js` té un camp
`nivell` ("facil" | "normal" | "dificil"). Les 752 preguntes
existents (Bloc 1-6) són totes `"normal"` i mantenen el seu id
original sense canvis.

Quan el Bloc 8 (o sessions futures) afegeixi contingut nou per als
nivells `facil` o `dificil`, cal seguir aquest esquema d'id perquè no
col·lisioni mai amb un id existent i quedi clar a quin nivell
pertany:

```
<curs>_<lessonId>_<f|d>_q<1..6>
```

- `<curs>`: el mateix identificador de curs que ja s'usa (`1r`, `4t`,
  `5è`, `6è`).
- `<lessonId>`: el mateix identificador de lliçó que ja s'usa per a
  les preguntes "normal" d'aquell curs+matèria+tema (p. ex. `mat-5-1`
  per a "Nombres decimals" de 5è). Es pot trobar mirant l'id d'una
  pregunta "normal" existent de la mateixa lliçó i traient-ne el
  `_q<n>` final.
- `<f|d>`: `f` per a nivell fàcil, `d` per a nivell difícil (el
  nivell normal no porta cap lletra extra, per mantenir els ids
  actuals intactes).
- `q<1..6>`: el número de pregunta dins la lliçó, igual que ara (6
  preguntes per lliçó i nivell).

**Exemples:**
- `5è_mat-5-1_f_q1` — primera pregunta de nivell fàcil de "Nombres
  decimals" (5è).
- `6è_soc-6-3_d_q4` — quarta pregunta de nivell difícil d'"El canvi
  climàtic" (6è).

**Disponibilitat d'un nivell:** l'app considera un nivell disponible
per a un curs només si **totes** les lliçons d'aquell curs tenen com
a mínim 5 preguntes d'aquell nivell (`isNivellAvailable()` a
`app.js`). Si es vol afegir contingut fàcil/difícil de manera
incremental, cal completar-lo lliçó per lliçó fins arribar a aquest
mínim abans que el nivell aparegui com a disponible (en lloc de
"Aviat") al selector de perfil.
