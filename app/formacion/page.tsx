const educationItems = [
  {
    title: "Magíster en Docencia e Investigación en Educación Superior",
    label: "En curso — último semestre · Universidad Nacional de Loja",
    description:
      "Investigación enfocada en modelos pedagógicos para educación superior. Desarrollo de competencias en diseño curricular, metodologías activas y producción académica.",
    dotClass: "timeline__dot--edu",
    tag: "Maestría",
  },
  {
    title: "Ingeniera en Ciencias de la Computación",
    label: "2026 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2026-3314810",
    description:
      "Formación sólida en algoritmos, estructuras de datos, redes, sistemas operativos y desarrollo de software. Proyecto de vinculación ejecutado en entorno universitario de alta demanda.",
    dotClass: "timeline__dot--work",
    tag: "Ingeniería",
  },
  {
    title: "Licenciada en Trabajo Social",
    label: "2024 · Universidad Nacional de Loja · Reg. SENESCYT 1008-2024-3027109",
    description:
      "Formación en intervención social, políticas públicas y gestión comunitaria. Complementa el perfil técnico con comprensión del entorno humano.",
    dotClass: "timeline__dot--edu",
    tag: "Licenciatura",
  },
  {
    title: "Bachiller en Ciencias",
    label: "2018 · Unidad Educativa del Milenio Bernardo Valdivieso",
    description:
      "Base científica que sustenta el análisis y razonamiento lógico del perfil técnico actual.",
    dotClass: "",
    tag: "Bachillerato",
  },
];

function EduCard({
  title,
  label,
  description,
  dotClass,
  tag,
}: {
  title: string;
  label: string;
  description: string;
  dotClass: string;
  tag: string;
}) {
  return (
    <div className="edu-card reveal" data-reveal="">
      <div className={`timeline__dot${dotClass ? ` ${dotClass}` : ""}`} />
      <div className="edu-card__body">
        <span className="edu-card__tag">{tag}</span>
        <h3 className="timeline__title">{title}</h3>
        <p className="timeline__label">{label}</p>
        <p className="timeline__desc">{description}</p>
      </div>
    </div>
  );
}

export default function FormacionPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--edu">Academia</span>
            <h1>
              <span className="section-heading__grad-text--edu">Formación Académica</span>
            </h1>
            <p className="page-hero__desc">
              Trayectoria académica — de lo más reciente a lo más temprano.
            </p>
          </div>

          <div className="edu-timeline">
            {educationItems.map((item) => (
              <EduCard key={item.title} {...item} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
