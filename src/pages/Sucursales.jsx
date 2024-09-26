import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sucursal from "../assets/sucursal.jpg";

const branches = [
  {
    name: "Sucursal Piantini",
    address: "Av. 27 de Febrero, no. 263, esq. Federico Geraldino, Plaza Hasan",
    phone: "809-688-5101 ext. 1263",
    color: "bg-blue-600",
  },
  {
    name: "Sucursal Villa Consuelo",
    address:
      "C/ Juan de Morfa No. 67, Villa Consuelo, Entre Av. 27 de Febrero ",
    phone: "809-688-5101 Ext. 1221",
    color: "bg-green-500",
  },
  {
    name: "Sucursal Herrera",
    address: "Isabel Aguiar No. 23, Apto. 1-A, Edif. Cherry Bell",
    phone: "809-530-2448",
    color: "bg-blue-600",
  },
];

export default function Sucursales() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto mt-4">
        {/* Main Image with Overlaid Text */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
          <img
            src={Sucursal}
            alt="COOPEBRED main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
              Sucursales COOPEBRED
            </h1>
          </div>
        </div>

        <main className="container px-4 py-8 mx-auto lg:px-8 xl:px-16 max-w-7xl">
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold">
              Sucursales Santo Domingo
            </h2>
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className={`${branch.color} h-2`}></div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">{branch.name}</h3>
                  <div className="flex items-start mb-3">
                    <MapPin className="flex-shrink-0 w-5 h-5 mt-1 mr-2" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="flex-shrink-0 w-5 h-5 mr-2" />
                    <p className="text-gray-600">{branch.phone}</p>
                  </div>
                  <button className="flex items-center justify-center w-full px-4 py-2 font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
                    Ver en el mapa
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
