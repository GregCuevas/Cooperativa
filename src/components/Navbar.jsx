import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { X, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between text-black bg-white shadow-sm ">
      <div className="text-xl font-bold">
        <img
          src={Logo}
          alt=""
          className="h-20 sm:h-14 md:h-16 lg:h-20 xl:h-24"
        />
      </div>

      <div className="hidden space-x-12 font-sans md:flex">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/nosotros" className="hover:text-gray-400">
          Nosotros
        </Link>
        <Link href="/servicios" className="hover:text-gray-400">
          Servicios
        </Link>
        <Link href="/socios" className="hover:text-gray-400">
          Socios
        </Link>
        <Link href="/prensa" className="hover:text-gray-400">
          Prensa
        </Link>
        <Link href="/inversionista" className="hover:text-gray-400">
          Inversionistas
        </Link>
        <Link href="/contactos" className="hover:text-gray-400">
          Contactos
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <Link href="#" className=" hover:text-gray-400">
          <Search size={28} className="lg:m-10" />
        </Link>

        {/* Burger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X /> : <Menu className="mr-3" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/partners" className="hover:text-gray-400">
              Partners
            </Link>
          </li>
          <li>
            <Link href="/press" className="hover:text-gray-400">
              Press
            </Link>
          </li>
          <li>
            <Link href="/investors" className="hover:text-gray-400">
              Investors
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:text-gray-400">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
