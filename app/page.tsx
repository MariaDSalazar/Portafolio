import Image from "next/image";
import { PortfolioChrome } from "./components/portfolio-chrome";

/* ─────────────────────────────────────────
   Navegación
───────────────────────────────────────── */
const navigationItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Perfil Técnico", href: "#tecnico" },
  { label: "Perfil Social", href: "#social" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

/* ─────────────────────────────────────────
   Formación académica
───────────────────────────────────────── */
const educationItems = [
  {
    title: "Magíster en Docencia e Investigación en Educación Superior",
    label: "En curso — último semestre · Universidad Nacional de Loja",
    description:
      "Investigación enfocada en modelos pedagógicos para educación superior. Desarrollo de competencias en diseño curricular, metodologías activas y producción académica aplicada.",
    dotClass: "timeline__dot--edu",
  },
  {
    title: "Ingeniera en Ciencias de la Computación",
    label: "2026 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2026-3314810",
    description:
      "Formación sólida en algoritmos, estructuras de datos, redes, sistemas operativos y desarrollo de software. Proyecto de vinculación con impacto directo en la carrera, ejecutado en entorno universitario de alta demanda.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Licenciada en Trabajo Social",
    label: "2024 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2024-3027109",
    description:
      "Formación orientada a intervención social, políticas públicas, gestión comunitaria e inclusión de grupos vulnerables. Base que complementa el perfil técnico con comprensión real del entorno humano.",
    dotClass: "timeline__dot--edu",
  },
  {
    title: "Bachiller en Ciencias",
    label: "2018 · Unidad Educativa del Milenio Bernardo Valdivieso",
    description:
      "Base científica sólida que sustenta el análisis, el razonamiento lógico y el perfil técnico actual.",
    dotClass: "",
  },
];

/* ─────────────────────────────────────────
   Experiencia laboral
───────────────────────────────────────── */
const experienceItems = [
  {
    title: "Laboratorio de Computación Aplicada — UNL",
    label: "Jun 2024 – Mar 2025 · Pasantías (9 meses)",
    description:
      "Soporte técnico avanzado, mantenimiento de infraestructura y desarrollo de soluciones digitales en un entorno de alta demanda operativa dentro de la Carrera de Computación.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Docente particular — Clases personalizadas",
    label: "Feb 2024 – Abr 2024 · Loja",
    description:
      "Planificación curricular y docencia presencial con metodologías activas adaptadas al ritmo y nivel de cada estudiante. Comunicación efectiva de conceptos complejos con alta tasa de satisfacción.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Subdirección de Seguridad y Salud Ocupacional — UNL",
    label: "Jun 2023 – Ene 2024 · Pasantías (8 meses)",
    description:
      "Apoyo tecnológico y administrativo en la Subdirección de Seguridad y Salud Ocupacional. Gestión de información digital, procesos documentales y soporte transversal al área.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Bienestar Estudiantil — UNL",
    label: "May 2024 – Jun 2024 · Servicios Comunitarios",
    description:
      "Atención directa a estudiantes universitarios, apoyo en actividades de orientación vocacional y gestión de recursos en el área de Bienestar Estudiantil de la UNL.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Mantenimiento DTI — UNL",
    label: "Oct 2021 – Dic 2021 · Pasantías",
    description:
      "Mantenimiento preventivo y correctivo de equipos, instalación de software y soporte técnico de primer nivel a usuarios dentro del Departamento de Tecnologías de la Información.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Ministerio de Inclusión y Economía Social",
    label: "Jun 2021 – Jul 2021 · Pasantías",
    description:
      "Trabajo directo en el Área de Adultos Mayores: acompañamiento, atención y apoyo en estrategias de inclusión social para población prioritaria.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Centro de Acogida «Santas Mariana de Jesús»",
    label: "Dic 2022 · Pasantías",
    description:
      "Intervención social con personas en situación de vulnerabilidad, aplicando principios del Trabajo Social en un contexto de acogida institucional.",
    dotClass: "timeline__dot--work",
  },
];

/* ─────────────────────────────────────────
   Certificados y participaciones
───────────────────────────────────────── */
const certificationItems = [
  {
    title: "Fundamentos de Ciberseguridad — Cisco Networking Academy",
    label: "Nov 2024 · Universidad Nacional de Loja · 70 horas · Aprobación",
    description:
      "Formación intensiva que cubre amenazas y vulnerabilidades, criptografía aplicada, autenticación, control de acceso y respuesta a incidentes. Certificado avalado por Cisco y la UNL.",
  },
  {
    title: "Ponente — III Simposio de Investigación Científica",
    label: "Dic 2024 · Dirección de Investigación, Universidad Nacional de Loja",
    description:
      "Presentación presencial ante comunidad académica internacional. Tema: «Riesgos psicosociales en el personal administrativo, docente y trabajadores de la FEIRNNR de la UNL». Investigación con metodología mixta y hallazgos validados.",
  },
  {
    title: "Expositora — IV Jornadas Internacionales de Trabajo Social",
    label: "Abr 2024 · Carrera de Trabajo Social, Universidad Nacional de Loja",
    description:
      "Exposición en modalidad en línea sobre riesgos psicosociales en entornos universitarios. Participación en jornadas con convocatoria internacional y evaluación académica.",
  },
  {
    title: "Introduction to Packet Tracer — Cisco Networking Academy",
    label: "Jun 2022 · Certificado Internacional",
    description:
      "Dominio de la herramienta de simulación de redes más utilizada en la industria: diseño, configuración y diagnóstico de topologías de red complejas.",
  },
  {
    title: "Certificado de Suficiencia en Inglés — Nivel B1",
    label: "Ago 2023 · Instituto de Idiomas, Universidad Nacional de Loja · 768 horas",
    description:
      "Certificación de suficiencia lingüística B1 según el Marco Común Europeo de Referencia para las Lenguas (MCER), con aprobación en los tres niveles cursados.",
  },
];

/* ─────────────────────────────────────────
   Especialidades técnicas
───────────────────────────────────────── */
const techServices = [
  {
    title: "Desarrollo de Software",
    desc: "Diseño e implementación de aplicaciones con código limpio, patrones de diseño y ciclo completo de desarrollo. Experiencia en proyectos universitarios con requisitos técnicos reales.",
    icon: "code",
  },
  {
    title: "Administración de Servidores",
    desc: "Configuración, mantenimiento y monitoreo de servidores en entornos de alta disponibilidad. Trabajo directo con infraestructura universitaria durante nueve meses de pasantía.",
    icon: "server",
  },
  {
    title: "Internet de las Cosas",
    desc: "Prototipado, integración y mantenimiento de dispositivos IoT con captura de datos en tiempo real. Uso de plataformas embebidas y protocolos de comunicación estándar.",
    icon: "signal",
  },
  {
    title: "Electrónica",
    desc: "Diseño de circuitos y desarrollo de prototipos que integran hardware y software en soluciones físico-digitales funcionales.",
    icon: "cpu",
  },
  {
    title: "QA y Pruebas",
    desc: "Planificación y ejecución de pruebas funcionales, de regresión y de rendimiento. Aseguramiento de calidad en cada iteración del ciclo de desarrollo.",
    icon: "shield",
  },
  {
    title: "Diseño Web",
    desc: "Interfaces accesibles, responsivas y centradas en el usuario. Tecnologías web modernas con foco en rendimiento, usabilidad y estética profesional.",
    icon: "window",
  },
  {
    title: "Ciberseguridad",
    desc: "Análisis de vectores de ataque, aplicación de controles preventivos y principios de seguridad defensiva. Formación certificada por Cisco Networking Academy.",
    icon: "lock",
  },
  {
    title: "Redes (Cisco)",
    desc: "Simulación y configuración de topologías de red con Packet Tracer. Enrutamiento, direccionamiento IP, protocolos y arquitecturas de red.",
    icon: "network",
  },
];

const techSkills = [
  "Desarrollo de Software",
  "Servidores",
  "IoT",
  "Electrónica",
  "QA",
  "Diseño Web",
  "Ciberseguridad",
  "Redes (Cisco)",
];

/* ─────────────────────────────────────────
   Especialidades sociales / educativas
───────────────────────────────────────── */
const socialServices = [
  {
    title: "Docencia",
    desc: "Planificación curricular y enseñanza presencial con metodologías activas. Comunicación clara de conceptos complejos adaptada al nivel y ritmo de cada estudiante.",
    icon: "book",
  },
  {
    title: "Investigación Científica",
    desc: "Ponente reconocida en el III Simposio de Investigación Científica de la UNL. Manejo de metodologías cuantitativas y cualitativas en contextos académicos y organizacionales.",
    icon: "microscope",
  },
  {
    title: "Trabajo Social",
    desc: "Intervención directa con comunidades vulnerables, adultos mayores y centros de acogida. Enfoque en derechos, inclusión y diseño de estrategias de atención integral.",
    icon: "users",
  },
  {
    title: "Inclusión Social",
    desc: "Diseño y ejecución de programas de atención a grupos prioritarios en el Ministerio de Inclusión y Economía Social y en Bienestar Estudiantil de la UNL.",
    icon: "heart",
  },
];

const socialSkills = [
  "Docencia",
  "Investigación",
  "Trabajo Social",
  "Inclusión Social",
  "Inglés B1",
];

/* ─────────────────────────────────────────
   Iconos SVG reutilizables
───────────────────────────────────────── */
/** Iconos de línea para specialidades */
const STROKE_PATHS: Record<string, string> = {
  code: "m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10",
  server:
    "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm3-7h.01M7 17h.01",
  signal: "M4.5 9.5a11 11 0 0 1 15 0M8 13a6 6 0 0 1 8 0m-4 4h.01",
  cpu: "M9 3v3m6-3v3M9 18v3m6-3v3M18 9h3m-3 6h3M3 9h3m-3 6h3M8 8h8v8H8z",
  shield:
    "M12 3c2.7 2 5.6 3 8 3v5c0 5-3.4 8.9-8 10-4.6-1.1-8-5-8-10V6c2.4 0 5.3-1 8-3Zm-3 9 2 2 4-4",
  window:
    "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 3h16",
  lock: "M12 14v3m-3-6V8a3 3 0 1 1 6 0v3m-7 0h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z",
  network:
    "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  book: "M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h14M10 9h4m-4 4h4",
  microscope:
    "M9 3h6m-3 0v6m-4 4 1.5-6M10 13l1.5-6M14 13l-1.5-6M6 21h12M12 17v4m-5-8h10a1 1 0 0 1 1 1v2H6v-2a1 1 0 0 1 1-1Z",
  users:
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 4v2m2-2a4 4 0 0 0-3-3.87",
  heart:
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z",
  graduation:
    "M22 10v6M2 10l10-5 10 5-10 5-10-5Zm4 5v4a6 6 0 0 0 12 0v-4",
  briefcase:
    "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6m-3-3h6",
  mail: "m4 7 8 6 8-6M5 19h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1Z",
  clock: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  laptop: "M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M2 18h20",
};

function StrokeIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className ?? "feature-card__icon-svg"}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={STROKE_PATHS[name] ?? STROKE_PATHS.code}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

/** Icono de LinkedIn (relleno) */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** Icono de GitHub (relleno) */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/** Icono de ORCID (relleno) */
function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.766-2.992 5.025-5.344 5.016h-3.9V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  );
}

/** Icono de WhatsApp (relleno) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Icono de Gmail (relleno) */
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Encabezado de sección
───────────────────────────────────────── */
function SectionHeading({
  badge,
  badgeVariant = "neutral",
  title,
  titleVariant = "tech",
  description,
}: {
  badge: string;
  badgeVariant?: "tech" | "social" | "neutral";
  title: string;
  titleVariant?: "tech" | "social";
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__title-row">
        <span
          className={`section-heading__badge section-heading__badge--${badgeVariant}`}
        >
          {badge}
        </span>
        <h2>
          <span
            className={
              titleVariant === "social"
                ? "section-heading__grad-text--social"
                : "section-heading__grad-text"
            }
          >
            {title}
          </span>
        </h2>
      </div>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Etiqueta de subsección del timeline
───────────────────────────────────────── */
function TimelineLabel({
  variant,
  children,
}: {
  variant: "edu" | "work" | "cert";
  children: string;
}) {
  const paths: Record<string, string> = {
    edu: STROKE_PATHS.graduation,
    work: STROKE_PATHS.briefcase,
    cert: STROKE_PATHS.award,
  };
  return (
    <div className="timeline-section-label">
      <span
        className={`timeline-section-label__icon timeline-section-label__icon--${variant}`}
      >
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            d={paths[variant]}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </span>
      <span className="timeline-section-label__text">{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Página principal
───────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <PortfolioChrome navigationItems={navigationItems} />

      <main className="page-shell">

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section className="hero-section" id="inicio">
          <div className="hero-section__inner">
            <div className="hero-center">

              <div className="hero-panel__image-wrap">
                <Image
                  alt="Retrato de María del Carmen Salazar Torres"
                  className="hero__avatar hero__avatar--round"
                  height={712}
                  priority
                  src="/image.png"
                  width={653}
                />
              </div>

              <div className="hero__badge">
                <span className="hero__badge-ring" />
                <span className="hero__badge-label">
                  Ingeniería · Trabajo Social · Docencia
                </span>
              </div>

              <p className="hero__intro">Hola, mi nombre es</p>

              <h1 className="hero__title">
                <span className="hero__title-grad">
                  María del Carmen Salazar
                </span>
              </h1>

              <p className="hero__summary">
                Dos carreras universitarias, certificaciones internacionales Cisco
                y una maestría en curso. El perfil técnico que también sabe escuchar,
                comunicar y diseñar soluciones centradas en las personas.
                <br />
                <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                  Lista para aportar valor desde el primer día.
                </strong>
              </p>

              <div className="hero-links">
                <a
                  aria-label="Enviar correo a Gmail"
                  className="hero-link hero-link--primary"
                  href="https://mail.google.com/mail/?view=cm&to=maricarmen19salazar@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <StrokeIcon name="mail" className="hero-link__icon" />
                  Contáctame
                </a>
                <a
                  aria-label="Ver trayectoria"
                  className="hero-link hero-link--ghost"
                  href="#trayectoria"
                >
                  <StrokeIcon name="clock" className="hero-link__icon" />
                  Trayectoria
                </a>
              </div>
            </div>

            <a
              aria-label="Bajar a la siguiente sección"
              className="hero__scroll"
              href="#sobre-mi"
            >
              <svg
                aria-hidden="true"
                className="hero__scroll-icon"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5v14m0 0-5-5m5 5 5-5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* ══════════════════════════════
            SOBRE MÍ
        ══════════════════════════════ */}
        <section className="content-section" id="sobre-mi">
          <div className="content-section__inner">
            <SectionHeading
              badge="01. Sobre mí"
              badgeVariant="neutral"
              title="Tecnología con propósito humano"
              description="Conoce el perfil, la trayectoria y el valor diferencial que puedo aportar a tu equipo."
            />

            <div className="about-layout">
              {/* Narrativa */}
              <div className="about-bio">
                <p className="about-bio__lead">
                  Ingeniera que piensa como trabajadora social.{" "}
                  <em>Desarrolladora que enseña. Investigadora que construye.</em>
                </p>
                <p className="about-bio__body">
                  Soy María del Carmen Salazar Torres, profesional con una combinación
                  de habilidades que pocas veces se encuentra en un solo perfil: ingeniería
                  de software rigurosa, comprensión profunda del entorno humano y capacidad
                  docente para comunicar lo complejo con claridad.
                </p>
                <p className="about-bio__body">
                  He trabajado en entornos universitarios reales de alta demanda, liderado
                  investigaciones presentadas ante audiencias internacionales y desarrollado
                  soluciones técnicas con propósito social. Mi valor no está solo en lo que
                  sé hacer — está en la perspectiva única que aporto a cada equipo y a cada
                  proyecto.
                </p>
                <div className="about-bio__links">
                  <a className="about-bio__link about-bio__link--tech" href="#tecnico">
                    <svg aria-hidden="true" className="about-bio__link-icon" fill="none" viewBox="0 0 24 24">
                      <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                    Ver perfil técnico
                  </a>
                  <a className="about-bio__link about-bio__link--social" href="#social">
                    <svg aria-hidden="true" className="about-bio__link-icon" fill="none" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                    Ver perfil social
                  </a>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-card__number">2</span>
                  <span className="stat-card__label">Carreras universitarias concluidas</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number">9<sup style={{fontSize:"1rem"}}>m</sup></span>
                  <span className="stat-card__label">Pasantía en entorno real de alta demanda</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number stat-card__number--social">5+</span>
                  <span className="stat-card__label">Certificaciones y participaciones académicas</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number stat-card__number--social">MSc</span>
                  <span className="stat-card__label">Maestría en Docencia e Investigación en curso</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PERFIL TÉCNICO
        ══════════════════════════════ */}
        <section className="content-section content-section--tech" id="tecnico">
          <div className="content-section__inner">
            <SectionHeading
              badge="02. Perfil Técnico"
              badgeVariant="tech"
              title="Tecnología y Software"
              titleVariant="tech"
              description="Ocho especialidades técnicas con base práctica y enfoque en soluciones reales. Desde el código hasta la infraestructura, pasando por hardware, seguridad y redes."
            />

            <div className="features-grid">
              {techServices.map((s) => (
                <article
                  className="feature-card feature-card--tech"
                  key={s.title}
                >
                  <span className="feature-card__icon-wrap feature-card__icon-wrap--tech">
                    <StrokeIcon name={s.icon} />
                  </span>
                  <h3 className="feature-card__title">{s.title}</h3>
                  <p className="feature-card__desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PERFIL SOCIAL
        ══════════════════════════════ */}
        <section className="content-section content-section--social" id="social">
          <div className="content-section__inner">
            <SectionHeading
              badge="03. Perfil Social"
              badgeVariant="social"
              title="Educación e Inclusión"
              titleVariant="social"
              description="Cuatro competencias donde la formación académica se convierte en impacto real: docencia, investigación científica, intervención social e inclusión de comunidades vulnerables."
            />

            <div className="features-grid">
              {socialServices.map((s) => (
                <article
                  className="feature-card feature-card--social"
                  key={s.title}
                >
                  <span className="feature-card__icon-wrap feature-card__icon-wrap--social">
                    <StrokeIcon name={s.icon} />
                  </span>
                  <h3 className="feature-card__title">{s.title}</h3>
                  <p className="feature-card__desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            TRAYECTORIA
        ══════════════════════════════ */}
        <section className="content-section" id="trayectoria">
          <div className="content-section__inner">
            <SectionHeading
              badge="04. Trayectoria"
              badgeVariant="neutral"
              title="Formación y Experiencia"
              description="Cada etapa ha sumado una capa de profundidad al perfil: títulos académicos registrados, experiencia práctica en instituciones públicas y privadas, y participaciones que demuestran iniciativa más allá del aula."
            />

            <TimelineLabel variant="edu">Formación Académica</TimelineLabel>
            <div className="timeline">
              {educationItems.map((item) => (
                <article className="timeline__item" key={item.title}>
                  <span className={`timeline__dot ${item.dotClass}`} />
                  <div className="timeline__content">
                    <h3>{item.title}</h3>
                    <p className="timeline__label">{item.label}</p>
                    <p className="timeline__description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <TimelineLabel variant="work">Experiencia Laboral</TimelineLabel>
            <div className="timeline">
              {experienceItems.map((item) => (
                <article className="timeline__item" key={item.title}>
                  <span className={`timeline__dot ${item.dotClass}`} />
                  <div className="timeline__content">
                    <h3>{item.title}</h3>
                    <p className="timeline__label">{item.label}</p>
                    <p className="timeline__description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <TimelineLabel variant="cert">Certificados y Participaciones</TimelineLabel>
            <div className="timeline">
              {certificationItems.map((item) => (
                <article className="timeline__item" key={item.title}>
                  <span className="timeline__dot timeline__dot--cert" />
                  <div className="timeline__content">
                    <h3>{item.title}</h3>
                    <p className="timeline__label">{item.label}</p>
                    <p className="timeline__description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            CONTACTO
        ══════════════════════════════ */}
        <section className="contact-section" id="contacto">
          <div className="contact-section__inner">

            <span className="contact-available">
              <span className="contact-available__dot" />
              Disponible para nuevas oportunidades
            </span>

            <h2>¿Hablamos de tu proyecto?</h2>

            <p>
              ¿Buscas un perfil técnico que también entienda a las personas?
              Estoy disponible para proyectos de software, docencia, investigación
              o cualquier iniciativa que combine tecnología e impacto humano.
              Respondo en menos de 24 horas.
            </p>

            {/* Botones principales */}
            <div className="contact-ctas">
              <a
                className="contact-cta contact-cta--email"
                href="https://mail.google.com/mail/?view=cm&to=maricarmen19salazar@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GmailIcon className="contact-cta__icon" />
                Enviar correo
              </a>
              <a
                className="contact-cta contact-cta--whatsapp"
                href="https://wa.me/593985669159"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="contact-cta__icon" />
                WhatsApp
              </a>
            </div>

            {/* Redes sociales */}
            <div className="social-row">
              <span className="social-row__label">Encuéntrame también en</span>
              <div className="social-links">

                <a
                  aria-label="Perfil de LinkedIn"
                  className="social-link social-link--linkedin"
                  href="https://www.linkedin.com/in/mariasalazar24"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon className="social-link__icon" />
                </a>

                <a
                  aria-label="Perfil de GitHub"
                  className="social-link social-link--github"
                  href="https://github.com/MariaDSalazar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon className="social-link__icon" />
                </a>

                <a
                  aria-label="Perfil de ORCID"
                  className="social-link social-link--orcid"
                  href="https://orcid.org/0009-0005-5661-4428"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <OrcidIcon className="social-link__icon" />
                </a>

              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>María del Carmen Salazar Torres · Loja, Ecuador</p>
          <p>Portafolio construido con Next.js</p>
        </div>
      </footer>
    </>
  );
}
