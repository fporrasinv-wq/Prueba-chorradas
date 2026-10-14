# tools/benchmark/

Aquesta carpeta la genera `node tools/sembrar-fallos.js --curs <curs>`.
Els fitxers que hi crea (`mutantes.json`, `controles.json`,
`preguntes-cegues.json`, `claves.json`) són dades de treball
reproduïbles (amb llavor fixa) i no es versionen — per això estan a
`.gitignore`. Només aquest `README.md` queda al repositori perquè la
carpeta existeixi i quedi clar per a què serveix.

Torna a generar-los quan els necessitis; veure `tools/README.md` per
a les instruccions completes.
