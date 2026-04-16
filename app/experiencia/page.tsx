import type { ReactNode } from "react";

/* ── Tipos ── */
type Variant = "iot" | "infra" | "support";

type ExpItem = {
  title: string;
  org: string;
  period: string;
  duration: string;
  highlights: string[];
  skills: string[];
  variant: Variant;
};

/* ── Datos ── */
const experienciaItems: ExpItem[] = [
  {
    title: "Prototipo IoT — Control de Acceso Biométrico",
    org: "Proyecto de desarrollo",
    period: "Oct 2025 – Ene 2026",
    duration: "4 meses",
    highlights: [
      "Doble autenticación: reconocimiento facial con anti-spoofing (detecta fotos y video) + huella dactilar con sensor AS608.",
      "Sistema sobre Raspberry Pi con pantalla táctil, cámara USB y cerradura eléctrica controlada por relé con apertura solo ante presencia real.",
      "Registro persistente en SQLite: nombre, cédula, fecha-hora y estado (exitoso, denegado, spoofing).",
    ],
    skills: ["Raspberry Pi", "Python", "Reconocimiento facial", "Sensor AS608", "SQLite", "Anti-spoofing"],
    variant: "iot",
  },
  {
    title: "Data Center — Carrera de Computación",
    org: "Servicios comunitarios · UNL",
    period: "Jun 2024 – Mar 2025",
    duration: "9 meses",
    highlights: [
      "Administración de servidores con Proxmox: creación y configuración de VMs para todos los servicios activos de la Carrera.",
      "Diseñé e implementé el cableado estructurado para el Data Center.",
      "Levanté el inventario completo de equipos sin registro previo, documenté procedimientos y brindé soporte TI a docentes y estudiantes.",
      "Elaboré un manual de usuario para la creación y configuración de VMs y contenedores en Promox"
    ],
    skills: ["Proxmox", "Virtualización", "Cableado estructurado", "Linux", "Documentación técnica"],
    variant: "infra",
  },
  {
    title: "Pasante de Soporte Técnico — DTI",
    org: "Prácticas preprofesionales · UNL",
    period: "Oct 2021 – Dic 2021",
    duration: "3 meses",
    highlights: [
      "Mantenimiento preventivo y correctivo a más de 30 equipos de escritorio e impresoras: limpieza, reemplazo de componentes e instalación de software institucional.",
      "Diagnóstico y resolución de fallas de conectividad de red en puestos de trabajo.",
      "Apoyo en la organización del cableado estructurado en las instalaciones del DTI.",
    ],
    skills: ["Hardware", "Mantenimiento preventivo", "Redes", "Windows", "Soporte TI"],
    variant: "support",
  },
];

/* ── Iconos por variante ── */
const ICONS: Record<Variant, ReactNode> = {
  iot: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="26" height="26">
      <path d="M9 3v3m6-3v3M9 18v3m6-3v3M18 9h3m-3 6h3M3 9h3m-3 6h3M8 8h8v8H8z"
        stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  ),
  infra: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="26" height="26">
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm3-7h.01M7 17h.01"
        stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  ),
  support: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="26" height="26">
      <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  ),
};

const LABELS: Record<Variant, string> = {
  iot:     "IoT & Prototipado",
  infra:   "Infraestructura TI",
  support: "Soporte Técnico",
};

/* ── Componente: card de experiencia ── */
function ExpCard({ item }: { item: ExpItem }) {
  return (
    <article className={`xp-card xp-card--${item.variant} reveal`} data-reveal="">

      {/* Banner superior */}
      <div className="xp-card__banner">
        <div className="xp-card__blob xp-card__blob--a" />
        <div className="xp-card__blob xp-card__blob--b" />
        <div className="xp-card__icon-ring">
          {ICONS[item.variant]}
        </div>
        <div className="xp-card__meta">
          <span className="xp-card__type-label">{LABELS[item.variant]}</span>
          <span className="xp-card__duration">{item.duration}</span>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="xp-card__body">
        <div className="xp-card__header">
          <h3 className="xp-card__title">{item.title}</h3>
          <div className="xp-card__period">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="13" height="13">
              <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
            {item.period} · {item.org}
          </div>
        </div>

        {/* Puntos clave */}
        <ul className="xp-card__highlights">
          {item.highlights.map((h, i) => (
            <li key={i} className="xp-card__highlight">
              <span className="xp-card__highlight-dot" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="xp-card__skills">
          {item.skills.map((s) => (
            <span className={`xp-skill-chip xp-skill-chip--${item.variant}`} key={s}>{s}</span>
          ))}
        </div>
      </div>

    </article>
  );
}

/* ── Página ── */
export default function ExperienciaPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text">Experiencia Técnica</span>
            </h1>
          </div>

          <div className="xp-grid">
            {experienciaItems.map((item) => (
              <ExpCard key={item.title} item={item} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
