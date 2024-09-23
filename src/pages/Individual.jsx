import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CheckCircle,
  Heart,
  BarChart,
  DollarSign,
  Clipboard,
} from "lucide-react"; // Importación de íconos de Lucide React
import Individuals from "../assets/individual.jpg";
import SavingsImage from "../assets/individual.jpg"; // Usa una imagen relevante para esta sección

const Individual = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Contenedor de imagen con Overlay */}
        <div className="relative">
          <img
            src={Individuals}
            alt="Familia"
            className="w-full h-[70vh] object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 bg-black bg-opacity-55 md:px-20">
            <div className="text-left text-white">
              <p className="mb-2">HAZTE SOCIO</p>
              <h1 className="max-w-xl text-2xl font-bold md:text-4xl">
                ¿Te gustaría obtener mayores beneficios por tus ahorros?
              </h1>
              <p className="max-w-lg mt-4 text-sm md:mt-6 md:text-lg">
                Porque ser socio es más que ser un cliente, te invitamos a
                hacerte socio y acceder a todos los beneficios de ser parte de
                nuestra familia.
              </p>
              <button className="px-4 py-2 mt-6 font-semibold text-white transition bg-green-500 rounded-lg md:mt-8 hover:bg-green-600">
                REGISTRARME
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="px-6 py-12 bg-gray-100 md:px-20">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-900">
          Beneficios de Socio Individual
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta de beneficio */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">
                Participación en Ganancias
              </h3>
              <p className="text-gray-600">
                Participa de las ganancias de la cooperativa al cabo de cada
                ejercicio según lo señala la ley.
              </p>
            </div>
          </div>

          {/* Otra tarjeta */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <Heart className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">
                Acceso a Planes de Salud
              </h3>
              <p className="text-gray-600">
                Acceso a planes de salud sin empresas intermediarias (especial
                para iglesias e independientes).
              </p>
            </div>
          </div>

          {/* Otra tarjeta */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <DollarSign className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">Altos Rendimientos</h3>
              <p className="text-gray-600">
                Alto rendimiento para tus ahorros y depósitos a plazo fijo.
              </p>
            </div>
          </div>

          {/* Otra tarjeta */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <BarChart className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">Tasas Competitivas</h3>
              <p className="text-gray-600">
                Tasas competitivas para préstamos y devolución de intereses
                pagados por préstamos.
              </p>
            </div>
          </div>

          {/* Otra tarjeta */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <Clipboard className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">
                Educación Financiera
              </h3>
              <p className="text-gray-600">
                Educación financiera y acompañamiento sin costo, además de
                talleres y seminarios.
              </p>
            </div>
          </div>

          {/* Otra tarjeta */}
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">Descuentos</h3>
              <p className="text-gray-600">
                Descuentos en compras de electrodomésticos y maquinarias
                realizadas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 bg-blue-900">
        <div className="absolute inset-0">
          <img
            src={SavingsImage} // Asegúrate de que esta sea la ruta correcta de la imagen
            alt="Ahorro"
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="relative z-10 px-6 py-12 text-white md:px-20">
          <h2 className="mb-6 text-4xl font-bold text-center">
            ¿Por qué ahorrar en COOPEBRED?
          </h2>
          <p className="max-w-4xl mx-auto mb-6 text-lg text-center">
            Las cooperativas de Ahorro y Crédito al igual que los bancos son
            instituciones de intermediación financiera, que buscan satisfacer
            las necesidades de sus asociados, mediante el acceso a productos y
            servicios financieros tales como: Cuentas de ahorro, Préstamos,
            Certificados Financieros, Certificados a Plazo, Seguros de Salud,
            etc.
          </p>
          <p className="max-w-4xl mx-auto mb-6 text-lg text-center">
            La filosofía de trabajo de las cooperativas es de mutuo apoyo entre
            sus asociados. Además, a muchos de ellos les complace saber que sus
            ahorros están ayudando a otros a conseguir créditos como los del
            tipo personal, emprendimiento, individual, capital de trabajo, etc.
          </p>
          <p className="max-w-4xl mx-auto mb-6 text-lg text-center">
            Las cooperativas apoyan de manera intencional la comunidad a la que
            pertenecen.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Individual;
