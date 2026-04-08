# pgomez

CV estático de **Pablo A. Gómez C.** (ejecutivo de cuentas clave). HTML, CSS y JS; deploy en Vercel.

## Desarrollo

```bash
pnpm install
pnpm run dev
```

Abre `http://localhost:5173/`.

## PDF

En el sitio, botón **PDF** o imprimir desde el navegador.

## Vercel

Proyecto **Vite** (no Astro). En el dashboard: **Framework Preset → Vite**, output **`dist`**, build **`pnpm run build`**. El `vercel.json` ya fuerza esto para evitar deploys rotos.
