import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { festivals } from "@/utils/arrays";
import { getIconUrlForCategory } from "@/utils/functions";

const Map = ({ month, province, categories }) => {
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
        })
        .filter((festival) => {
          if (categories.length === 0) return true; // Si no hay categorías seleccionadas, mostrar todo
          return categories.includes(festival.category);
        });

      setFilteredFestivals(filtered);
    };

    applyFilters();
  }, [month, province, categories]);

  return (
    <MapContainer
      center={[-38.4161, -63.6167]}
      zoom={5}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {filteredFestivals.map((festival, index) => {
        const [lat, lng] = festival.coordinates.split(",").map(Number);

        if (isNaN(lat) || isNaN(lng)) {
          console.error("Coordinadas inválidas para el festival:", festival.name);
          return null;
        }

        const iconUrl = getIconUrlForCategory(festival.category);

        const customIcon = new L.Icon({
          iconUrl: iconUrl,
          iconSize: [25, 25],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        return (
          <Marker key={index} position={[lat, lng]} icon={customIcon}>
            <Popup>
              <b>{festival.name}</b>
              <br />
              {festival.date}
              <br />
              {festival.location}
              <br />
              <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>
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
