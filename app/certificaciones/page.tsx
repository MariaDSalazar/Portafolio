"use client";

import { useState } from "react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  category: "tech" | "language";
  pdf: string;
  description: string;
};

const BASE = process.env.NODE_ENV === "production" ? "/Portafolio" : "";

const certificates: Certificate[] = [
  {
    id: "cybersecurity",
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    date: "Nov 2024",
    hours: "70 h",
    category: "tech",
    pdf: `${BASE}/certificados/junior-cybersecurity-analyst.pdf`,
    description:
      "Amenazas y vulnerabilidades, criptografía aplicada, autenticación, control de acceso y respuesta a incidentes. Certificado avalado internacionalmente por Cisco.",
  },
  {
    id: "packet-tracer",
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Jun 2022",
    category: "tech",
    pdf: `${BASE}/certificados/packet-tracer.pdf`,
    description:
      "Diseño, configuración y diagnóstico de topologías de red complejas con la herramienta de simulación estándar de la industria.",
  },
  {
    id: "ingles",
    title: "Certificado de Suficiencia en Inglés — Nivel B1",
    issuer: "Instituto de Idiomas, Universidad Nacional de Loja",
    date: "Ago 2023",
    hours: "768 h",
    category: "language",
    pdf: `${BASE}/certificados/ingles-b1.pdf`,
    description:
      "Certificación B1 según el Marco Común Europeo de Referencia para las Lenguas (MCER), con aprobación en los tres niveles cursados.",
  },
];

const CATEGORY_LABEL: Record<string, string> = {
  tech:     "Técnico",
  language: "Idiomas",
};

function CertCard({
  cert,
  onView,
  active,
}: {
  cert: Certificate;
  onView: (id: string) => void;
  active: boolean;
}) {
  return (
    <div
      className={`cert-card reveal${active ? " cert-card--active" : ""}`}
      data-reveal=""
    >
      <div className="cert-card__header">
        <span className={`cert-card__category cert-card__category--${cert.category}`}>
          {CATEGORY_LABEL[cert.category]}
        </span>
        {cert.hours && (
          <span className="cert-card__hours">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="14" height="14">
              <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            {cert.hours}
          </span>
        )}
      </div>

      <h3 className="cert-card__title">{cert.title}</h3>
      <p className="cert-card__issuer">{cert.issuer}</p>
      <p className="cert-card__date">{cert.date}</p>
      <p className="cert-card__desc">{cert.description}</p>

      <div className="cert-card__actions">
        <button
          className={`cert-view-btn${active ? " cert-view-btn--active" : ""}`}
          onClick={() => onView(cert.id)}
          type="button"
        >
          {active ? (
            <>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="15" height="15">
                <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              Cerrar
            </>
          ) : (
            <>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="15" height="15">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Zm10-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              Ver certificado
            </>
          )}
        </button>

        <a
          className="cert-download-btn"
          download
          href={cert.pdf}
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="15" height="15">
            <path d="M12 3v13m0 0-4-4m4 4 4-4M3 21h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
          Descargar
        </a>
      </div>

      {active && (
        <div className="cert-viewer">
          <object
            className="cert-viewer__object"
            data={cert.pdf}
            type="application/pdf"
          >
            {/* Fallback si el browser no soporta PDF embed */}
            <div className="cert-viewer__fallback">
              <p>Tu navegador no puede mostrar el PDF directamente.</p>
              <a className="cert-download-btn" href={cert.pdf} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="15" height="15">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h6m0 0v6m0-6L10 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Abrir PDF en nueva pestaña
              </a>
            </div>
          </object>
        </div>
      )}
    </div>
  );
}

export default function CertificacionesPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleView = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--cert">Credenciales</span>
            <h1>
              <span className="section-heading__grad-text--cert">Certificaciones</span>
            </h1>
            <p className="page-hero__desc">
              Certificaciones internacionales verificables. Haz clic en &ldquo;Ver certificado&rdquo; para revisarlo directamente.
            </p>
          </div>

          <div className="certs-grid">
            {certificates.map((cert) => (
              <CertCard
                active={activeId === cert.id}
                cert={cert}
                key={cert.id}
                onView={handleView}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
