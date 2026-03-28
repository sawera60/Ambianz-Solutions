import React from 'react'
import { MdEmail } from "react-icons/md"

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
            <div className='relative z-10 flex flex-col items-center text-center gap-5
                            max-w-[580px] mx-auto'>

                {/* Icon */}
                <div className='w-[50px] h-[45px] border-2 border-[#d1c400]/40
                                flex items-center justify-center'>
                    <MdEmail className='text-[24px] text-[#d1c400]' />
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
                <h2 className='font-cinzel text-[28px] text-bold text-gray-800 leading-tight'>
                    Join Newsletter
                </h2>

                {/* Subtext */}
                <p className='font-raleway text-[13px] text-gray-600 leading-relaxed'>
                    Get exclusive access to new collections, design inspiration and
                    special offers straight to your inbox.
                </p>

                {/* Input + Button */}
                <div className='flex w-full mt-2 border-2
                                hover:border-[#d1c400]/40 transition-all duration-300'>
                    <div className='flex items-center gap-3 flex-1 bg-white/5 px-4'>
                        <MdEmail className='text-[16px] text-[#d1c400] shrink-0' />
                        <input
                            type="email"
                            placeholder='Enter your email address'
                            className='bg-transparent font-raleway text-[12px]
                                       placeholder:text-gray-800 outline-none w-full py-4'
                        />
                    </div>
                    <button className='font-cinzel px-4 py-2 bg-green-800 text-white
                                       text-[10px] tracking-widest uppercase shrink-0
                                       hover:bg-white hover:text-[#d1c400]
                                       transition-all duration-300 cursor-pointer'>
                        Subscribe
                    </button>
                </div>

                {/* Trust line */}
                {/* <p className='font-raleway text-[11px] text-gray-800 tracking-widest'>
                    NO SPAM · UNSUBSCRIBE ANYTIME · EXCLUSIVE MEMBERS ONLY
                </p> */}

            </div>

            {/* Decorative bottom line */}
            {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
                            bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' /> */}

        </div>
    )
}

export default Newsletter