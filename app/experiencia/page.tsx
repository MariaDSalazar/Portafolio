const experienciaItems = [
  {
    title: "Laboratorio de Computación Aplicada — UNL",
    period: "Jun 2024 – Mar 2025",
    duration: "9 meses · Pasantías",
    description:
      "Soporte técnico avanzado, mantenimiento de infraestructura y desarrollo de soluciones digitales en un entorno de alta demanda operativa dentro de la Carrera de Computación.",
    skills: ["Infraestructura", "Soporte técnico", "Servidores", "Redes"],
    dotClass: "timeline__dot--work",
  },
  {
    title: "Subdirección de Seguridad y Salud Ocupacional — UNL",
    period: "Jun 2023 – Ene 2024",
    duration: "8 meses · Pasantías",
    description:
      "Apoyo tecnológico en la gestión de información digital, procesos documentales y soporte transversal al área.",
    skills: ["Gestión digital", "Soporte técnico"],
    dotClass: "timeline__dot--work",
  },
  {
    title: "Mantenimiento DTI — UNL",
    period: "Oct 2021 – Dic 2021",
    duration: "3 meses · Pasantías",
    description:
      "Mantenimiento preventivo y correctivo de equipos, instalación de software y soporte técnico de primer nivel dentro del Departamento de Tecnologías de la Información.",
    skills: ["Hardware", "Software", "Soporte TI"],
    dotClass: "timeline__dot--work",
  },
];

function ExpCard({
  title,
  period,
  duration,
  description,
  skills,
  dotClass,
}: {
  title: string;
  period: string;
  duration: string;
  description: string;
  skills: string[];
  dotClass: string;
}) {
  return (
    <div className="exp-card reveal" data-reveal="">
      <div className="exp-card__timeline-dot-wrap">
        <div className={`timeline__dot${dotClass ? ` ${dotClass}` : ""}`} />
      </div>
      <div className="exp-card__body">
        <div className="exp-card__header">
          <h3 className="timeline__title">{title}</h3>
          <div className="exp-card__period">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="14" height="14">
              <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            {period} · {duration}
          </div>
        </div>
        <p className="timeline__desc">{description}</p>
        <div className="exp-card__skills">
          {skills.map((s) => (
            <span className="exp-skill-chip" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienciaPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--tech">Laboral</span>
            <h1>
              <span className="section-heading__grad-text">Experiencia Técnica</span>
            </h1>
            <p className="page-hero__desc">
              Experiencia en entornos universitarios reales — soporte, infraestructura y desarrollo dentro del ecosistema tecnológico de la UNL.
            </p>
          </div>

          <div className="exp-timeline">
            {experienciaItems.map((item) => (
              <ExpCard key={item.title} {...item} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
