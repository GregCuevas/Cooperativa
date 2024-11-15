import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormEmpresa from "../components/FormEmpresa";
import Individuals from "../assets/empresas.jpg";
import { Building, Users, Percent, FileCheck, Briefcase } from "lucide-react";

const InfoSection = ({ title, description, icon: Icon }) => (
  <div className="flex items-start p-4 space-x-4 bg-white rounded-lg shadow-md">
    <Icon className="flex-shrink-0 w-8 h-8 text-green-500" />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-center space-x-2">
    <Percent className="w-5 h-5 text-green-500" />
    <span>{text}</span>
  </li>
);

const RequirementItem = ({ text }) => (
  <li className="flex items-start space-x-2 md:items-center">
    <FileCheck size={24} className="flex-shrink-0 text-green-500" />
    <span className="text-sm md:text-base">{text}</span>
  </li>
);

const MontoItem = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
    <span className="font-medium text-gray-600">{label}</span>
    <span className="font-bold text-green-600">{value}</span>
  </div>
);

const Empresa = () => {
  const formRefs = useRef(null);

  const scrollToForms = () => {
    formRefs.current?.scrollIntoView({ behavior: "smooth" });
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
                  HAZTE SOCIO EMPRESA
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
                  onClick={scrollToForms}
                  className="px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out bg-green-500 rounded-lg sm:px-6 sm:py-3 sm:text-base hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  REGISTRARME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 ">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Tipos de Socios Empresa
          </h2>
          <div className="grid gap-8 lg:px-16 md:grid-cols-2">
            <InfoSection
              title="Socio Activo (Sucursal Principal)"
              description="Un socio empresa activo es un miembro que actúa como Sucursal Principal en su provincia. Además de aportar capital financiero, participa activamente en la gestión y operación de la cooperativa."
              icon={Building}
            />
            <InfoSection
              title="Socio Pasivo (Sucursal Filial)"
              description="Un socio empresa pasivo es un miembro que actúa como sucursal filial, es decir, es una extensión de la sucursal principal en su provincia. Aporta capital pero no participa activamente en la gestión interna de la cooperativa."
              icon={Users}
            />
            <InfoSection
              title="Socio Corporativo"
              description="Un Socio Corporativo es una empresa registrada en la cooperativa que disfruta de beneficios exclusivos sin requerir una sucursal física. Accede a programas comerciales, financiamiento, descuentos y alianzas estratégicas, logrando un rendimiento competitivo para su crecimiento."
              icon={Briefcase}
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Beneficios para Socios
          </h2>
          <div className="grid gap-8 lg:px-16 md:grid-cols-2">
            <div className="p-6 rounded-lg shadow-md bg-green-50">
              <h3 className="mb-4 text-xl font-semibold text-green-500">
                Socio Activo (Sucursal Principal)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <BenefitItem text="1.97% de los fondos recaudados" />
                <BenefitItem text="10-20% del facturado neto de los productos" />
                <BenefitItem text="0.5% de los fondos recaudados de las sucursales filiales" />
                <BenefitItem text="5% del facturado neto de los productos de las sucursales filiales" />
                <BenefitItem text="Participación en las ganancias anuales" />
                <BenefitItem text="Rendimiento competitivo sobre el aporte a capital" />
              </ul>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-green-50">
              <h3 className="mb-4 text-xl font-semibold text-green-500">
                Socio Pasivo (Sucursal Filial)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <BenefitItem text="1.47% de los fondos recaudados" />
                <BenefitItem text="10-20% del facturado neto de los productos" />
                <BenefitItem text="Participación en las ganancias anuales" />
                <BenefitItem text="Rendimiento competitivo sobre el aporte a capital" />
              </ul>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-green-50">
              <h3 className="mb-4 text-xl font-semibold text-green-500">
                Socio Corporativo
              </h3>
              <ul className="space-y-2 text-gray-700">
                <BenefitItem text="Participación en las ganancias anuales" />
                <BenefitItem text="Descuentos exclusivos en productos y servicios de la cooperativa" />
                <BenefitItem text="Rendimiento competitivo sobre el aporte a capital" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Montos de Inscripción
          </h2>
          <div className="grid gap-8 lg:px-16 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Socio Activo (Sucursal principal)
              </h3>
              <MontoItem label="Monto de Inscripción" value="RD$1,000.00" />
              <MontoItem
                label="Aportación a capital (monto mínimo)"
                value="RD$1,000.00"
              />
              <MontoItem
                label="Cuenta de ahorro (monto mínimo de apertura)"
                value="RD$200.00"
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Socio Pasivo (Sucursal Filial)
              </h3>
              <MontoItem label="Monto de Inscripción" value="RD$1,000.00" />
              <MontoItem
                label="Aportación a capital (monto mínimo)"
                value="RD$1,000.00"
              />
              <MontoItem
                label="Cuenta de ahorro (monto mínimo de apertura)"
                value="RD$200.00"
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Socio Corporativo
              </h3>
              <MontoItem label="Monto de Inscripción" value="RD$1,000.00" />
              <MontoItem
                label="Aportación a capital (monto mínimo)"
                value="RD$1,000.00"
              />
              <MontoItem
                label="Cuenta de ahorro (monto mínimo de apertura)"
                value="RD$200.00"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white ">
        <div className="container px-4 mx-auto lg:px-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Requisitos
          </h2>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Documentación necesaria para Socios Empresa
            </h3>
            <ul className="space-y-2 text-gray-700">
              <RequirementItem text="Establecimiento adecuado para brindar atención al cliente. (SI APLICA)" />
              <RequirementItem text="Copia del Registro Mercantil vigente." />
              <RequirementItem text="Copia del Registro Nacional de Contribuyente (RNC) o Certificación de la DGII." />
              <RequirementItem text="Copia del documento de identidad de los Propietarios/Beneficiarios finales y personas físicas que ejerzan el control real de la empresa." />
              <RequirementItem text="Documento que confirme el domicilio y existencia de la empresa. (Ej. Factura de Servicios)." />
            </ul>
          </div>
        </div>
      </section>

      <div ref={formRefs}>
        <FormEmpresa />
      </div>
      <Footer />
    </>
  );
};

export default Empresa;
