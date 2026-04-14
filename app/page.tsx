import Link from "next/link";
import { ToolsSection } from "./components/tools-section";

const techChips = [
  { label: "Desarrollo de Software",   icon: "m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10" },
  { label: "Redes Cisco",              icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" },
  { label: "Ciberseguridad",           icon: "M12 3c2.7 2 5.6 3 8 3v5c0 5-3.4 8.9-8 10-4.6-1.1-8-5-8-10V6c2.4 0 5.3-1 8-3Zm-3 9 2 2 4-4" },
  { label: "IoT & Electrónica",        icon: "M9 3v3m6-3v3M9 18v3m6-3v3M18 9h3m-3 6h3M3 9h3m-3 6h3M8 8h8v8H8z" },
  { label: "QA & Testing",             icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { label: "Diseño Web",               icon: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 3h16" },
  { label: "Administración Servidores",icon: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm3-7h.01M7 17h.01" },
];

export default function Home() {
  return (
    <main className="page-shell">

      {/* ── Hero ── */}
      <section className="hero-section" id="inicio">
        <div className="hero-section__inner">
          <div className="hero-center">

            <div className="hero-panel__image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Retrato de María del Carmen Salazar Torres"
                className="hero__avatar hero__avatar--round"
                src="/Portafolio/image.png"
              />
            </div>

            <div className="hero__badge">
              <span className="hero__badge-ring" />
              <span className="hero__badge-label">
                Ingeniera en Ciencias de la Computación
              </span>
            </div>

            <p className="hero__intro">Hola, soy</p>

            <h1 className="hero__title">
              <span className="hero__title-grad">
                María del Carmen Salazar
              </span>
            </h1>

            <p className="hero__summary">
              Ingeniera enfocada en desarrollo de software, redes, ciberseguridad e IoT.
              Certificada por Cisco. Experiencia real en infraestructura universitaria de alta demanda.
              <br />
              <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                Construyo soluciones técnicas que funcionan en producción.
              </strong>
            </p>

            <div className="hero-chips">
              {techChips.map((chip) => (
                <span className="hero-chip" key={chip.label}>
                  <svg aria-hidden="true" className="hero-chip__icon" fill="none" viewBox="0 0 24 24">
                    <path d={chip.icon} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="hero-links">
              <Link className="hero-link hero-link--primary" href="/proyectos">
                <svg aria-hidden="true" className="hero-link__icon" fill="none" viewBox="0 0 24 24">
                  <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Ver proyectos
              </Link>
              <Link className="hero-link hero-link--ghost" href="/formacion">
                <svg aria-hidden="true" className="hero-link__icon" fill="none" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Formación
              </Link>
            </div>

          </div>
        </div>
      </section>

      <ToolsSection />

    </main>
  );
}
