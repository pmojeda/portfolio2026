# Portfolio — Martín Ojeda

Sitio estático de portfolio profesional construido con **React (JavaScript)**, **Vite** y **TailwindCSS**, con **i18n** (Español por defecto + Inglés) y formulario de contacto vía **Netlify Forms**.

## Requisitos

- Node.js **18+** (recomendado LTS)

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

El output queda en `dist/`.

## CV (PDF)

El botón **Descargar CV** apunta a `public/cv.pdf`.

- Reemplazá ese archivo por tu CV real (mismo nombre) antes de publicar.
- Si querés regenerar el placeholder mínimo localmente: `node scripts/write-placeholder-cv.mjs`.

## Deploy en Netlify

Este repo incluye `netlify.toml` con:

- `npm run build`
- publish: `dist`
- redirect SPA a `index.html`

### Formulario de contacto (Netlify Forms)

Hay dos piezas necesarias (documentado también en código):

1. Un formulario HTML estático “espejo” en `index.html` (oculto) para que Netlify detecte el formulario en deploy.
2. El formulario visible en React (`src/pages/ContactPage.jsx`) con los mismos `name` de campos.

**Importante:** en `npm run dev` el envío no será procesado por Netlify; probalo en el sitio publicado.

## Estructura principal

- `src/components/`: UI reutilizable
- `src/pages/`: secciones/páginas del sitio (composición)
- `src/data/`: contenido estructurado (proyectos, stack, etc.)
- `src/i18n/`: traducciones (`es.json`, `en.json`)
- `src/context/`: estado global de idioma + `t()`
- `src/hooks/`: hooks livianos (p. ej. alias de traducción)

Para más detalle, ver `ARCHITECTURE.md`.
