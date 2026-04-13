import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Maria del Carmen Salazar | Portafolio Profesional",
  description:
    "Portafolio profesional de Maria del Carmen Salazar, ingeniera en Ciencias de la Computacion con enfoque en desarrollo, tecnologia y educacion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
