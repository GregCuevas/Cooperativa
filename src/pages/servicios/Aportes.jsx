import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  ShieldCheck,
  Coins,
  BarChart,
  HandCoins,
  Building,
} from "lucide-react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Aportess from "../../assets/aportes.jpg";
const Aportes = () => {
  const benefitCards = [
    {
      title: "Participación",
      description:
        "Tus aportes te otorgan derecho a participar en las decisiones de la cooperativa.",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Certificados",
      description:
        "Recibes certificados de aportación que representan tu inversión en la cooperativa.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Intereses",
      description:
        "Tus aportes generan intereses anuales basados en las utilidades de la cooperativa.",
      icon: <Coins className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Crecimiento",
      description:
        "Contribuyes al fortalecimiento y crecimiento de nuestra institución.",
      icon: <BarChart className="w-6 h-6 text-green-600" />,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
          <img
            src={Aportess}
            alt="Coopebred main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h2 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
              Aportaciones
            </h2>
            <p className="max-w-xs mx-auto text-base text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
              Las aportaciones son la base del capital social de COOPEBRED y
              representan el compromiso de cada socio con nuestra misión. Al
              realizar una aportación, te conviertes en parte de una institución
              que trabaja para el bienestar de sus miembros y la comunidad.
            </p>
          </div>
        </div>

        <Card className="mx-auto mb-8 sm:w-full lg:max-w-3xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl">
              <HandCoins className="w-8 h-8 mr-2 text-green-600" />
              Aporte Inicial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="max-w-3xl mx-auto mb-4 text-lg text-center">
              El aporte mínimo inicial es de RD$1,000, necesario para acceder a
              nuestros servicios y beneficios. Este monto te permite participar
              en nuestras actividades y aprovechar nuestras ofertas exclusivas.
            </p>
            <div className="p-4 text-green-700 bg-green-100 border-l-4 border-green-500 rounded sm:text-left sm:mx-0 sm:w-full lg:text-center lg:mx-auto lg:max-w-md">
              <p className="font-semibold">Aporte mínimo inicial:</p>
              <p className="text-2xl font-bold">RD$1,000</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-4 text-2xl font-semibold text-center">
          Beneficios de tus Aportes
        </h2>
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
          {benefitCards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  {card.icon}
                  <span className="ml-2">{card.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Building className="w-8 h-8 mr-2 text-green-600" />
              Impacto de tus Aportes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              A través de tus aportes, contribuyes a fortalecer la capacidad
              financiera de la cooperativa para seguir brindando productos y
              servicios de alta calidad. Tu compromiso nos permite crecer juntos
              y mejorar la vida de todos nuestros socios.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};
export default Aportes;
