import React, { useState } from "react";
import { months, provinces, categories } from "@/utils/arrays";
import {
  faChevronDown,
  faChevronUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ onMonthSelect, onProvinceSelect, onCategorySelect }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedProv, setSelectedProv] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

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

  const handleCategorySelect = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevCategories) =>
      checked
        ? [...prevCategories, value]
        : prevCategories.filter((category) => category !== value)
    );
    onCategorySelect(value, checked);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const clearCategories = () => {
    setSelectedCategories([]);
    categories.forEach((category) => {
      onCategorySelect(category, false);
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-1 gap-1">
      <div className="flex w-full gap-2">
        <div className="bg-[#6CACE4] rounded-lg p-2 flex-1">
          <p className="text-xl max-sm:text-[0.9rem] text-white">
            Seleccioná mes
          </p>
          <select
            value={selectedMonth}
            onChange={handleMonthSelect}
            className="border border-gray-300 bg-white p-1 rounded w-[100%] max-sm:text-[0.76rem]"
          >
            <option value="">
              Todos los meses
            </option>
            {months.map((mes, index) => (
              <option key={index} value={mes}>
                {mes}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#6CACE4] rounded-lg p-2 flex-1">
          <p className="text-xl max-sm:text-[0.9rem] text-white">
            Seleccioná provincia
          </p>
          <select
            value={selectedProv}
            onChange={handleProvSelect}
            className="border border-gray-300 bg-white p-1 rounded w-[100%] max-sm:text-[0.76rem]"
          >
            <option value="">Todas las provincias</option>
            {provinces.map((prov, index) => (
              <option key={index} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-[#6CACE4] rounded-lg p-2 w-full">
        <div className="flex justify-center items-center">
          <p className="text-xl max-sm:text-[0.9rem] text-white">
            Seleccioná categorías
          </p>
          <button onClick={toggleCategories} className="text-white ml-2">
            {showCategories ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showCategories ? "max-h-screen" : "max-h-0"
          }`}
        >
          {showCategories && (
            <div className="flex flex-wrap gap-4 p-2">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="block bg-white p-1 rounded-lg w-1/8 text-left max-sm:text-xs"
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategorySelect}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={clearCategories}
          className="bg-red-500 text-white max-sm:text-xs mt-2 py-1 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faTrashCan} /> Limpiar todas las categorías
        </button>
      </div>
    </div>
  );
};

export default Menu;
