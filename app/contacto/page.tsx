import type { ReactElement } from "react";

type ContactItem = {
  id: string;
  platform: string;
  handle: string;
  href: string;
  variant: "gmail" | "linkedin" | "telegram" | "orcid" | "github";
};

const contacts: ContactItem[] = [
  {
    id: "gmail",
    platform: "Gmail",
    handle: "maricarmen19salazar@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=maricarmen19salazar@gmail.com",
    variant: "gmail",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "linkedin.com/in/mariasalazar24",
    href: "https://www.linkedin.com/in/mariasalazar24",
    variant: "linkedin",
  },
  {
    id: "telegram",
    platform: "Telegram",
    handle: "@maria_carmen22_st",
    href: "https://t.me/maria_carmen22_st",
    variant: "telegram",
  },
  {
    id: "orcid",
    platform: "ORCID",
    handle: "orcid.org",
    href: "https://orcid.org/0009-0005-5661-4428",
    variant: "orcid",
  },
  {
    id: "github",
    platform: "GitHub",
    handle: "github.com/MariaDSalazar",
    href: "https://github.com/MariaDSalazar",
    variant: "github",
  },
];

/* ── Iconos de marca (fill) ── */
const ICONS: Record<ContactItem["variant"], ReactElement> = {
  gmail: (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  linkedin: (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  telegram: (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  orcid: (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  ),
  github: (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
};

function SocialCard({ item }: { item: ContactItem }) {
  return (
    <a
      className={`social-card social-card--${item.variant} reveal`}
      data-reveal=""
      href={item.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="social-card__banner">
        <span className="social-card__blob social-card__blob--1" aria-hidden="true" />
        <span className="social-card__blob social-card__blob--2" aria-hidden="true" />
        <div className="social-card__icon-ring">{ICONS[item.variant]}</div>
      </div>
      <div className="social-card__content">
        <p className="social-card__platform">{item.platform}</p>
        <p className="social-card__handle">{item.handle}</p>
        <span className="social-card__cta">
          Visitar
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="13" height="13">
            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function ContactoPage() {
  return (
    <main className="page-shell inner-page">
      <section className="content-section">
        <div className="content-section__inner">

          <div className="page-hero reveal" data-reveal="" style={{ textAlign: "center" }}>
            <h1>
              <span className="section-heading__grad-text">Contáctame</span>
            </h1>
          </div>

          <div className="social-grid">
            {contacts.map((item) => (
              <SocialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="contact-note reveal" data-reveal="">
            <p>Tiempo de respuesta habitual: menos de 24 horas en días hábiles.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
