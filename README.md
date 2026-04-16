# Portafolio Profesional — María del Carmen Salazar Torres

Portafolio personal construido con **Next.js 15 (App Router)**, **TypeScript** y **CSS puro con variables**. Incluye modo oscuro/claro, animaciones de scroll-reveal y despliegue automático en GitHub Pages mediante exportación estática.

**Live:** [mariadSalazar.github.io/Portafolio](https://mariadSalazar.github.io/Portafolio)

---

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Hero principal + Stack tecnológico con filtros |
| `/sobre-mi` | Bio, idiomas, habilidades blandas e intereses |
| `/formacion` | Formación académica con tarjetas por nivel |
| `/experiencia` | Experiencia técnica con puntos clave por rol |
| `/proyectos` | Repositorios públicos cargados desde la API de GitHub |
| `/certificaciones` | Certificados con descarga directa |
| `/contacto` | Gmail, LinkedIn, Telegram, ORCID y GitHub |

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | ^15.4 | Framework, App Router, exportación estática |
| React | ^19.0 | UI |
| TypeScript | — | Tipado estático |
| CSS global | — | Sistema de diseño completo (variables, dark mode, responsive) |
| Poppins | Google Fonts | Tipografía (pesos 300–800) |

---

## Estructura

```
app/
├── layout.tsx                  # Layout global, fuente y metadata
├── globals.css                 # Sistema de diseño (variables, componentes, responsive)
├── page.tsx                    # Inicio: Hero + ToolsSection
├── sobre-mi/page.tsx
├── formacion/page.tsx
├── experiencia/page.tsx
├── proyectos/page.tsx          # "use client" — consume GitHub API
├── certificaciones/page.tsx
├── contacto/page.tsx
└── components/
    ├── portfolio-chrome.tsx    # Header, nav, tema, spotlight, scroll-reveal
    └── tools-section.tsx       # Grid de tecnologías con filtros
public/
└── certificados/               # PDFs descargables
.github/workflows/
└── deploy.yml                  # CI/CD → GitHub Pages
```

---

## Requisitos previos

- **Node.js** ≥ 18
- **npm** ≥ 9

---

## Ejecución local

```bash
# 1. Clonar el repositorio
git clone https://github.com/MariaDSalazar/Portafolio.git
cd Portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

> El servidor de desarrollo ignora `basePath` y `assetPrefix`, por lo que las rutas funcionan directamente en `localhost:3000`.

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción → genera `/out` |
| `npm run start` | Sirve el build de producción localmente |
| `npm run lint` | Ejecuta ESLint |

---

## Despliegue en GitHub Pages

El despliegue es **automático** en cada push a `main` vía `.github/workflows/deploy.yml`.

### Configuración inicial (una sola vez)

1. Ir a **Settings → Pages** del repositorio
2. En **Source**, seleccionar **GitHub Actions**
3. Guardar

El workflow instala dependencias, ejecuta `npm run build` y publica la carpeta `/out`.

### Configuración Next.js relevante

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portafolio",
  assetPrefix: "/Portafolio",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

> `basePath` y `assetPrefix` deben coincidir con el nombre exacto del repositorio en GitHub.

---

## Notas de desarrollo

- **Modo oscuro:** se activa con `html[data-theme="dark"]` y persiste en `localStorage`.
- **Scroll-reveal:** los elementos con clase `reveal` y atributo `data-reveal=""` son observados por un `IntersectionObserver` en `portfolio-chrome.tsx`.
- **API de GitHub:** la página `/proyectos` consume `api.github.com` en el cliente; si se alcanza el límite de la API (60 req/h sin token), muestra un mensaje de error con enlace al perfil.
- **Certificados:** los PDFs deben colocarse en `public/certificados/` y referenciarse en `certificaciones/page.tsx`.
