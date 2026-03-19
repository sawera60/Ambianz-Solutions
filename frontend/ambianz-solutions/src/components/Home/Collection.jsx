import React from 'react'
import lamp from "../../images/lamp.png"
import sofas from "../../images/sofas.png"
import wardrobe from "../../images/wardrobe.jpg"
import officefurniture from "../../images/officefurniture.jpg"
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
        <div className='py-14 px-10 bg-white'>

            {/* Heading */}
            <h3 className='font-cinzel text-[28px] font-bold text-center mb-2
                           bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                           bg-clip-text text-transparent bg-amber-200'>
                Our Collection
            </h3>
            <p className='font-raleway text-center text-gray-400 text-[14px] mb-10'>
                Explore our curated categories
            </p>

            {/* Grid — 4 per row */}
            <div className='grid grid-cols-4 gap-8'>
                {collection.map((item, index) => (   // ✅ changed {} to () so it returns
                    <div key={index}
                         className='flex flex-col items-center gap-3 group cursor-pointer'>

                        {/* Rounded Image */}
                        <div className='w-[180px] h-[180px] rounded-full overflow-hidden
                                        border-4 border-transparent
                                        group-hover:border-[#d1c400]
                                        transition-all duration-300'>
                            <img
                                src={item.coverimg}   // ✅ changed coverimg to item.coverimg
                                alt={item.pname}
                                className='w-full h-full object-cover
                                           group-hover:scale-110 transition-all duration-500'
                            />
                        </div>

                        {/* Name */}
                        <p className='font-cinzel text-[14px] font-semibold text-green-900
                                      group-hover:text-[#d1c400] transition-all duration-300
                                      tracking-wide text-center'>
                            {item.pname}   {/* ✅ changed pname to item.pname */}
                        </p>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Collection