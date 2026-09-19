# Avances — Repassa'l!

- Sesión 1: análisis de competencia (Academons, Smartick) y validación del hueco de mercado (catalán + currículum específico de la Generalitat)
- Sesión 1: revisión del primer prototipo de Claude Code ("Repassa'l!", 4t de primària) vía capturas
- Sesión 1: identificado el insight de las propostes i projectes como diferenciador real frente a un banco fijo por currículum oficial
- Sesión 2: revisado el log completo de Claude Code — prototipo "Repassa'l!" (6 matèries, 31 lliçons, ~230 preguntes) y segunda app "Juga i Aprèn!" (1r de primària, carpeta petits/) creada sin decisión explícita previa
- Sesión 2: acordado que ambas apps comparten el mismo motor de juego (XP, vides, mascota Robi, sons, 5 tipus d'exercici) y que hace falta decidir si unificarlas en una sola app con selector de curs/edat
- Sesión 2: identificada la fuente curricular oficial (Decret 175/2022) y su limitación práctica — organizado per àrea con els tres cicles integrats, no en tres documents separats
- Sesión 2: acordada la estructura de metadatos JSON para el banco de preguntas (id, curs, cicle, materia, tema, dificultat, tipus, origen, explicacio)
- Sesión 2: acordado el método de trabajo en bloques (decidir aquí → prompt para Claude Code → verificar → corregir → avanzar) y la creación de este registro junto con pendientes.md
- Sesión 3: decidido unificar "Repassa'l!" y "Juga i Aprèn!" en una única app con selector de curs/edat, en vez de mantener dos apps separadas
- Sesión 3: Bloque 1 completado por Claude Code — app unificada (data/questions.js array plano con 392 preguntas migradas por script, data/meta.js separado, motor único, selector de perfil con progreso aislado por localStorage, probado con Playwright). Solo cubre 1r y 4t; detectados errores de contenido menores y la dificultad posicional (no pedagógica) a resolver en el Bloque 2
- Sesión 3: Bloque 2 completado por Claude Code — 360 preguntas nuevas de cicle superior (5è i 6è) en las 6 matèries, ancoradas al documento curriculum-cicle-superior.md (extraído por Claude de projectes.xtec.cat tras confirmar que el entorno de Claude Code bloqueaba ese dominio). Total: 752 preguntas, 115 lliçons, 4 cursos en el selector. Pendiente verificar el criterio real usado para dificultat y el reparto 5è/6è (ver pendientes.md)
- Sesión 3: verificado (revisando el script real, no solo el resumen) que la dificultat de las 360 preguntas de 5è/6è se asignó a mano con criterio pedagógico, no posicional — 60% de las 60 lliçons tienen secuencias de dificultad no monótonas; el 40% restante es progresión pedagógica intencional, no un artefacto de índice. Punto cerrado
- Sesión 3: creadas copias de pendientes.md y avances.md para el repositorio (docs/), manteniendo el repo como fuente de verdad y esta conversación como copia de trabajo
