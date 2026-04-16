
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

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <div className="cert-card reveal" data-reveal="">
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

    </div>
  );
}

export default function CertificacionesPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text--cert">Certificaciones</span>
            </h1>
          </div>

          <div className="certs-grid">
            {certificates.map((cert) => (
              <CertCard
                cert={cert}
                key={cert.id}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
