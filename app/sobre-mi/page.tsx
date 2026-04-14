import Link from "next/link";

const otherExperience = [
  {
    title: "Docente particular — Clases personalizadas",
    period: "Feb 2024 – Abr 2024 · Loja",
    description:
      "Planificación curricular y docencia presencial con metodologías activas adaptadas al ritmo de cada estudiante. Comunicación efectiva de conceptos complejos con alta tasa de satisfacción.",
    icon: "M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h14M10 9h4m-4 4h4",
    variant: "edu",
  },
  {
    title: "Bienestar Estudiantil — UNL",
    period: "May 2024 – Jun 2024 · Servicios Comunitarios",
    description:
      "Atención directa a estudiantes universitarios, apoyo en actividades de orientación vocacional y gestión de recursos en el área de Bienestar Estudiantil.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    variant: "social",
  },
  {
    title: "Centro de Acogida «Santas Mariana de Jesús»",
    period: "Dic 2022 · Pasantías",
    description:
      "Intervención social con personas en situación de vulnerabilidad, aplicando principios del Trabajo Social en un contexto de acogida institucional.",
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z",
    variant: "social",
  },
  {
    title: "Ministerio de Inclusión y Economía Social",
    period: "Jun 2021 – Jul 2021 · Pasantías",
    description:
      "Trabajo directo en el Área de Adultos Mayores: acompañamiento, atención y apoyo en estrategias de inclusión social para población prioritaria.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 4v2m2-2a4 4 0 0 0-3-3.87",
    variant: "social",
  },
  {
    title: "Ponente — III Simposio de Investigación Científica",
    period: "Dic 2024 · Dirección de Investigación, UNL",
    description:
      "Presentación presencial ante comunidad académica internacional sobre riesgos psicosociales en el personal de la FEIRNNR de la UNL. Investigación con metodología mixta.",
    icon: "M9 3h6m-3 0v6m-4 4 1.5-6M10 13l1.5-6M14 13l-1.5-6M6 21h12M12 17v4m-5-8h10a1 1 0 0 1 1 1v2H6v-2a1 1 0 0 1 1-1Z",
    variant: "research",
  },
  {
    title: "Expositora — IV Jornadas Internacionales de Trabajo Social",
    period: "Abr 2024 · Carrera de Trabajo Social, UNL",
    description:
      "Exposición en modalidad en línea sobre riesgos psicosociales en entornos universitarios en jornadas con convocatoria internacional.",
    icon: "M9 3h6m-3 0v6m-4 4 1.5-6M10 13l1.5-6M14 13l-1.5-6M6 21h12M12 17v4m-5-8h10a1 1 0 0 1 1 1v2H6v-2a1 1 0 0 1 1-1Z",
    variant: "research",
  },
];

export default function SobreMiPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--social">Perfil completo</span>
            <h1>
              <span className="section-heading__grad-text--social">Sobre mí</span>
            </h1>
            <p className="page-hero__desc">
              Más allá de la ingeniería: docencia, investigación científica y experiencia en trabajo social.
              Un perfil multidisciplinar que aporta perspectiva humana real a cada proyecto.
            </p>
          </div>

          <div className="sobre-exp-grid">
            {otherExperience.map((item) => (
              <div
                className={`sobre-exp-card sobre-exp-card--${item.variant} reveal`}
                data-reveal=""
                key={item.title}
              >
                <div className="sobre-exp-card__icon-wrap">
                  <svg aria-hidden="true" className="sobre-exp-card__icon" fill="none" viewBox="0 0 24 24">
                    <path
                      d={item.icon}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="sobre-exp-card__title">{item.title}</h3>
                  <p className="sobre-exp-card__period">{item.period}</p>
                  <p className="sobre-exp-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sobre-cta reveal" data-reveal="">
            <p className="sobre-cta__text">
              ¿Quieres ver mi formación académica o experiencia técnica?
            </p>
            <div className="hero-links">
              <Link className="hero-link hero-link--primary" href="/formacion">
                Formación académica
              </Link>
              <Link className="hero-link hero-link--ghost" href="/experiencia">
                Experiencia técnica
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
