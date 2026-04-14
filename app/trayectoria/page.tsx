const educationItems = [
  {
    title: "Ingeniera en Ciencias de la Computación",
    label: "2026 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2026-3314810",
    description:
      "Formación sólida en algoritmos, estructuras de datos, redes, sistemas operativos y desarrollo de software. Proyecto de vinculación con impacto directo en la carrera, ejecutado en entorno universitario de alta demanda.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Magíster en Docencia e Investigación en Educación Superior",
    label: "En curso — último semestre · Universidad Nacional de Loja",
    description:
      "Investigación enfocada en modelos pedagógicos para educación superior. Desarrollo de competencias en diseño curricular, metodologías activas y producción académica.",
    dotClass: "timeline__dot--edu",
  },
  {
    title: "Licenciada en Trabajo Social",
    label: "2024 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2024-3027109",
    description:
      "Formación orientada a intervención social, políticas públicas y gestión comunitaria. Complementa el perfil técnico con comprensión del entorno humano y social.",
    dotClass: "timeline__dot--edu",
  },
  {
    title: "Bachiller en Ciencias",
    label: "2018 · Unidad Educativa del Milenio Bernardo Valdivieso",
    description: "Base científica que sustenta el análisis y razonamiento lógico del perfil técnico actual.",
    dotClass: "",
  },
];

const experienceItems = [
  {
    title: "Laboratorio de Computación Aplicada — UNL",
    label: "Jun 2024 – Mar 2025 · Pasantías (9 meses)",
    description:
      "Soporte técnico avanzado, mantenimiento de infraestructura y desarrollo de soluciones digitales en un entorno de alta demanda operativa dentro de la Carrera de Computación.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Subdirección de Seguridad y Salud Ocupacional — UNL",
    label: "Jun 2023 – Ene 2024 · Pasantías (8 meses)",
    description:
      "Apoyo tecnológico y administrativo. Gestión de información digital, procesos documentales y soporte transversal al área.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Mantenimiento DTI — UNL",
    label: "Oct 2021 – Dic 2021 · Pasantías",
    description:
      "Mantenimiento preventivo y correctivo de equipos, instalación de software y soporte técnico dentro del Departamento de Tecnologías de la Información.",
    dotClass: "timeline__dot--work",
  },
  {
    title: "Docente particular — Clases personalizadas",
    label: "Feb 2024 – Abr 2024 · Loja",
    description:
      "Planificación curricular y docencia con metodologías activas. Comunicación efectiva de conceptos técnicos complejos.",
    dotClass: "timeline__dot--work",
  },
];

function TimelineItem({
  title,
  label,
  description,
  dotClass,
}: {
  title: string;
  label: string;
  description: string;
  dotClass: string;
}) {
  return (
    <div className="timeline__item reveal" data-reveal="">
      <div className={`timeline__dot${dotClass ? ` ${dotClass}` : ""}`} />
      <div className="timeline__body">
        <h3 className="timeline__title">{title}</h3>
        <p className="timeline__label">{label}</p>
        <p className="timeline__desc">{description}</p>
      </div>
    </div>
  );
}

export default function TrayectoriaPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--neutral">Historial</span>
            <h1>
              <span className="section-heading__grad-text">Trayectoria</span>
            </h1>
            <p className="page-hero__desc">
              Formación académica y experiencia laboral — el camino que llevó al perfil técnico actual.
            </p>
          </div>

          <div className="trayectoria-layout">

            <div className="trayectoria-col">
              <div className="trayectoria-col__header reveal" data-reveal="">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Zm4 5v4a6 6 0 0 0 12 0v-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Formación académica
              </div>
              <div className="timeline">
                {educationItems.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>
            </div>

            <div className="trayectoria-col">
              <div className="trayectoria-col__header reveal" data-reveal="">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Experiencia laboral
              </div>
              <div className="timeline">
                {experienceItems.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
