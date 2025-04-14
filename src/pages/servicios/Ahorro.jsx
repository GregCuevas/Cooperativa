import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiggyBank, GraduationCap, Baby } from "lucide-react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import CuentaAhorro from "../../assets/ahorro.jpg";
const Ahorro = () => {
  const savingsAccounts = [
    {
      id: "individual",
      title: "Cuenta de Ahorro Individual",
      shortTitle: "Individual",
      description:
        "Ideal para personas que buscan establecer un hábito de ahorro y asegurar su futuro financiero.",
      icon: <PiggyBank className="w-5 h-5 md:h-6 md:w-6" />,
      details: "Requiere una apertura mínima de RD$200 pesos dominicanos.",
    },
    {
      id: "universitarios",
      title: "Cuenta de Ahorro para Estudiantes Universitarios",
      shortTitle: "Universitarios",
      description:
        "Dirigida a jóvenes en proceso de formación académica que desean gestionar sus finanzas de manera responsable.",
      icon: <GraduationCap className="w-5 h-5 md:h-6 md:w-6" />,
      details: "La apertura también se realiza con RD$200.",
    },
    {
      id: "menores",
      title: "Cuenta de Ahorro para Menores de 18 Años",
      shortTitle: "Menores",
      description:
        "Para los socios que desean asegurar el futuro de sus hijos.",
      icon: <Baby className="w-5 h-5 md:h-6 md:w-6" />,
      details:
        "Requiere acta de nacimiento del menor y cédula del padre o tutor, con un monto inicial de RD$200.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container px-4 mx-auto mt-4">
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
          <img
            src={CuentaAhorro}
            alt="Coopebred main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
              Cuentas de Ahorro
            </h1>
            <p className="max-w-xs mx-auto text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
              Las cuentas de ahorro de nuestra cooperativa están diseñadas para
              satisfacer las necesidades de nuestros socios, ofreciendo tasas
              competitivas y beneficios exclusivos.
            </p>
          </div>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {savingsAccounts.map((account) => (
              <TabsTrigger
                key={account.id}
                value={account.id}
                className="flex flex-col items-center px-1 py-2 md:px-4"
              >
                {account.icon}
                <span className="mt-1 text-[10px] md:text-sm text-center line-clamp-6">
                  {account.shortTitle}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {savingsAccounts.map((account) => (
            <TabsContent key={account.id} value={account.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg md:text-2xl">
                    {account.icon}
                    <span className="ml-2">{account.title}</span>
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    {account.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm">{account.details}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-6 mb-8 md:mt-10">
          <CardHeader>
            <CardTitle className="text-lg md:text-2xl">
              Beneficios Adicionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs md:text-sm">
              Estas cuentas no solo te permitirán ahorrar de manera segura, sino
              que también te brindarán acceso a programas educativos y a la
              posibilidad de financiar equipos tecnológicos con condiciones
              preferenciales.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Ahorro;
