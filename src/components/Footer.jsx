import Image from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 bg-white border-t sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="w-56 h-20 ">
                <img
                  src={Image}
                  alt="Coopebred Logo"
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>
            </div>
            <p className="max-w-sm text-gray-600">
              Nuestro compromiso es reducir la brecha digital en la República
              Dominicana, priorizando el apoyo a las familias del ámbito
              educativo mediante soluciones específicas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Socios</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/socio-individual"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Socio Individual
                </Link>
              </li>
              <li>
                <Link
                  to="/socio-empresa"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Socio Empresa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/perfil-institucional"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Perfil Institucional
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  to="/calculadora-prestamos"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Calculadora de Prestamos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Contactos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="https://api.whatsapp.com/send?phone=8294705898" // Incluye el número de teléfono en formato internacional (sin + ni espacios)
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank" // Esto abrirá el enlace en una nueva pestaña
                  rel="noopener noreferrer" // Buenas prácticas para seguridad
                >
                  (829) 470 5898
                </Link>
              </li>
              <li>
                <Link
                  to="/#preguntas-frecuentes"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.google.com/maps?q=Edificio+Lama,+Av.+Winston+Churchill+71,+Santo+Domingo" // URL de Google Maps con la dirección
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank" // Esto abrirá el enlace en una nueva pestaña
                  rel="noopener noreferrer" // Buenas prácticas para seguridad
                >
                  Edificio Lama, Av. Winston Churchill 71, Santo Domingo
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@coopebred.com" // mailto: abre el cliente de correo
                  className="text-gray-600 break-words hover:text-gray-900"
                >
                  info@coopebred.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-200 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; Coopebred {currentYear}
          </p>
          <div className="flex mt-4 space-x-6 sm:mt-0">
            <a
              href="https://www.facebook.com/share/FDpqCHedhxkchRdW/?mibextid=LQQJ4d"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/coopebred?igsh=MTFra3VvbnU3a2lwZg%3D%3D"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/coopebred/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Dribbble</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/18294705898"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
