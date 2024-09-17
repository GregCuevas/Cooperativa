import {
  Building,
  Award,
  Layers,
  ChartColumnIncreasing,
  Handshake,
  Rocket,
} from "lucide-react";

const timelineData = [
  {
    year: 2006,
    platform: "Creación de Silkglobal",
    icon: Building,
    color: "text-[#02010a]",
    description:
      "Inicia sus operaciones en el sector de las telecomunicaciones en 2008 y celebra su décimo aniversario en 2018.",
  },
  {
    year: 2018,
    platform: "Logros de Silkglobal ",
    icon: Award,
    color: "text-[#02010a]",
    description:
      "Obtención de concesiones y licencias, certificación como proveedor del Estado Dominicano, y provisión de servicios a centros educativos y tecnológicos.",
  },
  {
    year: 2021,
    platform: "Proyecto UNARED",
    icon: Layers,
    color: "text-[#02010a]",
    description:
      "Silkglobal inicia un estudio para atender las necesidades de pequeños revendedores de servicios de Internet en áreas locales, periféricas y rurales.",
  },
  {
    year: 2021,
    platform: "Expansión de fibra óptica.",
    icon: ChartColumnIncreasing,
    color: "text-[#02010a]",
    description:
      "Silkglobal se dedica al desarrollo de la infraestructura en fibra óptica para conectar pequeños revendedores de servicios de Internet bajo el proyecto UNARED.",
  },
  {
    year: 2021,
    platform: "Acuerdo con empresas Chinas ",
    icon: Handshake,
    color: "text-[#02010a]",
    description:
      "Acuerdo de distribución no exclusivo con empresas chinas para productos XIAOMI innovadores y accesibles.",
  },
  {
    year: 2024,
    platform: "Creación de Coopebred.",
    icon: Rocket,
    color: "text-[#02010a]",
    description:
      "Coopebred nació para reducir la brecha digital en República Dominicana, centrada en educación y áreas rurales, mediante alianzas con empresas y entidades gubernamentales.",
  },
];

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-7">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-center text-black md:text-4xl">
          Nuestra Historia
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-center text-black">
          Coopebred impulsa la educación en áreas rurales de la República
          Dominicana, fomentando el empleo tecnológico. A través de
          financiamiento y programas innovadores, busca un desarrollo sostenible
          con alto impacto social.
        </p>
        <div className="">
          {/* Vertical line */}

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="flex-1 w-full p-4 md:w-1/2">
                <div
                  className={`p-4 rounded-lg shadow-lg ${
                    index % 2 === 0 ? "md:ml-4" : "md:mr-4"
                  } bg-[#ffa200]`}
                >
                  <div className="flex items-center mb-2">
                    <item.icon className={`w-6 h-6 ${item.color} mr-2`} />
                    <h2 className="text-xl font-semibold text-white">
                      {item.platform}
                    </h2>
                  </div>
                  <p className="text-base text-white ">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mb-4 bg-[#ffaa00] border-4 border-[#ff8800] rounded-full md:mb-0">
                <span className="text-base font-bold text-white">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
