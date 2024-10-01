import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
import Productos from "../assets/productos.jpg";
import Aportaciones from "../assets/aportaciones.jpg";
import Ahorro from "../assets/ahorro.jpg";
import Jovenes from "../assets/jovenes.jpg";
import Certificado from "../assets/certificado.jpg";
import Prestamos from "../assets/prestamos.jpg";
import Inversion from "../assets/inversion.jpg";
import Fondo from "../assets/fondo.jpg";
const FinanceCard = ({ title, description, icon: Icon, bgImage }) => (
  <Card className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
    <div
      className="absolute inset-0 z-0 transition-all duration-300 bg-center bg-cover group-hover:brightness-75"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>

    <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-65 z-5 group-hover:opacity-60"></div>

    <CardContent className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
      <Icon className="w-12 h-12 mb-4 text-white" />
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm font-semibold text-white">{description}</p>
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
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
            <img
              src={Productos}
              alt="COOPEBRED main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-60 sm:p-6 lg:p-8">
              <h1 className="mb-8 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
                Productos y Servicios
              </h1>
              <p className="max-w-xl mx-auto text-lg text-center sm:max-w-2xl lg:max-w-5xl sm:text-xl lg:text-2xl animate-fade-in-up">
                Descubre nuestras opciones financieras diseñadas para impulsar
                tu desarrollo personal y empresarial. Desde cuentas de ahorro
                accesibles hasta financiamiento exclusivo en productos
                tecnológicos y emprendimientos, nuestra cooperativa ofrece
                soluciones adaptadas a tus necesidades. A través de aportaciones
                y depósitos a plazo, garantizamos el crecimiento de tu capital y
                el fortalecimiento de nuestra comunidad cooperativa.
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
