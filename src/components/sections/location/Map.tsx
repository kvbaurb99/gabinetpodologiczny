import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "marker"
  | "places"
  | "visualization"
)[];

interface MapComponentProps {
  api: string;
  center: {
    lat: number;
    lng: number;
  };
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const libraries: Libraries = ["places"];

function MapComponent({ center, api }: MapComponentProps) {
  const apiKey = api?.trim() ?? "";
  const hasKey = apiKey.length > 0;

  useEffect(() => {
    if (!hasKey && typeof window !== "undefined") {
      console.warn(
        "[Map] Brak Google Maps API key. Ustaw PUBLIC_GOOGLE_MAPS_API_KEY w .env (lokalnie) i Vercel → Project Settings → Environments."
      );
    }
  }, [hasKey]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries,
  });

  const [, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!hasKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500 text-sm p-4 text-center">
        Brak klucza Google Maps API. Dodaj <code>PUBLIC_GOOGLE_MAPS_API_KEY</code> w env.
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-700 text-sm p-4 text-center">
        Nie udało się załadować Google Maps. Sprawdź ograniczenia klucza (HTTP referrers) w Google Cloud Console.
      </div>
    );
  }

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18.7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(MapComponent);
