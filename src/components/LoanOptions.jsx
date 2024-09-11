import { ArrowRight, Wallet, Home, CarFront } from "lucide-react";

const LoanOptions = () => {
  return (
    <div className="container max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-2 text-4xl font-bold text-center text-gray-700">
        ¿Necesitas un préstamo?
      </h1>
      <p className="mb-12 text-center text-gray-600">
        Encuentra la solución financiera que se ajuste a tus necesidades.
      </p>

      <div className="grid gap-8 md:grid-cols-3 lg:gap-28">
        {[
          {
            icon: <Wallet className="w-12 h-12 text-[#39d53c]" />,
            title: "Préstamo de Consumo",
            description:
              "Cumple todos tus sueños con nuestros préstamos personales. Amuebla tu hogar a tu gusto, realiza ese viaje tan esperado o invierte en tu educación.",
          },
          {
            icon: <Home className="w-12 h-12 text-[#39d53c]" />,
            title: "Préstamo Hipotecario",
            description:
              "Te ofrecemos la mejor solución para adquirir la vivienda que tanto deseas con nuestros Préstamos Hipotecarios.",
          },
          {
            icon: <CarFront className="w-12 h-12 text-[#39d53c]" />,
            title: "Préstamo de Vehículos",
            description:
              "Haz realidad tu movilidad con nuestros préstamos para adquirir tu vehículo ya sea nuevo, usado o eléctrico, con opciones flexibles y tasas competitivas.",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {item.icon}
            <h2 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
              {item.title}
            </h2>
            <p className="mb-4 text-gray-600">{item.description}</p>
            <button className="flex items-center justify-center w-10 h-10 text-[#0ed811] transition-colors bg-[#96f398] rounded-full hover:bg-[#08d40b]">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LoanOptions;
