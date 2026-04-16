"use client";

import { useEffect, useState } from "react";

/* ── Tipos ── */
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
};

type Project = Repo & { languages: string[] };

/* ── Configuración ── */
const OWNER    = "MariaDSalazar";
const HIDDEN   = new Set(["Portafolio", "practica11", "Jenniffer", "RMI", "frontend-pis6to"]);
const FEATURED = new Set(["prototipoIoTBiometric", "Libro-Ciberseguridad-UNL", "Web-Project-with-clean-Architecture"]);

/** Descripciones de respaldo para repos sin descripción en GitHub */
const FALLBACK_DESC: Record<string, string> = {
  "Web-Project-with-clean-Architecture":
    "Proyecto web desarrollado aplicando arquitectura limpia, separación de responsabilidades y buenas prácticas de desarrollo frontend.",
};

/** Colores por lenguaje para los chips */
const LANG_COLOR: Record<string, { bg: string; fg: string }> = {
  Python:     { bg: "#3572A5", fg: "#fff" },
  JavaScript: { bg: "#f1e05a", fg: "#333" },
  TypeScript: { bg: "#3178c6", fg: "#fff" },
  CSS:        { bg: "#563d7c", fg: "#fff" },
  HTML:       { bg: "#e34c26", fg: "#fff" },
  Java:       { bg: "#b07219", fg: "#fff" },
  "C++":      { bg: "#f34b7d", fg: "#fff" },
  C:          { bg: "#555",    fg: "#fff" },
  Shell:      { bg: "#89e051", fg: "#333" },
};

/** Gradiente de fondo fallback por lenguaje (si la imagen falla) */
const LANG_GRAD: Record<string, string> = {
  Python:     "linear-gradient(135deg,#3572A5,#1a3a6b)",
  JavaScript: "linear-gradient(135deg,#f1e05a,#b8a000)",
  CSS:        "linear-gradient(135deg,#563d7c,#2d1f42)",
  HTML:       "linear-gradient(135deg,#e34c26,#a03015)",
  default:    "linear-gradient(135deg,#1d4ed8,#5b21b6)",
};

/* ── Componente: chip de lenguaje ── */
function LangChip({ lang }: { lang: string }) {
  const c = LANG_COLOR[lang] ?? { bg: "#6366f1", fg: "#fff" };
  return (
    <span className="project-chip" style={{ background: c.bg, color: c.fg }}>
      {lang}
    </span>
  );
}

/* ── Componente: card de proyecto ── */
function ProjectCard({ project }: { project: Project }) {
  const [imgErr, setImgErr] = useState(false);
  const displayName = project.name.replace(/[-_]/g, " ");
  const desc =
    project.description?.trim() ||
    FALLBACK_DESC[project.name] ||
    "Repositorio público en GitHub.";
  const isFeatured = FEATURED.has(project.name);
  const previewSrc = `https://opengraph.githubassets.com/1/${OWNER}/${project.name}`;
  const grad = LANG_GRAD[project.language ?? ""] ?? LANG_GRAD.default;

  return (
    <article className="project-card">

      {/* Imagen → clic abre el repo */}
      <a
        aria-label={`Abrir ${displayName} en GitHub`}
        className="project-card__cover-link"
        href={project.html_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {imgErr ? (
          <div className="project-card__cover-fallback" style={{ background: grad }}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="48" height="48">
              <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10" stroke="rgba(255,255,255,0.7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        ) : (
          <img
            alt={`Preview de ${displayName}`}
            className="project-card__cover-img"
            loading="lazy"
            onError={() => setImgErr(true)}
            src={previewSrc}
          />
        )}
        <div className="project-card__cover-overlay">
          <span className="project-card__cover-cta">Ver repositorio</span>
        </div>
      </a>

      {/* Contenido */}
      <div className="project-card__body">
        {isFeatured && (
          <span className="project-card__featured-badge">Destacado</span>
        )}

        <h3 className="project-card__title">{displayName}</h3>
        <p className="project-card__desc">{desc}</p>

        {/* Chips de tecnologías */}
        {project.languages.length > 0 && (
          <div className="project-card__chips">
            {project.languages.slice(0, 5).map((l) => (
              <LangChip key={l} lang={l} />
            ))}
          </div>
        )}

      </div>
    </article>
  );
}

/* ── Componente: skeleton de carga ── */
function SkeletonCard() {
  return (
    <div className="project-card project-card--skeleton">
      <div className="skeleton-cover" />
      <div className="project-card__body">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-chips">
          <div className="skeleton-chip" />
          <div className="skeleton-chip" />
          <div className="skeleton-chip" />
        </div>
      </div>
    </div>
  );
}

/* ── Página principal ── */
type Status = "loading" | "ok" | "error";

export default function ProyectosPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus]     = useState<Status>("loading");

  useEffect(() => {
    const ctrl = new AbortController();

    async function load() {
      try {
        /* 1. Lista de repos */
        const res = await fetch(
          `https://api.github.com/users/${OWNER}/repos?sort=updated&per_page=30`,
          { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`API ${res.status}`);
        const repos = (await res.json() as Repo[]).filter(
          (r) => !HIDDEN.has(r.name)
        );

        /* 2. Lenguajes de cada repo en paralelo */
        const withLangs = await Promise.all(
          repos.map(async (repo) => {
            try {
              const lr = await fetch(
                `https://api.github.com/repos/${OWNER}/${repo.name}/languages`,
                { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } }
              );
              const langsObj = (await lr.json()) as Record<string, number>;
              return { ...repo, languages: Object.keys(langsObj) };
            } catch {
              return { ...repo, languages: repo.language ? [repo.language] : [] };
            }
          })
        );

        /* Destacados primero */
        const sorted = [
          ...withLangs.filter((r) => FEATURED.has(r.name)),
          ...withLangs.filter((r) => !FEATURED.has(r.name)),
        ];

        setProjects(sorted);
        setStatus("ok");
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") setStatus("error");
      }
    }

    load();
    return () => ctrl.abort();
  }, []);

  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1><span className="section-heading__grad-text">Proyectos</span></h1>
          </div>

          {/* Skeletons mientras carga */}
          {status === "loading" && (
            <div className="projects-grid">
              {[1, 2, 3].map((n) => <SkeletonCard key={n} />)}
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="projects-error">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="44" height="44">
                <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <p>No se pudieron cargar los proyectos. Puede ser un límite temporal de la API de GitHub.</p>
              <a className="hero-link hero-link--primary" href={`https://github.com/${OWNER}`} rel="noopener noreferrer" target="_blank">
                Ver perfil en GitHub
              </a>
            </div>
          )}

          {/* Proyectos cargados */}
          {status === "ok" && (
            <div className="projects-grid">
              {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          )}

          <div className="github-cta reveal" data-reveal="">
            <a
              className="hero-link hero-link--ghost"
              href={`https://github.com/${OWNER}`}
              rel="noopener noreferrer"
              style={{ color: "var(--text-main)", borderColor: "var(--border)" }}
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
