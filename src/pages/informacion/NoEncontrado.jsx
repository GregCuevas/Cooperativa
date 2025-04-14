import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { Button } from "@/components/ui/button";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-12 lg:p-36">
        <h1 className="font-bold text-green-500 text-6xl md:text-8xl lg:text-9xl xl:text-[12rem]">
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-gray-700 md:text-2xl lg:text-3xl">
          No pudimos encontrar lo que estabas buscando.
        </h2>
        <Button
          onClick={() => navigate("/")}
          className="w-56 px-6 py-2 mt-6 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Ir a Inicio
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
