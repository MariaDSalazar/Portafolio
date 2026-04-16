import type { ReactNode } from "react";

type EduItem = {
  title: string;
  institution: string;
  date: string;
  tag: string;
  inProgress?: boolean;
  variant: "masters" | "engineering" | "social" | "highschool";
  senescyt?: string;
};

const educationItems: EduItem[] = [
  {
    title: "Magíster en Docencia e Investigación en Educación Superior",
    institution: "Universidad Nacional de Loja",
    date: "En curso — último semestre",
    tag: "Maestría",
    inProgress: true,
    variant: "masters",
  },
  {
    title: "Ingeniera en Ciencias de la Computación",
    institution: "Universidad Nacional de Loja",
    date: "2026",
    senescyt: "Reg. SENESCYT 1008-2026-3314810",
    tag: "Ingeniería",
    variant: "engineering",
  },
  {
    title: "Licenciada en Trabajo Social",
    institution: "Universidad Nacional de Loja",
    date: "2024",
    senescyt: "Reg. SENESCYT 1008-2024-3027109",
    tag: "Licenciatura",
    variant: "social",
  },
  {
    title: "Bachiller en Ciencias",
    institution: "Unidad Educativa del Milenio Bernardo Valdivieso",
    date: "2018",
    tag: "Bachillerato",
    variant: "highschool",
  },
];

const ICONS: Record<EduItem["variant"], ReactNode> = {
  masters: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="34" height="34">
      <path
        d="M12 3 1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  engineering: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="34" height="34">
      <path
        d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  social: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="34" height="34">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  highschool: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="34" height="34">
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9ZM9 22V12h6v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
};

function EduCard({ item }: { item: EduItem }) {
  return (
    <div
      className={`edu-feat-card edu-feat-card--${item.variant} reveal`}
      data-reveal=""
    >
      <div className="edu-feat-card__banner">
        <span className="edu-feat-card__blob edu-feat-card__blob--1" aria-hidden="true" />
        <span className="edu-feat-card__blob edu-feat-card__blob--2" aria-hidden="true" />
        <div className="edu-feat-card__icon-ring">{ICONS[item.variant]}</div>
        {item.inProgress && (
          <span className="edu-feat-card__progress-badge">En curso</span>
        )}
      </div>

      <div className="edu-feat-card__content">
        <span className={`edu-feat-card__tag edu-feat-card__tag--${item.variant}`}>
          {item.tag}
        </span>
        <h3 className="edu-feat-card__title">{item.title}</h3>
        <p className="edu-feat-card__meta">{item.institution}</p>
        <p className="edu-feat-card__date">
          {item.date}
          {item.senescyt && (
            <span className="edu-feat-card__senescyt"> · {item.senescyt}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function FormacionPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text--edu">Formación Académica</span>
            </h1>
          </div>

          <div className="edu-feat-grid">
            {educationItems.map((item) => (
              <EduCard key={item.title} item={item} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
