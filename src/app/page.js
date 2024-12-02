"use client";
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedProv, setSelectedProv] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleProvSelect = (prov) => {
    setSelectedProv(prov);
  };

  const handleCategorySelect = (category, isChecked) => {
    setSelectedCategories((prevCategories) =>
      isChecked
        ? [...prevCategories, category]
        : prevCategories.filter((cat) => cat !== category)
    );
  };

  return (
    <section id="home" className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-full">
        <h1 className="text-center text-3xl font-extrabold sm:py-4 max-sm:py-2 max-sm:tracking-tighter bg-[#6CACE4] text-white">
          Festivales argentinos
        </h1>
        <p className="text-center text-sm bg-white text-red-500 leading-tight">
          <b>IMPORTANTE:</b> 'Cómo llegar' da una ubicación <u>aproximada</u>, no es exacta.
        </p>
      </div>

      <div className="flex flex-col items-center text-center w-[90%]">
        <Menu
          onMonthSelect={handleMonthSelect}
          onProvinceSelect={handleProvSelect}
          onCategorySelect={handleCategorySelect}
        />
        <Map
          month={selectedMonth}
          province={selectedProv}
          categories={selectedCategories}
        />
      </div>
    </section>
  );
}
