import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useQuoteModal } from "../../../context/QuoteModalContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// HD Background Assets
import heroKitchen from "../../../images/kitchenB.jpg";
import wardrobeBg from "../../../images/wardrobe.png";
import mediaWallBg from "../../../images/mediawall.jpg";
import heroShop from "../../../images/interior7.jpg";
import officeBg from "../../../images/officeA.jpg";
import cafeA from "../../../images/cafeA.jpg";

export default function Herosection() {
  const { openQuoteModal } = useQuoteModal();

  const slides = [
    {
      image: heroKitchen,
      subtitle: "BESPOKE INTERIORS & SERVICES",
      title: "Build For Your Spaces",
      desc: "Premium home decor & bespoke interiors — kitchens, wardrobes, doors, and media walls, designed around how you live.",
      primaryText: "EXPLORE SERVICES",
      primaryLink: "/services",
      secondaryText: "VIEW PORTFOLIO",
      secondaryLink: "/services#portfolio",
      isButtonAction: false,
    },
    {
      image: wardrobeBg,
      subtitle: "FITTED WARDROBES",
      title: "Smart Storage Solutions",
      desc: "Optimize your personal space with handcrafted built-in closets, bespoke walk-in wardrobes, and sliding doors.",
      primaryText: "EXPLORE WARDROBES",
      primaryLink: "/services",
      secondaryText: "GET A QUOTE",
      secondaryLink: "",
      isButtonAction: true,
      primaryAction: openQuoteModal,
    },
    {
      image: mediaWallBg,
      subtitle: "BESPOKE MEDIA WALLS",
      title: "Entertainment Redefined",
      desc: "Create a stunning focal point in your home with customized media walls, floating shelves, and integrated smart LED design.",
      primaryText: "EXPLORE DESIGNS",
      primaryLink: "/services",
      secondaryText: "VIEW PROJECTS",
      secondaryLink: "/projects",
      isButtonAction: false,
    },
    {
      image: heroShop,
      subtitle: "EXQUISITE SHOP ITEMS",
      title: "Curated Home Decor",
      desc: "Elevate your space with our premium furniture, designer lighting, and custom candles, handpicked to make a statement.",
      primaryText: "SHOP PRODUCTS",
      primaryLink: "/shop",
      secondaryText: "VIEW FAVORITES",
      secondaryLink: "/favorites",
      isButtonAction: false,
    },
    {
      image: officeBg,
      subtitle: "COMMERCIAL JOINERY & FIT-OUTS",
      title: "Executive Offices",
      desc: "Enhance productivity with our bespoke conference rooms, modern offices, receptions, and architectural paneling.",
      primaryText: "VIEW PROJECTS",
      primaryLink: "/projects",
      secondaryText: "GET A QUOTE",
      secondaryLink: "",
      isButtonAction: true,
      primaryAction: openQuoteModal,
    },
    {
      image: cafeA,
      subtitle: "PREMIUM COMMERCIAL SPACES",
      title: "Cafe & Turnkey Fit-Outs",
      desc: "From modern cafe designs to high-end lounges, we deliver bespoke commercial joinery and turnkey solutions.",
      primaryText: "GET A QUOTE",
      primaryLink: "",
      secondaryText: "EXPLORE SERVICES",
      secondaryLink: "/services",
      isButtonAction: true,
      primaryAction: openQuoteModal,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[85vh] md:h-[92vh] relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex flex-col justify-center bg-[#1A1C19]">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Dark overlay — stronger on left for text legibility, fades right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C19]/70 via-[#1A1C19]/45 to-transparent z-[1]" />

              {/* Subtle grid texture overlay */}
              <div
                className="absolute inset-0 z-[2]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(173,185,64,0.03) 0px, rgba(173,185,64,0.03) 1px, transparent 1px, transparent 80px)",
                }}
              />

              {/* Content */}
              <div className="relative z-[3] max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full">
                {/* Left — Text (max ~50% width) */}
                <div className="max-w-[540px] text-center md:text-left">
                  <div className="text-[10px] tracking-[4px] text-[#adb940] font-raleway mb-5 md:mb-6 flex items-center justify-center md:justify-start gap-3">
                    <span className="inline-block w-8 h-[1px] bg-[#adb940]" />
                    {slide.subtitle}
                  </div>

                  <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F1] leading-[1.1] font-normal mb-6 md:mb-8">
                    {slide.title}
                  </h1>

                  <p className="font-raleway text-[13px] md:text-sm text-white/60 leading-[1.8] mb-10 md:mb-12 max-w-[400px] mx-auto md:mx-0">
                    {slide.desc}
                  </p>

                  <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
                    {slide.isButtonAction ? (
                      <button
                        onClick={slide.primaryAction}
                        className="bg-[#3c5a25] cursor-pointer text-white px-5 md:px-10 py-3.5 md:py-4 text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] font-medium font-raleway transition-all duration-300 hover:bg-[#4a6b2e] hover:scale-105 hover:shadow-xl inline-block uppercase text-center"
                      >
                        {slide.primaryText}
                      </button>
                    ) : (
                      <Link
                        to={slide.primaryLink}
                        className="bg-[#3c5a25] text-white px-5 md:px-10 py-3.5 md:py-4 text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] font-medium font-raleway transition-all duration-300 hover:bg-[#4a6b2e] hover:scale-105 hover:shadow-xl inline-block no-underline uppercase text-center"
                      >
                        {slide.primaryText}
                      </Link>
                    )}

                    {slide.secondaryLink ? (
                      <Link
                        to={slide.secondaryLink}
                        className="border border-white/60 text-white px-5 md:px-10 py-3.5 md:py-4 text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] font-raleway transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl inline-block no-underline uppercase text-center"
                      >
                        {slide.secondaryText}
                      </Link>
                    ) : (
                      <button
                        onClick={openQuoteModal}
                        className="border border-white/60 text-white px-5 md:px-10 py-3.5 md:py-4 text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] font-raleway transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl inline-block uppercase text-center"
                      >
                        {slide.secondaryText}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom-right badge */}
              <div className="absolute bottom-8 right-6 md:right-12 z-[4] bg-[#1A1C19]/85 border border-[#adb940]/40 p-4 md:p-5 backdrop-blur-md hidden sm:block">
                <div className="font-cinzel text-[#adb940] text-[9px] md:text-[10px] tracking-[2px]">
                  AMBIANZ SIGNATURE
                </div>
                <div className="font-raleway text-[#F8F6F1] text-[10px] md:text-[11px] mt-1 opacity-70">
                  Bespoke · Precision · Craft
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stat Strip */}
      <div className="overflow-hidden bg-[#adb940] py-2.5 md:py-3 border-y border-black/10 mt-[-1px]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, gi) => (
            <div key={gi} className="flex items-center">
              {[
                "Bespoke Kitchens",
                "Fitted Wardrobes",
                "Statement Doors",
                "Media Walls",
                "Home Offices",
                "Cafe Fit-outs",
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-4 px-6 md:px-10 font-raleway text-[10px] md:text-[11px] tracking-[2px] md:tracking-[3px] uppercase text-[#1a1c19] font-semibold"
                >
                  <span className="w-1.5 h-1.5 bg-[#3c5a25] inline-block flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
