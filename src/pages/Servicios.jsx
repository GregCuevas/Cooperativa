import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Educacion from "../assets/educacion.jpg";
import Wifi from "../assets/wifi.jpg";
import Finanzas from "../assets/finanza.jpg";

const Servicios = () => {
  const servicios = [
    {
      title: "Telecomunicaciones",
      image: Wifi,
      alt: "Mano sosteniendo un smartphone con icono 5G",
      description:
        "Para ampliar las telecomunicaciones en zonas rurales, nos enfocamos en promover el desarrollo educativo.",
      link: "/servicios/telecomunicaciones",
    },
    {
      title: "Educación",
      image: Educacion,
      alt: "Estudiantes usando laptops y tablets al aire libre",
      description:
        "Comprometidos con un objetivo compartido, Coopebred facilita el acceso equitativo a la tecnología 5G para todos.",
      link: "/servicios/educacion",
    },
    {
      title: "Financiamiento",
      image: Finanzas,
      alt: "Personas en oficina analizando gráficos financieros",
      description:
        "Con las soluciones de Coopebred, las familias en áreas rurales acceden a diversas ventajas económicas.",
      link: "/servicios/financiamiento",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Servicios
            </h2>
            <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
              Conectando comunidades, educando generaciones y financiando el
              progreso en la era digital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="relative h-0 pb-[66.67%] overflow-hidden">
                  <img
                    src={servicio.image}
                    alt={servicio.alt}
                    className="absolute inset-0 object-cover w-full rounded-sm "
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                    {servicio.title}
                  </h3>
                  <p className="flex-grow mb-4 text-sm text-gray-600 sm:text-base">
                    {servicio.description}
                  </p>
                  <Link
                    to={servicio.link}
                    className="flex items-center text-sm text-[#f8961e] transition-colors duration-200 hover:text-orange-500 sm:text-base"
                  >
                    Leer Más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
