"use client";

import { useEffect, useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type PortfolioChromeProps = {
  navigationItems: NavigationItem[];
};

function SunIcon() {
  return (
    <svg aria-hidden="true" className="theme-toggle__icon" viewBox="0 0 24 24">
      <path
        d="M12 3v2.2M12 18.8V21M5.64 5.64l1.56 1.56M16.8 16.8l1.56 1.56M3 12h2.2M18.8 12H21M5.64 18.36l1.56-1.56M16.8 7.2l1.56-1.56M12 16.4A4.4 4.4 0 1 0 12 7.6a4.4 4.4 0 0 0 0 8.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="theme-toggle__icon" viewBox="0 0 24 24">
      <path
        d="M20.2 14.2A7.8 7.8 0 1 1 9.8 3.8a7 7 0 0 0 10.4 10.4Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function PortfolioChrome({ navigationItems }: PortfolioChromeProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme =
      storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    const spotlight = document.getElementById("spotlight");
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
    );

    const updateSpotlight = (event: MouseEvent) => {
      spotlight?.style.setProperty("--x", `${event.clientX}`);
      spotlight?.style.setProperty("--y", `${event.clientY}`);
    };

    const showSpotlight = () => spotlight?.classList.add("spotlight--visible");
    const hideSpotlight = () =>
      spotlight?.classList.remove("spotlight--visible");

    const sectionMap = new Map(
      navLinks.map((link) => [link.getAttribute("href")?.slice(1), link]),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const current = visibleEntries.reduce((previous, entry) =>
          entry.intersectionRatio > previous.intersectionRatio ? entry : previous,
        );

        navLinks.forEach((link) => {
          link.classList.remove("nav__link--active");
        });

        sectionMap
          .get(current.target.id)
          ?.classList.add("nav__link--active");
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    document.addEventListener("mousemove", updateSpotlight);
    document.addEventListener("mouseenter", showSpotlight);
    document.addEventListener("mouseleave", hideSpotlight);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", updateSpotlight);
      document.removeEventListener("mouseenter", showSpotlight);
      document.removeEventListener("mouseleave", hideSpotlight);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <>
      <div className="spotlight" id="spotlight" />

      <header className="site-header">
        <div className="site-header__inner">
          <nav aria-label="Navegacion principal" className="nav">
            {navigationItems.map((item) => (
              <a data-nav-link href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>
    </>
  );
}
