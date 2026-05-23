import React from "react";
import { Link, StaticRouterProvider } from "react-router-dom";
import kitchenA from "../../images/kitchenA.jpg";
import wardrobeC from "../../images/wardrobeC.jpg";
import doorC from "../../images/doorC.jpg";
import interior1 from "../../images/interior1.jpg";
import mediawall1 from "../../images/mediawall1.png";
import cafeB from "../../images/cafeB.jpg";

const services = [
  {
    id: "kitchens",
    num: "01",
    tag: "01 — Kitchens",
    title: "Bespoke\nKitchens",
    desc: "Where precision meets warmth. Each kitchen is engineered to perfection — a seamless fusion of form, function, and premium materials crafted around the way you live and cook.",
    features: [
      "Custom cabinetry & storage solutions",
      "Premium countertop materials",
      "Integrated appliance design",
      "Full 3D visualisation before build",
    ],
    // White modern luxury kitchen — clean, architectural, no people
    img: kitchenA,
    path: "/services/kitchens",
    dark: false,
  },
  {
    id: "wardrobes",
    num: "02",
    tag: "02 — Wardrobes",
    title: "Bespoke\nWardrobes",
    desc: "Your wardrobe should be a gallery for your personal history. We design precision-engineered storage systems that blend effortless organisation with refined luxury.",
    features: [
      "Floor-to-ceiling fitted designs",
      "Soft-close drawer & rail systems",
      "Integrated lighting & mirrors",
      "Walk-in & sliding door options",
    ],
    // Dark luxury walk-in wardrobe with lighting
    img: wardrobeC,
    path: "/services/wardrobes",
    dark: false,
  },
  {
    id: "doors",
    num: "03",
    tag: "03 — Doors",
    title: "Statement\nDoors",
    desc: "First impressions are lasting ones. Our bespoke doors are crafted with architectural precision — making every entrance a moment of quiet drama and considered design.",
    features: [
      "Solid wood & veneer finishes",
      "Pivot, sliding & bi-fold options",
      "Custom hardware & handles",
      "Acoustic & fire-rated variants",
    ],
    // Minimal interior hallway with architectural timber door
    img: doorC,
    path: "/services/doors",
    dark: false,
  },
  {
    id: "media-walls",
    num: "04",
    tag: "04 — Media Walls",
    title: "Cinematic\nMedia Walls",
    desc: "The cinematic experience, seamlessly integrated into your home's architecture. A thoughtful arrangement of materials and technology that becomes the defining feature of any room.",
    features: [
      "Stone, timber & lacquer finishes",
      "Integrated cable management",
      "Built-in shelving & fireplace options",
      "Full bespoke sizing to any room",
    ],
    // Dark luxury living room — built-in shelving, ambient warm lighting
    img: mediawall1,
    path: "/services/media-walls",
    dark: false,
  },
  {
    id: "cafe-fits",
    num: "05",
    tag: "05 — Cafe Fits",
    title: "Bespoke\nCafe Fits",
    desc: "Transforming commercial spaces into bespoke destinations. We design and build commercial interiors that blend functional high-traffic requirements with refined architectural aesthetics.",
    features: [
      "Commercial cabinetry & bar design",
      "Bespoke seating & table solutions",
      "Durable premium surface selection",
      "Full commercial 3D floor planning",
    ],
    img: cafeB,
    path: "/services/cafe-fitouts",
    dark: false,
  },
];

const serviceStrip = [
  { label: "Kitchens", sub: "Precision Crafted" },
  { label: "Wardrobes", sub: "Gallery for Living" },
  { label: "Doors", sub: "Architectural Drama" },
  { label: "Media Walls", sub: "Cinematic Living" },
];

// Local kitchen image for hero
const HERO_IMG = interior1;

const ServiceChapter = ({ svc, index }) => {
  const cream = "#F8F6F1";
  const dark = "#1A1C19";
  const bg = svc.dark ? dark : cream;
  const text = svc.dark ? cream : dark;
  const sub = svc.dark ? "rgba(248,246,241,0.5)" : "#666";
  const feat = svc.dark ? "rgba(248,246,241,0.7)" : "#565853";

  const isRight = index % 2 !== 0;

  return (
    <div
      id={svc.id}
      className="relative w-full min-h-[500px] lg:h-[560px] flex flex-col lg:flex-row border-b border-[#c8c4bc] overflow-hidden"
    >
      {/* Background/Side Image */}
      <div className={`relative w-full lg:w-[58%] h-[300px] lg:h-auto ${isRight ? "lg:order-2" : "lg:order-1"}`}>
        <img
          src={svc.img}
          alt={svc.id}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for mobile */}
        <div className="absolute inset-0 bg-black/10 lg:hidden" />
      </div>

      {/* Content panel */}
      <div
        className={`relative w-full lg:w-[42%] flex flex-col justify-center p-8 md:p-12 lg:p-14 z-[2] ${
          isRight ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
        } border-[#adb940]/30`}
        style={{ background: bg }}
      >
        {/* Faded decorative number */}
        <span className="absolute top-4 right-6 font-cinzel text-[70px] md:text-[100px] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none">
          {svc.num}
        </span>

        {/* Tag */}
        <p className="font-raleway text-[9px] tracking-[4px] text-[#adb940] uppercase mb-4">
          {svc.tag}
        </p>

        {/* Gold rule */}
        <div className="h-[1px] w-10 bg-[#adb940] mb-6" />

        {/* Title */}
        <h3 className={`font-cinzel text-3xl md:text-4xl font-medium leading-tight mb-6 whitespace-pre-line`} style={{ color: text }}>
          {svc.title}
        </h3>

        {/* Description */}
        <p className="font-raleway text-sm leading-relaxed mb-8 max-w-sm" style={{ color: sub }}>
          {svc.desc}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-10">
          {svc.features.map((f, i) => (
            <li key={i} className="font-raleway text-xs flex items-center gap-4" style={{ color: feat }}>
              <div className="h-[1px] w-4 bg-[#adb940] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={svc.path}
          className="font-raleway text-[10px] tracking-[3px] font-bold uppercase transition-all duration-300 border-b pb-1 w-fit"
          style={{ color: text, borderColor: text }}
        >
          Explore {svc.id.replace("-", " ")} →
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-full bg-[#F8F6F1]">
      {/* ===== HERO — EDITORIAL SPLIT ===== */}
      <div className="w-full border-b border-[#e0ddd7]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[620px]">
          {/* Left — text */}
          <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24 bg-[#F8F6F1] order-2 lg:order-1">
            <div className="inline-block border border-[#adb940] px-4 py-2 mb-8 self-start">
              <span className="font-raleway text-[9px] tracking-[4px] text-[#3c5a25] uppercase">
                Ambianz — Bespoke Interiors
              </span>
            </div>
            
            <p className="font-raleway text-[10px] tracking-[5px] text-[#adb940] uppercase mb-4">
              Our Expertise
            </p>
            
            <div className="h-[1px] w-10 bg-[#adb940] mb-6" />
            
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-normal text-[#1A1C19] leading-[1.1] mb-8">
              Spaces<br />Crafted to<br />Define You
            </h1>
            
            <p className="font-raleway text-[10px] tracking-[2px] text-[#bbb] uppercase mb-12">
              Interior Architecture & Bespoke Design
            </p>
            
            <a href="#services-list" className="flex items-center gap-4 group">
              <div className="h-[1px] w-8 bg-[#1A1C19] transition-all duration-500 group-hover:w-14" />
              <span className="font-raleway text-[9px] tracking-[3px] text-[#1A1C19] uppercase">
                Scroll to explore
              </span>
            </a>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[300px] lg:min-h-[620px] order-1 lg:order-2">
            <div className="absolute top-0 bottom-0 left-0 z-10 hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[#adb940] to-transparent" />
            
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src={HERO_IMG}
                alt="Luxury bespoke interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F1] via-transparent to-transparent lg:opacity-100 opacity-0" />
              
              <div className="absolute bottom-8 right-8 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#adb940]" />
                <span className="font-raleway text-[9px] tracking-[3px] text-white uppercase drop-shadow-md">
                  Bespoke Interiors
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#F8F6F1] border-t border-[#e0ddd7]">
          {serviceStrip.map((s, i) => (
            <div
              key={i}
              className={`p-6 md:p-10 lg:p-14 ${
                i !== serviceStrip.length - 1 ? "border-r border-[#e0ddd7]" : ""
              } ${i >= 2 ? "border-t md:border-t-0" : ""}`}
            >
              <p className="font-cinzel text-sm md:text-base text-[#1A1C19] font-medium mb-2">
                {s.label}
              </p>
              <p className="font-raleway text-[9px] tracking-[2px] text-[#aaa] uppercase">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SECTION INTRO ===== */}
      <div id="services-list" className="text-center py-16 md:py-20 px-6 border-b border-[#e0ddd7]">
        <p className="font-raleway text-[10px] tracking-[5px] text-[#adb940] uppercase mb-4">
          What We Build
        </p>
        <div className="h-[1px] w-10 bg-[#adb940] mx-auto mb-6" />
        <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-medium">
          Our Four Disciplines
        </h2>
      </div>

      {/* ===== SERVICE CHAPTERS ===== */}
      <div>
        {services.map((svc, i) => (
          <ServiceChapter key={svc.id} svc={svc} index={i} />
        ))}
      </div>

      {/* ===== WHITE CTA / SERVICE SUMMARY (before footer) ===== */}
      <section className="bg-white py-20 border-t border-[#e0ddd7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="p-8 border border-[#e8e6e0]">
              <p className="font-raleway text-[10px] tracking-[4px] text-[#adb940] uppercase mb-3">Consult</p>
              <h3 className="font-cinzel text-2xl text-[#1A1C19] mb-4">Initial Consultation</h3>
              <p className="font-raleway text-sm text-gray-600">Discuss objectives, site constraints and user needs with our design team to set the project brief and scope.</p>
            </div>

            <div className="p-8 border border-[#e8e6e0]">
              <p className="font-raleway text-[10px] tracking-[4px] text-[#adb940] uppercase mb-3">Design</p>
              <h3 className="font-cinzel text-2xl text-[#1A1C19] mb-4">Concept & Delivery</h3>
              <p className="font-raleway text-sm text-gray-600">From detailed 3D visualisations to material selection and technical drawings — we translate vision into buildable documentation.</p>
            </div>

            <div className="p-8 border border-[#e8e6e0] flex flex-col justify-between">
              <div>
                <p className="font-raleway text-[10px] tracking-[4px] text-[#adb940] uppercase mb-3">Build</p>
                <h3 className="font-cinzel text-2xl text-[#1A1C19] mb-4">Bespoke Fabrication</h3>
                <p className="font-raleway text-sm text-gray-600 mb-6">Our workshop and installation teams ensure millimetre-perfect execution with premium materials and skilled craftsmanship.</p>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="inline-block bg-[#3c5a25] text-white px-6 py-3 font-raleway text-[10px] tracking-[2px] uppercase">Request a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
