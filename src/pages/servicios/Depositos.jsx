import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { PiggyBank, TrendingUp, ShieldCheck, HelpCircle } from "lucide-react";
import Plazo from "../../assets/depositos.jpg";
import { Link } from "react-router-dom";

const Depositos = () => {
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularRendimiento = () => {
    const montoNum = parseFloat(monto);
    const plazoNum = parseInt(plazo);

    // Validar que los valores sean correctos
    if (isNaN(montoNum) || isNaN(plazoNum) || montoNum <= 0) {
      toast.error(
        "Por favor, ingrese valores válidos para el monto (mayor a cero) y el plazo."
      );
      return;
    }

    // Tasas de interés simuladas (ajustar según las tasas reales de la cooperativa)
    const tasas = {
      3: 0.03, // 3% para 3 meses
      6: 0.035, // 3.5% para 6 meses
      12: 0.04, // 4% para 12 meses
      24: 0.045, // 4.5% para 24 meses
    };

    const tasa = tasas[plazo];
    const rendimiento = montoNum * tasa * (plazoNum / 12);
    setResultado(rendimiento);
  };

  const limpiarFormulario = () => {
    setMonto("");
    setPlazo("");
    setResultado(null);
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container px-4 py-8 mx-auto">
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
          <img
            src={Plazo}
            alt="Coopebred main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
              Depósitos a Plazo
            </h1>
            <p className="max-w-xs mx-auto text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
              Los depósitos a plazo fijo son una opción ideal para quienes
              buscan obtener rendimientos superiores a los ofrecidos por una
              cuenta de ahorro tradicional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PiggyBank className="mr-2" />
                Ahorro Seguro
              </CardTitle>
              <CardDescription>
                Obtén rendimientos superiores a una cuenta de ahorro
                tradicional.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Coloca tu dinero en un certificado de depósito y decide el
                tiempo de inversión para acceder a tasas de interés
                competitivas.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Mayor Plazo, Mayor Rendimiento
              </CardTitle>
              <CardDescription>
                Aprovecha las tasas de interés a largo plazo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Cuanto mayor sea el plazo de tu inversión, mayor será el
                rendimiento que obtendrás.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheck className="mr-2" />
                Seguridad Garantizada
              </CardTitle>
              <CardDescription>
                Tu inversión está respaldada por nuestra cooperativa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Planifica a mediano y largo plazo con la seguridad de que tu
                capital crecerá de forma estable y segura.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Simula tu Depósito a Plazo</CardTitle>
            <CardDescription>
              Calcula el rendimiento de tu inversión
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="monto">Monto a invertir</Label>
                  <Input
                    id="monto"
                    placeholder="Ingresa el monto"
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plazo">Plazo</Label>
                  <Select value={plazo} onValueChange={setPlazo}>
                    <SelectTrigger id="plazo">
                      <SelectValue placeholder="Selecciona el plazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 meses</SelectItem>
                      <SelectItem value="6">6 meses</SelectItem>
                      <SelectItem value="12">12 meses</SelectItem>
                      <SelectItem value="24">24 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <Button variant="outline" onClick={limpiarFormulario}>
              Limpiar
            </Button>
            <Button onClick={calcularRendimiento}>Calcular Rendimiento</Button>
          </CardFooter>
          {resultado !== null && (
            <CardContent className="mt-4">
              <p className="text-lg font-semibold text-center">
                Rendimiento estimado: RD${resultado.toFixed(2)}
              </p>
            </CardContent>
          )}
        </Card>

        <div className="mt-12 text-center">
          <Link to="/contacto">
            <Button variant="link" className="text-primary">
              <HelpCircle className="mr-2" />
              ¿Necesitas ayuda? Contáctanos
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Depositos;
