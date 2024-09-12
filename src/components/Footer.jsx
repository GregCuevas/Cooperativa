import Image from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 bg-white border-t sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="relative w-56 h-20">
                <img
                  src={Image}
                  alt="Coopebred Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
            </div>
            <p className="max-w-md text-gray-600">
              Nuestro compromiso es reducir la brecha digital en la República
              Dominicana, priorizando el apoyo a las familias del ámbito
              educativo mediante soluciones específicas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Socios</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Socio único
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Socio corporativo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Perfil Institucional
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Acuerdos Institucionales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Contactos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  (829) 470 5898
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Edificio Lama, Av. Winston Churchill 71, Santo Domingo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  coopeducate@silkglobal.com
                </Link>
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
              href="https://www.facebook.com/silkglobal?locale=es_LA"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/silkglobaldominicana/"
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
}
