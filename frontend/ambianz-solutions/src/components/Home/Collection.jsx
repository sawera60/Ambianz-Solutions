
// import React from 'react'
// import lamp from "../../images/lamp.png"
// import sofas from "../../images/sofas.png"
// import wardrobe from "../../images/wardrobe.png"
// import officefurniture from "../../images/officefurniture.png"
// import planters from "../../images/planters.png"
// import ledconsole from "../../images/ledconsole.png"

// const Collection = () => {
//     const collection = [
//         { coverimg: lamp, pname: "Lighting" },
//         { coverimg: sofas, pname: "Sofas" },
//         { coverimg: wardrobe, pname: "Wardrobe" },
//         { coverimg: officefurniture, pname: "Office Furniture" },
//         { coverimg: planters, pname: "Planters" },
//         { coverimg: wardrobe, pname: "Hardware" },
//         { coverimg: lamp, pname: "Mirrors" },
//         { coverimg: ledconsole, pname: "LED Console" },
//     ]

//     return (
//         <div className='py-10 px-10 bg-white'>

//             {/* Heading */}
//             <div className='flex items-center justify-center gap-3 mb-2'>
//                 <div className='h-[1px] w-[40px] bg-[#d1c400]' />
//                 <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                     Browse
//                 </span>
//                 <div className='h-[1px] w-[40px] bg-[#d1c400]' />
//             </div>

//             <h3 className='font-cinzel text-[28px] font-bold text-center mb-2
//                            text-gray-900 tracking-wide'>
//                 Our Collection
//             </h3>
//             <p className='font-raleway text-center text-gray-400 text-[13px] mb-8'>
//                 Explore our curated categories
//             </p>

//             {/* Grid */}
//             <div className='grid grid-cols-4 gap-6'>
//                 {collection.map((item, index) => (
//                     <div key={index}
//                          className='flex flex-col items-center gap-3 group cursor-pointer'>

//                         {/* Image — bigger + shadow on hover instead of border */}
//                         <div className='w-[160px] h-[160px] rounded-full overflow-hidden
//                                         shadow-md group-hover:shadow-[0_8px_30px_rgba(60,90,37,0.25)]
//                                         transition-all duration-300'>
//                             <img
//                                 src={item.coverimg}
//                                 alt={item.pname}
//                                 className='w-full h-full object-cover
//                                            group-hover:scale-110 transition-all duration-500'
//                             />
//                         </div>

//                         {/* Name — bigger and darker */}
//                         <p className='font-cinzel text-[14px] font-bold text-gray-800
//                                       group-hover:text-green-900 transition-all duration-300
//                                       tracking-wide text-center'>
//                             {item.pname}
//                         </p>

//                     </div>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default Collection

import React from 'react'
import lamp from "../../images/lamp.png"
import sofas from "../../images/sofas.png"
import wardrobe from "../../images/wardrobe.png"
import officefurniture from "../../images/officefurniture.png"
import planters from "../../images/planters.png"
import ledconsole from "../../images/ledconsole.png"



const Collection = () => {
    const collection = [
        { coverimg: lamp, pname: "Lighting" },
        { coverimg: sofas, pname: "Sofas" },
        { coverimg: wardrobe, pname: "Wardrobe" },
        { coverimg: officefurniture, pname: "Office Furniture" },
        { coverimg: planters, pname: "Planters" },
        { coverimg: wardrobe, pname: "Hardware" },
        { coverimg: lamp, pname: "Mirrors" },
        { coverimg: ledconsole, pname: "LED Console" },
    ]

    return (
        <div className='py-16 px-10 bg-white'>

            {/* Heading Section - Tightened up */}
            <div className='text-center mb-12'>
                <div className='flex items-center justify-center gap-3 mb-3'>
                    <div className='h-[1px] w-[30px] bg-[#d1c400]' />
                    <span className='font-raleway text-[10px] text-[#d1c400] tracking-[5px] uppercase font-bold'>
                        Explore Spaces
                    </span>
                    <div className='h-[1px] w-[30px] bg-[#d1c400]' />
                </div>

                <h3 className='font-cinzel text-[32px] font-bold text-gray-900 tracking-[2px] uppercase'>
                    Our Collection
                </h3>
                <div className="w-10 h-[2px] bg-gray-200 mx-auto mt-4" />
            </div>

            {/* Grid - Switched to 4 cols with better spacing */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-6xl mx-auto'>
                {collection.map((item, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center group cursor-pointer'
                    >

                        {/* Image Container with Floating Ring Effect */}
                        <div className='relative w-[200px] h-[200px] mb-5'>
                            {/* The "Wow" Ring - Appears on hover */}
                            <div className='absolute inset-[-8px] border border-[#d1c400] rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500' />

                            {/* Main Image Circle */}
                            <div className='w-full h-full rounded-full overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 z-10 relative bg-[#f8f8f8]'>
                                <img
                                    src={item.coverimg}
                                    alt={item.pname}
                                    className='w-full h-full object-contain p-5 group-hover:scale-110 group-hover:blur-[2px] transition-all duration-700'
                                />

                                {/* Subtle Overlay on hover */}
                                <div className='absolute inset-0 bg-black/40 rounded-full flex flex-col items-center justify-center
                                                opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                    <p className='font-raleway text-[11px] text-[#d1c400] tracking-[3px] uppercase mt-1'>
                                        View Gallery
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title - Always Visible */}
                        <h4 className='font-cinzel text-[14px] font-bold text-gray-800 tracking-[3px] uppercase text-center
                                       group-hover:text-green-900 transition-colors duration-300'>
                            {item.pname}
                        </h4>

                        {/* Animated Underline */}
                        <div className='h-[2px] w-[0px] bg-[#d1c400] mt-2 group-hover:w-[40px] transition-all duration-500' />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collection