import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // genera archivos estáticos en /out
  basePath: "/Portafolio", // ruta base del repositorio en GitHub Pages
  assetPrefix: "/Portafolio",
  trailingSlash: true,
  images: {
    unoptimized: true,     // requerido para export estático
  },
};

export default nextConfig;
