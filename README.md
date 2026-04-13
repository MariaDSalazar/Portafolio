# Portafolio Profesional — María del Carmen Salazar Torres

Portafolio profesional construido con Next.js 15, TypeScript y CSS personalizado.
Diseño con degradados, modo oscuro/claro, separación técnica/social y despliegue en GitHub Pages.

---

## Contenido del portafolio

| Sección | Descripción |
|---|---|
| **Hero** | Presentación principal con nombre en degradado y accesos rápidos a contacto y trayectoria |
| **Sobre mí** | Narrativa profesional con estadísticas clave (carreras, pasantía, certificaciones, maestría) |
| **Perfil Técnico** | Ocho especialidades: Software, Servidores, IoT, Electrónica, QA, Diseño Web, Ciberseguridad, Redes |
| **Perfil Social** | Cuatro competencias: Docencia, Investigación Científica, Trabajo Social, Inclusión Social |
| **Trayectoria** | Timeline con formación académica, experiencia laboral y certificaciones |
| **Contacto** | Botones directos a Gmail y WhatsApp · Links a LinkedIn, GitHub y ORCID |

---

## Stack tecnológico

- **Next.js 15** con App Router
- **React 19**
- **TypeScript**
- **CSS global** con variables, degradados y modo oscuro nativo
- **Fuente:** Poppins (Google Fonts, pesos 300–800)

---

## Sistema de diseño

### Paleta de colores

| Paleta | Uso | Colores |
|---|---|---|
| **Técnica** (azul-índigo) | Sección técnica, botones primarios, stats | `#1d4ed8` → `#4338ca` |
| **Social** (esmeralda-cian) | Sección social, píldoras sociales | `#047857` → `#0369a1` |
| **Educación** (violeta) | Puntos de timeline educativo | `#5b21b6` → `#7e22ce` |
| **Certificados** (ámbar) | Puntos de timeline de certificaciones | `#b45309` → `#d97706` |
| **Hero** | Fondo oscuro del hero | `#020617` → `#1e1b4b` |

### Características visuales

- Degradados visibles en fondos de sección, tarjetas, botones y texto de encabezados
- Modo oscuro mediante `data-theme="dark"` y persistencia en `localStorage`
- Efecto spotlight que sigue el cursor del usuario
- Badge animado con anillo giratorio en el hero
- Timeline codificado por color según tipo de entrada (educación, trabajo, certificación)
- Animaciones de aparición al desplazar (scroll-reveal) con retardo escalonado

---

## Estructura de archivos

```
app/
├── layout.tsx              # Layout global, fuente Poppins y metadata
├── page.tsx                # Página principal con todas las secciones
├── globals.css             # Sistema de diseño completo (variables, componentes, responsive)
└── components/
    └── portfolio-chrome.tsx # Header fijo, navegación, toggle de tema, spotlight, scroll-reveal
public/
└── image.png               # Foto de perfil
.github/
└── workflows/
    └── deploy.yml          # Pipeline de CI/CD para GitHub Pages
```

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción (genera /out para exportación estática)
npm run start    # Levantar build de producción localmente
npm run lint     # Ejecutar ESLint
```

---

## Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages con exportación estática de Next.js.

### Configuración requerida (una sola vez)

1. Ve al repositorio en GitHub: `github.com/MariaDSalazar/Portafolio`
2. Entra a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios

### Despliegue automático

Cada vez que se haga `git push` a la rama `main`, el workflow en `.github/workflows/deploy.yml` ejecuta automáticamente:

1. Instala dependencias (`npm ci`)
2. Genera el sitio estático (`npm run build` → carpeta `/out`)
3. Publica en GitHub Pages

El sitio queda disponible en:
`https://mariadSalazar.github.io/Portafolio`

### Configuración Next.js para exportación estática

```ts
// next.config.ts
const nextConfig = {
  output: "export",
  basePath: "/Portafolio",
  assetPrefix: "/Portafolio",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

---

## Contacto

- **Correo:** maricarmen19salazar@gmail.com
- **LinkedIn:** [linkedin.com/in/mariasalazar24](https://www.linkedin.com/in/mariasalazar24)
- **GitHub:** [github.com/MariaDSalazar](https://github.com/MariaDSalazar)
- **ORCID:** [orcid.org/0009-0005-5661-4428](https://orcid.org/0009-0005-5661-4428)
