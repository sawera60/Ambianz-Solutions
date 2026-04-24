// // import React from 'react'
// // import { TbRulerMeasure } from "react-icons/tb"
// // import { MdOutlineDesignServices } from "react-icons/md"
// // import { GiGears } from "react-icons/gi"
// // import { MdOutlineHandyman } from "react-icons/md"

// // const steps = [
// //     {
// //         icon: <TbRulerMeasure className='text-[38px] text-[#d1c400]' />,
// //         number: "01",
// //         title: "Measure",
// //         desc: "Our experts visit your space and take precise measurements to ensure a perfect fit every time."
// //     },
// //     {
// //         icon: <MdOutlineDesignServices className='text-[38px] text-[#d1c400]' />,
// //         number: "02",
// //         title: "Design",
// //         desc: "We create photorealistic 3D designs so you can visualize your dream space before anything is built."
// //     },
// //     {
// //         icon: <GiGears className='text-[38px] text-[#d1c400]' />,
// //         number: "03",
// //         title: "Manufacture",
// //         desc: "Your design is crafted using premium materials with precision and care in our production facility."
// //     },
// //     {
// //         icon: <MdOutlineHandyman className='text-[38px] text-[#d1c400]' />,
// //         number: "04",
// //         title: "Install",
// //         desc: "Our skilled team installs everything with zero hassle, leaving your space exactly as you imagined."
// //     },
// // ]

// // const Bottomfeature = () => {
// //     return (
// //         <div className='py-16 px-10 bg-white relative overflow-hidden'>

// //             {/* Top decorative line */}
// //             <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
// //                             bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

// //             {/* Heading */}
// //             <div className='text-center mb-14'>
// //                 <div className='flex items-center justify-center gap-3 mb-4'>
// //                     <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
// //                     <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
// //                         How It Works
// //                     </span>
// //                     <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
// //                 </div>
// //                 <h2 className='font-cinzel text-[36px] font-bold
// //                                bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
// //                                bg-clip-text text-transparent'>
// //                     From Vision to Reality
// //                 </h2>
// //             </div>

// //             {/* Steps */}
// //             <div className='grid grid-cols-4 gap-0 relative'>

// //                 {/* Connecting line */}
// //                 <div className='absolute top-[40px] left-[12.5%] right-[12.5%] h-[1px]
// //                                 bg-gradient-to-r from-transparent via-[#d1c400]/30 to-transparent
// //                                 pointer-events-none' />

// //                 {steps.map((step, index) => (
// //                     <div key={index}
// //                          className='flex flex-col items-center text-center gap-4 px-6 group cursor-default'>

// //                         {/* Icon circle */}
// //                         <div className='relative w-[80px] h-[80px] flex items-center justify-center
// //                                         border-2 border-gray-100 bg-white
// //                                         group-hover:border-[#d1c400] transition-all duration-300
// //                                         z-10'>
// //                             {step.icon}

// //                             {/* Step number badge */}
// //                             <span className='absolute -top-3 -right-3 w-6 h-6 bg-green-800
// //                                              text-white font-cinzel text-[10px] font-bold
// //                                              flex items-center justify-center'>
// //                                 {index + 1}
// //                             </span>
// //                         </div>

// //                         {/* Title */}
// //                         <h4 className='font-cinzel text-[16px] font-bold text-green-900
// //                                        group-hover:text-[#d1c400] transition-all duration-300'>
// //                             {step.title}
// //                         </h4>

// //                         {/* Desc */}
// //                         <p className='font-raleway text-[13px] text-gray-400 leading-relaxed
// //                                       group-hover:text-gray-600 transition-all duration-300'>
// //                             {step.desc}
// //                         </p>

// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Bottom decorative line */}
// //             <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
// //                             bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

// //         </div>
// //     )
// // }

// // export default Bottomfeature



// import React from 'react'
// import { GiEcology } from "react-icons/gi"
// import { MdOutlineDesignServices } from "react-icons/md"
// import { GiCutDiamond } from "react-icons/gi"
// import { TbRulerMeasure } from "react-icons/tb"

// const features = [
//     {
//         icon: <GiEcology className='text-[38px] text-[#d1c400]' />,
//         title: "Eco-Friendly Materials",
//         desc: "We source sustainably and responsibly — premium quality that's kind to the planet."
//     },
//     {
//         icon: <MdOutlineDesignServices className='text-[38px] text-[#d1c400]' />,
//         title: "Unique Designs",
//         desc: "Every design is one of a kind — crafted exclusively for your space and personality."
//     },
//     {
//         icon: <GiCutDiamond className='text-[38px] text-[#d1c400]' />,
//         title: "Expert Craftsmen",
//         desc: "Our skilled artisans bring decades of experience to every detail of your project."
//     },
//     {
//         icon: <TbRulerMeasure className='text-[38px] text-[#d1c400]' />,
//         title: "Perfect Fit",
//         desc: "Precision measurements and bespoke manufacturing ensure everything fits flawlessly."
//     },
// ]



// const Bottomfeature = () => {
//     return (
//         <div className='bg-white'>


//             {/* ======= OPTION 2 — Why Ambianz Stands Out ======= */}
//             <div className='py-16 px-10 relative overflow-hidden'>

//                 {/* Top decorative line */}
//                 <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
//                                 bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

//                 {/* Heading */}
//                 <div className='text-center mb-14'>
//                     <div className='flex items-center justify-center gap-3 mb-4'>
//                         <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
//                         <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                             Our Difference
//                         </span>
//                         <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
//                     </div>
//                     <h2 className='font-cinzel text-[36px] font-bold
//                                    bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
//                                    bg-clip-text text-transparent'>
//                         Why Ambianz Stands Out
//                     </h2>
//                     <p className='font-raleway text-[14px] text-gray-400 mt-4
//                                    max-w-[480px] mx-auto leading-relaxed'>
//                         We don't just design spaces — we create experiences that last a lifetime.
//                     </p>
//                 </div>

//                 {/* Feature Cards */}
//                 <div className='grid grid-cols-4 gap-6'>
//                     {features.map((feature, index) => (
//                         <div key={index}
//                              className='group flex flex-col items-center text-center gap-4
//                                         p-8 border border-gray-100 bg-white
//                                         hover:border-[#d1c400]/40 hover:shadow-lg
//                                         transition-all duration-500 cursor-default relative
//                                         overflow-hidden'>

//                             {/* Corner accents */}
//                             <div className='absolute top-0 left-0 w-0 h-0
//                                             group-hover:w-[25px] group-hover:h-[25px]
//                                             border-t-2 border-l-2 border-[#d1c400]
//                                             transition-all duration-300' />
//                             <div className='absolute bottom-0 right-0 w-0 h-0
//                                             group-hover:w-[25px] group-hover:h-[25px]
//                                             border-b-2 border-r-2 border-[#d1c400]
//                                             transition-all duration-300' />

//                             {/* Step number faint bg */}
//                             <span className='absolute top-3 right-4 font-cinzel text-[42px]
//                                              font-bold text-gray-100 group-hover:text-[#d1c400]/10
//                                              transition-all duration-300 select-none leading-none'>
//                                 0{index + 1}
//                             </span>

//                             {/* Icon */}
//                             <div className='w-[70px] h-[70px] flex items-center justify-center
//                                             border border-gray-100 group-hover:border-[#d1c400]/40
//                                             bg-gray-50 group-hover:bg-white
//                                             transition-all duration-300 z-10'>
//                                 {feature.icon}
//                             </div>

//                             {/* Title */}
//                             <h4 className='font-cinzel text-[15px] font-bold text-green-900
//                                            group-hover:text-[#d1c400] transition-all duration-300'>
//                                 {feature.title}
//                             </h4>

//                             {/* Desc */}
//                             <p className='font-raleway text-[13px] text-gray-400 leading-relaxed
//                                           group-hover:text-gray-600 transition-all duration-300'>
//                                 {feature.desc}
//                             </p>

//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom decorative line */}
//                 <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]
//                                 bg-gradient-to-r from-transparent via-[#d1c400] to-transparent' />

//             </div>

//         </div>
//     )
// }

// export default Bottomfeature

import React from 'react'
import { GiEcology } from "react-icons/gi"
import { MdOutlineDesignServices } from "react-icons/md"
import { GiCutDiamond } from "react-icons/gi"
import { TbRulerMeasure } from "react-icons/tb"

const features = [
    {
        icon: <GiEcology className='text-[38px] text-[#d1c400]' />,
        title: "Eco-Friendly Materials",
        desc: "We source sustainably and responsibly — premium quality that's kind to the planet."
    },
    {
        icon: <MdOutlineDesignServices className='text-[38px] text-[#d1c400]' />,
        title: "Unique Designs",
        desc: "Every design is one of a kind — crafted exclusively for your space and personality."
    },
    {
        icon: <GiCutDiamond className='text-[38px] text-[#d1c400]' />,
        title: "Expert Craftsmen",
        desc: "Our skilled artisans bring decades of experience to every detail of your project."
    },
    {
        icon: <TbRulerMeasure className='text-[38px] text-[#d1c400]' />,
        title: "Perfect Fit",
        desc: "Precision measurements and bespoke manufacturing ensure everything fits flawlessly."
    },
]

const Bottomfeature = () => {
    return (
        <div className='bg-white'>

            <div className='py-16 px-10 relative overflow-hidden'>



                {/* Heading */}
                <div className='text-center mb-14'>
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            Our Difference
                        </span>
                        <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                    </div>
                    <h2 className='font-cinzel text-[34px] font-bold
                                   text-black'>
                        Why Ambianz Stands Out
                    </h2>
                    <p className='font-raleway text-[14px] text-gray-400 mt-4
                                   max-w-[480px] mx-auto leading-relaxed'>
                        We don't just design spaces — we create experiences that last a lifetime.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className='grid grid-cols-4 gap-6'>
                    {features.map((feature, index) => (
                        <div key={index}
                            className='group flex flex-col gap-4 p-6
                                        bg-white border border-gray-300
                                        hover:border-[#d1c400]/50 hover:shadow-xl
                                        transition-all duration-500 cursor-default
                                        relative overflow-hidden'>

                            {/* Corner accents */}
                            <div className='absolute top-0 left-0 w-0 h-0
                                            group-hover:w-[30px] group-hover:h-[30px]
                                            border-t-2 border-l-2 border-[#d1c400]
                                            transition-all duration-300' />
                            <div className='absolute bottom-0 right-0 w-0 h-0
                                            group-hover:w-[30px] group-hover:h-[30px]
                                            border-b-2 border-r-2 border-[#d1c400]
                                            transition-all duration-300' />

                            {/* Number — now visible */}
                            <span className='absolute top-3 right-4 font-cinzel text-[36px]
                                             font-bold text-gray-300
                                             group-hover:text-[#d1c400]/20
                                             transition-all duration-300
                                             select-none leading-none'>
                                0{index + 1}
                            </span>

                            {/* Icon box */}
                            <div className='w-[55px] h-[55px] flex items-center justify-center
                                            border-2 border-gray-200
                                            group-hover:border-[#d1c400]
                                            bg-gray-50 group-hover:bg-white
                                            transition-all duration-300 z-10'>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h4 className='font-cinzel text-[15px] font-bold text-green-900
                                           group-hover:text-[#d1c400] transition-all duration-300'>
                                {feature.title}
                            </h4>

                            {/* Divider */}
                            <div className='w-[30px] h-[2px] bg-[#d1c400]/40
                                            group-hover:w-[60px] group-hover:bg-[#d1c400]
                                            transition-all duration-500' />

                            {/* Desc */}
                            <p className='font-raleway text-[13px] text-gray-400 leading-relaxed
                                          group-hover:text-gray-600 transition-all duration-300'>
                                {feature.desc}
                            </p>

                        </div>
                    ))}
                </div>



            </div>

        </div>
    )
}

export default Bottomfeature