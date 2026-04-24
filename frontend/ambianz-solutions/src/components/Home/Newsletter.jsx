import React from 'react'
import { MdEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

const Newsletter = () => {
    return (
        <div className='relative py-10 px-6 bg-white overflow-hidden'>

            {/* Background glow blobs */}
            <div className='absolute top-0 left-0 w-[400px] h-[400px] rounded-full
                            blur-[120px] pointer-events-none' />
            <div className='absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
                            blur-[120px] pointer-events-none' />

            {/* Decorative top line */}
            {/* <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
                            bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' /> */}

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center text-center gap-4
                            max-w-[680px] mx-auto'>

                {/* Icon */}
                <div className='w-[45px] h-[40px] border-2 border-[#d1c400]/40
                                flex items-center justify-center'>
                    <MdEmail className='text-[20px] text-[#d1c400]' />
                </div>

                {/* Label */}
                <div className='flex items-center gap-3'>
                    <div className='h-[1px] w-[40px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                    <span className='font-raleway text-[10px] text-[#d1c400] tracking-[4px] uppercase'>
                        Stay Updated
                    </span>
                    <div className='h-[1px] w-[40px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                </div>

                {/* Heading */}
                <h2 className='font-cinzel text-[26px] font-bold text-gray-800 leading-tight'>
                    Stay in the Loop
                </h2>

                {/* Subtext */}
                <p className='font-raleway text-[13px] text-gray-400 leading-relaxed'>
                    Get exclusive access to new collections, design inspiration and
                    special offers — straight to your inbox or phone.
                </p>

                {/* Inputs — Side by Side */}
                <div className='flex gap-3 w-full mt-1'>

                    {/* Email */}
                    <div className='flex items-center gap-2 flex-1 border border-gray-200
                                    hover:border-[#d1c400]/40 transition-all duration-300 px-3'>
                        <MdEmail className='text-[14px] text-[#d1c400] shrink-0' />
                        <input
                            type="email"
                            placeholder='Email address'
                            className='bg-transparent font-raleway text-[12px]
                                       placeholder:text-gray-400 outline-none w-full py-2.5'
                        />
                    </div>

                    {/* Phone */}
                    <div className='flex items-center gap-2 flex-1 border border-gray-200
                                    hover:border-[#d1c400]/40 transition-all duration-300 px-3'>
                        <BsTelephone className='text-[12px] text-[#d1c400] shrink-0' />
                        <input
                            type="tel"
                            placeholder='Phone number'
                            className='bg-transparent font-raleway text-[12px]
                                       placeholder:text-gray-400 outline-none w-full py-2.5'
                        />
                    </div>

                    {/* Subscribe Button */}
                    <button className='font-cinzel px-5 py-2.5 bg-green-800 text-white
                                       text-[10px] tracking-widest uppercase shrink-0
                                       hover:bg-transparent hover:text-[#d1c400]
                                       hover:border-[#d1c400] border border-green-800
                                       transition-all duration-300 cursor-pointer'>
                        Subscribe
                    </button>
                </div>

            </div>

            {/* Decorative bottom line */}
            {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
                            bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' /> */}

        </div>
    )
}

export default Newsletter