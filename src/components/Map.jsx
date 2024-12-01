import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { festivals } from "@/utils/arrays";

const Map = ({ month, province }) => {
  const [filteredFestivals, setFilteredFestivals] = useState([]);
  useEffect(() => {
    const applyFilters = () => {
      const filtered = festivals
        .filter((festival) => {
          const monthMatch = month
            ? festival.month.toLowerCase() === month.toLowerCase()
            : true;
  
          return monthMatch;
        })
        .flatMap((festival) => festival.festivals) 
  
        .filter((festival) => {
          const provinceMatch = province
            ? festival.location.toLowerCase().includes(province.toLowerCase())
            : true;
          return provinceMatch;
        });
  
      setFilteredFestivals(filtered);
    };
  
    applyFilters();
  }, [month, province]); 
  

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdn.pixabay.com/photo/2017/08/26/10/17/location-2682655_1280.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41], // icono donde se ancla al mapa
    popupAnchor: [1, -34], // apertura popup
  });

  return (
    <MapContainer
      center={[-38.4161, -63.6167]}
      zoom={5}
      style={{ height: "80vh", width: "100%", marginBottom: "8rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {filteredFestivals.map((festival, index) => {
        const [lat, lng] = festival.coordinates.split(",").map(Number);

        if (isNaN(lat) || isNaN(lng)) {
          console.error(
            "Coordinadas inválidas para el festival:",
            festival.name
          );
          return null;
        }

        return (
          <Marker key={index} position={[lat, lng]} icon={customIcon}>
            <Popup>
              <b>{festival.name}</b>
              <br />
              {festival.date}
              <br />
              {festival.location}
              <br />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              >
                Cómo llegar
              </a>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
