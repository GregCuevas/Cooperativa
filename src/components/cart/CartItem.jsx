"use client";
import { useCart } from "@/context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-start border-b pb-4">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
        <img
          src={item.image || "https://via.placeholder.com/80"}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3 className="pr-2">{item.name}</h3>
          <p className="ml-4 whitespace-nowrap text-[#171717]">
            RD${(item.aporte * item.quantity).toLocaleString()}
          </p>
        </div>

        <div className="text-sm text-gray-500">
          Cuota:{" "}
          <span className="text-[#171717]">
            RD${item.cuota.toLocaleString()}/mes
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <button
              className="p-1 hover:bg-gray-100"
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              disabled={item.quantity <= 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="px-2">{item.quantity}</span>
            <button
              className="p-1 hover:bg-gray-100"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <button
            className="text-gray-400 hover:text-red-500"
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
