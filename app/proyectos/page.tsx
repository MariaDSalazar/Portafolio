"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
};

const LANG_COLORS: Record<string, string> = {
  Python:     "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS:        "#563d7c",
  HTML:       "#e34c26",
  Java:       "#b07219",
  C:          "#555555",
  "C++":      "#f34b7d",
};

// Repos a destacar primero (por relevancia técnica)
const FEATURED = ["prototipoIoTBiometric", "Libro-Ciberseguridad-UNL", "Web-Project-with-clean-Architecture"];

// Repos a ocultar (el portafolio mismo, prácticas triviales)
const HIDDEN = ["Portafolio", "practica11", "Jenniffer", "RMI", "frontend-pis6to"];

function RepoCard({ repo }: { repo: Repo }) {
  const isFeatured = FEATURED.includes(repo.name);
  const updated = new Date(repo.updated_at).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "short",
  });

  return (
    <a
      className={`repo-card${isFeatured ? " repo-card--featured" : ""} reveal`}
      data-reveal=""
      href={repo.html_url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {isFeatured && <span className="repo-card__badge">Destacado</span>}
      <h3 className="repo-card__name">{repo.name.replace(/-/g, " ").replace(/_/g, " ")}</h3>
      {repo.description && (
        <p className="repo-card__desc">{repo.description}</p>
      )}
      <div className="repo-card__meta">
        {repo.language && (
          <span className="repo-card__lang">
            <span
              className="repo-card__lang-dot"
              style={{ background: LANG_COLORS[repo.language] ?? "#8b8b8b" }}
            />
            {repo.language}
          </span>
        )}
        <span className="repo-card__updated">Actualizado {updated}</span>
        <svg aria-hidden="true" className="repo-card__arrow" fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      </div>
    </a>
  );
}

export default function ProyectosPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/MariaDSalazar/repos?sort=updated&per_page=30")
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json() as Promise<Repo[]>;
      })
      .then((data) => {
        const visible = data.filter((r) => !HIDDEN.includes(r.name));
        // Destacados primero, luego el resto
        const featured = visible.filter((r) => FEATURED.includes(r.name));
        const rest = visible.filter((r) => !FEATURED.includes(r.name));
        setRepos([...featured, ...rest]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="">
            <span className="section-heading__badge section-heading__badge--tech">GitHub</span>
            <h1>
              <span className="section-heading__grad-text">Proyectos</span>
            </h1>
            <p className="page-hero__desc">
              Repositorios públicos en GitHub — desde prototipos IoT hasta herramientas de ciberseguridad.
            </p>
          </div>

          {loading && (
            <div className="projects-loading">
              <div className="loading-spinner" />
              <p>Cargando repositorios…</p>
            </div>
          )}

          {error && (
            <div className="projects-error">
              <p>No se pudieron cargar los repositorios.</p>
              <a
                className="hero-link hero-link--ghost"
                href="https://github.com/MariaDSalazar"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver perfil en GitHub
              </a>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="repos-grid">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}

          <div className="github-cta reveal" data-reveal="">
            <a
              className="hero-link hero-link--ghost"
              href="https://github.com/MariaDSalazar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="hero-link__icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Ver todos en GitHub
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
