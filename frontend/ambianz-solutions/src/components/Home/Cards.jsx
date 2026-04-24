
//**********Default Version****** */
// import React, { useState, useRef } from 'react'
// import { FiHeart } from "react-icons/fi"
// import { FaHeart } from "react-icons/fa"
// import { MdOutlineShoppingCart } from "react-icons/md"
// import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

// const Cards = ({ object }) => {
//     const [favorites, setFavorites] = useState({})
//     const trackRef = useRef(null)

//     const toggleFav = (index) => {
//         setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
//     }

//     const scroll = (dir) => {
//         const track = trackRef.current
//         const cardWidth = track.children[0].offsetWidth + 20
//         track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
//     }

//     return (
//         <div className="relative">

//             {/* Left Arrow */}
//             <button
//                 onClick={() => scroll(-1)}
//                 className="absolute -left-6 top-[45%] -translate-y-1/2 z-10
//                            w-10 h-10 bg-white border-2 border-gray-100
//                            flex items-center justify-center
//                            hover:bg-green-800 hover:border-green-800
//                            group transition-all duration-300 cursor-pointer"
//             >
//                 <IoChevronBackOutline className="text-gray-400 text-[16px]
//                                                   group-hover:text-white" />
//             </button>

//             {/* Track */}
//             <div ref={trackRef} className="overflow-x-hidden">
//                 <div className="flex gap-5">
//                     {object.map((item, index) => (
//                         <div
//                             key={index}
//                             style={{ minWidth: 'calc(20% - 16px)' }}
//                             className="bg-white overflow-hidden flex-shrink-0 rounded-2xl
//                                        border border-gray-300
//                                        hover:border-[#d1c400]/40 hover:shadow-lg
//                                        hover:-translate-y-1 transition-all duration-300 group"
//                         >
//                             {/* Image */}
//                             <div className="relative h-[220px] overflow-hidden bg-gray-50">
//                                 <img
//                                     src={item.img}
//                                     alt={item.pname}
//                                     className="w-full h-full object-cover
//                                                group-hover:scale-105 transition-all duration-500"
//                                 />

//                                 {/* Badge */}
//                                 {item.badge && (
//                                     <span className="absolute top-3 left-3 bg-[#d1c400] text-black
//                                                      text-[10px] font-raleway font-semibold
//                                                      tracking-widest uppercase px-2 py-1">
//                                         {item.badge}
//                                     </span>
//                                 )}

//                                 {/* Favorite button on image */}
//                                 <button
//                                     onClick={() => toggleFav(index)}
//                                     className="absolute top-3 right-3 w-8 h-8
//                                                bg-white/90 flex items-center justify-center
//                                                hover:bg-white transition-all duration-200
//                                                border border-gray-100"
//                                 >
//                                     {favorites[index]
//                                         ? <FaHeart className='text-red-500 text-[13px]' />
//                                         : <FiHeart className='text-gray-400 text-[13px]' />
//                                     }
//                                 </button>
//                             </div>

//                             {/* Body */}
//                             {/* Body */}
//                             <div className="p-4 flex flex-col gap-1">
//                                 <h4 className="font-cinzel text-[13px] font-semibold
//                    text-gray-800 group-hover:text-green-900
//                    transition-all duration-300">
//                                     {item.pname}
//                                 </h4>
//                                 <p className="font-cinzel text-[12px] font-bold text-green-900">
//                                     {item.price}
//                                 </p>

//                                 {/* Buttons */}
//                                 <div className="flex gap-2 mt-1">
//                                     <button className="flex-1 py-1.5 bg-green-800 text-white
//                            font-raleway text-[10px] tracking-widest uppercase
//                            border-2 border-green-800 rounded-[8px]
//                            hover:bg-transparent hover:text-[#d1c400]
//                            hover:border-[#d1c400]
//                            transition-all duration-300 flex items-center
//                            justify-center gap-1">
//                                         <MdOutlineShoppingCart className='text-[13px]' />
//                                         Add to Cart
//                                     </button>
//                                     <button
//                                         onClick={() => toggleFav(index)}
//                                         className={`w-8 h-8 border-2 flex items-center justify-center
//                         flex-shrink-0 transition-all duration-200
//                         ${favorites[index]
//                                                 ? 'border-red-300 bg-red-50'
//                                                 : 'border-gray-100 hover:border-[#d1c400]'
//                                             }`}
//                                     >
//                                         {favorites[index]
//                                             ? <FaHeart className='text-red-500 text-[12px]' />
//                                             : <FiHeart className='text-gray-400 text-[12px]' />
//                                         }
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Right Arrow */}
//             <button
//                 onClick={() => scroll(1)}
//                 className="absolute -right-6 top-[45%] -translate-y-1/2 z-10
//                            w-10 h-10 bg-white border-2 border-gray-100
//                            flex items-center justify-center
//                            hover:bg-green-800 hover:border-green-800
//                            group transition-all duration-300 cursor-pointer"
//             >
//                 <IoChevronForwardOutline className="text-gray-400 text-[16px]
//                                                      group-hover:text-white" />
//             </button>

//         </div>
//     )
// }

// export default Cards


//--------------- ****Framer Motion Code**********       *****Version 1***//
// import React, { useState, useRef } from 'react'
// import { FiHeart } from "react-icons/fi"
// import { FaHeart } from "react-icons/fa"
// import { MdOutlineShoppingCart } from "react-icons/md"
// import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
// import { motion } from 'framer-motion' // Added for the wow factor

// const Cards = ({ object }) => {
//     const [favorites, setFavorites] = useState({})
//     const trackRef = useRef(null)

//     const toggleFav = (index) => {
//         setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
//     }

//     const scroll = (dir) => {
//         const track = trackRef.current
//         const cardWidth = track.children[0].offsetWidth + 20
//         track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
//     }

//     // Animation settings for the cards
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1 }
//         }
//     }

//     const cardVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//     }

//     return (
//         <div className="relative group/arrows">
//             {/* Left Arrow - Hidden until hover */}
//             <button
//                 onClick={() => scroll(-1)}
//                 className="absolute -left-6 top-[45%] -translate-y-1/2 z-30
//                            w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200
//                            rounded-full flex items-center justify-center shadow-xl
//                            hover:bg-green-900 hover:border-green-900
//                            opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 cursor-pointer"
//             >
//                 <IoChevronBackOutline className="text-gray-600 text-[18px] group-hover:text-white" />
//             </button>

//             {/* Track */}
//             <div ref={trackRef} className="overflow-x-hidden scroll-smooth pb-10">
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                     className="flex gap-6"
//                 >
//                     {object.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             style={{ minWidth: 'calc(25% - 20px)' }} // Adjusted for better 4-card view
//                             className="bg-white overflow-hidden flex-shrink-0 rounded-xl
//                                        border border-gray-100 relative
//                                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
//                                        hover:-translate-y-2 transition-all duration-500 group"
//                         >
//                             {/* Image Container */}
//                             <div className="relative h-[280px] overflow-hidden bg-[#f9f9f9]">
//                                 <img
//                                     src={item.img}
//                                     alt={item.pname}
//                                     className="w-full h-full object-cover
//                                                group-hover:scale-110 transition-transform duration-700"
//                                 />

//                                 {/* Subtle Overlay on Hover */}
//                                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                                 {item.badge && (
//                                     <span className="absolute top-4 left-4 bg-[#d1c400] text-black
//                                                      text-[9px] font-raleway font-bold
//                                                      tracking-[2px] uppercase px-3 py-1.5 rounded-sm shadow-lg">
//                                         {item.badge}
//                                     </span>
//                                 )}

//                                 <button
//                                     onClick={() => toggleFav(index)}
//                                     className="absolute top-4 right-4 w-9 h-9
//                                                bg-white rounded-full flex items-center justify-center
//                                                shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
//                                 >
//                                     {favorites[index]
//                                         ? <FaHeart className='text-red-500 text-[14px]' />
//                                         : <FiHeart className='text-gray-400 text-[14px]' />
//                                     }
//                                 </button>

//                                 {/* Quick View / Hover Button */}
//                                 <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                                     <button className="w-full py-2.5 bg-white/90 backdrop-blur-sm text-green-900 font-cinzel text-[10px] font-bold tracking-widest uppercase shadow-lg hover:bg-green-900 hover:text-white transition-colors duration-300">
//                                         Quick View
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Body */}
//                             <div className="p-5 text-center">
//                                 <h4 className="font-cinzel text-[14px] tracking-wide font-bold text-gray-800">
//                                     {item.pname}
//                                 </h4>
//                                 <p className="font-raleway text-[13px] font-medium text-green-900 mt-1">
//                                     {item.price}
//                                 </p>

//                                 {/* Action Buttons */}
//                                 <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <button className="flex-1 py-2 bg-green-900 text-white
//                                                        font-raleway text-[10px] tracking-widest uppercase
//                                                        rounded-md hover:bg-[#d1c400] hover:text-black
//                                                        transition-all duration-300 flex items-center
//                                                        justify-center gap-2">
//                                         <MdOutlineShoppingCart className='text-[14px]' />
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>

//             {/* Right Arrow - Hidden until hover */}
//             <button
//                 onClick={() => scroll(1)}
//                 className="absolute -right-6 top-[45%] -translate-y-1/2 z-30
//                            w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200
//                            rounded-full flex items-center justify-center shadow-xl
//                            hover:bg-green-900 hover:border-green-900
//                            opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 cursor-pointer"
//             >
//                 <IoChevronForwardOutline className="text-gray-600 text-[18px] group-hover:text-white" />
//             </button>
//         </div>
//     )
// }

// export default Cards



//   **** Version 2 *******//
// import React, { useState, useRef } from 'react'
// import { FiHeart, FiShoppingBag, FiEye } from "react-icons/fi"
// import { FaHeart } from "react-icons/fa"
// import { motion } from 'framer-motion'

// const Cards = ({ object }) => {
//   const [favorites, setFavorites] = useState({})
//   const trackRef = useRef(null)

//   const toggleFav = (index) => {
//     setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
//   }

//   return (
//     <div className="py-12">
//       <div 
//         ref={trackRef} 
//         className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-10"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         {object.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="snap-start flex-shrink-0 group w-[260px]" // Smaller, consistent width
//           >
//             {/* Image Container */}
//             <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F9] rounded-sm transition-all duration-500 group-hover:shadow-xl">
//               <img
//                 src={item.img}
//                 alt={item.pname}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* Sophisticated Hover State */}
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
//                 <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <button className="flex-1 bg-white text-black py-2 text-[10px] font-raleway tracking-widest uppercase hover:bg-green-900 hover:text-white transition-colors flex items-center justify-center gap-2">
//                     <FiShoppingBag size={14} /> Add
//                   </button>
//                   <button className="w-10 bg-white/90 text-black flex items-center justify-center hover:bg-[#d1c400] transition-colors">
//                     <FiEye size={16} />
//                   </button>
//                 </div>
//               </div>

//               {/* Wishlist Button */}
//               <button
//                 onClick={(e) => { e.stopPropagation(); toggleFav(index); }}
//                 className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
//               >
//                 {favorites[index] ? <FaHeart className="text-red-500" /> : <FiHeart size={16} className="text-gray-600" />}
//               </button>

//               {/* Minimalist Badge */}
//               {item.badge && (
//                 <span className="absolute top-3 left-3 bg-green-900 text-white text-[8px] font-bold tracking-[2px] uppercase px-2 py-1">
//                   {item.badge}
//                 </span>
//               )}
//             </div>

//             {/* Content Section */}
//             <div className="mt-4 text-center">
//               <h4 className="font-cinzel text-[13px] font-bold text-gray-900 tracking-wider uppercase">
//                 {item.pname}
//               </h4>
//               <div className="h-[1px] w-8 bg-[#d1c400] mx-auto my-2 group-hover:w-12 transition-all duration-500" />
//               <p className="font-raleway text-[12px] text-gray-500 font-medium">
//                 {item.price}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Cards

import React, { useState, useRef } from 'react'
import { FiHeart, FiShoppingBag, FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"

const Cards = ({ object }) => {
  const [favorites, setFavorites] = useState({})
  const trackRef = useRef(null)

  const toggleFav = (index) => {
    setFavorites(prev => ({ ...prev, [index]: !prev[index] }))
  }

  // Slide Functionality
  const slide = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 300; // Adjust based on card width + gap
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="relative group/main pt-2 pb-10"> {/* Reduced top padding */}

      {/* Left Arrow */}
      <button
        onClick={() => slide('left')}
        className="absolute left-0 top-[40%] -translate-y-1/2 z-20 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover/main:opacity-100 transition-all duration-300 hover:bg-green-900 hover:text-white border border-gray-100"
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => slide('right')}
        className="absolute right-0 top-[40%] -translate-y-1/2 z-20 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover/main:opacity-100 transition-all duration-300 hover:bg-green-900 hover:text-white border border-gray-100"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Scrollable Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {object.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 group w-[280px]"
          >
            {/* Image Container */}
            <div className="relative aspect-[6/7] overflow-hidden bg-[#F9F9F9]  transition-all duration-500 group-hover:shadow-2xl border border-gray-100">
              <img
                src={item.img}
                alt={item.pname}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="flex-1 bg-white text-black py-2 text-[10px] font-raleway tracking-widest uppercase hover:bg-green-900 hover:text-white transition-colors flex items-center justify-center gap-2 rounded-lg">
                    <FiShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Wishlist */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleFav(index); }}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                {favorites[index] ? <FaHeart className="text-red-500" size={14} /> : <FiHeart size={14} className="text-gray-600" />}
              </button>

              {item.badge && (
                <span className="absolute top-3 left-3 bg-[#d1c400] text-black text-[8px] font-bold tracking-[2px] uppercase px-2 py-1 rounded-sm shadow-md">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="mt-4 text-center px-2">
              <h4 className="font-cinzel text-[13px] font-bold text-gray-900 tracking-wider uppercase truncate">
                {item.pname}
              </h4>
              <p className="font-raleway text-[14px] text-green-900 font-bold mt-1">
                {item.price}
              </p>
              {/* Gold decorative line */}
              <div className="h-[1.5px] w-0 bg-[#d1c400] mx-auto mt-2 group-hover:w-16 transition-all duration-500 opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards