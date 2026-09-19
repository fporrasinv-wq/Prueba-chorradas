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

