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
