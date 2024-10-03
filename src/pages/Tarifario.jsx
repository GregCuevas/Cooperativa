import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  HelpCircle,
  Percent,
  Clock,
  CreditCard,
  PiggyBank,
  Landmark,
  Coins,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tarifarios from "../assets/tarifarios.jpg";
const Tarifario = () => {
  const [activeTab, setActiveTab] = useState("ahorros");

  const handleDownload = () => {
    // Simular la descarga del tarifario
    alert("Descargando tarifario...");
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
          <img
            src={Tarifarios}
            alt="Coopebred main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
              Tarifarios
            </h1>
            <p className="max-w-xs mx-auto text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
              Consulta nuestros tarifarios actualizados y descubre las opciones
              más convenientes para nuestros servicios y productos. Encuentra la
              solución perfecta para tus necesidades con precios competitivos.
            </p>
          </div>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="w-6 h-6" />
              Tarifas y Tasas de Interés
            </CardTitle>
            <CardDescription>
              Información actualizada sobre nuestros productos financieros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Conoce las tarifas y tasas de interés vigentes para cada uno de
              nuestros productos financieros. Obtén información detallada sobre:
            </p>
            <ul className="mb-4 space-y-2 list-inside">
              <li className="flex items-center gap-2">
                <Percent className="flex-shrink-0 w-4 h-4" />
                <span>
                  Tasas de interés para cada tipo de cuenta de ahorro.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="flex-shrink-0 w-4 h-4" />
                <span>
                  Rendimientos estimados de los certificados de depósito a plazo
                  fijo.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="flex-shrink-0 w-4 h-4" />
                <span>Condiciones de financiamiento y cuotas aplicables.</span>
              </li>
            </ul>
            <Button onClick={handleDownload} className="flex items-center">
              <Download className="w-4 h-4 mr-2" /> Descargar Tarifario Completo
            </Button>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 md:grid-cols-3">
            <TabsTrigger
              value="ahorros"
              className="flex items-center justify-center gap-2"
            >
              <PiggyBank className="w-4 h-4" />
              <span className="hidden md:inline">Cuentas de Ahorro</span>
              <span className="md:hidden">Ahorros</span>
            </TabsTrigger>
            <TabsTrigger
              value="depositos"
              className="flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4" />
              <span className="hidden md:inline">Depósitos a Plazo</span>
              <span className="md:hidden">Depósitos</span>
            </TabsTrigger>
            <TabsTrigger
              value="prestamos"
              className="flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span className="hidden md:inline">Préstamos</span>
              <span className="md:hidden">Préstamos</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ahorros">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Percent className="mr-2" /> Tasas de Interés - Cuentas de
                  Ahorro
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">
                        Tipo de Cuenta
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Tasa Anual
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Monto Mínimo
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        Ahorro Básico
                      </TableCell>
                      <TableCell>1.5%</TableCell>
                      <TableCell>$100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        Ahorro Plus
                      </TableCell>
                      <TableCell>2.0%</TableCell>
                      <TableCell>$1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        Ahorro Premium
                      </TableCell>
                      <TableCell>2.5%</TableCell>
                      <TableCell>$5,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="depositos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2" /> Rendimientos - Depósitos a Plazo
                  Fijo
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">Plazo</TableHead>
                      <TableHead className="whitespace-nowrap">
                        Tasa Anual
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Monto Mínimo
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        3 meses
                      </TableCell>
                      <TableCell>3.0%</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        6 meses
                      </TableCell>
                      <TableCell>3.5%</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        12 meses
                      </TableCell>
                      <TableCell>4.0%</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        24 meses
                      </TableCell>
                      <TableCell>4.5%</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="prestamos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2" /> Condiciones de Financiamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">
                        Tipo de Préstamo
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Tasa Anual
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Plazo Máximo
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        Personal
                      </TableCell>
                      <TableCell>12.5%</TableCell>
                      <TableCell>60 meses</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="whitespace-nowrap">
                        Productos Tecnológicos
                      </TableCell>
                      <TableCell>8.0%</TableCell>
                      <TableCell>12 meses</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="mb-4">
            Para más información sobre nuestras tarifas y rendimientos,
            contáctanos a través de nuestros canales de atención. Estamos aquí
            para ayudarte a tomar decisiones financieras informadas y alineadas
            con tus objetivos.
          </p>
          <Link to="/contactanos/">
            <Button variant="outline" className="flex items-center mx-auto">
              <HelpCircle className="mr-2" />
              Contactar Servicio al Cliente
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tarifario;
