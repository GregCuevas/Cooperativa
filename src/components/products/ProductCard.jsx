"use client";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

import StarRating from "../ui/StarRating";
import ProductDetailsModal from "./ProductDetailsModal";
function ProductCard({ product, showNotification }) {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} añadido al carrito`);
  };

  // Efecto para precargar la imagen
  useEffect(() => {
    const img = new Image();
    img.src = product.image || "https://via.placeholder.com/300";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [product.image]);

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-lg flex flex-col h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contenedor de imagen con proporción fija */}
        <div className="relative pt-[75%]  overflow-hidden">
          {/* Overlay de carga */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Imagen del producto con optimizaciones */}
          <img
            ref={imageRef}
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Badge de categoría en la esquina */}
          <div className="absolute top-2 left-2 ">
            <Badge variant="solid" className="text-xs uppercase">
              {product.categories[0]}
            </Badge>
          </div>
        </div>

        <div className="p-4 flex-grow flex flex-col">
          {/* Nombre del producto */}
          <h3 className="font-bold text-base mb-1 line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>

          {/* Estrellas */}
          <StarRating rating={product.rating} />

          {/* Precios */}
          <div className="mt-3 mb-auto">
            <div className="text-sm font-medium">
              Cuota mensual{" "}
              <span className="font-bold text-[#0A0A0A]">
                RD${product.cuota.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Botones */}
          <div className="grid grid-cols-1 gap-2 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 transition-colors w-full flex items-center justify-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Añadir al carrito
            </button>
            <button
              onClick={() => setShowDetails(true)}
              className="border border-gray-300 text-gray-700 px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors w-full flex items-center justify-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <ProductDetailsModal
          product={product}
          onClose={() => setShowDetails(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default ProductCard;
