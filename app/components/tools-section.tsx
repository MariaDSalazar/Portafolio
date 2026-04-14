"use client";

import { useState } from "react";

type Category = "todas" | "lenguajes" | "frameworks" | "devops" | "iot" | "ides";

type Tool = {
  name: string;
  icon: string;        // URL completa del icono
  tooltip: string;
  category: Exclude<Category, "todas">;
};

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI  = "https://cdn.simpleicons.org";

const tools: Tool[] = [
  // ── Lenguajes ───────────────────────────────────────────
  { name: "Python",  icon: `${CDN}/python/python-original.svg`,         tooltip: "Lenguaje principal — scripts, IA y backend",        category: "lenguajes" },
  { name: "Java",    icon: `${CDN}/java/java-original.svg`,             tooltip: "Programación orientada a objetos",                  category: "lenguajes" },
  { name: "HTML5",   icon: `${CDN}/html5/html5-original.svg`,           tooltip: "Lenguaje de marcado web",                          category: "lenguajes" },
  { name: "CSS3",    icon: `${CDN}/css3/css3-original.svg`,             tooltip: "Estilos y diseño responsivo",                      category: "lenguajes" },

  // ── Frameworks & Librerías ───────────────────────────────
  { name: "Django",     icon: `${CDN}/django/django-plain.svg`,         tooltip: "Framework web de alto nivel para Python",          category: "frameworks" },
  { name: "Flask",      icon: `${CDN}/flask/flask-original.svg`,        tooltip: "Microframework web minimalista",                   category: "frameworks" },
  { name: "Bootstrap",  icon: `${CDN}/bootstrap/bootstrap-original.svg`, tooltip: "Framework CSS responsivo y moderno",             category: "frameworks" },
  { name: "Next.js",    icon: `${CDN}/nextjs/nextjs-original.svg`,      tooltip: "Framework React para producción",                  category: "frameworks" },

  // ── DevOps & Infraestructura ─────────────────────────────
  { name: "Linux",   icon: `${CDN}/linux/linux-original.svg`,           tooltip: "Sistema operativo — entornos de servidor",        category: "devops" },
  { name: "Docker",  icon: `${CDN}/docker/docker-original.svg`,         tooltip: "Contenedores para despliegue consistente",        category: "devops" },
  { name: "Proxmox", icon: `${SI}/proxmox/E57000`,                      tooltip: "Virtualización y gestión de VMs",                 category: "devops" },
  { name: "Git",     icon: `${CDN}/git/git-original.svg`,               tooltip: "Control de versiones distribuido",                category: "devops" },
  { name: "MySQL",   icon: `${CDN}/mysql/mysql-original.svg`,           tooltip: "Base de datos relacional",                        category: "devops" },

  // ── IoT & Hardware ───────────────────────────────────────
  { name: "Arduino",        icon: `${CDN}/arduino/arduino-original.svg`, tooltip: "Prototipos de hardware y electrónica",           category: "iot" },
  { name: "Node-RED",       icon: `${SI}/nodered/8F0000`,               tooltip: "Programación visual para IoT",                    category: "iot" },
  { name: "Fritzing",       icon: `${SI}/fritzing/E85C30`,              tooltip: "Diseño de circuitos electrónicos",                category: "iot" },
  { name: "Packet Tracer",  icon: `${SI}/cisco/1BA0D7`,                 tooltip: "Simulación de redes Cisco",                      category: "iot" },

  // ── IDEs & Herramientas ──────────────────────────────────
  { name: "VS Code", icon: `${CDN}/vscode/vscode-original.svg`,         tooltip: "Editor principal de desarrollo",                  category: "ides" },
  { name: "PyCharm", icon: `${CDN}/pycharm/pycharm-original.svg`,       tooltip: "IDE especializado en Python",                     category: "ides" },
];

const filters: { label: string; value: Category }[] = [
  { label: "Todas",          value: "todas"      },
  { label: "Lenguajes",      value: "lenguajes"  },
  { label: "Frameworks",     value: "frameworks" },
  { label: "DevOps",         value: "devops"     },
  { label: "IoT & Hardware", value: "iot"        },
  { label: "IDEs",           value: "ides"       },
];

export function ToolsSection() {
  const [active, setActive] = useState<Category>("todas");

  const visible = active === "todas"
    ? tools
    : tools.filter((t) => t.category === active);

  return (
    <section className="content-section tools-section" id="herramientas">
      <div className="content-section__inner">

        {/* Filtros */}
        <div className="tools-filters reveal" data-reveal="">
          {filters.map((f) => (
            <button
              className={`tools-filter-btn${active === f.value ? " tools-filter-btn--active" : ""}`}
              key={f.value}
              onClick={() => setActive(f.value)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="tools-grid">
          {visible.map((tool) => (
            <div
              className="tool-card"
              data-tooltip={tool.tooltip}
              key={tool.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={tool.name}
                className="tool-card__img"
                loading="lazy"
                src={tool.icon}
              />
              <p className="tool-card__name">{tool.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
