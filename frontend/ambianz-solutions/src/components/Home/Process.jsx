import React from 'react'

import kitchen from "../../images/kitchen.jpg"
import { BsChatDots } from "react-icons/bs"
import { TbRulerMeasure } from "react-icons/tb"
import { MdOutlineDesignServices } from "react-icons/md"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineHandyman } from "react-icons/md"

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Initial Consultation",
            desc: "One-on-one call to understand your vision and requirements",
            icon: <BsChatDots className='text-[18px]' />
        },
        {
            number: "02",
            title: "Onsite Measurement",
            desc: "Precise measurement by our expert designers",
            icon: <TbRulerMeasure className='text-[18px]' />
        },
        {
            number: "03",
            title: "3D Design",
            desc: "Visualize your space before anything is built",
            icon: <MdOutlineDesignServices className='text-[18px]' />
        },
        {
            number: "04",
            title: "Final Client Call",
            desc: "Final discussion about design and project details",
            icon: <IoCallOutline className='text-[18px]' />
        },
        {
            number: "05",
            title: "Execution & Installation",
            desc: "Professional installation with precision and care",
            icon: <MdOutlineHandyman className='text-[18px]' />
        },
    ]

    return (
        <div className='py-14 px-10 bg-gray-100'>
            <div
                className="flex gap-10 items-stretch max-w-7xl mx-auto"
            >

                {/* LEFT — Image */}
                <div className='w-1/2 overflow-hidden group shrink-0'>
                    <img
                        src={kitchen}
                        alt="Our Process"
                        className='w-full h-full object-cover group-hover:scale-105
                                   transition-all duration-700'
                    />
                </div>

                {/* RIGHT — Content */}
                <div className='w-1/2 flex flex-col justify-center py-4'>

                    {/* Label */}
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            Our Process
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className='font-cinzel text-[26px] font-bold text-green-900 leading-tight mb-3'>
                        Design to Installation
                    </h2>

                    {/* Description */}
                    <p className='font-raleway text-[13px] text-gray-400 leading-relaxed mb-5'>
                        We don't just sell products — we create environments. Our designers
                        and craftsmen work closely with you to bring your dream space to life.
                    </p>

                    {/* Steps */}
                    <div className='flex flex-col'>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-4 group cursor-pointer
                                           py-3 border-b border-gray-200 last:border-0
                                           hover:bg-white/60 hover:px-3 transition-all duration-300'
                            >

                                {/* Icon */}
                                <div className='w-[36px] h-[36px] flex items-center justify-center
                                                shrink-0 border border-gray-200 bg-white
                                                text-gray-400 group-hover:border-[#d1c400]
                                                group-hover:text-[#d1c400]
                                                transition-all duration-300'>
                                    {step.icon}
                                </div>

                                {/* Number */}
                                <span className='font-cinzel text-[13px] font-bold text-[#d1c400]/30
                                                 group-hover:text-[#d1c400] transition-all duration-300
                                                 shrink-0 w-[24px]'>
                                    {step.number}
                                </span>

                                {/* Text */}
                                <div className='flex flex-col gap-0.5'>
                                    <h5 className='font-cinzel text-[14px] font-semibold text-green-900
                                                   group-hover:text-[#d1c400] transition-all duration-300'>
                                        {step.title}
                                    </h5>
                                    <p className='font-raleway text-[12px] text-gray-400 leading-relaxed'>
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex gap-3 mt-5'>
                        <button className='font-cinzel px-5 py-2.5 bg-green-800 text-white
                                           text-[11px] tracking-widest uppercase border-2 border-green-800
                                           hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                                           transition-all duration-300 cursor-pointer'>
                            Request Quote
                        </button>
                        <button className='font-cinzel px-5 py-2.5 bg-transparent text-green-900
                                           text-[11px] tracking-widest uppercase border-2 border-transparent
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
