# Repassa'l! 🦉

Aplicació web d'estil Duolingo per repassar **Matemàtiques**, **Llengua catalana**,
**Ciències socials** i **Ciències naturals** de **4t de primària**, amb continguts
basats en el currículum d'Educació Primària de la Generalitat de Catalunya.

## Com funciona

- 4 matèries, cada una amb un recorregut de lliçons que es van desbloquejant.
- Preguntes de tipus test, veritat/fals i resposta escrita.
- Sistema de punts d'experiència (XP), ratxa de dies i estrelles per lliçó.
- Progrés desat automàticament al navegador (localStorage) — no cal registrar-se.
- Sense dependències ni instal·lació: HTML, CSS i JavaScript purs.

## Com executar-la

Només cal obrir `index.html` al navegador, o servir la carpeta amb qualsevol
servidor estàtic, per exemple:

```bash
python3 -m http.server 8000
```

I després visitar `http://localhost:8000`.

## Estructura

- `index.html` — punt d'entrada.
- `style.css` — estils visuals (paleta i tipografia a l'estil Duolingo).
- `content.js` — banc de preguntes per matèria i lliçó.
- `app.js` — lògica de l'aplicació (navegació, joc, progrés, XP i ratxa).

## Ampliar continguts

Per afegir o editar preguntes, edita `content.js`. Cada lliçó és un objecte amb
`id`, `title`, `icon` i una llista de `questions` (`mcq`, `tf` o `fill`).
