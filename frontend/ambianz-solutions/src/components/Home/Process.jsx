import React from 'react'
import kitchen from "../../images/kitchen.jpg"

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Initial Consultation",
            desc: "One-on-one call to understand your vision and requirements"
        },
        {
            number: "02",
            title: "Onsite Measurement",
            desc: "Precise measurement and assessment by our expert designers"
        },
        {
            number: "03",
            title: "3D Design",
            desc: "Visualize your space before implementation with our 3D renders"
        },
        {
            number: "04",
            title: "Execution & Installation",
            desc: "Professional installation handled with precision and care"
        },
    ]

    return (
        <div className='py-14 px-10 bg-white'>
            <div className="flex gap-12 items-center">

                {/* LEFT — Image */}
                <div className='w-1/2 h-[600px] rounded-sm overflow-hidden group'>
                    <img
                        src={kitchen}
                        alt="Our Process"
                        className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                    />
                </div>

                {/* RIGHT — Content */}
                <div className='w-1/2 flex flex-col gap-6'>

                    {/* Top Label */}
                    <span className='font-raleway text-[12px] text-[#d1c400] tracking-widest uppercase'>
                        Our Process
                    </span>

                    {/* Main Heading */}
                    <h2 className='font-cinzel text-[32px] font-bold text-green-900 leading-tight'>
                        Design to Installation <br />
                        <span className='bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                                         bg-clip-text text-transparent'>
                            Perfectly Handled
                        </span>
                    </h2>

                    {/* Description */}
                    <p className='font-raleway text-[14px] text-gray-500 leading-relaxed'>
                        We don't just sell products — we create environments. Our team of expert
                        designers and craftsmen work closely with you to bring your dream space
                        to life with precision and care.
                    </p>

                    {/* Steps */}
                    <div className='flex flex-col gap-5 mt-2'>
                        {steps.map((step, index) => (
                            <div key={index}
                                 className='flex gap-4 items-start group cursor-pointer'>

                                {/* Step Number */}
                                <span className='font-cinzel text-[28px] font-bold text-[#d1c400]/30
                                                 group-hover:text-[#d1c400] transition-all duration-300
                                                 leading-none'>
                                    {step.number}
                                </span>

                                {/* Step Content */}
                                <div className='flex flex-col gap-1 border-b border-gray-100 pb-4 w-full'>
                                    <h5 className='font-cinzel text-[15px] font-semibold text-green-900
                                                   group-hover:text-[#d1c400] transition-all duration-300'>
                                        {step.title}
                                    </h5>
                                    <p className='font-raleway text-[13px] text-gray-400'>
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex gap-4 mt-4'>
                        <button className='font-raleway px-6 py-2.5 bg-green-800 text-white
                                           text-[14px] font-semibold border-2 border-green-800
                                           hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                                           transition-all duration-300 cursor-pointer'>
                            Request Quote
                        </button>
                        <button className='font-raleway px-6 py-2.5 bg-transparent text-green-900
                                           text-[14px] font-semibold border-2 border-transparent
                                           hover:text-[#d1c400] hover:border-[#d1c400]
                                           transition-all duration-300 cursor-pointer'>
                            View Designs →
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Process
