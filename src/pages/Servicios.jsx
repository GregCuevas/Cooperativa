import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, PiggyBank, Users, Clock, CreditCard } from "lucide-react";
import Productos from "../assets/productos.jpg";
import Aportaciones from "../assets/aportaciones.jpg";
import Ahorro from "../assets/ahorro.jpg";
import Jovenes from "../assets/jovenes.jpg";
import Certificado from "../assets/certificado.jpg";
import Prestamos from "../assets/prestamos.jpg";

const FinanceCard = ({ title, description, icon: Icon, bgImage }) => (
  <Card className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
    <div
      className="absolute inset-0 z-0 transition-all duration-300 bg-center bg-cover group-hover:brightness-75"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>

    <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-65 z-5 group-hover:opacity-60"></div>

    <CardContent className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
      <Icon className="w-8 h-8 mb-2 text-white sm:w-12 sm:h-12 sm:mb-4" />
      <h3 className="mb-1 text-lg font-bold text-white sm:text-xl sm:mb-2">
        {title}
      </h3>
      <p className="text-xs font-semibold text-white sm:text-sm">
        {description}
      </p>
    </CardContent>
  </Card>
);

const Servicios = () => {
  const financeProducts = [
    {
      title: "Financiamiento",
      description:
        "Ofrecemos financiamiento para tecnología, proyectos empresariales y educación con condiciones accesibles y beneficios exclusivos para socios.",
      icon: Coins,
      bgImage: Aportaciones,
    },
    {
      title: "Cuentas de Ahorro",
      description:
        "Las cuentas de ahorro de nuestra cooperativa están diseñadas para satisfacer las necesidades de nuestros socios, ofreciendo tasas competitivas y beneficios exclusivos.",
      icon: PiggyBank,
      bgImage: Ahorro,
    },
    {
      title: "Aportes",
      description:
        "Las aportaciones en COOPEBRED fortalecen el capital social y reflejan el compromiso de los socios con el bienestar comunitario.",
      icon: Users,
      bgImage: Jovenes,
    },
    {
      title: "Depósitos a Plazo",
      description:
        "Los depósitos a plazo fijo ofrecen mayores rendimientos que una cuenta de ahorro, con tasas competitivas que aumentan según el plazo de la inversión.",
      icon: Clock,
      bgImage: Certificado,
    },
    {
      title: "Tarifario",
      description:
        "Consulta las tarifas y tasas de interés actuales para todos nuestros productos financieros.",
      icon: CreditCard,
      bgImage: Prestamos,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow lg:px-16 ">
        <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="relative w-full h-[30vh] sm:h-[40vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
            <img
              src={Productos}
              alt="COOPEBRED main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-60 sm:p-6 lg:p-8">
              <h1 className="mb-4 text-2xl font-bold text-center sm:text-3xl lg:text-5xl animate-fade-in-down">
                Productos y Servicios
              </h1>
              <p className="max-w-md mx-auto text-sm text-center sm:max-w-xl sm:text-base lg:max-w-4xl lg:text-lg animate-fade-in-up">
                Descubre nuestras opciones financieras diseñadas para impulsar
                tu desarrollo personal y empresarial. Desde cuentas de ahorro
                accesibles hasta financiamiento exclusivo en productos
                tecnológicos y emprendimientos, nuestra cooperativa ofrece
                soluciones adaptadas a tus necesidades.
              </p>
            </div>
          </div>
          <div className="mb-8 text-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {financeProducts.map((product, index) => (
                <FinanceCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
