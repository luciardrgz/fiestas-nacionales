"use client";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedProv, setSelectedProv] = useState(null);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleProvSelect = (prov) => {
    setSelectedProv(prov);
  };

  return (
    <section id="home" className="flex flex-col justify-center">
      <div className="">
        <h1 className="text-center text-3xl font-extrabold py-4 max-sm:py-2 bg-[#6CACE4] text-white max-sm:tracking-tighter">
          Fiestas nacionales argentinas
        </h1>
        <p className="text-center text-sm bg-red-500 text-white leading-tight">
          <b>IMPORTANTE:</b> 'Cómo llegar' da una ubicación <u>aproximada</u>.
        </p>
      </div>

      <div className="text-center max-sm mx-2">
        <Menu
          onMonthSelect={handleMonthSelect}
          onProvinceSelect={handleProvSelect}
        />
        <Map month={selectedMonth} province={selectedProv} />
      </div>
    </section>
  );
}
