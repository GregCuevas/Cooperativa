import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacto from "../assets/contacto.jpg";

const ContactPage = () => {
  const socialLinks = [
    {
      Icon: Instagram,
      link: "https://www.instagram.com/coopebred?igsh=MTFra3VvbnU3a2lwZg%3D%3D",
    },
    { Icon: Linkedin, link: "https://www.linkedin.com/company/coopebred/" },
    {
      Icon: Facebook,
      link: "https://www.facebook.com/share/FDpqCHedhxkchRdW/?mibextid=LQQJ4d",
    },
    { Icon: MessageCircle, link: "https://wa.me/18294705898" },
  ];
  return (
    <>
      <Navbar />
      <section className="">
        <div className="container px-4 mx-auto mt-4">
          {/* Main Image with Overlaid Text and Social Icons */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={Contacto}
              alt="Coopebred main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
                Contáctanos
              </h1>
              <p className="max-w-xs mx-auto mb-6 text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
                Nos comprometemos a ofrecer un servicio de alta calidad,
                asegurando una atención eficiente, profesional y personalizada
                para satisfacer todas tus necesidades.
              </p>
              <div className="flex justify-center space-x-6 animate-fade-in-up">
                {socialLinks.map(({ Icon, link }, index) => (
                  <Link
                    key={index}
                    to={link}
                    target="_blank" // Esto abre el enlace en una nueva pestaña
                    className="text-white transition-colors hover:text-green-400"
                  >
                    <Icon size={28} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "Centro de atención",
              content: "+1 829 470 5898",
              link: "https://wa.me/18294705898",
            },
            {
              icon: Mail,
              title: "Vía correo electrónico",
              content: "info@coopebred.com",
              link: "mailto:info@coopebred.com",
            },
            {
              icon: MapPin,
              title: "Centros de servicios",
              content: "Ubica una de nuestras sucursales aquí.",
              link: "/sucursales",
            },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon size={48} className="mb-4 text-green-500" />
                <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
