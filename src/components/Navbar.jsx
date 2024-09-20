import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? "" : menu);
  };

  const topMenuItems = [
    { name: "Inicio", link: "/" },
    { name: "Sucursales", link: "/sucursales" },
    { name: "Contáctanos", link: "/contactanos" },
    { name: "Preguntas Frecuentes", link: "/#preguntas-frecuentes" },
    { name: "Hazte Socio", link: "/app-movil" },
  ];

  const bottomMenuItems = [
    {
      name: "SERVICIOS",
      link: "/productos-y-servicios",
      hasSubmenu: true,
      submenuItems: [
        { name: "Educación", link: "/eduacion" },
        { name: "Telecomunicaciones", link: "/telecomunicaciones" },
        { name: "Financiamiento", link: "/financiamiento" },
      ],
    },
    {
      name: "CONÓCENOS",
      link: "",
      hasSubmenu: true,
      submenuItems: [
        { name: "Historia", link: "/historia" },
        { name: "Perfil Institucional", link: "/perfil-institucional" },
      ],
    },
    {
      name: "SOCIOS",
      link: "/socios",
      hasSubmenu: true,
      submenuItems: [
        { name: "Socio Individual", link: "/socio-individual" },
        { name: "Socio Empresa", link: "/socio-empresa" },
      ],
    },
    {
      name: "PUBLICACIONES",
      link: "/publicaciones-y-novedades",
      hasSubmenu: true,
      submenuItems: [
        { name: "Blog", link: "/publicaciones/blog" },
        { name: "Noticias", link: "/publicaciones/noticias" },
        { name: "Eventos", link: "/publicaciones/eventos" },
      ],
    },
    {
      name: "PREVENCIÓN",
      link: "/prevencion",
      hasSubmenu: true,
      submenuItems: [
        { name: "Seguridad Financiera", link: "/prevencion/seguridad" },
        { name: "Educación Financiera", link: "/prevencion/educacion" },
        { name: "Consejos", link: "/prevencion/consejos" },
      ],
    },
    { name: "PRÉSTAMOS", link: "/calculadora-prestamos" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex items-center flex-shrink-0">
            <img className="w-auto h-12 lg:h-16" src={Logo} alt="Logo" />
          </div>
          <div className="items-center justify-center flex-1 hidden lg:flex">
            <div className="flex space-x-6 ">
              {topMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="px-3 py-2 font-semibold  text-[#f8961e] rounded-md hover:bg-orange-100 "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="items-center hidden lg:flex">
            <button className="flex items-center px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">
              Buscar
              <Search className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-green-400 rounded-md bg-green-50 "
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden bg-green-500 lg:block">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-36">
          <div className="relative z-40 flex space-x-8">
            {bottomMenuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.link}
                  className="inline-flex items-center px-3 py-4 text-sm font-semibold text-white rounded-md hover:bg-green-600"
                >
                  {item.name}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                {item.hasSubmenu && (
                  <div className="absolute left-0 invisible w-48 mt-2 transition-all duration-300 ease-in-out bg-white rounded-md shadow-lg opacity-0 ring-1 ring-black ring-opacity-5 group-hover:opacity-100 group-hover:visible">
                    <div className="py-1">
                      {item.submenuItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {topMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block px-3 py-2 text-base font-medium text-orange-400 rounded-md hover:bg-orange-50"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-green-500">
            {bottomMenuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="inline-flex items-center justify-between w-full px-3 py-2 text-base font-medium text-left text-white rounded-md hover:bg-green-600"
                >
                  {item.name}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
                {item.hasSubmenu && activeDropdown === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.submenuItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-green-600"
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 py-3">
            <button className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition-all duration-300 ease-in-out bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
              Buscar
              <Search className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
