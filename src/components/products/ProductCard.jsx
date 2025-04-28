"use client";
import { useCart } from "@/context/CartContext";

import { Badge } from "../ui/Badge";
import StarRating from "../ui/StarRating";

function ProductCard({ product, showNotification }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} añadido al carrito`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="relative h-64 bg-gray-100">
        {product.onSale && (
          <div className="absolute top-2 left-2 ">
            <Badge className="bg-[#22C55E]">OFERTA</Badge>
          </div>
        )}
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {product.categories.map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category.toUpperCase()}
            </Badge>
          ))}
        </div>

        <h3 className="font-bold text-lg mb-2">{product.name}</h3>

        <StarRating rating={product.rating} />

        <div className="mt-4 flex items-center">
          {product.oldPrice && (
            <span className="text-gray-400 line-through mr-2">
              £{product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="font-bold">£{product.price.toFixed(2)}</span>
          {product.priceRange && (
            <span className="font-bold">
              {" "}
              – £{product.priceRange.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-[#22C55E] text-white px-4 py-2 rounded-md hover:bg-[#171717] transition-colors w-full"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
