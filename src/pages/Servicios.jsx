import React from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Servicios = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Servicios
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 sm:text-2xl">
              Conectando comunidades, educando generaciones y financiando el
              progreso en la era digital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Telecommunications Section */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Telecommunications"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  Telecomunicaciones
                </h3>
                <p className="mb-4 text-gray-600">
                  Para ampliar las telecomunicaciones en zonas rurales, nos
                  enfocamos en promover el desarrollo educativo.
                </p>
                <button className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800">
                  Leer Más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Education Section */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Education"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Educación</h3>
                <p className="mb-4 text-gray-600">
                  Comprometidos con un objetivo compartido, Coopebred facilita
                  el acceso equitativo a la tecnología 5G para todos.
                </p>
                <button className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800">
                  Leer Más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Financing Section */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Financing"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Financiamiento</h3>
                <p className="mb-4 text-gray-600">
                  Con las soluciones de Coopebred, las familias en áreas rurales
                  acceden a diversas ventajas económicas.
                </p>
                <button className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800">
                  Leer Más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Servicios;
