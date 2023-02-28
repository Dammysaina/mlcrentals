import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";

const Map = () => {
  return (
    <div>
      <MapContainer 
      className="map"
      center={[4.8439383, 7.0409827]} 
      zoom={13} 
      scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
