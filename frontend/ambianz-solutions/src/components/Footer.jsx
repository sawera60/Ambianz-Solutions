// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { AiFillTikTok } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//     return (
//         <div className='footer flex gap-[10px] justify-around'>
//             <div className="social">
//                 <p>AMBIANZ SOLUTIONS PVT.LTD</p>
//                 <p className="w-[200px]">We seemlessly merge full featured ecommerce experiences with bespoke architectural services covering modern kitchens,door,wardrobe and media walls</p>
//                 <div className="links flex">
//                     <FaFacebook />
//                     <FaInstagramSquare />
//                     <AiFillTikTok />
//                 </div>

//             </div>
//             <div className="shop">
//                 <h6>Shop</h6>
//                 <p>Furniture</p>
//                 <p>Home decor</p>
//                 <p>Lighting</p>
//                 <p>Mirrors</p>
//                 <p>Wall Art</p>

//             </div>
//             <div className="services">
//                 <h6>Services</h6>
//                 <p>Kitchen</p>
//                 <p>Doors</p>
//                 <p>Wardrobe</p>
//                 <p>Media Walls</p>
//                 <button>Request a quote</button>
//             </div>
//             <div className='newsletter'>
//                 <h6>Newsletter</h6>
//                 <MdEmail />
//                 <input type="text" placeholder='Enter your email' />
//                 <button>Join</button>
                
//             </div>

//         </div>
//     )
// }

// export default Footer

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className=' text-white px-10 py-14 bg-gray-200'>

            {/* Main Footer Grid */}
            <div className="flex flex-wrap gap-10 justify-between border-b border-white/10 pb-10">

                {/* Column 1 - Brand */}
                <div className="flex flex-col gap-4 max-w-[240px]">
                    <h2 className="font-cinzel text-[18px] font-bold
                                  text-[#d1c400]">
                        AMBIANZ SOLUTIONS PVT.LTD
                    </h2>
                    <p className="font-raleway text-[13px] text-gray-800 leading-relaxed">
                        We seamlessly merge full featured ecommerce experiences with bespoke
                        architectural services covering modern kitchens, doors, wardrobes and media walls.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-2">
                        <FaFacebook className="text-[22px] text-gray-800 hover:text-[#d1c400] 
                                               transition-all duration-300 cursor-pointer" />
                        <FaInstagramSquare className="text-[22px] text-gray-800 hover:text-[#d1c400] 
                                                       transition-all duration-300 cursor-pointer" />
                        <AiFillTikTok className="text-[22px] text-gray-800 hover:text-[#d1c400] 
                                                  transition-all duration-300 cursor-pointer" />
                    </div>
                </div>

                {/* Column 2 - Shop */}
                <div className="flex flex-col gap-3">
                    <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
                                   tracking-widest uppercase mb-2">
                        Shop
                    </h6>
                    {['Furniture', 'Home Decor', 'Lighting', 'Mirrors', 'Wall Art'].map((item) => (
                        <p key={item}
                           className="font-raleway text-[13px] text-gray-800 
                                      hover:text-[#d1c400] hover:translate-x-1
                                      transition-all duration-300 cursor-pointer">
                            {item}
                        </p>
                    ))}
                </div>

                {/* Column 3 - Services */}
                <div className="flex flex-col gap-3">
                    <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
                                   tracking-widest uppercase mb-2">
                        Services
                    </h6>
                    {['Kitchen', 'Doors', 'Wardrobe', 'Media Walls'].map((item) => (
                        <p key={item}
                           className="font-raleway text-[13px] text-gray-800 
                                      hover:text-[#d1c400] hover:translate-x-1
                                      transition-all duration-300 cursor-pointer">
                            {item}
                        </p>
                    ))}
                    <button className="font-raleway mt-3 px-5 py-2 border border-[#3c5a25]
                                       text-[13px] text-gray-800 rounded-sm
                                       hover:bg-[#3c5a25] hover:text-[#d1c400]
                                       transition-all duration-300 cursor-pointer">
                        Request a Quote
                    </button>
                </div>

                {/* Column 4 - Newsletter */}
                <div className="flex flex-col gap-3 max-w-[220px]">
                    <h6 className="font-cinzel text-[14px] font-bold text-[#d1c400] 
                                   tracking-widest uppercase mb-2">
                        Newsletter
                    </h6>
                    <p className="font-raleway text-[13px] text-gray-800">
                        Subscribe to get latest updates and offers.
                    </p>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 
                                    rounded-sm px-3 py-2 mt-1">
                        <MdEmail className="text-[#d1c400] text-[18px] shrink-0" />
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className=" text-[13px] text-gray-800 placeholder:text-gray-800
                                        outline-none w-full font-raleway"
                        />
                    </div>
                    <button className="font-raleway px-5 py-2 bg-green-800 text-white
                                       text-[13px] font-semibold rounded-sm border-2 border-green-800
                                       hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                                       transition-all duration-300 cursor-pointer">
                        Join
                    </button>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="flex flex-wrap justify-between items-center pt-6 gap-2">
                <p className="font-raleway text-[12px] text-gray-800">
                    © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
                </p>
                <p className="font-raleway text-[12px] text-gray-800">
                    Privacy Policy · Terms & Conditions
                </p>
            </div>

        </footer>
    )
}

export default Footer