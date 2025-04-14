import React from "react";
import {
  ShieldAlert,
  FileText,
  User,
  Lock,
  CreditCard,
  Globe,
  Edit,
  Trash2,
  Mail,
} from "lucide-react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 sm:p-10 lg:p-20">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-gray-600">
            Al acceder y utilizar los servicios de{" "}
            <span className="font-semibold text-green-500">Coopebred</span>,
            usted acepta los siguientes términos y condiciones. Léelos
            detenidamente.
          </p>
        </header>
        <section className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Políticas generales de Coopebred
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <ShieldAlert className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  1. Uso Aceptable
                </h3>
                <p className="text-gray-600">
                  El usuario se compromete a utilizar los servicios de Coopebred
                  de manera ética y legal. No está permitido realizar
                  actividades que violen leyes, derechos de propiedad
                  intelectual o que afecten la integridad de la plataforma.
                  Cualquier acción que comprometa el servicio será investigada y
                  podría resultar en la suspensión de la cuenta.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  2. Registro de Cuenta
                </h3>
                <p className="text-gray-600">
                  Debe registrarse correctamente para acceder a nuestros
                  servicios. El registro implica proporcionar información
                  válida, como su nombre, correo electrónico y cualquier otro
                  dato necesario para la prestación del servicio. La información
                  debe mantenerse actualizada en todo momento.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  3. Contenido del Usuario
                </h3>
                <p className="text-gray-600">
                  Usted es responsable de todo el contenido que publique o
                  comparta en nuestra plataforma. Coopebred no se hace
                  responsable de las opiniones o la veracidad del contenido
                  proporcionado por los usuarios, pero se reserva el derecho de
                  eliminar cualquier contenido que incumpla nuestras políticas.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  4. Propiedad Intelectual
                </h3>
                <p className="text-gray-600">
                  Respetamos la propiedad intelectual y pedimos a nuestros
                  usuarios que hagan lo mismo. Cualquier contenido protegido por
                  derechos de autor no debe ser utilizado sin la autorización
                  correspondiente del propietario. El incumplimiento puede
                  resultar en la eliminación de la cuenta y posibles acciones
                  legales.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CreditCard className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  5. Pagos y Transacciones
                </h3>
                <p className="text-gray-600">
                  Todas las transacciones se realizan de manera segura y
                  transparente. Los usuarios son responsables de asegurar que la
                  información de pago proporcionada sea precisa y válida.
                  Coopebred no se responsabiliza por errores en los pagos
                  causados por información incorrecta proporcionada por el
                  usuario.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  6. Responsabilidad
                </h3>
                <p className="text-gray-600">
                  Coopebred no se responsabiliza por acciones que violen
                  nuestros términos o por el mal uso de la plataforma por parte
                  de los usuarios. Cualquier daño causado por el incumplimiento
                  de estas políticas será responsabilidad del usuario infractor.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Edit className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  7. Enlaces a Terceros
                </h3>
                <p className="text-gray-600">
                  Nuestra plataforma puede contener enlaces a sitios web
                  externos. Coopebred no se responsabiliza por el contenido, las
                  políticas de privacidad o las prácticas de los sitios externos
                  vinculados.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Edit className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  8. Modificaciones de Términos
                </h3>
                <p className="text-gray-600">
                  Nos reservamos el derecho de modificar estos términos en
                  cualquier momento. Los cambios entrarán en vigor tan pronto
                  como se publiquen en nuestra plataforma. Los usuarios serán
                  notificados con anticipación sobre cualquier modificación
                  importante.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Trash2 className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  9. Terminación del Servicio
                </h3>
                <p className="text-gray-600">
                  Nos reservamos el derecho de finalizar el servicio en
                  cualquier momento, con o sin previo aviso, si se detecta
                  alguna infracción de nuestros términos y condiciones.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  10. Contacto
                </h3>
                <p className="text-gray-600">
                  Si tiene alguna pregunta, por favor contáctenos a través de
                  los canales oficiales proporcionados en nuestra plataforma.
                  Estaremos encantados de ayudarle.
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

export default PrivacyPolicy;
