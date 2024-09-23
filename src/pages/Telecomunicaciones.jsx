import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Torre from "../assets/torre.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wifi,
  School,
  Smartphone,
  CreditCard,
  Users,
  Lightbulb,
  HeartHandshake,
  PhoneCall,
  UserCheck,
  BarChart,
  FileText,
  Building,
  GraduationCap,
} from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon }) => (
  <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-md">
    <CardHeader className="flex-shrink-0 py-6 bg-green-50">
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-bold text-gray-800 sm:text-xl">
          {title}
        </CardTitle>
        <Icon className="w-6 h-6 text-[#069e2d] sm:w-8 sm:h-8" />
      </div>
    </CardHeader>
    <CardContent className="flex items-center flex-grow p-4 sm:p-6">
      <p className="text-sm text-gray-600 sm:text-base">{description}</p>
    </CardContent>
  </Card>
);

export default function Component() {
  const mainFeatures = [
    {
      title: "Soluciones Creativas",
      description:
        "Iremos más allá para asegurar el bienestar de nuestros clientes, con horarios de trabajo convenientes para estar en contacto con ellos.",
      icon: Lightbulb,
    },
    {
      title: "Equipo Profesional",
      description:
        "Contamos con la experiencia de los expertos más renombrados, quienes te pueden ofrecer un servicio excepcional!",
      icon: UserCheck,
    },
    {
      title: "Enfoque Diverso",
      description:
        "No creemos en la cultura de ventas, sino en la cultura de servicio. Nosotros creemos en las decisiones informadas.",
      icon: Users,
    },
    {
      title: "Informes Detallados",
      description:
        "Nuestros expertos están disponibles por teléfono y en línea. El servicio web está siempre disponible o puedes llamar sin costo!",
      icon: FileText,
    },
  ];

  const strategicFeatures = [
    {
      title: "Alianzas Estratégicas",
      description:
        "Coopeducate, con SilkGlobal y MiTelecom, ofrece acceso a redes de calidad en hogares a costos asequibles, cumpliendo normativas de Indotel.",
      icon: HeartHandshake,
    },
    {
      title: "Empoderamiento Comunitario",
      description:
        "Mejoramos vidas con servicios esenciales, oportunidades de negocio, conectividad y desarrollo comunitario.",
      icon: Building,
    },
    {
      title: "El respaldo de Xiaomi",
      description:
        "Coopeducate se asocia con Xiaomi International para ofrecer productos de alta gama con respaldo y soporte del fabricante.",
      icon: Smartphone,
    },
    {
      title: "Financiamiento Asequible",
      description:
        "Facilitamos acceso a productos Xiaomi con bajos precios y financiamiento a través de asociaciones bancarias, beneficiando a familias de clase media-baja y zonas rurales.",
      icon: CreditCard,
    },
    {
      title: "Acuerdos con MAVIR School",
      description:
        "Coopeducate se asocia con MAVIR School para financiar la educación virtual de los hijos de cooperativistas, mejorando sus habilidades en inglés.",
      icon: School,
    },
    {
      title: "Impacto Educativo",
      description:
        "Mejoramos el futuro de las comunidades con educación financiada de calidad, esencial para su desarrollo sostenible.",
      icon: GraduationCap,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 ">
        <div className="container px-4 mx-auto">
          {/* Main Image with Overlaid Text */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
            <img
              src={Torre}
              alt="COOPEBRED main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
                Telecomunicaciones
              </h1>
              <p className="max-w-xl mx-auto text-lg text-center sm:max-w-2xl lg:max-w-3xl sm:text-xl lg:text-2xl animate-fade-in-up">
                Nuestro compromiso es impulsar el crecimiento de las
                telecomunicaciones en las áreas rurales del país, prestando
                especial atención al sector de la educación.
              </p>
            </div>
          </div>

          {/* Main Features */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
            {mainFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Strategic Approach Section */}
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
              Transformando Comunidades: Educación para un Futuro Sostenible
            </h2>
            <p className="mb-8 text-lg text-center text-gray-600">
              La estrategia de Coopeducate se basa en alianzas estratégicas para
              ofrecer soluciones de redes de telecomunicaciones, colaboraciones
              con Xiomy International para productos accesibles y
              financiamiento, y acuerdos educativos con MAVIR School.
            </p>
          </div>

          {/* Strategic Features */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strategicFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
