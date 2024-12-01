import React, { useState } from "react";
import { months, provinces } from "@/utils/arrays";

const Menu = ({ onMonthSelect, onProvinceSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedProv, setSelectedProv] = useState("");

  const handleMonthSelect = (event) => {
    const mes = event.target.value;
    setSelectedMonth(mes);
    onMonthSelect(mes);
  };

  const handleProvSelect = (event) => {
    const mes = event.target.value;
    setSelectedProv(mes);
    onProvinceSelect(mes);
  };

  return (
    <div className="flex items-center justify-center py-5 gap-2 sm:gap-11">
      <div className="bg-[#6CACE4] rounded-lg p-4">
        <p className="max-sm:text-[0.9rem] text-white">Seleccioná mes</p>
        <select
          value={selectedMonth}
          onChange={handleMonthSelect}
          className="border border-gray-300 p-2 rounded w-[100%]"
        >
          <option value="">Todos los meses</option>
          {months.map((mes, index) => (
            <option key={index} value={mes}>
              {mes}
            </option>
          ))}
        </select>
      </div>{" "}

      <div className="bg-[#6CACE4] rounded-lg p-4">
        <p className="max-sm:text-[0.9rem] text-white">Seleccioná provincia</p>
        <select
          value={selectedProv}
          onChange={handleProvSelect}
          className="border border-gray-300 p-2 rounded w-[100%]"
        >
          {" "}
          <option value="">Todas las provincias</option>
          {provinces.map((prov, index) => (
            <option key={index} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Menu;
