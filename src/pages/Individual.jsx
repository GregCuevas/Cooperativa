import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormIndividual from "../components/FormIndividual";
import {
  CheckCircle,
  Heart,
  BarChart,
  DollarSign,
  Clipboard,
  Wallet,
  Banknote,
  CreditCard,
  User,
} from "lucide-react";
import Individuals from "../assets/individual.jpg";
import Ahorro from "../assets/ahorrando.jpg";

const Individual = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="relative mt-4">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          <img
            src={Individuals}
            alt="Familia"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-60">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-xl text-white lg:max-w-2xl xl:max-w-3xl">
                <p className="mb-2 text-sm font-semibold tracking-wider sm:mb-4 sm:text-base">
                  HAZTE SOCIO INDIVIDUAL
                </p>
                <h1 className="max-w-xl mb-2 text-2xl font-bold leading-tight sm:text-3xl md:text-3xl lg:text-4xl sm:mb-4">
                  ¿Te gustaría obtener mayores beneficios por tus ahorros?
                </h1>
                <p className="max-w-lg mb-4 text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl sm:mb-6">
                  Porque ser socio es más que ser un cliente, te invitamos a
                  hacerte socio y acceder a todos los beneficios de ser parte de
                  nuestra familia.
                </p>
                <button
                  onClick={scrollToForm}
                  className="px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out bg-green-500 rounded-lg sm:px-6 sm:py-3 sm:text-base hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  REGISTRARME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-12 md:px-20">
        <h2 className="mb-6 text-3xl font-bold text-center text-black">
          Beneficios de Socio Individual
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-28">
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
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <DollarSign className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold">Altos Rendimientos</h3>
              <p className="text-gray-600">
                Alto rendimiento para tus ahorros y depósitos a plazo fijo.
              </p>
            </div>
          </div>
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
      <div className="relative py-16 bg-black">
        <div className="absolute inset-0">
          <img
            src={Ahorro}
            alt="Ahorro"
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="relative z-10 px-6 py-12 text-white md:px-20">
          <h2 className="mb-6 text-4xl font-bold text-center">
            ¿Por qué estar en COOPEBRED?
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
      <div className="px-6 py-12 md:px-20">
        <h2 className="mb-6 text-3xl font-bold text-center text-black">
          Requisitos para Socio Individual
        </h2>
        <div className="space-y-8 lg:px-28 ">
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <div className="p-4 mr-6 bg-green-100 rounded-full">
              <User className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Cédula</h3>
              <p className="mt-2 text-gray-600">
                Presenta tu cédula de identidad para realizar el proceso de
                inscripción.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <div className="p-4 mr-6 bg-green-100 rounded-full">
              <CreditCard className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Inscripción</h3>
              <p className="mt-2 text-gray-600">
                Realiza un pago de $1000 por la inscripción.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <div className="p-4 mr-6 bg-green-100 rounded-full">
              <Banknote className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Aporte a Capital
              </h3>
              <p className="mt-2 text-gray-600">
                Aportación inicial de $1000 para tu capital en la cooperativa.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <div className="p-4 mr-6 bg-green-100 rounded-full">
              <Wallet className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Apertura de Cuenta
              </h3>
              <p className="mt-2 text-gray-600">
                Apertura de una cuenta de ahorros con un mínimo de $200.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={formRef}>
        <FormIndividual />
      </div>

      <Footer />
    </>
  );
};

export default Individual;
