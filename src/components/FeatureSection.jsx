import {
  Handshake,
  Globe,
  MonitorSmartphone,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const FeatureSection = () => {
  const features = [
    {
      icon: Handshake,
      title: "Asociación",
      link: "/historia",
      description:
        "La cooperativa se une a Silkglobal Dominicana para incluir pequeñas empresas en el proyecto Unared, brindando servicios de telecomunicaciones a familias dominicanas.",
    },
    {
      icon: Globe,
      title: "Servicios",
      link: "/servicios",
      description:
        "Se habilita un área para servicios MiTelecom, financiados por la cooperativa sin contrato inicial y con tarifas accesibles, para generar una renta competitiva.",
    },
    {
      icon: MonitorSmartphone,
      title: "Financiamiento Tech",
      link: "/servicios/financiamiento/",
      description:
        "La cooperativa financia computadoras, tabletas y smartphones en 12 cuotas sin interés ni inicial, para mejorar el acceso a la educación en áreas rurales.",
    },
  ];

  return (
    <div className="container max-w-6xl px-6 py-16 mx-auto">
      <header className="mb-20 text-center">
        <h4 className="mb-4 text-base font-medium tracking-wide text-gray-500 uppercase">
          Coopebred hace todo por ti.
        </h4>
        <h2 className="mb-10 text-4xl font-bold text-gray-900 md:text-5xl">
          Programa Coopebred
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-6 bg-[#f8961e] rounded-full transition-transform hover:scale-110">
              <feature.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 group-hover:text-[#f8961e] transition-colors">
              {feature.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              {feature.description}
            </p>
            <Link
              to={feature.link}
              className="flex items-center font-semibold text-[#f8961e] hover:text-[#d77b1b] transition-colors"
            >
              Learn More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
