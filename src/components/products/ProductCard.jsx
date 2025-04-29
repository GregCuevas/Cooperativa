"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

import StarRating from "../ui/StarRating";
import ProductDetailsModal from "./ProductDetailsModal";
function ProductCard({ product, showNotification }) {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} añadido al carrito`);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen del producto */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <img
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        <div className="p-3">
          {/* Categoría */}
          <div className="mb-1">
            <Badge variant="outline" className="text-xs uppercase">
              {product.categories[0]}
            </Badge>
          </div>

          {/* Nombre del producto */}
          <h3 className="font-bold text-base mb-1 line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>

          {/* Estrellas */}
          <StarRating rating={product.rating} />

          {/* Precios */}
          <div className="mt-2">
            <div className="text-sm font-medium">
              Aporte{" "}
              <span className="font-bold text-[#171717]">
                RD${product.aporte.toLocaleString()}
              </span>
            </div>
            <div className="text-sm font-medium">
              Cuota mensual{" "}
              <span className="font-bold text-[#171717]">
                RD${product.cuota.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Botones */}
          <div className="grid grid-cols-1 gap-2 mt-3">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full flex items-center justify-center"
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
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-full flex items-center justify-center"
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
