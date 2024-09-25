import React from "react";
import { Button } from "@/components/ui/button";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  User,
  Users,
  FileText,
  DollarSign,
  PiggyBank,
  CreditCard,
  Percent,
  BarChart,
  Building,
  Award,
  GraduationCap,
  ShoppingBag,
  Heart,
  Briefcase,
  FileCheck,
  MapPin,
  FileSignature,
} from "lucide-react";

export default function PartnershipOptions() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-center">Nuestros Socios</h1>
        <p className="mb-8 text-center text-gray-600">
          Únete a la transformación digital y educativa en la República
          Dominicana.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2" />
                Socio Individual
              </CardTitle>
              <CardDescription>
                Brindamos soluciones a medida para estudiantes y familias en
                comunidades rurales y urbanas desfavorecidas.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="mb-2 font-semibold">Beneficios</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <Percent className="w-4 h-4 mr-2" />
                  <span>Participación en Ganancias</span>
                </li>
                <li className="flex items-center">
                  <BarChart className="w-4 h-4 mr-2" />
                  <span>Altos Rendimientos</span>
                </li>
                <li className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Acceso a Planes de Salud</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Tasas Competitivas</span>
                </li>
                <li className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>Educación Financiera</span>
                </li>
                <li className="flex items-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Descuentos en compras</span>
                </li>
              </ul>
              <h3 className="mb-2 font-semibold">Requisitos</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>
                    Cédula: Presenta tu cédula de identidad para realizar el
                    proceso de inscripción.
                  </span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>
                    Inscripción: Realiza un pago de $1000 por la inscripción.
                  </span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="w-4 h-4 mr-2" />
                  <span>
                    Aporte a Capital: Aportación inicial de $1000 para tu
                    capital en la cooperativa.
                  </span>
                </li>
                <li className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span>
                    Apertura de Cuenta: Apertura de una cuenta de ahorros con un
                    mínimo de $200.
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Hazte Socio Individual
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Socio Empresa
              </CardTitle>
              <CardDescription>
                Coopebred ofrece varias formas de asociación, cada una con
                compromisos y servicios adaptados a sus beneficios y
                condiciones.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="mb-2 font-semibold">Socio Activo</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <Percent className="w-4 h-4 mr-2" />
                  <span>1.97% de los fondos recaudados</span>
                </li>
                <li className="flex items-center">
                  <BarChart className="w-4 h-4 mr-2" />
                  <span>10-20% del facturado neto de los productos</span>
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>
                    0.5% de los fondos recaudados de las sucursales filiales
                  </span>
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>
                    5% del facturado neto de los productos de las sucursales
                    filiales
                  </span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="w-4 h-4 mr-2" />
                  <span>Participación en las Ganancias Anuales</span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>Rendimiento competitivo sobre el aporte a capital</span>
                </li>
              </ul>
              <h3 className="mb-2 font-semibold">Socio Pasivo</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <Percent className="w-4 h-4 mr-2" />
                  <span>1.47% de los fondos recaudados</span>
                </li>
                <li className="flex items-center">
                  <BarChart className="w-4 h-4 mr-2" />
                  <span>10-20% del facturado neto de los productos</span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="w-4 h-4 mr-2" />
                  <span>Participación en las Ganancias Anuales</span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>Rendimiento competitivo sobre el aporte a capital</span>
                </li>
              </ul>
              <h3 className="mb-2 font-semibold">Requisitos</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <span>
                    Establecimiento adecuado para brindar atención al cliente.
                  </span>
                </li>
                <li className="flex items-center">
                  <FileCheck className="w-4 h-4 mr-2" />
                  <span>Copia del Registro Mercantil vigente.</span>
                </li>
                <li className="flex items-center">
                  <FileSignature className="w-4 h-4 mr-2" />
                  <span>
                    Copia del Registro Nacional de Contribuyente (RNC) o
                    Certificación de la DGII.
                  </span>
                </li>
                <li className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>
                    Copia del documento de identidad de los
                    Propietarios/Beneficiarios finales y personas físicas que
                    ejerzan el control real de la empresa.
                  </span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>
                    Documento que confirme el domicilio y existencia de la
                    empresa. (Ej. Factura de Servicios).
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Hazte Socio Empresa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">¿Por qué ser socio?</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ser socio de nuestra cooperativa te brinda la oportunidad de
            participar activamente en la transformación digital y educativa de
            la República Dominicana. Ya sea como individuo o empresa, podrás
            disfrutar de beneficios exclusivos mientras contribuyes al
            desarrollo de tu comunidad.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
