"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function MenuIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="20" height="20">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" width="20" height="20">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function PortfolioChrome({ navigationItems }: PortfolioChromeProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme =
      storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.setAttribute("data-js", "");
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Scroll-reveal: anima elementos con [data-reveal] al entrar en pantalla
  useEffect(() => {
    const spotlight = document.getElementById("spotlight");

    const updateSpotlight = (event: MouseEvent) => {
      spotlight?.style.setProperty("--x", `${event.clientX}`);
      spotlight?.style.setProperty("--y", `${event.clientY}`);
    };
    const showSpotlight = () => spotlight?.classList.add("spotlight--visible");
    const hideSpotlight = () => spotlight?.classList.remove("spotlight--visible");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => revealObserver.observe(el));

    document.addEventListener("mousemove", updateSpotlight);
    document.addEventListener("mouseenter", showSpotlight);
    document.addEventListener("mouseleave", hideSpotlight);

    return () => {
      revealObserver.disconnect();
      document.removeEventListener("mousemove", updateSpotlight);
      document.removeEventListener("mouseenter", showSpotlight);
      document.removeEventListener("mouseleave", hideSpotlight);
    };
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    // Remove basePath prefix for comparison
    const clean = pathname.replace(/^\/Portafolio/, "") || "/";
    return clean === href || clean.startsWith(href + "/");
  };

  return (
    <>
      <div className="spotlight" id="spotlight" />

      <header className="site-header">
        <div className="site-header__inner">
          <nav aria-label="Navegación principal" className="nav nav--desktop">
            {navigationItems.map((item) => (
              <Link
                className={isActive(item.href) ? "nav__link--active" : ""}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-controls">
            <button
              aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
              className="theme-toggle"
              onClick={toggleTheme}
              type="button"
            >
              {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className="menu-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Menú móvil" className="nav nav--mobile">
            {navigationItems.map((item) => (
              <Link
                className={isActive(item.href) ? "nav__link--active" : ""}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
