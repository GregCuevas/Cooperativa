import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Map as MapIcon, MapPin, Mail, Phone } from "lucide-react"; // Alias para los iconos
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const center = {
  latitude: 18.4704865, // Coordenadas de tu ubicación
  longitude: -69.9399808,
};

const LocationMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12", // Cambia a un estilo más claro
      center: [center.longitude, center.latitude],
      zoom: 13,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // Marcador en el mapa
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([center.longitude, center.latitude])
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Div contenedor principal para administrar espacio */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        {/* Nueva Sección - Encabezado */}
        <div className="mb-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-2 md:space-x-2 md:flex-row">
            <MapPin className="text-red-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Nuestra ubicación
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:flex-nowrap md:justify-start md:space-x-8">
          {/* Sección del mapa */}
          <div className="w-full mb-8 md:w-2/3 md:mb-0">
            <div ref={mapContainerRef} className="w-full h-80 md:h-96" />
          </div>

          {/* Sección de información de contacto */}
          <div className="w-full space-y-6 md:w-1/3">
            <h2 className="text-xl font-bold md:text-2xl">
              Encuentra nuestra ubicación y la sucursal o cajero más cercano
            </h2>
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-600" size={24} />
              <p>243 Heights Promenade, Brooklyn, NY, USA</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-green-600" size={24} />
              <div>
                <p>example@example.com</p>
                <span className="text-sm text-gray-500">Soporte 24/7</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600" size={24} />
              <div>
                <p>+1 452 123 1235</p>
                <span className="text-sm text-gray-500">Consulta Gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
