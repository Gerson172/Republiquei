import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import getCoordenadas from "../../service/republicas/getCoordenadas";
import React, { useState, useEffect } from "react";

interface MapProps {
  address: string;
}

const Map = ({ address }: MapProps): JSX.Element => {
  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();

  useEffect(() => {
    async function Coordenadas() {
      const [lat, lon] = await getCoordenadas(address);

      setLat(lat);
      setLon(lon);
    }

    Coordenadas();
  }, [address]);

  if (!lat || !lon) return <p>Carregando...</p>;

  return (
    <MapContainer center={[lat, lon]} zoom={13} className="h-96 w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
