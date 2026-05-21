import React from "react";

const Herosections = () => {
  return (
    <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400"
        alt="Shop Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] w-6 md:w-10 bg-[#adb940]" />
          <span className="font-raleway text-[9px] md:text-[11px] text-[#adb940] tracking-[4px] uppercase">
            Browse
          </span>
          <div className="h-[1px] w-6 md:w-10 bg-[#adb940]" />
        </div>
        <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Collection
        </h1>
        <p className="font-raleway text-[11px] md:text-[13px] text-white/60 mt-3">
          Curated for premium living
        </p>
      </div>
    </div>
  );
};

export default Herosections;
