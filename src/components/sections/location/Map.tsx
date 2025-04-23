"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

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

// Określenie tablicy bibliotek jako stałej
const libraries: Libraries = ["places"];

function MapComponent({ center, api }: MapComponentProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api,
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
