import React from 'react'

const Cards = ({ object }) => {
    return (

        <>
            <div className='flex flex-wrap gap-6 justify-center'>
                {object.map((item, index) => (
                    <div key={index}
                        className='flex flex-col bg-white rounded-sm shadow-lg overflow-hidden
                        w-[260px] group cursor-pointer
                        hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                        transition-all duration-300'>

                        {/* Image */}
                        <div className='overflow-hidden h-[220px]'>
                            <img
                                src={item.img}
                                alt={item.pname}
                                className='w-full h-full object-cover
                         group-hover:scale-105 transition-all duration-500'
                            />
                        </div>

                        {/* Info */}
                        <div className='p-4 flex flex-col gap-2'>
                            <h4 className='font-cinzel text-[16px] font-semibold text-green-900'>
                                {item.pname}
                            </h4>
                            <p className='font-raleway text-[14px] text-gray-500'>
                                {item.price}
                            </p>

                            {/* Add to Cart Button */}
                            <button className='font-raleway mt-2 py-2 bg-green-800 text-white
                               text-[13px] font-semibold border-2 border-green-800
                               hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                               transition-all duration-300'>
                                Add to Cart
                            </button>
                        </div>

                    </div>
                    


                ))}
            </div>


        </>
    )
}

export default Cards