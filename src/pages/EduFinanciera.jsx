import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EduFinaciera from "../assets/eduFinanciera.jpg";
import {
  Coins,
  PiggyBank,
  TrendingUp,
  BookOpen,
  DollarSign,
  Shield,
  Target,
  CreditCard,
  BarChart,
  Briefcase,
  GraduationCap,
  Home,
  AlertTriangle,
} from "lucide-react";

export default function EduFinanciera() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 mx-auto mt-4">
          {/* Main Image with Overlaid Text */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
            <img
              src={EduFinaciera}
              alt="COOPEBRED main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
                Educación Financiera
              </h1>
              <p className="max-w-xl mx-auto text-lg text-center sm:max-w-2xl lg:max-w-3xl sm:text-xl lg:text-2xl animate-fade-in-up">
                Aprende a manejar tu dinero de manera inteligente, optimiza tus
                recursos y alcanza tus metas financieras.
              </p>
            </div>
          </div>

          <section className="py-16 ">
            <div className="container mx-auto">
              <h2 className="mb-12 text-3xl font-semibold text-center">
                Conceptos Básicos del Dinero
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <FinanceCard
                  icon={<Coins className="w-12 h-12 text-green-500" />}
                  title="¿Qué es el dinero?"
                  description="El dinero es un medio de intercambio, una unidad de cuenta y un depósito de valor. Entender su función es clave para una buena gestión financiera."
                />
                <FinanceCard
                  icon={<BarChart className="w-12 h-12 text-green-500" />}
                  title="Valor del dinero en el tiempo"
                  description="El dinero tiene un valor diferente en distintos momentos debido a su potencial de generar más dinero a través de inversiones o intereses."
                />
                <FinanceCard
                  icon={<CreditCard className="w-12 h-12 text-green-500" />}
                  title="Tipos de dinero"
                  description="Existen diferentes formas de dinero: efectivo, dinero bancario, criptomonedas. Cada uno tiene sus propias características y usos."
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto">
              <h2 className="mb-12 text-3xl font-semibold text-center">
                Gestión Financiera Personal
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <FinanceCard
                  icon={<PiggyBank className="w-12 h-12 text-green-500" />}
                  title="Presupuesto"
                  description="Un presupuesto es un plan financiero que ayuda a controlar tus gastos e ingresos. Es la base de una buena salud financiera."
                />
                <FinanceCard
                  icon={<Shield className="w-12 h-12 text-green-500" />}
                  title="Fondo de emergencia"
                  description="Un fondo de emergencia es un ahorro destinado a cubrir gastos inesperados. Se recomienda tener al menos 3-6 meses de gastos guardados."
                />
                <FinanceCard
                  icon={<TrendingUp className="w-12 h-12 text-green-500" />}
                  title="Inversión"
                  description="Invertir es poner tu dinero a trabajar para ti. Puede incluir acciones, bonos, bienes raíces y más. Diversificar es clave para reducir riesgos."
                />
              </div>
            </div>
          </section>

          <section className="py-16 ">
            <div className="container mx-auto">
              <h2 className="mb-12 text-3xl font-semibold text-center">
                Metas Financieras
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <GoalCard
                  icon={<Home className="w-8 h-8 text-green-500" />}
                  title="Comprar una casa"
                  description="Ahorrar para el pago inicial y mejorar tu crédito para obtener mejores tasas de interés."
                />
                <GoalCard
                  icon={<Briefcase className="w-8 h-8 text-green-500" />}
                  title="Jubilación"
                  description="Empezar a ahorrar temprano para tu jubilación puede hacer una gran diferencia a largo plazo."
                />
                <GoalCard
                  icon={<GraduationCap className="w-8 h-8 text-green-500" />}
                  title="Educación"
                  description="Planificar para la educación superior tuya o de tus hijos puede ayudar a evitar deudas estudiantiles excesivas."
                />
                <GoalCard
                  icon={<Coins className="w-8 h-8 text-green-500" />}
                  title="Libertad financiera"
                  description="Alcanzar un punto donde tus inversiones generen suficientes ingresos para cubrir tus gastos."
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto">
              <h2 className="mb-12 text-3xl font-semibold text-center">
                Tips para el Éxito Financiero
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <TipCard
                  icon={<BookOpen className="w-8 h-8 text-green-500" />}
                  title="Edúcate constantemente"
                  description="Lee libros, asiste a seminarios y mantente informado sobre finanzas personales. El conocimiento es poder en el mundo financiero."
                />
                <TipCard
                  icon={<DollarSign className="w-8 h-8 text-green-500" />}
                  title="Vive por debajo de tus posibilidades"
                  description="Gasta menos de lo que ganas y ahorra la diferencia. Esta simple regla es la base de la acumulación de riqueza."
                />
                <TipCard
                  icon={<Target className="w-8 h-8 text-green-500" />}
                  title="Establece metas claras"
                  description="Define metas financieras específicas, medibles, alcanzables, relevantes y con un plazo determinado (SMART)."
                />
                <TipCard
                  icon={<Coins className="w-8 h-8 text-green-500" />}
                  title="Diversifica tus ingresos"
                  description="No dependas de una sola fuente de ingresos. Busca formas de generar ingresos adicionales para aumentar tu seguridad financiera."
                />
              </div>
            </div>
          </section>

          <section className="py-16 ">
            <div className="container mx-auto">
              <h2 className="mb-12 text-3xl font-semibold text-center">
                Errores Financieros
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="No tener un presupuesto"
                  description="Sin un presupuesto, es fácil gastar más de lo que ganas y acumular deudas innecesarias."
                />
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="Ignorar el ahorro para emergencias"
                  description="No tener un fondo de emergencia puede llevarte a situaciones financieras difíciles en momentos inesperados."
                />
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="Acumular deudas de tarjetas de crédito"
                  description="Las altas tasas de interés de las tarjetas de crédito pueden hacer que tus deudas crezcan rápidamente si no las pagas a tiempo."
                />
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="No invertir para el futuro"
                  description="Esperar demasiado para empezar a invertir puede costarte años de crecimiento compuesto potencial."
                />
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="Vivir por encima de tus posibilidades"
                  description="Gastar más de lo que ganas es una receta segura para el estrés financiero y la acumulación de deudas."
                />
                <ErrorCard
                  icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
                  title="No educarse financieramente"
                  description="La falta de conocimiento financiero puede llevarte a tomar decisiones costosas y perjudiciales para tu futuro económico."
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FinanceCard({ icon, title, description }) {
  return (
    <div className="p-6 text-center bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TipCard({ icon, title, description }) {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
      <div className="mt-1 mr-4">{icon}</div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function GoalCard({ icon, title, description }) {
  return (
    <div className="p-6 text-center bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ErrorCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-2 text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
