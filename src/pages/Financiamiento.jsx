import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Finaciamiento from "../assets/financiamiento.jpg";
import Aportaciones from "../assets/aportaciones.jpg";
import Ahorro from "../assets/ahorro.jpg";
import Jovenes from "../assets/jovenes.jpg";
import Certificado from "../assets/certificado.jpg";
import Prestamos from "../assets/prestamos.jpg";
import Inversion from "../assets/inversion.jpg";
import Fondo from "../assets/fondo.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Coins,
  PiggyBank,
  Users,
  Clock,
  CreditCard,
  FileText,
  BarChart3,
  Signal,
} from "lucide-react";

const FinanceCard = ({ title, description, icon: Icon, bgImage }) => (
  <Card className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
    <div
      className="absolute inset-0 z-0 transition-all duration-300 bg-center bg-cover group-hover:brightness-75"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>

    <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 z-5 group-hover:opacity-60"></div>

    <CardContent className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
      <Icon className="w-12 h-12 mb-4 text-white" />
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm font-semibold text-white">{description}</p>
    </CardContent>
  </Card>
);

const Finaciamientos = () => {
  const financeProducts = [
    {
      title: "Aportaciones",
      description:
        "Los asociados pueden realizar depósitos en acciones directamente en las oficinas de Coopeducate, contribuyendo al patrimonio de la Cooperativa.",
      icon: Coins,
      bgImage: Aportaciones,
    },
    {
      title: "Cuenta Ahorros",
      description:
        "Los asociados pueden realizar depósitos en acciones directamente en las oficinas de Coopeducate, contribuyendo al patrimonio de la Cooperativa.",
      icon: PiggyBank,
      bgImage: Ahorro,
    },
    {
      title: "Ahorro Jóvenes",
      description:
        "Descubre nuestra cuenta de ahorro diseñada para niños y jóvenes debidamente representados por su tutor, que les permite realizar depósitos y retiros.",
      icon: Users,
      bgImage: Jovenes,
    },
    {
      title: "Certificados Financieros",
      description:
        "Aceptamos depósitos a plazo fijo renovables, con una atractiva tasa de interés, capitalizable mensualmente en cualquiera de las cuentas del asociado.",
      icon: Clock,
      bgImage: Certificado,
    },
    {
      title: "Prestamos",
      description:
        "Los asociados pueden obtener los créditos deseados para realizar sus proyectos, bajo la política de crédito establecida.",
      icon: CreditCard,
      bgImage: Prestamos,
    },
    {
      title: "Certificado de Inversión",
      description:
        "El Certificado de Inversión es utilizado por las empresas emisoras de valores, para captar capital, con el fin de crecer o financiar sus proyectos.",
      icon: FileText,
      bgImage: Inversion,
    },
    {
      title: "Fondo de Inversión",
      description:
        "Un fondo de inversión forma un portafolio de inversión con el objetivo de generar rendimientos atractivos con base al horizonte y objetivos definidos para el mismo.",
      icon: BarChart3,
      bgImage: Fondo,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container px-4 mx-auto mt-4">
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
            <img
              src={Finaciamiento}
              alt="COOPEBRED main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
                Financiamiento
              </h1>
              <p className="max-w-xl mx-auto text-lg text-center sm:max-w-2xl lg:max-w-3xl sm:text-xl lg:text-2xl animate-fade-in-up">
                Gracias a los productos financieros de Coopebred, creados
                específicamente para familias que viven en áreas rurales, es
                posible obtener múltiples beneficios.
              </p>
            </div>
          </div>

          <div className="container px-1 mx-auto py-9 lg:px-16">
            <div className="p-6 mb-12 bg-white rounded-lg shadow-lg sm:p-8 ">
              <div className="flex justify-center mb-2">
                <Signal className="w-12 h-12 text-blue-500 sm:w-16 sm:h-16" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                Una tecnología que no solo conecta, sino que también transforma
                vidas
              </h2>
              <p className="text-base text-center text-gray-600 sm:text-lg">
                Desarrollamos redes de telecomunicaciones a bajo costo para
                comunidades sin acceso tecnológico. En asociación con Xiaomi
                International, ofrecemos productos de alta calidad a precios
                accesibles, incluyendo soluciones integrales para servicios
                financieros y educativos en línea. Priorizamos la conectividad
                para mejorar la calidad de vida de las comunidades,
                destacándonos al ofrecer servicios esenciales y oportunidades de
                aprendizaje.
              </p>
            </div>

            <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
              Productos Financieros
            </h3>
            <p className="max-w-xl mx-auto mb-8 text-base text-center text-gray-600 sm:text-lg">
              Nuestros productos financieros brindan soluciones accesibles en
              ahorro, crédito y apoyo para comunidades rurales, ayudando a
              mejorar su bienestar económico.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {financeProducts.map((product, index) => (
                <FinanceCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Finaciamientos;
