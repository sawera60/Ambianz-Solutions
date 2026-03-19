import React from 'react'
import { GiCutDiamond } from "react-icons/gi"
import { HiOutlineLightBulb } from "react-icons/hi"
import { MdOutlineDesignServices } from "react-icons/md"
import { RiCustomerService2Line } from "react-icons/ri"

const features = [
    {
        icon: <MdOutlineDesignServices className='text-[36px] text-[#d1c400]' />,
        title: "Bespoke 3D Design",
        desc: "Every project starts with a photorealistic 3D render so you see your space before a single nail is hammered. No surprises — only perfection."
    },
    {
        icon: <GiCutDiamond className='text-[36px] text-[#d1c400]' />,
        title: "Premium Craftsmanship",
        desc: "We use only the finest materials sourced from trusted suppliers. Every detail is crafted with precision to stand the test of time."
    },
    {
        icon: <HiOutlineLightBulb className='text-[36px] text-[#d1c400]' />,
        title: "Tailored To You",
        desc: "No two homes are the same. Our designers work closely with you to create solutions that reflect your unique lifestyle and personality."
    },
    {
        icon: <RiCustomerService2Line className='text-[36px] text-[#d1c400]' />,
        title: "End-To-End Service",
        desc: "From initial consultation to final installation, we handle everything. One team, one vision, zero stress for you."
    },
]

const WhyUs = () => {
    return (
        <div className='py-20 px-10 bg-white relative overflow-hidden'>  {/* ✅ bg-white */}

            {/* Heading */}
            <div className='text-center mb-16 relative z-10'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                        Our Edge
                    </span>
                    <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                </div>
                <h2 className='font-cinzel text-[42px] font-bold
                               bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                               bg-clip-text text-transparent'>
                    Why Choose Us?
                </h2>
                <p className='font-raleway text-[14px] text-gray-400 mt-4   
                               max-w-[480px] mx-auto leading-relaxed'>  {/* ✅ text-gray-400 */}
                    We don't just deliver products — we craft experiences that elevate
                    the way you live, work and feel at home.
                </p>
            </div>

            {/* Feature Cards */}
            <div className='grid grid-cols-4 gap-6 relative z-10'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='group flex flex-col gap-5 p-8 border border-gray-100
                                   bg-gray-50 hover:bg-white
                                   hover:border-[#d1c400]/30 shadow-sm hover:shadow-md
                                   transition-all duration-500 cursor-default relative
                                   overflow-hidden'  
                    >
                        {/* Top corner accent */}
                        <div className='absolute top-0 left-0 w-0 h-0
                                        group-hover:w-[30px] group-hover:h-[30px]
                                        border-t-2 border-l-2 border-[#d1c400]
                                        transition-all duration-300' />

                        {/* Bottom corner accent */}
                        <div className='absolute bottom-0 right-0 w-0 h-0
                                        group-hover:w-[30px] group-hover:h-[30px]
                                        border-b-2 border-r-2 border-[#d1c400]
                                        transition-all duration-300' />

                        {/* Step Number */}
                        <span className='font-cinzel text-[48px] font-bold text-gray-100
                                         group-hover:text-[#d1c400]/20 transition-all duration-300
                                         absolute top-4 right-6 leading-none select-none'>
                            0{index + 1}
                        </span>

                        {/* Icon */}
                        <div className='w-[60px] h-[60px] flex items-center justify-center
                                        border border-gray-200 group-hover:border-[#d1c400]/40
                                        transition-all duration-300 bg-white'>
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h4 className='font-cinzel text-[16px] font-semibold text-gray-800
                                       group-hover:text-[#d1c400] transition-all duration-300
                                       leading-snug'>   {/* ✅ text-gray-800 */}
                            {feature.title}
                        </h4>

                        {/* Description */}
                        <p className='font-raleway text-[13px] text-gray-400
                                      group-hover:text-gray-600 transition-all duration-300
                                      leading-relaxed'>  {/* ✅ text-gray-400 */}
                            {feature.desc}
                        </p>

                    </div>
                ))}
            </div>

            {/* Bottom Stats Row */}
            <div className='grid grid-cols-4 gap-6 mt-10 relative z-10
                            border-t border-gray-100 pt-10'>   {/* ✅ border-gray-100 */}
                {[
                    { number: "200+", label: "Projects Completed" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "5+", label: "Years Experience" },
                    { number: "50+", label: "Design Experts" },
                ].map((stat, index) => (
                    <div key={index} className='text-center group cursor-default'>
                        <h3 className='font-cinzel text-[36px] font-bold
                                       bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                                       bg-clip-text text-transparent'>
                            {stat.number}
                        </h3>
                        <p className='font-raleway text-[12px] text-gray-300
                                      tracking-widest uppercase mt-1'>  {/* ✅ text-gray-300 */}
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhyUs