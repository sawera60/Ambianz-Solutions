// import React from 'react'
// import mediawall from "../../images/mediawall.jpg"
// import kitchendesign from "../../images/kitchendesign.jpg"
// import closet from "../../images/closet.jpg"

// const MiniServices = () => {
//   return (
//     <div className='py-14 px-10'>

//       {/* Heading */}
//       <h4 className='font-cinzel text-[28px] font-bold text-center mb-2
//                      bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
//                      bg-clip-text text-transparent'>
//         Explore Our Services
//       </h4>
//       <p className='font-raleway text-center text-black text-[14px] mb-10'>
//         Bespoke design solutions tailored for your lifestyle
//       </p>

//       {/* Cards Grid */}
//       <div className='flex gap-4 h-[600px]'>

//         {/* LEFT — Big Kitchen Card */}
//         <div className='relative w-1/2 rounded-sm overflow-hidden group cursor-pointer'>
//           <img
//             src={kitchendesign}
//             alt="Kitchen Design"
//             className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//           />

//           {/* Overlay */}
//           <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />

//           {/* Text Content */}
//           <div className='absolute bottom-0 left-0 p-8 flex flex-col gap-3'>
//             <span className='font-raleway text-[12px] text-[#d1c400] tracking-widest uppercase'>
//               Featured Service
//             </span>
//             <h3 className='font-cinzel text-[28px] font-bold text-white leading-tight'>
//               Modern Kitchen
//             </h3>
//             <p className='font-raleway text-[14px] text-white/70 max-w-[280px]'>
//               Best kitchens with modern facility and premium finishing
//             </p>

//             {/* CTA Buttons */}
//             <div className='flex gap-3 mt-2 flex-wrap'>
//               <button className='font-raleway px-5 py-2 bg-green-800 text-white
//                                  text-[13px] font-semibold border-2 border-green-800
//                                  hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
//                                  transition-all duration-300'>
//                 Request Quote
//               </button>
//               <button className='font-raleway px-5 py-2 bg-transparent text-white
//                                  text-[13px] font-semibold border-2 border-transparent
//                                  hover:text-[#d1c400] hover:border-[#d1c400]
//                                  transition-all duration-300'>
//                 View 3D Designs →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT — Two Stacked Cards */}
//         <div className='flex flex-col gap-4 w-1/2'>

//           {/* Top — Wardrobe Card */}
//           <div className='relative h-1/2 rounded-sm overflow-hidden group cursor-pointer'>
//             <img
//               src={closet}
//               alt="Wardrobe"
//               className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//             />

//             {/* Overlay */}
//             <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />

//             {/* Text Content */}
//             <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
//               <h3 className='font-cinzel text-[20px] font-bold text-white'>
//                 Bespoke Wardrobes
//               </h3>
//               <p className='font-raleway text-[13px] text-white/70'>
//                 Tailored organizational luxury
//               </p>
//               <div className='flex gap-3 mt-1'>
//                 <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
//                                    text-[12px] font-semibold border-2 border-green-800
//                                    hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300'>
//                   Request Quote
//                 </button>
//                 <button className='font-raleway px-4 py-1.5 bg-transparent text-white
//                                    text-[12px] font-semibold border-2 border-transparent
//                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300'>
//                   View Designs →
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom — Media Wall Card */}
//           <div className='relative h-1/2 rounded-sm overflow-hidden group cursor-pointer'>
//             <img
//               src={mediawall}
//               alt="Media Wall"
//               className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//             />

//             {/* Overlay */}
//             <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />

//             {/* Text Content */}
//             <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
//               <h3 className='font-cinzel text-[20px] font-bold text-white'>
//                 Media Walls
//               </h3>
//               <p className='font-raleway text-[13px] text-white/70'>
//                 Stunning entertainment focal points
//               </p>
//               <div className='flex gap-3 mt-1'>
//                 <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
//                                    text-[12px] font-semibold border-2 border-green-800
//                                    hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300'>
//                   Request Quote
//                 </button>
//                 <button className='font-raleway px-4 py-1.5 bg-transparent text-white
//                                    text-[12px] font-semibold border-2 border-transparent
//                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300'>
//                   View Designs →
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default MiniServices

import React from 'react'
import mediawall from "../../images/mediawall.jpg"
import kitchendesign from "../../images/kitchendesign.jpg"
import closet from "../../images/closet.jpg"

const MiniServices = () => {
    return (
        <div className='py-10 px-10 bg-gray-100'>

            {/* Heading */}

            <div className='text-center mb-10'>
                <div className='flex items-center justify-center gap-3 mb-3'>
                    <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400]
                         tracking-[4px] uppercase'>
                        Our Expertise
                    </span>
                    <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                </div>
                <h4 className='font-cinzel text-[28px] font-bold
                   text-black'>
                    Explore Our Services
                </h4>
                <p className='font-raleway text-gray-400 text-[13px] mt-2'>
                    Bespoke design solutions tailored for your lifestyle
                </p>
            </div>

            {/* Cards Grid */}
            <div className='flex gap-4 h-[500px]'>

                {/* LEFT — Big Kitchen Card */}
                <div className='relative w-1/2 overflow-hidden group cursor-pointer'>
                    <img
                        src={kitchendesign}
                        alt="Kitchen Design"
                        className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
                    <div className='absolute bottom-0 left-0 p-8 flex flex-col gap-3'>
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            Featured Service
                        </span>
                        <h3 className='font-cinzel text-[26px] font-bold text-white leading-tight'>
                            Modern Kitchen
                        </h3>
                        <p className='font-raleway text-[13px] text-white/60 max-w-[280px]'>
                            Best kitchens with modern facility and premium finishing
                        </p>
                        <div className='flex gap-3 mt-2'>
                            <button className='font-raleway px-5 py-2 bg-green-800 text-white
                                               text-[12px] font-semibold border-2 border-green-800
                                               hover:bg-transparent hover:text-[#d1c400]
                                               hover:border-[#d1c400] transition-all duration-300'>
                                Request Quote
                            </button>
                            <button className='font-raleway px-5 py-2 bg-transparent text-white
                                               text-[12px] font-semibold border-2 border-transparent
                                               hover:text-[#d1c400] hover:border-[#d1c400]
                                               transition-all duration-300'>
                                View 3D Designs →
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Two Stacked Cards */}
                <div className='flex flex-col gap-4 w-1/2'>

                    {/* Wardrobe */}
                    <div className='relative h-1/2 overflow-hidden group cursor-pointer'>
                        <img
                            src={closet}
                            alt="Wardrobe"
                            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
                        <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
                            <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                                Bespoke
                            </span>
                            <h3 className='font-cinzel text-[18px] font-bold text-white'>
                                Wardrobes
                            </h3>
                            <p className='font-raleway text-[12px] text-white/60'>
                                Tailored organizational luxury
                            </p>
                            <div className='flex gap-3 mt-1'>
                                <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
                                                   text-[11px] font-semibold border-2 border-green-800
                                                   hover:bg-transparent hover:text-[#d1c400]
                                                   hover:border-[#d1c400] transition-all duration-300'>
                                    Request Quote
                                </button>
                                <button className='font-raleway px-4 py-1.5 bg-transparent text-white
                                                   text-[11px] font-semibold border-2 border-transparent
                                                   hover:text-[#d1c400] hover:border-[#d1c400]
                                                   transition-all duration-300'>
                                    View Designs →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Media Wall */}
                    <div className='relative h-1/2 overflow-hidden group cursor-pointer'>
                        <img
                            src={mediawall}
                            alt="Media Wall"
                            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
                        <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
                            <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                                Statement
                            </span>
                            <h3 className='font-cinzel text-[18px] font-bold text-white'>
                                Media Walls
                            </h3>
                            <p className='font-raleway text-[12px] text-white/60'>
                                Stunning entertainment focal points
                            </p>
                            <div className='flex gap-3 mt-1'>
                                <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
                                                   text-[11px] font-semibold border-2 border-green-800
                                                   hover:bg-transparent hover:text-[#d1c400]
                                                   hover:border-[#d1c400] transition-all duration-300'>
                                    Request Quote
                                </button>
                                <button className='font-raleway px-4 py-1.5 bg-transparent text-white
                                                   text-[11px] font-semibold border-2 border-transparent
                                                   hover:text-[#d1c400] hover:border-[#d1c400]
                                                   transition-all duration-300'>
                                    View Designs →
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MiniServices
