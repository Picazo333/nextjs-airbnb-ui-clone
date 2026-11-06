# Adopción SIGNAL (perfil académico)

Autoridad: el enunciado de 4Geeks (`README` oficial del proyecto) manda sobre este archivo, y este archivo manda sobre el kit SIGNAL cuando hay conflicto. El clon debe seguir pareciendo la interfaz de Airbnb descrita en `context.md`. SIGNAL entra donde no sustituye esa interfaz: tokens compatibles, estados, accesibilidad, acabados y el lockup del footer.

Los archivos `styles/tokens.css` y `styles/motion.css` son copia byte a byte del paquete. Los lockups usados también. El test `tests/brand-assets.test.mjs` compara sus SHA-256 con `MANIFEST.json`.

## Aplicado

- Variables semánticas de color, espacio, radio de control, medida, contenedor (80rem), gutter responsive y foco. Las utilidades de Tailwind leen `var(--color-*)` y `var(--gutter)`.
- Tipografía Arial, Helvetica, sans-serif. Se quitó Geist, que se descargaba con `next/font`.
- Fondo de página `--color-canvas`, superficies `--color-surface`, texto `--color-ink` y secundario `--color-muted`.
- Bordes de campos y botones con `--color-border`. El divisor de cabecera usa `--color-subtle`, más cercano a la línea clara del clon.
- Foco visible global: 2px, offset 3px, color `--color-focus`. En `forced-colors` el outline pasa a `Highlight`.
- Estados de datos: carga con texto y bloque de reserva (sin porcentaje ni pulso infinito), vacío con acción siguiente, error de ruta con reintento y sin stack, 404 real con enlace a inicio y catálogo.
- Objetivo táctil de botones >= 44px y campos >= 48px. Label visible y persistente en la búsqueda y en el orden por precio.
- Skip link, `lang="en"`, un `h1` por ruta, landmarks `header` / `nav` / `main` / `footer`.
- `prefers-reduced-motion` desde el primer paint (CSS del token) y al cambiar (atributo `data-motion` en el documento). No hay WAAPI, bucles ni scroll-jacking.
- Lockup exacto en el footer: apilado a 280px por debajo de 640px, horizontal a 400px desde ahí. Alt `4Geeks por Divinivid`. El texto dice que es crédito visual de un encargo académico.
- Metadata `noindex` / `nofollow`. No hay dominio confirmado, así que no hay canonical, Open Graph de campaña, sitemap ni schema.
- El botón Reserve y las acciones de recuperación usan `--color-action` con texto blanco (contraste de texto normal). El wordmark conserva `#ff385c`.

## Omitido y por qué

| Regla SIGNAL | Motivo |
|---|---|
| `--color-action` en el wordmark | El enunciado pide clonar Airbnb. El wordmark sigue en `#ff385c` a 24px y peso 700 para poder leerse como texto grande. No es el botón de reserva. |
| `--color-selected` en la categoría activa | La spec de `context.md`, tomada de la captura, fija el chip activo en relleno oscuro con texto claro. |
| `--radius-card` de 8px en fotos, mapa y ficha | Las capturas usan tarjetas y pastillas amplias. El radio de 8px se usa en estados (vacío, error, orden, reserva). La búsqueda y las categorías siguen en pastilla. |
| `--text-display` / `--text-h2` en los `h1` | Esos clamps son de una landing. Aquí el título es el de la lista o el de la estancia. Un display de hasta 4.5rem rompe el clon. |
| `--section` de 80px | No hay secciones de marketing. El padding de página sigue el ritmo de la lista. |
| `--shadow-none` en la ficha de reserva | Se quitó la sombra de la ficha. El menú de cuenta, que es un overlay, sí usa `--shadow-overlay`. |
| Hero 7/5, motion de registro, puntero | El enunciado no pide landing. No se añadió arte ni una secuencia principal. |
| SEO completo | Preview académico sin dominio confirmado. Aplica semántica y `noindex`, no una campaña. |
| Mapa real y fechas | El enunciado los marca opcionales y fuera de la evaluación base. |
| Páginas de privacidad, cookies y contacto | No hay cuentas, formularios, cookies ni terceros. |
| `signal-mono.svg` y `signal-reverse.svg` | El footer está sobre superficie clara. No hacen falta. |
| Fuentes del logo | La serif del SVG no se toca. La UI no carga Georgia ni fuentes remotas. |

## Extras

- Visible: la home anuncia cuántas estancias coinciden con la búsqueda o la categoría, en una región `aria-live`.
- Técnico: `npm test` cubre filtro, orden y los hashes de los assets usados. No añade librerías de UI.
