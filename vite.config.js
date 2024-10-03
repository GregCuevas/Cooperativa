import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap"; // Importar el plugin de sitemap

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.coopebred.com", // Cambia al dominio real de tu sitio
      routes: [
        "/", // Página principal
        "/cuentas-de-ahorro", // Rutas que quieres incluir en el sitemap
        "/productos-y-servicios/",
        "/historia",
        // Añade todas las rutas importantes de tu sitio
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
