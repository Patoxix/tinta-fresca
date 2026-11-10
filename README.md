# Tinta Fresca

Edición satírica: noticias reales con otro titular. Proyecto de práctica del curso Información y Cultura Digital (PUCP, 2026-2).

Sitio estático (HTML, CSS y JavaScript, sin herramientas de compilación). Las tipografías (Newsreader, Source Serif 4 y Libre Franklin, licencia SIL OFL) están en `fonts/`, así que la página no pide nada a servidores externos. No usa cookies ni analítica.

## Estructura

- `index.html`: la página.
- `css/style.css`: estilos.
- `js/app.js`: arma la portada y el cintillo a partir de los datos.
- `data/piezas.js`: **aquí se agregan las noticias**.
- `fonts/`: tipografías.

## Agregar una pieza

1. Abre `data/piezas.js` y copia el objeto de una pieza existente.
2. Cambia `id`, `seccion` (`peru` o `mundo`), `puesto` (`principal`, `lateral` o `fila`), titular, bajada y fuentes.
3. Completa la ficha: qué se mantiene, qué cambia, técnica, límite del chiste y qué falta verificar.

## Reglas del proyecto

- El humor cambia el encuadre, nunca inventa datos.
- Cada pieza enlaza la nota original.
- No se inventan declaraciones de personas, ni se hace burla de rasgos étnicos, físicos o de la fe.
- Se atribuye toda acusación («según…», «supuestos»).
- Antes de publicar, cada cifra se verifica contra la nota original.

## Publicar en GitHub Pages

1. Settings → Pages → Source: «Deploy from a branch», rama `main`, carpeta `/ (root)`.
2. Espera uno o dos minutos. La dirección será `https://patoxix.github.io/tinta-fresca/`.

No subas consentimientos firmados, datos de contacto ni nombres de estudiantes con procesos abiertos: el historial de un repositorio no se borra fácil.

## Ver el sitio en tu computadora

Desde la carpeta, ejecuta `python3 -m http.server` y visita `http://localhost:8000`.
