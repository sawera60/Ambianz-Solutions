

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

// Import your images
import hero from "../images/hero.jpg"
import hero2 from "../images/hero2.jpeg"
import hero3 from "../images/hero3.jpg"

const Herosection = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">

      {/* ---- Background Slider ---- */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        <SwiperSlide>
          <img src={hero} alt="slide1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="slide2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="slide3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* ---- Dark Overlay ---- */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ---- Text & CTA Content ---- */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

        {/* Heading */}
        <h1 className="font-cinzel text-[48px] md:text-[64px] font-bold leading-tight
                       bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                       bg-clip-text text-transparent
                       drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
          Elevate Your Living Space
        </h1>

        {/* Subheading */}
        <p className="font-raleway mt-4 text-[16px] md:text-[20px] text-white/90 max-w-[600px]
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Discover our curated collection of premium home decor and bespoke design services
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">

          {/* Button 1 */}
          <button className="font-raleway px-8 py-3 bg-[#3a740e] text-white text-[16px]
                             font-semibold rounded-sm border-2 border-[#3c5a25]
                             hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                             transition-all duration-300 cursor-pointer">
            Shop Collection
          </button>

          {/* Button 2 */}
          <button className="font-raleway px-8 py-3 bg-transparent text-white text-[16px]
                             font-semibold rounded-sm border-2 border-white
                             hover:bg-[#d1c400] hover:text-black hover:border-[#d1c400]
                             transition-all duration-300 cursor-pointer">
            Explore Services
          </button>

        </div>
      </div>

    </div>
  )
}

export default Herosection