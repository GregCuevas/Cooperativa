import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapPin, Mail, Phone } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const center = {
  latitude: 18.4704865,
  longitude: -69.9399808,
};

const LocationMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [center.longitude, center.latitude],
      zoom: 13,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([center.longitude, center.latitude])
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto font-inter">
      {/* Sección del título */}
      <div className="p-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <MapPin className="text-orange-500 animate-bounce" size={28} />
          <h2 className="text-3xl font-extrabold tracking-wide text-gray-900 transition-transform duration-300 ease-in-out transform md:text-4xl hover:scale-105">
            Nuestra ubicación
          </h2>
        </div>
      </div>

      {/* Contenedor principal con mapa e información */}
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Sección del mapa */}
        <div className="w-full md:w-10/12">
          <div
            ref={mapContainerRef}
            className="w-full mx-auto rounded-lg shadow-lg h-80 md:h-96"
          />
        </div>

        {/* Sección de información de contacto */}
        <div className="w-full space-y-6 md:space-y-0 md:flex md:justify-between md:items-center md:space-x-6 md:w-10/12">
          <div className="flex items-center space-x-3 md:flex-row md:items-center">
            <MapPin className="text-orange-600" size={24} />
            <p className="text-gray-700 transition-colors hover:text-orange-600">
              Edificio Lama Av. Winston Churchill 71, Santo Domingo, República
              Dominicana.
            </p>
          </div>

          <div className="flex items-center space-x-3 md:flex-row md:items-center">
            <Mail className="text-orange-600" size={24} />
            <div className="text-gray-700 transition-colors hover:text-orange-600">
              <p>Coopebred@silkglobal.com</p>
              <span className="text-sm text-gray-500">Soporte 24/7</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 md:flex-row md:items-center">
            <Phone className="text-orange-600" size={24} />
            <div className="text-gray-700 transition-colors hover:text-orange-600">
              <p>(829) 470 5898</p>
              <span className="text-sm text-gray-500">Consulta Gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
