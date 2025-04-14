import React from "react";
import {
  ShieldAlert,
  FileText,
  User,
  Lock,
  Globe,
  Edit,
  Mail,
} from "lucide-react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
const Politicas = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 sm:p-10 lg:p-20">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-gray-600 ">
            La presente Política de Privacidad describe cómo{" "}
            <span className="font-semibold text-green-500">Coopebred</span>{" "}
            recopila, utiliza y protege la información personal de sus usuarios.
            Al utilizar los servicios de Coopebred, usted acepta los términos y
            condiciones establecidos en esta política.
          </p>
        </header>

        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Políticas generales de Coopebred
          </h2>
          <p className="mb-6 text-gray-600">
            Las políticas que gobiernan nuestro compromiso contigo.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <ShieldAlert className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  1. Información Recopilada
                </h3>
                <p className="text-gray-600">
                  Coopebred recopila información personal que usted proporciona
                  voluntariamente al registrarse en nuestros servicios. Esto
                  puede incluir, pero no se limita a:
                </p>
                <ul className="ml-8 text-gray-600 list-disc">
                  <li>
                    Información de contacto (nombre, dirección de correo
                    electrónico, número de teléfono).
                  </li>
                  <li>Información demográfica (edad, género, ubicación).</li>
                  <li>
                    Información de pago (en caso de realizar transacciones).
                  </li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Además, recopilamos información automáticamente a través de
                  cookies y otras tecnologías de seguimiento cuando usted visita
                  nuestro sitio web.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  2. Uso de la Información
                </h3>
                <p className="text-gray-600">
                  La información que recopilamos es utilizada para proporcionar,
                  mejorar y personalizar nuestros servicios. También puede ser
                  utilizada para fines de comunicación, incluyendo el envío de
                  notificaciones o promociones relevantes.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  3. Compartir Información
                </h3>
                <p className="text-gray-600">
                  Coopebred no compartirá su información personal con terceros,
                  excepto en casos donde sea requerido por la ley, o cuando sea
                  necesario para completar una transacción solicitada por usted.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  4. Seguridad de la Información
                </h3>
                <p className="text-gray-600">
                  Nos comprometemos a proteger su información personal
                  implementando medidas de seguridad adecuadas. Sin embargo,
                  ningún método de transmisión por internet o almacenamiento
                  electrónico es 100% seguro.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  5. Enlaces a Terceros
                </h3>
                <p className="text-gray-600">
                  Nuestro sitio puede contener enlaces a sitios web de terceros.
                  No somos responsables de las prácticas de privacidad ni del
                  contenido de dichos sitios.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Edit className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  6. Cambios en la Política de Privacidad
                </h3>
                <p className="text-gray-600">
                  Nos reservamos el derecho de modificar esta política de
                  privacidad en cualquier momento. Los cambios serán notificados
                  a través de nuestro sitio web.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Edit className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  7. Derechos de Privacidad
                </h3>
                <p className="text-gray-600">
                  Usted tiene el derecho de acceder, modificar o eliminar su
                  información personal en cualquier momento, contactándonos a
                  través de los canales oficiales.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  8. Contacto
                </h3>
                <p className="text-gray-600">
                  Si tiene alguna pregunta sobre nuestra política de privacidad,
                  por favor contáctenos a través de los canales oficiales
                  proporcionados en nuestra plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Politicas;
