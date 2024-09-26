import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sucursal from "../assets/sucursal.jpg";
import { Link } from "react-router-dom";

const branches = [
  {
    name: "Sucursal Piantini",
    address: "Edificio Lama, Av. Winston Churchill 71, Santo Domingo",
    phone: "829-470-5898",
    color: "bg-green-500",
    link: "https://www.google.com/maps/place/Edificio+Lama/@18.4704774,-69.9426254,17z/data=!3m1!4b1!4m6!3m5!1s0x8eaf89e47e0dc841:0xa61cf466ce83f058!8m2!3d18.4704774!4d-69.9400505!16s%2Fg%2F1hm5sbv07?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D",
  },
];

const Sucursales = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto mt-4">
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
                  <Link
                    to={branch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center justify-center w-full px-4 py-2 font-medium text-white transition duration-300 bg-green-500 rounded hover:bg-green-600">
                      Ver en el mapa
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Sucursales;
