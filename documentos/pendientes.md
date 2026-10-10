# Pendientes — Repassa'l!

## Bases del producto (necesario antes de avanzar en serio)
- Auditar el contenido actual (1r y 4t, ya en formato JSON en data/questions.js) contra el currículum oficial (Decret 175/2022)
- Recalcular el campo dificultat de 1r/4t con criterio pedagógico real — actualmente es solo posicional (1a pregunta=1, última=3), no válido para la dificultad adaptativa
- Volumen de contenido insuficiente para uso durante todo el curso escolar: 180 preguntas por curso (6 matèries × 5 lliçons × 6 preguntes) se agotan en ~2 semanas con uso diario — falta un mecanismo de repetición espaciada (repasar lecciones ya completadas, barajando preguntas y opciones) antes de confiar solo en generar más contenido nuevo
- Revisar con muestreo el reparto de contenido entre 5è y 6è dentro de cicle superior — el documento oficial no separa 5è de 6è, así que ese reparto es un criterio pedagógico inventado por Claude Code, no trazable al currículum
- Antes de cualquier lanzamiento público o monetización: hacer el repositorio privado (requiere plan de pago de GitHub para mantener Pages) y valorar registrar la marca del nombre en la OEPM — no urgente mientras solo lo usan los hijos de Tico
- Generar contenido del resto de cursos (2n, 3r) cuando corresponda
- La app separa Ciències socials y Ciències naturals en dos matèries, mientras el currículum oficial las une en una sola àrea ("Coneixement del Medi Natural, Social i Cultural") con un único documento de sabers — decisión ya aplicada correctamente en el Bloque 2 siguiendo las etiquetas del propio documento (Cultura científica → Naturals, Societats i territoris → Socials)
- Decidir modelo de negocio: suscripción freemium, B2B, o venta directa
- Resolver conflicto de prioridad con los otros proyectos activos de Tico (Kairós hábitos, Kairós astrólogo, web de tenis) dentro de sus ~3h/día

## Mejoras identificadas en el proceso (no bloqueantes, aparcadas de momento)
- Feature de propostes: el padre introduce el tema semanal y la app genera preguntas — empezar en modo offline (Claude genera el JSON, se sube a mano), sin llamadas en directo a la API por coste y seguridad de la clave
- Dificultad adaptativa automática según aciertos/fallos consecutivos, usando el campo dificultat
- Tutor con IA que explica el porqué del error al fallar una pregunta (se apoya en el campo explicacio ya poblado en cada pregunta)
- Verticales adicionales (carnet de conducir, manipulador de alimentos, PER) — aparcadas explícitamente para evitar dispersión
- Plataforma B2B multi-tenant para que otros centros/autoescoles suban su propio temario — aparcada, fase muy posterior

## Resuelto — Sesión 4 (bugs detectados probando con usuarios reales)
- [x] La pista revelaba la respuesta en varios casos (respuestas cortas en `resposta_escrita`; `ordenar`/`emparellar` no tenían pista) — corregido
- [x] No se podía cambiar el curs de un perfil ya creado — corregido (botón ✏️ en la pantalla de perfiles, progreso preservado)
- [x] Comportamiento indefinido al quedarse sin vides — corregido (la lección termina mostrando el resumen de lo respondido hasta ese punto)
- [x] Sospecha de opción no clicable por apóstrofes catalanes — investigado a fondo (2.698 clics reales, 0 fallos reales); descartado con evidencia, ver avances.md para el detalle

## Resuelto — Sesión 5 (corrección de contenido tras auditoría)
- [x] 18 correcciones puntuales de contenido por id (respuestas incorrectas, opciones duplicadas con otra lección, distractores confusos, respuestas numéricas sin variante con punto de miles) — ver avances.md para el detalle
- [x] Desequilibrio verdadero/falso (94% verdadero) — rebalanceado a ~50/50 por curso y materia, cada pregunta V/F (falsa o verdadera) lleva ahora una `explicacio` corta con el hecho correcto, y el motor la muestra en pantalla al responder
- [x] Textos de comprensión lectora repetidos/referenciados con "amb el mateix text" — extraídos a un campo `text` propio por pregunta; el motor los muestra en una tarjeta encima del enunciado y también en el repaso de preguntas falladas
- [x] Carpeta `docs/` renombrada a `documentos/` (no existía ninguna carpeta `documentos` previa en el repo; `docs/` se había creado por error de nomenclatura en la Sesión 3)

## Resuelto — Sesión 6 (segunda ronda de auditoría de contenido)
- [x] 29 preguntas `veritat_fals` falsas se delataban por palabras absolutas (sempre, mai, només, cap, totes, solo, nunca, only, never...) — reescritas con un dato concreto y plausible en vez de la palabra absoluta; además se encontraron y corrigieron 4 casos más con el mismo problema que no estaban en la lista original. Verificado con script: 0/72 V/F falsas contienen palabras absolutas
- [x] `6è_mat-6-5_q4` comparaba dos objetos distintos (moneda y dado) en la misma V/F — reescrita para comparar dos caras del mismo dado
- [x] `6è_eng-6-1_q4`/`q2`, `4t_nat-3_q3`, `4t_soc-5` (q1 y q8): correcciones puntuales de enunciado/opciones/parelles, incluyendo eliminar toda mención al inexistente "sector quaternari" en 4t
- [x] 23 preguntas test con distractores "absurdos" (p. ex. "perquè no serveix de res", "sense cap motiu") sustituidos por errores típicos de alumno (concretos y plausibles pero claramente falsos); 3 de las 23 ya tenían distractores plausibles y se dejaron sin cambios
- [x] Al cambiar la pareja de `4t_soc-5_q8` se detectó un bug real de diseño: dos parelles con el mismo texto a la derecha ("Sector terciari" repetido) hacían el ejercicio ambiguo para el jugador y rompían el test de regresión (bucle infinito de emparellament) — resuelto diferenciando el texto de las parelles de "Sector primari" (pesca / agricultura) en vez de duplicar "Sector terciari". Auditados los otros 35 ejercicios `emparellar` del banco: ninguno más tiene este problema

## Resuelto — Sesión 7 (revisión fina tras Sesión 6)
- [x] `4t_soc-5_q8`: en vez del parche de la Sesión 6 (diferenciar "Sector primari" con "(pesca)"/"(agricultura)"), se simplificó a 3 parelles, una por sector (Pescar=primari, Fabricar cotxes=secundari, Ensenyar=terciari), sin repetir sector ni usar paréntesis
- [x] Revisados de nuevo `6è_soc-6-1_q1`, `6è_soc-6-3_q5` y `6è_soc-6-4_q1` (dejados sin cambios en la Sesión 6 por considerarlos "ya plausibles") — con una segunda mirada, varias de sus opciones sí eran poco creíbles (p. ex. "Un esport olímpic", "Un equip esportiu", "Ignorar el problema") y se sustituyeron por errores típicos más concretos
- [x] 3 distractores de la Sesión 6 considerados discutibles se sustituyeron por otros inequívocamente falsos: `5è_soc-5-2_q5`, `6è_nat-6-5_q4`, `6è_soc-6-5_q5`

## Resuelto — Sesión 8, Bloque 6 (Mode pares + variedad de tipos de pregunta en 5è/6è)
- [x] Mode pares: en la pantalla de selección de perfiles, cada perfil tiene un botón discreto "👪" que pide resolver una multiplicación al azar (6×6 a 9×9); si se acierta, activa o desactiva `parentMode` en el estado de ESE perfil. Con el modo activo, `isLessonUnlocked` devuelve siempre `true` para ese perfil (todas las lliçons del curso quedan accesibles sin marcar estrellas de las anteriores); hay un indicador "👪 Mode pares" visible en la barra superior de Inici y en la cabecera del recorregut de lliçons. Perfiles antiguos sin el campo `parentMode` siguen funcionando igual (se añadió a `defaultGameState()` con valor `false`)
- [x] Reducido el peso de `test` en 5è y 6è (67% → 42.8%/45%), convirtiendo 81 preguntas test existentes a `resposta_escrita` (28/180 en 5è, 20/180 en 6è), `ordenar` (7/180, 4/180) y `emparellar` (26/180 en ambos), sin generar contenido nuevo — cada conversión reutiliza el enunciado/opciones/distractores ya existentes de la propia pregunta o de otras preguntas de la misma lliçó. No se tocó ninguna lliçó de comprensió lectora (con campo `text`) ni 1r/4t
- [x] Verificado por script que ninguna lliçó de 5è/6è (fuera de lectura) supera 3 preguntes test ni 2 preguntes seguides del mateix tipus
- [x] `ordenar` queda muy por debajo del objetivo orientativo (10%): solo 3.9%/2.2% en 5è/6è — el banco de preguntas apenas tiene contenido de tipo proceso/secuencia/ciclo reutilizable sin inventar datos nuevos (los 3-4 casos usados por curso son las fases del mètode científic, els canvis d'estat, les etapes històriques i les fases del procés de disseny, todos derivados de hechos ya presentes en otras preguntas de la misma lliçó)

## Pendiente de aplicar la misma auditoría/criterio al resto
- `explicacio` solo está poblado para las preguntas tipo `veritat_fals` (147/147) y algunas de las convertidas en el Bloque 6; el resto de tipos sigue mayoritariamente con el campo vacío
- El campo `dificultat` de 1r/4t sigue siendo posicional, no pedagógico (ver más arriba) — no se ha tocado en esta sesión
- El objetivo de `ordenar` (~10% en 5è/6è) no se alcanzó por falta de contenido de tipo proceso/secuencia en el banco — ver Sesión 8 arriba

