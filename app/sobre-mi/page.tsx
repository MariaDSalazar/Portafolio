import Link from "next/link";

const bio =
  "Soy Ingeniera en Ciencias de la Computación por la Universidad Nacional de Loja. Me especializo en desarrollo de software, redes, ciberseguridad e IoT y disfruto llevar proyectos desde la idea hasta el prototipo funcional. Mi formación complementaria en Trabajo Social me permite diseñar soluciones técnicas con perspectiva humana real, entendiendo el impacto que tienen en quienes las usan. Aspiro a combinar rigor técnico con docencia e investigación universitaria, aportando tanto en el aula como en el campo.";

const achievements = [
  {
    id: "simposio",
    text: "Ponente — III Simposio de Investigación Científica, UNL · Dic 2024",
    icon: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 0 2-2m0 0V5a2 2 0 0 0-2-2H9a2 2 0 0 1-2 2m0 0h6m0 0V5a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2v2m0 0h-6",
  },
  {
    id: "jornadas",
    text: "Expositora — IV Jornadas Internacionales de Trabajo Social, UNL · Abr 2024",
    icon: "M9 3h6m-3 0v18M3 9l9-6 9 6M5 8v10a1 1 0 0 0 1 1h4V13h4v6h4a1 1 0 0 0 1-1V8",
  },
  {
    id: "pastoral",
    text: "Voluntaria — Consejo Diocesano de Pastoral Juvenil de Loja · 2014–2019",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
];

const languages = [
  { name: "Español", level: 5, label: "Nativo" },
  { name: "Inglés",  level: 3, label: "B1 · MCER" },
];

const softSkills = [
  "Liderazgo",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de conflictos",
  "Escucha activa",
  "Adaptabilidad",
  "Trabajo bajo presión",
  "Orientación al servicio",
];

const interests = [
  "IoT & Hardware embebido",
  "Ciberseguridad",
  "Docencia universitaria",
  "Investigación académica",
  "Desarrollo de software",
  "Innovación tecnológica",
];

function LangDots({ level }: { level: number }) {
  return (
    <span className="sm-lang-dots" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`sm-lang-dot${i <= level ? " sm-lang-dot--on" : ""}`}
        />
      ))}
    </span>
  );
}

export default function SobreMiPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text--social">Sobre mí</span>
            </h1>
          </div>

          {/* ── Bio card ── */}
          <div className="sm-bio reveal" data-reveal="">
            <p className="sm-bio__text">{bio}</p>
            <div className="sm-bio__achievements">
              {achievements.map((a) => (
                <span className="sm-bio__badge" key={a.id}>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="13" height="13">
                    <path
                      d={a.icon}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                  {a.text}
                </span>
              ))}
            </div>
          </div>

          {/* ── Tarjetas de perfil ── */}
          <div className="sm-qual-grid">

            {/* Idiomas */}
            <div className="sm-qual-card reveal" data-reveal="">
              <div className="sm-qual-card__header">
                <div className="sm-qual-card__icon-wrap sm-qual-card__icon-wrap--edu">
                  <svg aria-hidden="true" className="sm-qual-card__icon" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <h3 className="sm-qual-card__title">Idiomas</h3>
              </div>
              <div className="sm-lang-list">
                {languages.map((l) => (
                  <div className="sm-lang-row" key={l.name}>
                    <span className="sm-lang-name">{l.name}</span>
                    <LangDots level={l.level} />
                    <span className="sm-lang-label">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades blandas */}
            <div className="sm-qual-card reveal" data-reveal="">
              <div className="sm-qual-card__header">
                <div className="sm-qual-card__icon-wrap sm-qual-card__icon-wrap--tech">
                  <svg aria-hidden="true" className="sm-qual-card__icon" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <h3 className="sm-qual-card__title">Habilidades blandas</h3>
              </div>
              <div className="sm-chip-wrap">
                {softSkills.map((s) => (
                  <span className="sm-chip sm-chip--tech" key={s}>{s}</span>
                ))}
              </div>
            </div>

            {/* Intereses */}
            <div className="sm-qual-card reveal" data-reveal="">
              <div className="sm-qual-card__header">
                <div className="sm-qual-card__icon-wrap sm-qual-card__icon-wrap--social">
                  <svg aria-hidden="true" className="sm-qual-card__icon" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M3.75 13.5 14.25 2.25 12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <h3 className="sm-qual-card__title">Intereses</h3>
              </div>
              <div className="sm-chip-wrap">
                {interests.map((i) => (
                  <span className="sm-chip sm-chip--social" key={i}>{i}</span>
                ))}
              </div>
            </div>

          </div>

          {/* ── CTA ── */}
          <div className="sobre-cta reveal" data-reveal="">
            <p className="sobre-cta__text">
              ¿Quieres conocer mi trayectoria académica o experiencia técnica?
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
