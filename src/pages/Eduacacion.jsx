import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Educacion from "../assets/educacion.jpg";
import {
  Wifi,
  School,
  Smartphone,
  CreditCard,
  Target,
  Handshake,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({ title, description, icon: Icon, color }) => (
  <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    <CardHeader className={`text-white ${color} py-6 flex-shrink-0`}>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-bold sm:text-xl">{title}</CardTitle>
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </CardHeader>
    <CardContent className="flex items-center flex-grow p-4 sm:p-6">
      <p className="text-sm text-gray-600 sm:text-base">{description}</p>
    </CardContent>
  </Card>
);

export default function Component() {
  const cards = [
    {
      title: "CONEXIÓN DE INTERNET ",
      description:
        "Conéctate sin límites. Nuestra conexión de alta velocidad potencia tu mundo digital con rendimiento excepcional.",
      icon: Wifi,
      color: "bg-green-400",
    },
    {
      title: "COLEGIO VIRTUAL EDUCATIVO",
      description:
        "Explora nuevas fronteras educativas con nuestro Colegio Virtual. Aprendizaje de calidad desde cualquier lugar.",
      icon: School,
      color: "bg-green-400",
    },
    {
      title: "HERRAMIENTA DIGITAL",
      description:
        "Asociados con Xiaomi International para brindar productos de alta gama a precios asequibles, respaldados por el fabricante.",
      icon: Smartphone,
      color: "bg-green-400",
    },
    {
      title: "FINANCIAMIENTO TASA 0%",
      description:
        "Accede a tus sueños con nuestro Financiamiento al 0%. Tasas de interés imbatibles para realizar tus proyectos.",
      icon: CreditCard,
      color: "bg-green-400",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container px-4 mx-auto mt-4">
          {/* Main Image with Overlaid Text */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={Educacion}
              alt="Coopebred main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
                EDUCACIÓN 5G
              </h1>
              <p className="max-w-xs mx-auto text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
                Cuando las familias se unen en contribuir, se abren puertas a
                grandes logros. COOPEBRED se convierte en el vehículo de
                inversión que democratiza la tecnología 5G al alcance de todos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8 sm:pb-12">
            {cards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
          {/* Objetivo Principal Section */}
        </div>
      </section>
      <Footer />
    </>
  );
}
