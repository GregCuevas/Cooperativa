import * as React from "react";
import { Shield, Users, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Institucion() {
  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          {/* Título Principal */}
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            Somos CoopEducate
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            La cooperativa que les pertenece. En el año 2024 surge con
            determinación la Cooperativa Coopeducate, una entidad comprometida
            con la reducción de la brecha digital en la República Dominicana.
            Nuestro enfoque radica en brindar soluciones a las familias
            vinculadas al ámbito educativo, facilitando el acceso a la
            tecnología y recursos digitales.
          </p>

          {/* Cards de Misión, Visión, Valores con estilo de bordes redondeados y sombra difusa */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Misión */}
            <Card className="border border-gray-200 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white">
              <CardHeader>
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <CardTitle className="text-gray-900">Nuestra Misión</CardTitle>
                <CardDescription className="text-gray-700">
                  Facilitar el acceso equitativo a la tecnología y recursos
                  digitales, impulsando el desarrollo integral de las personas y
                  contribuyendo a la transformación positiva de la educación en
                  nuestro país.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Visión */}
            <Card className="border border-gray-200 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white">
              <CardHeader>
                <Users className="w-10 h-10 mx-auto mb-4 text-red-500" />
                <CardTitle className="text-gray-900">Nuestra Visión</CardTitle>
                <CardDescription className="text-gray-700">
                  Crear un entorno donde cada individuo tenga acceso a
                  herramientas tecnológicas de calidad que potencien sus
                  capacidades y fomenten el aprendizaje continuo.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Valores */}
            <Card className="border border-gray-200 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white">
              <CardHeader>
                <Shield className="w-10 h-10 mx-auto mb-4 text-purple-500" />
                <CardTitle className="text-gray-900">
                  Nuestros Valores
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Nos guiamos por los principios de equidad, innovación,
                  compromiso, colaboración y responsabilidad social. Estos
                  pilares orientan nuestra visión hacia un futuro sostenible.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
