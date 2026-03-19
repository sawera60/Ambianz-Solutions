import React from 'react'

const CTAbanner = () => {
    return (
        <div className='relative py-24 px-10 overflow-hidden bg-white'>

            {/* Decorative top line */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
                            bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

            {/* Decorative corner accents */}
            <div className='absolute top-8 left-8 w-[60px] h-[60px]
                            border-t-2 border-l-2 border-[#d1c400]/30' />
            <div className='absolute bottom-8 right-8 w-[60px] h-[60px]
                            border-b-2 border-r-2 border-[#d1c400]/30' />

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center text-center gap-6'>

                {/* Label */}
                <div className='flex items-center gap-3'>
                    <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                        Get Started
                    </span>
                    <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                </div>

                {/* Main Heading */}
                <h2 className='font-cinzel text-[52px] font-bold leading-tight max-w-[700px]
                               bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                               bg-clip-text text-transparent'>
                    Ready to Transform Your Space?
                </h2>

                {/* Subtext */}
                <p className='font-raleway text-[15px] text-gray-500 max-w-[520px] leading-relaxed'>
                    Let's bring your vision to life. Book a free consultation with our
                    expert designers and get a 3D preview of your dream space — completely free.
                </p>

                {/* CTA Buttons */}
                <div className='flex gap-4 mt-4'>
                    <button className='font-cinzel px-10 py-4 bg-green-800 text-white
                                       text-[13px] tracking-widest uppercase border-2 border-green-800
                                       hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                                       transition-all duration-300 cursor-pointer relative group overflow-hidden'>
                        <span className='absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]
                                         bg-gradient-to-r from-transparent via-white/10 to-transparent
                                         transition-all duration-500' />
                        Request a Quote
                    </button>

                    <button className='font-cinzel px-10 py-4 bg-transparent text-gray-400
                                       text-[13px] tracking-widest uppercase border-2 border-transparent
                                       hover:text-[#d1c400] hover:border-[#d1c400]
                                       transition-all duration-300 cursor-pointer'>
                        View Our Work →
                    </button>
                </div>

                {/* Trust line */}
                <p className='font-raleway text-[12px] text-gray-300 tracking-widest mt-2'>
                    FREE CONSULTATION · NO COMMITMENT · 3D PREVIEW INCLUDED
                </p>

            </div>

            {/* Decorative bottom line */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
                            bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

        </div>
    )
}

export default CTAbanner