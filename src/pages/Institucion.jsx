import React from "react";
import { Shield, Eye, Goal } from "lucide-react";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Somos from "../assets/somos.jpg";
import Mision from "../assets/mision.jpg";
import Vision from "../assets/vision.jpg";
import Valores from "../assets/valores.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Institucion = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 ">
        <div className="container px-1 mx-auto text-center">
          <div className="relative w-full lg:h-[70vh] mb-8 overflow-hidden rounded-lg">
            <img
              src={Somos}
              alt="Coopebred main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="mb-4 text-4xl font-bold text-center">
                Somos Coopebred
              </h2>
              <p
                className="mx-auto text-lg text-center"
                style={{ maxWidth: "600px", lineHeight: "1.5" }}
              >
                La cooperativa que les pertenece. En el año 2024 surge con
                determinación la cooperativa Coopebred, una entidad comprometida
                con la reducción de la brecha digital en la República
                Dominicana.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-16">
            <Card className="border rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white border-t-2 border-[#ff9100]">
              <CardHeader className="p-0">
                <div className="relative w-full overflow-hidden rounded-sm rounded-t-lg h-52">
                  <img
                    src={Mision}
                    alt="Misión image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <Goal className="w-10 h-10 mx-auto mb-4 text-[#ff9100]" />
                  <CardTitle className="text-gray-900">
                    Nuestra Misión
                  </CardTitle>
                  <CardContent className="p-0 mt-2 text-gray-700">
                    Facilitar el acceso equitativo a la tecnología y recursos
                    digitales, impulsando el desarrollo integral de las personas
                    y contribuyendo a la transformación positiva de la educación
                    en nuestro país.
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
            <Card className="border rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white border-t-2 border-[#ff9100]">
              <CardHeader className="p-0">
                <div className="relative w-full overflow-hidden rounded-sm rounded-t-lg h-52">
                  <img
                    src={Vision}
                    alt="Visión image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <Eye className="w-10 h-10 mx-auto mb-4 text-[#ff9100]" />
                  <CardTitle className="text-gray-900">
                    Nuestra Visión
                  </CardTitle>
                  <CardContent className="p-0 mt-2 text-gray-700">
                    Crear un entorno donde cada individuo tenga acceso a
                    herramientas tecnológicas de calidad que potencien sus
                    capacidades y fomenten el aprendizaje continuo.
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
            <Card className="border rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white border-t-2 border-[#ff9100]">
              <CardHeader className="p-0">
                <div className="relative w-full overflow-hidden rounded-sm rounded-t-lg h-52">
                  <img
                    src={Valores}
                    alt="Valores image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <Shield className="w-10 h-10 mx-auto mb-4 text-[#ff9100]" />
                  <CardTitle className="text-gray-900">
                    Nuestros Valores
                  </CardTitle>
                  <CardContent className="p-0 mt-2 text-gray-700">
                    Nos guiamos por los principios de equidad, innovación,
                    compromiso, colaboración y responsabilidad social. Estos
                    pilares orientan nuestra visión hacia un futuro sostenible.
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          </div>
          <Team />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Institucion;
