import { Link } from "react-router-dom";
import mediawallImg from "../../../images/mediawall.jpg";
import kitchenA from "../../../images/kitchenA.jpg";
import wardrobeBB from "../../../images/wardrobeBB.jpg";
import doorC from "../../../images/doorC.jpg";
import officeA from "../../../images/officeA.jpg";
import cafeB from "../../../images/cafeB.jpg";

import { FiArrowUpRight } from "react-icons/fi";

const specialisations = [
  {
    number: "01",
    title: "Bespoke Kitchens",
    description:
      "Full design, custom cabinetry, countertops & all appliance installation included.",
    link: "/services/kitchens",
    image: kitchenA,
    size: "large",
  },
  {
    number: "02",
    title: "Fitted Wardrobes",
    description: "Precision-engineered storage with refined finishes.",
    link: "/services/wardrobes",
    image: wardrobeBB,
    size: "medium",
  },
  {
    number: "03",
    title: "Media Walls",
    description: "Cinematic centrepieces seamlessly integrated into your home.",
    link: "/services/media-walls",
    image: mediawallImg,
    size: "medium",
  },
  {
    number: "04",
    title: "Home Offices",
    description: "Productive, beautiful, built for focus.",
    link: "/services/home-offices",
    image: officeA,
    size: "small",
  },
  {
    number: "05",
    title: "Cafe Fit-outs",
    description: "Commercial interiors with a bespoke edge.",
    link: "/services/cafe-fitouts",
    image: cafeB,
    size: "small",
  },

  {
    number: "06",
    title: "Doors",
    description: "Statement doors crafted for lasting impressions.",
    link: "/services/doors",
    image: doorC,
    size: "small",
  },
];

function ServiceCard({ item, heightClass = "h-[300px]", dark = false }) {
  return (
    <Link
      to={item.link}
      className={`relative group overflow-hidden block ${heightClass} ${
        item.image ? "bg-[#1A1C19]" : dark ? "bg-[#2a3520]" : "bg-[#3c5a25]"
      }`}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 36px)",
        }}
      />

      {/* Image if provided */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* Arrow icon top-right */}
      <div className="absolute top-4 right-4 w-8 h-8 border-[1.5px border-[#adb940]/70 flex items-center justify-center z-[2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <FiArrowUpRight className="text-[#adb940] text-lg" strokeWidth={3} />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#adb940]/10 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#1a1c19]/90 via-[#1a1c19]/40 to-transparent z-[2]">
        <div className="font-raleway text-[10px] md:text-[11px] tracking-[3px] text-[#adb940] font-bold mb-2">
          {item.number}
        </div>
        <div className={`font-cinzel text-[#F8F6F1] font-medium tracking-[2px] ${
          item.size === "large" ? "text-xl md:text-2xl" : "text-base md:text-lg"
        } mb-2`}>
          {item.title}
        </div>
        <p className="font-raleway text-[10px] md:text-xs text-white/60 leading-relaxed max-w-[320px]">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export default function Specialisations() {
  const [large, ...rest] = specialisations;
  const mediums = rest.slice(0, 2);
  const smalls = rest.slice(2);

  return (
    <section className="bg-[#F8F6F1] pt-16 md:pt-24 pb-10 md:pb-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#adb940]" />
            <span className="font-raleway text-[9px] md:text-[10px] tracking-[4px] text-[#adb940] uppercase">
              What We Build
            </span>
          </div>

          <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] mb-4">
            Our Specialisations
          </h2>

          <p className="font-raleway text-xs md:text-sm text-[#777] leading-relaxed max-w-xl">
            Every project designed in 3D, crafted in our workshop, and professionally installed in your space.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-1 md:gap-3">
          {/* Large Card */}
          <ServiceCard item={large} heightClass="h-[300px] md:h-[420px]" dark={false} />

          {/* Mediums and Smalls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1 md:gap-3">
            {/* Row 2 Mediums — on desktop they take 3 cols each of 6 (total 6) */}
            {mediums.map((item, i) => (
              <div key={item.number} className="md:col-span-1 lg:col-span-3">
                <ServiceCard
                  item={item}
                  heightClass="h-[250px] md:h-[300px]"
                  dark={i % 2 === 0}
                />
              </div>
            ))}

            {/* Row 3 Smalls — on desktop they take 2 cols each of 6 (total 6) */}
            {smalls.map((item, i) => (
              <div key={item.number} className="md:col-span-1 lg:col-span-2">
                <ServiceCard
                  item={item}
                  heightClass="h-[220px] md:h-[240px]"
                  dark={i % 2 !== 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-[#3c5a25] hover:text-[#adb940] transition-colors group border-b border-[#d8d4c8] pb-3"
          >
            <span className="font-raleway text-[10px] md:text-[11px] tracking-[3px] uppercase font-semibold">
              View All Services
            </span>
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
