// import React from 'react'
// import kitchen from "../../images/kitchen.jpg"

// const Process = () => {
//     const steps = [
//         {
//             number: "01",
//             title: "Initial Consultation",
//             desc: "One-on-one call to understand your vision and requirements"
//         },
//         {
//             number: "02",
//             title: "Onsite Measurement",
//             desc: "Precise measurement and assessment by our expert designers"
//         },
//         {
//             number: "03",
//             title: "3D Design",
//             desc: "Visualize your space before implementation with our 3D renders"
//         },
//         {
//             number: "04",
//             title: "Final Call with Client",
//             desc: "Final discussion about design and project location "
//         },
//         {
//             number: "05",
//             title: "Execution & Installation",
//             desc: "Professional installation handled with precision and care"
//         },
//     ]

//     return (
//         <div className='py-14 px-10 bg-gray-100'>  {/* ✅ bg added */}
//             <div className="flex gap-12 items-center">

//                 {/* LEFT — Image */}
//                 <div className='w-1/2 h-[520px] rounded-sm overflow-hidden group'>  {/* ✅ height reduced */}
//                     <img
//                         src={kitchen}
//                         alt="Our Process"
//                         className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
//                     />
//                 </div>

//                 {/* RIGHT — Content */}
//                 <div className='w-1/2 flex flex-col gap-6'>

//                     {/* Top Label */}
//                     <div className='flex items-center gap-3'>
//                         <div className='h-[1px] w-[40px] bg-[#d1c400]' />  {/* ✅ gold line added */}
//                         <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                             Our Process
//                         </span>
//                     </div>

//                     {/* Main Heading */}
//                     <h2 className='font-cinzel text-[32px] font-bold text-green-900 leading-tight'>
//                         Design to Installation <br />
                       
//                     </h2>

//                     {/* Description */}
//                     <p className='font-raleway text-[14px] text-gray-500 leading-relaxed'>
//                         We don't just sell products — we create environments. Our team of expert
//                         designers and craftsmen work closely with you to bring your dream space
//                         to life with precision and care.
//                     </p>

//                     {/* Steps */}
//                     <div className='flex flex-col gap-5 mt-2'>
//                         {steps.map((step, index) => (
//                             <div key={index} className='flex gap-4 items-start group cursor-pointer'>

//                                 {/* Step Number */}
//                                 <span className='font-cinzel text-[32px] font-bold text-[#d1c400]/30
//                                          group-hover:text-[#d1c400] transition-all duration-300
//                                          leading-none shrink-0'>
//                                     {step.number}
//                                 </span>

//                                 {/* Step Content */}
//                                 <div className='flex flex-col gap-1 border-b border-gray-200 pb-4 w-full'>
//                                     <h5 className='font-cinzel text-[15px] font-semibold text-green-900
//                                            group-hover:text-[#d1c400] transition-all duration-300'>
//                                         {step.title}
//                                     </h5>
//                                     <p className='font-raleway text-[13px] text-gray-400'>
//                                         {step.desc}
//                                     </p>
//                                 </div>

//                             </div>
//                         ))}
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className='flex gap-4 mt-4'>
//                         <button className='font-cinzel px-6 py-2.5 bg-green-800 text-white
//                                    text-[13px] tracking-widest uppercase border-2 border-green-800
//                                    hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300 cursor-pointer'>
//                             Request Quote
//                         </button>
//                         <button className='font-cinzel px-6 py-2.5 bg-transparent text-green-900
//                                    text-[13px] tracking-widest uppercase border-2 border-transparent
//                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                    transition-all duration-300 cursor-pointer'>
//                             View Designs →
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Process

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
            desc: "Precise measurement by our expert designers"
        },
        {
            number: "03",
            title: "3D Design",
            desc: "Visualize your space before anything is built"
        },
        {
            number: "04",
            title: "Final Client Call",
            desc: "Final discussion about design and project location"
        },
        {
            number: "05",
            title: "Execution & Installation",
            desc: "Professional installation with precision and care"
        },
    ]

    return (
        <div className='py-12 px-10 bg-gray-100'>
            <div className="flex gap-12 items-center">

                {/* LEFT — Image */}
                <div className='w-1/2 h-[580px] overflow-hidden group shrink-0'>
                    <img
                        src={kitchen}
                        alt="Our Process"
                        className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                    />
                </div>

                {/* RIGHT — Content */}
                <div className='w-1/2 flex flex-col gap-6'>

                    {/* Top Label */}
                    <div className='flex items-center gap-3'>
                        <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            Our Process
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className='font-cinzel text-[26px] font-bold text-green-900 leading-tight'>
                        Design to Installation
                       
                    </h2>

                    {/* Description */}
                    <p className='font-raleway text-[13px] text-gray-400 leading-relaxed'>
                        We don't just sell products — we create environments. Our designers
                        and craftsmen work closely with you to bring your dream space to life.
                    </p>

                    {/* Steps */}
                    <div className='flex flex-col gap-0 mt-1'>
                        {steps.map((step, index) => (
                            <div key={index}
                                 className='flex gap-3 items-start group cursor-pointer
                                            py-3 border-b border-gray-200 last:border-0'>

                                {/* Step Number */}
                                <span className='font-cinzel text-[22px] font-bold text-[#d1c400]/30
                                                 group-hover:text-[#d1c400] transition-all duration-300
                                                 leading-none shrink-0 w-[36px]'>
                                    {step.number}
                                </span>

                                {/* Step Content */}
                                <div className='flex flex-col gap-0.5'>
                                    <h5 className='font-cinzel text-[15px] font-semibold text-green-900
                                                   group-hover:text-[#d1c400] transition-all duration-300'>
                                        {step.title}
                                    </h5>
                                    <p className='font-raleway text-[13px] text-gray-400 leading-relaxed'>
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex gap-3 mt-2'>
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
