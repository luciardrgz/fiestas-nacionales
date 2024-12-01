"use client";
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });
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
        <h1 className="text-center text-3xl font-extrabold py-4 max-sm:py-2 max-sm:my-1 max-sm:tracking-tighter bg-[#6CACE4] text-white">
          Festivales argentinos
        </h1>
        <p className="text-center text-sm bg-white text-red-500 leading-tight">
          <b>IMPORTANTE:</b> 'Cómo llegar' da una ubicación <u>aproximada</u>, no es exacta.
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
