// // import React from 'react'
// // import { FaFacebook } from "react-icons/fa";
// // import { FaInstagramSquare } from "react-icons/fa";
// // import { AiFillTikTok } from "react-icons/ai";
// // import { MdEmail } from "react-icons/md";

// // const Footer = () => {
// //     return (
// //         <div className='footer flex gap-[10px] justify-around'>
// //             <div className="social">
// //                 <p>AMBIANZ SOLUTIONS PVT.LTD</p>
// //                 <p className="w-[200px]">We seemlessly merge full featured ecommerce experiences with bespoke architectural services covering modern kitchens,door,wardrobe and media walls</p>
// //                 <div className="links flex">
// //                     <FaFacebook />
// //                     <FaInstagramSquare />
// //                     <AiFillTikTok />
// //                 </div>

// //             </div>
// //             <div className="shop">
// //                 <h6>Shop</h6>
// //                 <p>Furniture</p>
// //                 <p>Home decor</p>
// //                 <p>Lighting</p>
// //                 <p>Mirrors</p>
// //                 <p>Wall Art</p>

// //             </div>
// //             <div className="services">
// //                 <h6>Services</h6>
// //                 <p>Kitchen</p>
// //                 <p>Doors</p>
// //                 <p>Wardrobe</p>
// //                 <p>Media Walls</p>
// //                 <button>Request a quote</button>
// //             </div>
// //             <div className='newsletter'>
// //                 <h6>Newsletter</h6>
// //                 <MdEmail />
// //                 <input type="text" placeholder='Enter your email' />
// //                 <button>Join</button>

// //             </div>

// //         </div>
// //     )
// // }

// // export default Footer

// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { AiFillTikTok } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//     return (
//         <footer className=' text-white px-10 py-14 bg-gray-100'>

//             {/* Main Footer Grid */}
//             <div className="flex flex-wrap gap-10 justify-between border-b border-white/10 pb-10">

//                 {/* Column 1 - Brand */}
//                 <div className="flex flex-col gap-4 max-w-[240px]">
//                     <h2 className="font-cinzel text-[18px] font-bold
//                                   text-[#d1c400]">
//                         AMBIANZ SOLUTIONS PVT.LTD
//                     </h2>
//                     <p className="font-raleway text-[13px] text-gray-800 leading-relaxed">
//                         We seamlessly merge full featured ecommerce experiences with bespoke
//                         architectural services covering modern kitchens, doors, wardrobes and media walls.
//                     </p>
//                     {/* Social Icons */}
//                     <div className="flex gap-4 mt-2">
//                         <FaFacebook className="text-[22px] text-gray-800 hover:text-[#d1c400] 
//                                                transition-all duration-300 cursor-pointer" />
//                         <FaInstagramSquare className="text-[22px] text-gray-800 hover:text-[#d1c400] 
//                                                        transition-all duration-300 cursor-pointer" />
//                         <AiFillTikTok className="text-[22px] text-gray-800 hover:text-[#d1c400] 
//                                                   transition-all duration-300 cursor-pointer" />
//                     </div>
//                 </div>

//                 {/* Column 2 - Shop */}
//                 <div className="flex flex-col gap-3">
//                     <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
//                                    tracking-widest uppercase mb-2">
//                         Shop
//                     </h6>
//                     {['Furniture', 'Home Decor', 'Lighting', 'Mirrors', 'Wall Art'].map((item) => (
//                         <p key={item}
//                            className="font-raleway text-[13px] text-gray-800 
//                                       hover:text-[#d1c400] hover:translate-x-1
//                                       transition-all duration-300 cursor-pointer">
//                             {item}
//                         </p>
//                     ))}
//                 </div>

//                 {/* Column 3 - Services */}
//                 <div className="flex flex-col gap-3">
//                     <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
//                                    tracking-widest uppercase mb-2">
//                         Services
//                     </h6>
//                     {['Kitchen', 'Doors', 'Wardrobe', 'Media Walls'].map((item) => (
//                         <p key={item}
//                            className="font-raleway text-[13px] text-gray-800 
//                                       hover:text-[#d1c400] hover:translate-x-1
//                                       transition-all duration-300 cursor-pointer">
//                             {item}
//                         </p>
//                     ))}
//                     <button className="font-raleway mt-3 px-5 py-2 border border-[#3c5a25]
//                                        text-[13px] text-gray-800 rounded-sm
//                                        hover:bg-[#3c5a25] hover:text-[#d1c400]
//                                        transition-all duration-300 cursor-pointer">
//                         Request a Quote
//                     </button>
//                 </div>

//                 {/* Column 4 - Contact */}
//                 <div className="flex flex-col gap-3 max-w-[220px]">
//                     <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
//                                    tracking-widest uppercase mb-2">
//                        Contact
//                     </h6>


//                 </div>

//             </div>

//             {/* Bottom Bar */}
//             <div className="flex flex-wrap justify-between items-center pt-6 gap-2">
//                 <p className="font-raleway text-[12px] text-gray-800">
//                     © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
//                 </p>
//                 <p className="font-raleway text-[12px] text-gray-800">
//                     Privacy Policy · Terms & Conditions
//                 </p>
//             </div>

//         </footer>
//     )
// }

// export default Footer

import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillTikTok } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { MdPhone } from "react-icons/md"

const Footer = () => {
    return (
        <footer className='px-10 py-14 bg-gray-100'>

            {/* Main Footer Grid */}
            <div className="flex flex-wrap gap-10 justify-between border-b border-gray-200 pb-10">

                {/* Column 1 - Brand */}
                <div className="flex flex-col gap-4 max-w-[240px]">
                    <h2 className="font-cinzel text-[16px] font-bold text-[#d1c400] tracking-wide">
                        AMBIANZ SOLUTIONS PVT.LTD
                    </h2>
                    <p className="font-raleway text-[13px] text-gray-500 leading-relaxed">
                        We seamlessly merge full featured ecommerce experiences with bespoke
                        architectural services covering modern kitchens, doors, wardrobes and media walls.
                    </p>
                </div>

                {/* Column 2 - Shop */}
                <div className="flex flex-col gap-3">
                    <h6 className="font-cinzel text-[12px] font-bold text-green-900
                                   tracking-[3px] uppercase mb-1">
                        Shop
                    </h6>
                    {['Furniture', 'Home Decor', 'Lighting', 'Mirrors', 'Wall Art'].map((item) => (
                        <p key={item}
                            className="font-raleway text-[13px] text-gray-500
                                      hover:text-[#d1c400] hover:translate-x-1
                                      transition-all duration-300 cursor-pointer">
                            {item}
                        </p>
                    ))}
                </div>

                {/* Column 3 - Services */}
                <div className="flex flex-col gap-3">
                    <h6 className="font-cinzel text-[12px] font-bold text-green-900
                                   tracking-[3px] uppercase mb-1">
                        Services
                    </h6>
                    {['Kitchen', 'Doors', 'Wardrobe', 'Media Walls'].map((item) => (
                        <p key={item}
                            className="font-raleway text-[13px] text-gray-500
                                      hover:text-[#d1c400] hover:translate-x-1
                                      transition-all duration-300 cursor-pointer">
                            {item}
                        </p>
                    ))}
                    <button className="font-raleway mt-3 px-5 py-2 border-2 border-green-800
                                       text-[12px] text-green-800 tracking-widest uppercase
                                       hover:bg-green-800 hover:text-white
                                       transition-all duration-300 cursor-pointer">
                        Request a Quote
                    </button>
                </div>

                {/* Column 4 - Contact */}
                <div className="flex flex-col gap-3 max-w-[220px]">
                    <h6 className="font-cinzel text-[12px] font-bold text-green-900
                                   tracking-[3px] uppercase mb-1">
                        Contact
                    </h6>

                    {/* Email */}
                    <div className='flex items-center gap-2 group cursor-pointer'>
                        <MdEmail className='text-[16px] text-[#d1c400] shrink-0' />
                        <p className='font-raleway text-[13px] text-gray-500
                                      group-hover:text-[#d1c400] transition-all duration-300'>
                            ambianz.solutionsit@gmail.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className='flex items-center gap-2 group cursor-pointer'>
                        <MdPhone className='text-[16px] text-[#d1c400] shrink-0' />
                        <p className='font-raleway text-[13px] text-gray-500
                                      group-hover:text-[#d1c400] transition-all duration-300'>
                            +92 3317416486
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-3">
                        <div className='w-9 h-9 border border-gray-200 flex items-center
                                        justify-center hover:border-[#d1c400]
                                        hover:bg-[#d1c400]/10 transition-all duration-300
                                        cursor-pointer group'>
                            <FaFacebook className="text-[16px] text-gray-400
                                                    group-hover:text-[#d1c400]
                                                    transition-all duration-300" />
                        </div>
                        <div className='w-9 h-9 border border-gray-200 flex items-center
                                        justify-center hover:border-[#d1c400]
                                        hover:bg-[#d1c400]/10 transition-all duration-300
                                        cursor-pointer group'>
                            <FaInstagramSquare className="text-[16px] text-gray-400
                                                           group-hover:text-[#d1c400]
                                                           transition-all duration-300" />
                        </div>
                        <div className='w-9 h-9 border border-gray-200 flex items-center
                                        justify-center hover:border-[#d1c400]
                                        hover:bg-[#d1c400]/10 transition-all duration-300
                                        cursor-pointer group'>
                            <AiFillTikTok className="text-[16px] text-gray-400
                                                      group-hover:text-[#d1c400]
                                                      transition-all duration-300" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="flex flex-wrap justify-between items-center pt-6 gap-2">
                <p className="font-raleway text-[12px] text-gray-400">
                    © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
                </p>
                <p className="font-raleway text-[12px] text-gray-400">
                    Privacy Policy · Terms & Conditions
                </p>
            </div>

        </footer>
    )
}

export default Footer