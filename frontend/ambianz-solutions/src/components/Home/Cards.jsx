
// import React, { useState, useRef } from 'react'
// import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

// const Cards = ({ object }) => {
//   const [favorites, setFavorites] = useState({})
//   const trackRef = useRef(null)

//   const toggleFav = (index) => {
//     setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
//   }

//   const scroll = (dir) => {
//     const track = trackRef.current
//     const cardWidth = track.children[0].offsetWidth + 20
//     track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
//   }

//   return (
//     <div className="relative">

//       {/* Left Arrow */}
//       <button
//         onClick={() => scroll(-1)}
//         className="absolute -left-5 top-[45%] -translate-y-1/2 z-10
//                    w-10 h-10 rounded-full bg-white border border-[#d4d0c8]
//                    flex items-center justify-center shadow-sm
//                    hover:bg-[#1A1C19] hover:border-[#1A1C19] group transition-all duration-250"
//       >
//         <ChevronLeft size={16} className="text-[#565853] group-hover:text-[#F4E731]" />
//       </button>

//       {/* Track */}
//       <div
//         ref={trackRef}
//         className="overflow-x-hidden"
//       >
//         <div className="flex gap-5 transition-all">
//           {object.map((item, index) => (
//             <div
//               key={index}
//               style={{ minWidth: 'calc(20% - 16px)' }}
//               className="bg-white rounded-2xl overflow-hidden flex-shrink-0
//                          shadow-[0_2px_16px_rgba(0,0,0,0.06)]
//                          hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
//                          hover:-translate-y-1 transition-all duration-300 group"
//             >
//               {/* Image */}
//               <div className="relative h-[180px] overflow-hidden bg-[#ede9e0]">
//                 <img
//                   src={item.img}
//                   alt={item.pname}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
//                 />
//                 {item.badge && (
//                   <span className="absolute top-3 left-3 bg-[#F4E731] text-[#1A1C19]
//                                    text-[10px] font-medium tracking-widest uppercase
//                                    px-2 py-1 rounded-full">
//                     {item.badge}
//                   </span>
//                 )}
//                 <button
//                   onClick={() => toggleFav(index)}
//                   className="absolute top-3 right-3 w-8 h-8 rounded-full
//                              bg-white/95 flex items-center justify-center
//                              hover:scale-110 transition-all duration-200"
//                 >
//                   <Heart
//                     size={13}
//                     className={favorites[index] ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}
//                   />
//                 </button>
//               </div>

//               {/* Body */}
//               <div className="p-3">
//                 <h4 className="font-cinzel text-[14px] font-medium text-[#1A1C19] mb-1">
//                   {item.pname}
//                 </h4>
//                 <p className="font-raleway text-[11px] text-gray-400 font-light mb-3">
//                   {item.price}
//                 </p>
//                 <div className="flex gap-2">
//                   <button className="flex-1 py-2 bg-[#1A1C19] text-[#F4E731]
//                                      font-raleway text-[10px] font-medium tracking-widest uppercase
//                                      rounded-lg hover:bg-[#ADB940] hover:text-[#1A1C19]
//                                      transition-all duration-300">
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => toggleFav(index)}
//                     className={`w-8 h-8 rounded-lg border flex items-center justify-center
//                                 flex-shrink-0 transition-all duration-200
//                                 ${favorites[index]
//                                   ? 'border-red-300 bg-red-50'
//                                   : 'border-[#e0ddd6] hover:border-[#1A1C19]'}`}
//                   >
//                     <Heart
//                       size={13}
//                       className={favorites[index] ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => scroll(1)}
//         className="absolute -right-5 top-[45%] -translate-y-1/2 z-10
//                    w-10 h-10 rounded-full bg-white border border-[#d4d0c8]
//                    flex items-center justify-center shadow-sm
//                    hover:bg-[#1A1C19] hover:border-[#1A1C19] group transition-all duration-250"
//       >
//         <ChevronRight size={16} className="text-[#565853] group-hover:text-[#F4E731]" />
//       </button>

//     </div>
//   )
// }

// export default Cards

import React, { useState, useRef } from 'react'
import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

const Cards = ({ object }) => {
    const [favorites, setFavorites] = useState({})
    const trackRef = useRef(null)

    const toggleFav = (index) => {
        setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
    }

    const scroll = (dir) => {
        const track = trackRef.current
        const cardWidth = track.children[0].offsetWidth + 20
        track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
    }

    return (
        <div className="relative">

            {/* Left Arrow */}
            <button
                onClick={() => scroll(-1)}
                className="absolute -left-6 top-[45%] -translate-y-1/2 z-10
                           w-10 h-10 bg-white border-2 border-gray-100
                           flex items-center justify-center
                           hover:bg-green-800 hover:border-green-800
                           group transition-all duration-300 cursor-pointer"
            >
                <IoChevronBackOutline className="text-gray-400 text-[16px]
                                                  group-hover:text-white" />
            </button>

            {/* Track */}
            <div ref={trackRef} className="overflow-x-hidden">
                <div className="flex gap-5">
                    {object.map((item, index) => (
                        <div
                            key={index}
                            style={{ minWidth: 'calc(20% - 16px)' }}
                            className="bg-white overflow-hidden flex-shrink-0 rounded-2xl
                                       border border-gray-300
                                       hover:border-[#d1c400]/40 hover:shadow-lg
                                       hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-[220px] overflow-hidden bg-gray-50">
                                <img
                                    src={item.img}
                                    alt={item.pname}
                                    className="w-full h-full object-cover
                                               group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Badge */}
                                {item.badge && (
                                    <span className="absolute top-3 left-3 bg-[#d1c400] text-black
                                                     text-[10px] font-raleway font-semibold
                                                     tracking-widest uppercase px-2 py-1">
                                        {item.badge}
                                    </span>
                                )}

                                {/* Favorite button on image */}
                                <button
                                    onClick={() => toggleFav(index)}
                                    className="absolute top-3 right-3 w-8 h-8
                                               bg-white/90 flex items-center justify-center
                                               hover:bg-white transition-all duration-200
                                               border border-gray-100"
                                >
                                    {favorites[index]
                                        ? <FaHeart className='text-red-500 text-[13px]' />
                                        : <FiHeart className='text-gray-400 text-[13px]' />
                                    }
                                </button>
                            </div>

                            {/* Body */}
                            {/* Body */}
                            <div className="p-4 flex flex-col gap-1">
                                <h4 className="font-cinzel text-[13px] font-semibold
                   text-gray-800 group-hover:text-green-900
                   transition-all duration-300">
                                    {item.pname}
                                </h4>
                                <p className="font-cinzel text-[12px] font-bold text-green-900">
                                    {item.price}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-2 mt-1">
                                    <button className="flex-1 py-1.5 bg-green-800 text-white
                           font-raleway text-[10px] tracking-widest uppercase
                           border-2 border-green-800 rounded-[8px]
                           hover:bg-transparent hover:text-[#d1c400]
                           hover:border-[#d1c400]
                           transition-all duration-300 flex items-center
                           justify-center gap-1">
                                        <MdOutlineShoppingCart className='text-[13px]' />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => toggleFav(index)}
                                        className={`w-8 h-8 border-2 flex items-center justify-center
                        flex-shrink-0 transition-all duration-200
                        ${favorites[index]
                                                ? 'border-red-300 bg-red-50'
                                                : 'border-gray-100 hover:border-[#d1c400]'
                                            }`}
                                    >
                                        {favorites[index]
                                            ? <FaHeart className='text-red-500 text-[12px]' />
                                            : <FiHeart className='text-gray-400 text-[12px]' />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll(1)}
                className="absolute -right-6 top-[45%] -translate-y-1/2 z-10
                           w-10 h-10 bg-white border-2 border-gray-100
                           flex items-center justify-center
                           hover:bg-green-800 hover:border-green-800
                           group transition-all duration-300 cursor-pointer"
            >
                <IoChevronForwardOutline className="text-gray-400 text-[16px]
                                                     group-hover:text-white" />
            </button>

        </div>
    )
}

export default Cards