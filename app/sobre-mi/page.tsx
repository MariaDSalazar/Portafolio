import Link from "next/link";

const plusItems = [
  {
    icon: "M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h14M10 9h4m-4 4h4",
    title: "Docencia",
    body: "Planificación curricular y enseñanza con metodologías activas. Capacidad comprobada para comunicar conceptos técnicos complejos con claridad y adaptarlos al nivel del estudiante.",
    variant: "edu",
  },
  {
    icon: "M9 3h6m-3 0v6m-4 4 1.5-6M10 13l1.5-6M14 13l-1.5-6M6 21h12M12 17v4m-5-8h10a1 1 0 0 1 1 1v2H6v-2a1 1 0 0 1 1-1Z",
    title: "Investigación científica",
    body: "Ponente en el III Simposio de Investigación Científica de la UNL (Dic 2024). Manejo de metodologías mixtas con hallazgos presentados ante audiencias académicas internacionales.",
    variant: "edu",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 4v2m2-2a4 4 0 0 0-3-3.87",
    title: "Trabajo Social",
    body: "Licenciada en Trabajo Social (UNL, 2024). Intervención directa con comunidades vulnerables, adultos mayores y centros de acogida. Perspectiva humana real que complementa la ingeniería.",
    variant: "social",
  },
  {
    icon: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm7 4h4m-4 4h7",
    title: "Inglés B1",
    body: "Certificación de suficiencia lingüística según el MCER (768 horas), avalada por el Instituto de Idiomas de la UNL. Capacidad para documentación técnica, presentaciones y comunicación profesional en inglés.",
    variant: "lang",
  },
  {
    icon: "M22 10v6M2 10l10-5 10 5-10 5-10-5Zm4 5v4a6 6 0 0 0 12 0v-4",
    title: "Magíster en curso",
    body: "Último semestre de la Maestría en Docencia e Investigación en Educación Superior (UNL). Perfil que combina rigor técnico con visión pedagógica — diferencial real en roles de formación y liderazgo.",
    variant: "edu",
  },
];

export default function SobreMiPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--social">El plus</span>
            <h1>
              <span className="section-heading__grad-text--social">Más allá de la ingeniería</span>
            </h1>
            <p className="page-hero__desc">
              Dos carreras universitarias, una maestría en curso e investigación publicada internacionalmente.
              Este perfil multidisciplinar es el diferencial que aporto a cada equipo.
            </p>
          </div>

          <div className="plus-grid">
            {plusItems.map((item) => (
              <div
                className={`plus-card plus-card--${item.variant} reveal`}
                data-reveal=""
                key={item.title}
              >
                <div className="plus-card__icon-wrap">
                  <svg aria-hidden="true" className="plus-card__icon" fill="none" viewBox="0 0 24 24">
                    <path
                      d={item.icon}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <h3 className="plus-card__title">{item.title}</h3>
                <p className="plus-card__body">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="sobre-cta reveal" data-reveal="">
            <p className="sobre-cta__text">
              ¿Quieres conocer mis proyectos técnicos o ver mis certificaciones?
            </p>
            <div className="hero-links">
              <Link className="hero-link hero-link--primary" href="/proyectos">
                Ver proyectos
              </Link>
              <Link className="hero-link hero-link--ghost" href="/certificaciones">
                Ver certificaciones
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
