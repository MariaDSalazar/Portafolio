# Portafolio Profesional — María del Carmen Salazar Torres

Portafolio profesional construido con Next.js 15, TypeScript y CSS personalizado.
Diseño con degradados, modo oscuro, separación técnica/social y despliegue en Netlify.

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
- Modo oscuro mediante `data-theme="dark"` y `prefers-color-scheme`
- Efecto spotlight que sigue el cursor del usuario
- Badge animado con anillo giratorio en el hero
- Timeline codificado por color según tipo de entrada (educación, trabajo, certificación)

---

## Estructura de archivos

```
app/
├── layout.tsx              # Layout global, fuente Poppins y metadata
├── page.tsx                # Página principal con todas las secciones
├── globals.css             # Sistema de diseño completo (variables, componentes, responsive)
└── components/
    └── portfolio-chrome.tsx # Header fijo, navegación, toggle de tema, spotlight
public/
└── image.png               # Foto de perfil
netlify.toml                # Configuración de despliegue en Netlify
```

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Levantar build de producción localmente
npm run lint     # Ejecutar ESLint
```

---

## Despliegue en Netlify

El proyecto está configurado para desplegarse en Netlify con soporte completo de Next.js
mediante el plugin oficial `@netlify/plugin-nextjs`.

### Pasos para desplegar

1. Asegúrate de que el repositorio esté en GitHub (`MariaDSalazar/Portafolio`)
2. Entra a [netlify.com](https://netlify.com) e inicia sesión con tu cuenta de GitHub
3. Click en **"Add new site"** → **"Import an existing project"**
4. Selecciona el repositorio `Portafolio`
5. Netlify detecta automáticamente la configuración desde `netlify.toml`
6. Click en **"Deploy site"**

El sitio quedará disponible en una URL del tipo `nombre-aleatorio.netlify.app`.
Desde el panel de Netlify puedes cambiarla a `mariasalazar.netlify.app` (o similar) de forma gratuita.

### Actualizaciones automáticas

Cada vez que hagas `git push` a la rama `main`, Netlify redespliega el sitio automáticamente.

---

## Contacto

- **Correo:** maricarmen19salazar@gmail.com
- **WhatsApp:** +593 985 669 159
- **LinkedIn:** [linkedin.com/in/mariasalazar24](https://www.linkedin.com/in/mariasalazar24)
- **GitHub:** [github.com/MariaDSalazar](https://github.com/MariaDSalazar)
- **ORCID:** [orcid.org/0009-0005-5661-4428](https://orcid.org/0009-0005-5661-4428)
