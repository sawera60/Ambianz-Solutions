

// import React from 'react'
// import mediawall from "../../images/mediawall.jpg"
// import kitchendesign from "../../images/kitchendesign.jpg"
// import closet from "../../images/closet.jpg"

// const MiniServices = () => {
//     return (
//         <div className='py-10 px-10 bg-gray-100'>

//             {/* Heading */}

//             <div className='text-center mb-10'>
//                 <div className='flex items-center justify-center gap-3 mb-3'>
//                     <div className='h-[1px] w-[40px] bg-[#d1c400]' />
//                     <span className='font-raleway text-[11px] text-[#d1c400]
//                          tracking-[4px] uppercase'>
//                         Our Expertise
//                     </span>
//                     <div className='h-[1px] w-[40px] bg-[#d1c400]' />
//                 </div>
//                 <h4 className='font-cinzel text-[28px] font-bold
//                    text-black'>
//                     Explore Our Services
//                 </h4>
//                 <p className='font-raleway text-gray-400 text-[13px] mt-2'>
//                     Bespoke design solutions tailored for your lifestyle
//                 </p>
//             </div>

//             {/* Cards Grid */}
//             <div className='flex gap-4 h-[500px]'>

//                 {/* LEFT — Big Kitchen Card */}
//                 <div className='relative w-1/2 overflow-hidden group cursor-pointer'>
//                     <img
//                         src={kitchendesign}
//                         alt="Kitchen Design"
//                         className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//                     />
//                     <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
//                     <div className='absolute bottom-0 left-0 p-8 flex flex-col gap-3'>
//                         <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                             Featured Service
//                         </span>
//                         <h3 className='font-cinzel text-[26px] font-bold text-white leading-tight'>
//                             Modern Kitchen
//                         </h3>
//                         <p className='font-raleway text-[13px] text-white/60 max-w-[280px]'>
//                             Best kitchens with modern facility and premium finishing
//                         </p>
//                         <div className='flex gap-3 mt-2'>
//                             <button className='font-raleway px-5 py-2 bg-green-800 text-white
//                                                text-[12px] font-semibold border-2 border-green-800
//                                                hover:bg-transparent hover:text-[#d1c400]
//                                                hover:border-[#d1c400] transition-all duration-300'>
//                                 Request Quote
//                             </button>
//                             <button className='font-raleway px-5 py-2 bg-transparent text-white
//                                                text-[12px] font-semibold border-2 border-transparent
//                                                hover:text-[#d1c400] hover:border-[#d1c400]
//                                                transition-all duration-300'>
//                                 View 3D Designs →
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT — Two Stacked Cards */}
//                 <div className='flex flex-col gap-4 w-1/2'>

//                     {/* Wardrobe */}
//                     <div className='relative h-1/2 overflow-hidden group cursor-pointer'>
//                         <img
//                             src={closet}
//                             alt="Wardrobe"
//                             className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//                         />
//                         <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
//                         <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
//                             <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                                 Bespoke
//                             </span>
//                             <h3 className='font-cinzel text-[18px] font-bold text-white'>
//                                 Wardrobes
//                             </h3>
//                             <p className='font-raleway text-[12px] text-white/60'>
//                                 Tailored organizational luxury
//                             </p>
//                             <div className='flex gap-3 mt-1'>
//                                 <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
//                                                    text-[11px] font-semibold border-2 border-green-800
//                                                    hover:bg-transparent hover:text-[#d1c400]
//                                                    hover:border-[#d1c400] transition-all duration-300'>
//                                     Request Quote
//                                 </button>
//                                 <button className='font-raleway px-4 py-1.5 bg-transparent text-white
//                                                    text-[11px] font-semibold border-2 border-transparent
//                                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                                    transition-all duration-300'>
//                                     View Designs →
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Media Wall */}
//                     <div className='relative h-1/2 overflow-hidden group cursor-pointer'>
//                         <img
//                             src={mediawall}
//                             alt="Media Wall"
//                             className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//                         />
//                         <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
//                         <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-2'>
//                             <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                                 Statement
//                             </span>
//                             <h3 className='font-cinzel text-[18px] font-bold text-white'>
//                                 Media Walls
//                             </h3>
//                             <p className='font-raleway text-[12px] text-white/60'>
//                                 Stunning entertainment focal points
//                             </p>
//                             <div className='flex gap-3 mt-1'>
//                                 <button className='font-raleway px-4 py-1.5 bg-green-800 text-white
//                                                    text-[11px] font-semibold border-2 border-green-800
//                                                    hover:bg-transparent hover:text-[#d1c400]
//                                                    hover:border-[#d1c400] transition-all duration-300'>
//                                     Request Quote
//                                 </button>
//                                 <button className='font-raleway px-4 py-1.5 bg-transparent text-white
//                                                    text-[11px] font-semibold border-2 border-transparent
//                                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                                    transition-all duration-300'>
//                                     View Designs →
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default MiniServices


// import React from 'react'

// const MiniServices = () => {
//     return (
//         <div className='py-12 px-11 bg-[#F8F6F1]'>

//             {/* Header */}
//             <div className='flex items-start justify-between mb-5'>
//                 <div>
//                     <h2 className='font-cinzel text-[28px] font-bold text-[#1A1C19] leading-[1.2] mb-2'>
//                         Our Bespoke<br />Specializations
//                     </h2>
//                     <p className='font-raleway text-[12px] text-[#777] leading-[1.7] max-w-[300px]'>
//                         Every space is a dialogue between instinct and grace. We craft interiors
//                         not simply as decor, but as the architecture of your personal sanctuary.
//                     </p>
//                 </div>
//                 <span className='font-raleway text-[9px] tracking-[3px] uppercase text-[#adb940] font-medium pt-1'>
//                     Explore More
//                 </span>
//             </div>

{/* Row 1 — Images */ }
{/* <div className='grid gap-[10px]' style={{ gridTemplateColumns: '1.35fr 1fr' }}>
                <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop"
                    alt="Kitchen"
                    className='w-full h-[280px] object-cover block'
                />
                <img
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&fit=crop"
                    alt="Wardrobe"
                    className='w-full h-[280px] object-cover block'
                />
            </div> */}

{/* Row 2 — Text under images */ }
{/* <div className='grid gap-[10px] mb-5' style={{ gridTemplateColumns: '1.35fr 1fr' }}>

               
                <div className='pt-4 pr-4'>
                    <span className='font-raleway text-[9px] text-[#adb940] tracking-[4px] uppercase font-medium block mb-2'>
                        01 — Kitchens
                    </span>
                    <h3 className='font-cinzel text-[22px] font-bold text-[#1A1C19] mb-2'>Kitchens</h3>
                    <p className='font-raleway text-[12px] text-[#777] leading-[1.7] max-w-[280px] mb-3'>
                        Where precision meets warmth. Engineered to perfection, designed to perform.
                        Every detail crafted for modern living.
                    </p>
                    <span className='font-raleway text-[9px] tracking-[2px] uppercase text-[#3c5a25] font-semibold
                                     border-b border-[#3c5a25] pb-[2px] cursor-pointer'>
                        Explore Collection
                    </span>
                </div> */}

{/* Quote */ }
{/* <div className='pt-4 pl-4 flex items-center'>
                    <p className='font-cinzel text-[13px] italic text-[#555] leading-[1.7]'>
                        "The closet should be a gallery for your personal history."
                    </p>
                </div>
            </div> */}

{/* Row 3 — Media Wall full width image */ }
{/* <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&fit=crop"
                alt="Media Wall"
                className='w-full h-[220px] object-cover block'
            /> */}

{/* Row 3 — Media Wall text */ }
{/* <div className='pt-4'>
                <span className='font-raleway text-[9px] text-[#adb940] tracking-[4px] uppercase font-medium block mb-2'>
                    03 — Media Walls
                </span>
                <h3 className='font-cinzel text-[22px] font-bold text-[#1A1C19] mb-2'>Media Walls</h3>
                <p className='font-raleway text-[12px] text-[#777] leading-[1.7] max-w-[480px] mb-4'>
                    A thoughtful arrangement of elements working in unison to forge a cinematic
                    centerpiece within a seamless and timeless setting.
                </p>
                <button className='font-raleway text-[9px] tracking-[2px] uppercase bg-[#1A1C19]
                                   text-white px-5 py-[9px] font-medium border-none cursor-pointer'>
                    Explore Now
                </button>
            </div> */}

//         </div>
//     )
// }

// export default MiniServices

import React from 'react'
import displaykitchen from "../../images/displaykitchen.png"
import displaywardrobe from "../../images/displaywardrobe.png"
import displaymediawall from "../../images/displaymediawall.png"
//bg-[#F8F6F1]
const MiniServices = () => {
    return (
        <div className='py-10 px-11 bg-gray-100'>

            {/* Header — keep your existing one above this, remove h2 from here */}
            <div className='flex items-start justify-between mb-6'>
                <div>
                    <h2 className='font-cinzel text-[28px] font-bold text-[#1A1C19] leading-[1.2] mb-2'>
                        Our Bespoke Specializations
                    </h2>
                    <p className='font-raleway text-[12px] text-[#777] leading-[1.7] max-w-[300px]'>
                        We craft interiors
                        not simply as decor, but as the architecture of your personal sanctuary.
                    </p>
                </div>
                <span className='font-raleway text-[9px] tracking-[3px] uppercase text-[#adb940] font-medium pt-1'>
                    Explore More
                </span>
            </div>

            {/* Grid Layout */}
            <div className='grid gap-4' style={{ gridTemplateColumns: '1.2fr 1fr', alignItems: 'start' }}>

                {/* LEFT — Kitchen */}
                <div className='flex flex-col'>
                    <img
                        src={displaykitchen}
                        alt="Bespoke Kitchen"
                        className='w-full h-[450px] object-cover block'
                    />
                    <div className='pt-3'>
                        <span className='font-raleway text-[9px] tracking-[3px] uppercase text-[#adb940] font-medium block mb-1'>
                            Luxury Craftsmanship
                        </span>
                        <h3 className='font-cinzel text-[18px] font-semibold text-[#1A1C19]'>
                            Bespoke Kitchens
                        </h3>
                    </div>
                    {/* Quote */}
                    <div className='mt-5 border-l-2 border-[#d1c400] pl-4'>
                        <p className='font-cinzel text-[13px] italic text-[#565853] leading-[1.75]'>
                            "A kitchen is not just a room — it is the heart of the home,
                            where every meal becomes a memory worth keeping."
                        </p>
                    </div>
                </div>

                {/* RIGHT — Wardrobe + Media Wall */}
                <div className='flex flex-col gap-4'>

                    {/* Wardrobe */}
                    <div>
                        <img
                            src={displaywardrobe}
                            alt="Wardrobes"
                            className='w-full h-[280px] object-cover block'
                        />
                        <div className='pt-3'>
                            <h3 className='font-cinzel text-[15px] font-semibold text-[#1A1C19] mb-1'>
                                Wardrobes
                            </h3>
                            <p className='font-raleway text-[11px] text-[#888] leading-[1.65] max-w-[240px]'>
                                Precision-engineered storage systems designed for the contemporary wardrobe.
                            </p>
                        </div>
                    </div>

                    {/* Media Wall */}
                    <div>
                        <img
                            src={displaymediawall}
                            alt="Media Walls"
                            className='w-full h-[280px] object-cover block'
                        />
                        <div className='pt-3'>
                            <h3 className='font-cinzel text-[15px] font-semibold text-[#1A1C19] mb-1'>
                                Media Walls
                            </h3>
                            <p className='font-raleway text-[11px] text-[#888] leading-[1.65] max-w-[240px]'>
                                The cinematic experience, seamlessly integrated into your home's architecture.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MiniServices