# Presentador de cursos

Visor web estático para navegar cursos, módulos, sesiones y material visual de estudio.

## Uso

1. Abrir el repositorio en VS Code.
2. Levantar `presentador/index.html` con Live Server.
3. Elegir curso, módulo y sesión.
4. Navegar las diapositivas con los botones o con teclado.
5. Usar `Descargar PDF` dentro de una sesión para guardar una copia desde el navegador.

## Teclas

- Flecha derecha, espacio o PageDown: siguiente slide.
- Flecha izquierda, Backspace o PageUp: slide anterior.
- Home: primer slide.
- End: último slide.
- P: vista limpia.

## Estructura

- `index.html`: contenedor web.
- `app.js`: manifiesto del curso, carga de Markdown y render de slides.

La interfaz usa Tailwind desde CDN para que funcione como proyecto estático con Live Server o GitHub Pages.

El manifiesto está en `app.js`. Cuando se agreguen nuevos cursos, módulos o sesiones, se añaden allí los archivos `.md` correspondientes.

Las sesiones usan el formato principal de presentación.
