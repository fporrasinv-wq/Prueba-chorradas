# Repassa'l! 🤖

Aplicacions web d'estil Duolingo per repassar el currículum d'Educació
Primària de la Generalitat de Catalunya, jugant. Sense dependències,
sense backend: HTML, CSS i JavaScript purs, amb el progrés desat al
navegador (localStorage).

## Apps disponibles

### `/` — Repassa'l! (4t de primària, 9-10 anys)

Repassa **Matemàtiques**, **Llengua catalana**, **Llengua castellana**,
**Anglès**, **Ciències socials** i **Ciències naturals**. 31 lliçons amb
preguntes de tipus test, veritat/fals, resposta escrita, ordenar
paraules i aparellar conceptes.

### `/petits/` — Juga i Aprèn! (1r de primària, 6 anys)

Versió simplificada per a infants que just comencen a llegir: preguntes
molt senzilles (matemàtica bàsica, vocals, colors...), poques opcions
per pregunta i tot el text en **MAJÚSCULES** per facilitar-ne la
lectura. Mateixes 6 matèries i mateix motor de joc.

## Com funciona (les dues apps)

- Cada matèria té un recorregut de lliçons que es va desbloquejant.
- Mascota "Robi", un robot que dona ànims, reacciona a les respostes i
  pot llegir els missatges en veu alta (síntesi de veu del navegador).
- Sons generats amb Web Audio API (encert, error, pista, lliçó
  completada), amb interruptor de so a la barra superior.
- Sistema de punts d'experiència (XP), ratxa de dies, vides i estrelles
  per lliçó, amb un botó de pista (💡) a algunes preguntes.
- Progrés desat automàticament al navegador — no cal registrar-se.

## Com executar-les

Només cal obrir `index.html` (o `petits/index.html`) al navegador, o
servir la carpeta amb qualsevol servidor estàtic, per exemple:

```bash
python3 -m http.server 8000
```

I després visitar `http://localhost:8000` (o `http://localhost:8000/petits/`).

## Estructura

Cada app (`/` i `/petits/`) té els mateixos quatre fitxers:

- `index.html` — punt d'entrada.
- `style.css` — estils visuals (paleta i tipografia a l'estil Duolingo).
- `content.js` — banc de preguntes per matèria i lliçó.
- `app.js` — lògica de l'aplicació (navegació, joc, progrés, XP, so i mascota).

## Ampliar continguts

Per afegir o editar preguntes, edita el `content.js` corresponent. Cada
lliçó és un objecte amb `id`, `title`, `icon` i una llista de
`questions`, amb tipus `mcq`, `tf`, `fill`, `order` o `match`.
