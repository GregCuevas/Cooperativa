"use client";

import { useState, useEffect } from "react";

function Notification({ message, type = "success" }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-50 border-green-500"
      : type === "error"
      ? "bg-red-50 border-red-500"
      : "bg-blue-50 border-blue-500";

  const textColor =
    type === "success"
      ? "text-green-800"
      : type === "error"
      ? "text-red-800"
      : "text-blue-800";

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 p-4 rounded-md border-l-4 ${bgColor} shadow-md max-w-md`}
    >
      <div className="flex items-start">
        <div className={`flex-1 ${textColor}`}>{message}</div>
        <button
          className="ml-4 text-gray-400 hover:text-gray-600"
          onClick={() => setIsVisible(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Notification;
