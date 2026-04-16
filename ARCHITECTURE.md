# Arquitectura del proyecto

Este documento explica **cómo está organizado** el portfolio y **por qué** se tomaron ciertas decisiones técnicas. Está pensado para que otro desarrollador pueda mantenerlo rápidamente sin “magia” innecesaria.

## Objetivos de diseño

- **100% estático**: sin backend ni base de datos; deploy simple en Netlify/Vercel.
- **Mantenibilidad > framework**: React solo donde aporta (UI + i18n + interacciones).
- **i18n sin librerías pesadas**: dos JSON + un `Context` pequeño.
- **Performance pragmática**: lazy loading en la sección de proyectos; `loading="lazy"` en imágenes.

## Stack

- **Vite**: bundler rápido y DX excelente para SPAs estáticas.
- **React (JS)**: sin TypeScript por requisito del proyecto.
- **TailwindCSS v3**: utilidades para iterar UI con bajo costo; se fijó v3 porque el CLI/init de Tailwind v4 cambió y v3 sigue siendo el camino más directo con Vite para equipos que buscan “config estándar”.
- **Framer Motion**: animaciones puntuales (`whileInView`) sin convertir toda la UI en un sistema de animación custom.

## Estructura de carpetas

- `src/components/`
  - Piezas reutilizables (header, cards, headings, toggle de idioma).
- `src/pages/`
  - Secciones “grandes” del sitio. Aunque es una sola página con scroll, se separa en `pages/` para mantener `App.jsx` como composición y no como “mega-component”.
- `src/data/`
  - Contenido **no lingüístico** o **estructural** (URLs de repos/demos, lista de tecnologías, orden de experiencia).
- `src/i18n/`
  - Copy ES/EN. Se evita mezclar textos largos dentro de componentes.
- `src/context/`
  - `LanguageProvider` + `useLanguage()` + función `t()` con resolución por path (`about.title`).
  - Está separado en `languageContext.js` / `LanguageProvider.jsx` / `useLanguage.js` para mantener Fast Refresh feliz (no mezclar Provider + hooks en el mismo archivo exportable).
- `src/hooks/`
  - Alias (`useTranslation`) para imports más claros desde páginas/componentes.

## Internacionalización (i18n)

### Por qué Context

Para un portfolio, `Context` es suficiente: el estado es **un string** (`es` | `en`) y el “catálogo” son **dos imports JSON**.

### Persistencia

Se guarda el idioma en `localStorage` bajo la clave `portfolio-lang` y se sincroniza `document.documentElement.lang` para accesibilidad/SEO básico.

### Tradeoffs

- No hay interpolación avanzada (ICU). Para strings con valores dinámicos se usa reemplazo simple (ej. `{year}` en footer).

## Datos y traducciones (convención)

- `src/data/projects.js` define `id`, URLs, stack e **keys** `i18nTitleKey` / `i18nDescKey`.
- Los textos viven en `src/i18n/es.json` y `src/i18n/en.json` bajo `projects.items.<id>.*` (cuando aplica) o paths explícitos en el data file.

Esta separación evita duplicar estructura y mantiene el orden de proyectos en un solo lugar.

## UI/UX

- **Dark mode por defecto**: paleta en `tailwind.config.js` + fondos “gradient/grid” sin depender de assets externos.
- **Animaciones**: entrada suave al entrar en viewport; se evita animar todo para no competir con la lectura.

## Formulario de contacto (Netlify Forms)

Netlify detecta formularios en el HTML publicado. En SPAs, el patrón recomendado es:

1. Formulario espejo en `index.html` (oculto) con mismos campos.
2. Formulario real en React con `data-netlify="true"` y POST `application/x-www-form-urlencoded` a `/`.

En desarrollo local, el POST no replica el entorno Netlify; el código lo trata como caso especial.

## Routing / deploy

- El sitio es **single-page**. `netlify.toml` incluye fallback a `index.html` para rutas directas futuras.

## Performance

- `React.lazy` + `Suspense` para la sección de proyectos.
- Imágenes en `public/` con `loading="lazy"`.

## Archivos estáticos

- `public/cv.pdf`: CV descargable; reemplazar antes de producción.
- `public/images/projects/*`: placeholders SVG livianos (sin dependencias de CDNs).
