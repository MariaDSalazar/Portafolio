const experienciaItems = [
  {
    title: "Data Center — Carrera de Computación, UNL",
    period: "Jun 2024 – Mar 2025",
    duration: "9 meses · Servicios comunitarios",
    description:
      "Elaboración de inventarios y control de equipos tecnológicos. Soporte técnico presencial, instalación y configuración de software. Diseño e implementación de cableado estructurado. Administración del software de servidores en Proxmox, redacción de manuales e informes técnicos. Atención y asistencia a usuarios internos y externos del Data Center.",
    skills: ["Proxmox", "Servidores", "Cableado estructurado", "Linux", "Inventarios", "Soporte TI"],
    dotClass: "timeline__dot--work",
  },
  {
    title: "Pasante de Soporte Técnico — DTI, UNL",
    period: "Oct 2021 – Dic 2021",
    duration: "3 meses · Prácticas preprofesionales",
    description:
      "Mantenimiento preventivo y correctivo de computadores e impresoras. Diagnóstico y resolución de fallas de hardware y software. Soporte técnico al usuario, cableado estructurado y soporte básico de red dentro del Departamento de Tecnologías de la Información.",
    skills: ["Hardware", "Mantenimiento", "Redes", "Soporte TI"],
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

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text">Experiencia Técnica</span>
            </h1>
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
