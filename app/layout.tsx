import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PortfolioChrome } from "./components/portfolio-chrome";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "María del Carmen Salazar | Ingeniera en Computación",
  description:
    "Portafolio profesional de María del Carmen Salazar Torres, Ingeniera en Ciencias de la Computación. Desarrollo de software, redes, ciberseguridad e IoT.",
};

const navigationItems = [
  { label: "Inicio",          href: "/" },
  { label: "Proyectos",       href: "/proyectos" },
  { label: "Certificaciones", href: "/certificaciones" },
  { label: "Formación",       href: "/formacion" },
  { label: "Experiencia",     href: "/experiencia" },
  { label: "Sobre mí",        href: "/sobre-mi" },
  { label: "Contacto",        href: "/contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        <PortfolioChrome navigationItems={navigationItems} />
        {children}
      </body>
    </html>
  );
}
