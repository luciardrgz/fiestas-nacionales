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
    <div className="flex items-center justify-center py-5 gap-2 sm:gap-11 bg-white mx-auto">
      <div className="">
        <p>Seleccioná un mes</p>
        <select
          value={selectedMonth}
          onChange={handleMonthSelect}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="">Todos los meses</option>
          {months.map((mes, index) => (
            <option key={index} value={mes}>
              {mes}
            </option>
          ))}
        </select>
      </div>{" "}

      <div className="">
        <p>Seleccioná una provincia</p>
        <select
          value={selectedProv}
          onChange={handleProvSelect}
          className="border border-gray-300 p-2 rounded"
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
