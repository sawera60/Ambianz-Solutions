

// import React from 'react'
// import { FaFacebook } from "react-icons/fa"
// import { FaInstagramSquare } from "react-icons/fa"
// import { AiFillTikTok } from "react-icons/ai"
// import { MdEmail } from "react-icons/md"
// import { MdPhone } from "react-icons/md"

// const Footer = () => {
//     return (
//         <footer className='px-10 py-14 bg-gray-100'>

//             {/* Main Footer Grid */}
//             <div className="flex flex-wrap gap-10 justify-between border-b border-gray-200 pb-10">

//                 {/* Column 1 - Brand */}
//                 <div className="flex flex-col gap-4 max-w-[240px]">
//                     <h2 className="font-cinzel text-[16px] font-bold text-[#d1c400] tracking-wide">
//                         AMBIANZ SOLUTIONS PVT.LTD
//                     </h2>
//                     <p className="font-raleway text-[13px] text-gray-500 leading-relaxed">
//                         We seamlessly merge full featured ecommerce experiences with bespoke
//                         architectural services covering modern kitchens, doors, wardrobes and media walls.
//                     </p>
//                 </div>

//                 {/* Column 2 - Shop */}
//                 <div className="flex flex-col gap-3">
//                     <h6 className="font-cinzel text-[12px] font-bold text-green-900
//                                    tracking-[3px] uppercase mb-1">
//                         Shop
//                     </h6>
//                     {['Furniture', 'Home Decor', 'Lighting', 'Mirrors', 'Wall Art'].map((item) => (
//                         <p key={item}
//                             className="font-raleway text-[13px] text-gray-500
//                                       hover:text-[#d1c400] hover:translate-x-1
//                                       transition-all duration-300 cursor-pointer">
//                             {item}
//                         </p>
//                     ))}
//                 </div>

//                 {/* Column 3 - Services */}
//                 <div className="flex flex-col gap-3">
//                     <h6 className="font-cinzel text-[12px] font-bold text-green-900
//                                    tracking-[3px] uppercase mb-1">
//                         Services
//                     </h6>
//                     {['Kitchen', 'Doors', 'Wardrobe', 'Media Walls'].map((item) => (
//                         <p key={item}
//                             className="font-raleway text-[13px] text-gray-500
//                                       hover:text-[#d1c400] hover:translate-x-1
//                                       transition-all duration-300 cursor-pointer">
//                             {item}
//                         </p>
//                     ))}
//                     <button className="font-raleway mt-3 px-5 py-2 border-2 border-green-800
//                                        text-[12px] text-green-800 tracking-widest uppercase
//                                        hover:bg-green-800 hover:text-white
//                                        transition-all duration-300 cursor-pointer">
//                         Request a Quote
//                     </button>
//                 </div>

//                 {/* Column 4 - Contact */}
//                 <div className="flex flex-col gap-3 max-w-[220px]">
//                     <h6 className="font-cinzel text-[12px] font-bold text-green-900
//                                    tracking-[3px] uppercase mb-1">
//                         Contact
//                     </h6>

//                     {/* Email */}
//                     <div className='flex items-center gap-2 group cursor-pointer'>
//                         <MdEmail className='text-[16px] text-[#d1c400] shrink-0' />
//                         <p className='font-raleway text-[13px] text-gray-500
//                                       group-hover:text-[#d1c400] transition-all duration-300'>
//                             ambianz.solutionsit@gmail.com
//                         </p>
//                     </div>

//                     {/* Phone */}
//                     <div className='flex items-center gap-2 group cursor-pointer'>
//                         <MdPhone className='text-[16px] text-[#d1c400] shrink-0' />
//                         <p className='font-raleway text-[13px] text-gray-500
//                                       group-hover:text-[#d1c400] transition-all duration-300'>
//                             +92 3317416486
//                         </p>
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex gap-3 mt-3">
//                         <div className='w-9 h-9 border border-gray-200 flex items-center
//                                         justify-center hover:border-[#d1c400]
//                                         hover:bg-[#d1c400]/10 transition-all duration-300
//                                         cursor-pointer group'>
//                             <FaFacebook className="text-[16px] text-gray-400
//                                                     group-hover:text-[#d1c400]
//                                                     transition-all duration-300" />
//                         </div>
//                         <div className='w-9 h-9 border border-gray-200 flex items-center
//                                         justify-center hover:border-[#d1c400]
//                                         hover:bg-[#d1c400]/10 transition-all duration-300
//                                         cursor-pointer group'>
//                             <FaInstagramSquare className="text-[16px] text-gray-400
//                                                            group-hover:text-[#d1c400]
//                                                            transition-all duration-300" />
//                         </div>
//                         <div className='w-9 h-9 border border-gray-200 flex items-center
//                                         justify-center hover:border-[#d1c400]
//                                         hover:bg-[#d1c400]/10 transition-all duration-300
//                                         cursor-pointer group'>
//                             <AiFillTikTok className="text-[16px] text-gray-400
//                                                       group-hover:text-[#d1c400]
//                                                       transition-all duration-300" />
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Bottom Bar */}
//             <div className="flex flex-wrap justify-between items-center pt-6 gap-2">
//                 <p className="font-raleway text-[12px] text-gray-400">
//                     © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
//                 </p>
//                 <p className="font-raleway text-[12px] text-gray-400">
//                     Privacy Policy · Terms & Conditions
//                 </p>
//             </div>

//         </footer>
//     )
// }

// export default Footer

import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import logo from "../../images/logo.png";

const serviceLinks = [
    { label: "Kitchens", path: "/services/kitchens" },
    { label: "Wardrobes", path: "/services/wardrobes" },
    { label: "Doors", path: "/services/doors" },
    { label: "Media Walls", path: "/services/media-walls" },
];

const shopLinks = [
    { label: "Furniture", path: "/shop?category=furniture" },
    { label: "Lighting", path: "/shop?category=lighting" },
    { label: "Mirrors", path: "/shop?category=mirrors" },
    { label: "Home Decor", path: "/shop?category=home-decor" },
    { label: "Hardware", path: "/shop?category=hardware" },
];

export default function Footer() {
    return (
        <footer style={{ background: "#F8F6F1", borderTop: "1px solid rgba(26, 28, 25, 0.1)", marginTop: "120px" }}>

            {/* Main Footer Grid */}
            <div
                style={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "80px 48px 48px",
                    display: "grid",
                    gridTemplateColumns: "1.5fr 0.8fr 0.8fr 1.2fr",
                    gap: 80,
                }}
            >
                {/* Brand Column */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                        <img src={logo} alt="Ambianz Logo" style={{ width: 42, height: 34, objectFit: "contain" }} />
                        <div>
                            <div
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    color: "#3c5a25",
                                    fontSize: 11,
                                    letterSpacing: 2,
                                    lineHeight: 1.2,
                                }}
                            >
                                AMBIANZ SOLUTIONS
                            </div>
                            <div
                                style={{ color: "rgba(60, 90, 37, 0.5)", fontSize: 8, letterSpacing: 2 }}
                            >
                                PVT. LTD
                            </div>
                        </div>
                    </div>
                    <p
                        style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: 11,
                            color: "rgba(26, 28, 25, 0.6)",
                            lineHeight: 1.9,
                            maxWidth: 260,
                            margin: "0 0 24px",
                        }}
                    >
                        We seamlessly merge full featured ecommerce experiences with bespoke
                        architectural services covering modern kitchens, doors, wardrobes
                        and media walls.
                    </p>

                    {/* Social Icons */}
                    <div style={{ display: "flex", gap: 10 }}>
                        {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                style={{
                                    width: 32,
                                    height: 32,
                                    border: "1px solid rgba(60, 90, 37, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#3c5a25",
                                    textDecoration: "none",
                                    transition: "background 0.2s, border-color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(60, 90, 37, 0.1)";
                                    e.currentTarget.style.borderColor = "#3c5a25";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.borderColor = "rgba(60, 90, 37, 0.3)";
                                }}
                            >
                                <Icon size={13} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <div
                        style={{
                            fontSize: 9,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            color: "#3c5a25",
                            fontFamily: "'Raleway', sans-serif",
                            marginBottom: 20,
                        }}
                    >
                        Services
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 11,
                                    color: "rgba(26, 28, 25, 0.6)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#3c5a25")}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "rgba(26, 28, 25, 0.6)")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Shop */}
                <div>
                    <div
                        style={{
                            fontSize: 9,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            color: "#3c5a25",
                            fontFamily: "'Raleway', sans-serif",
                            marginBottom: 20,
                        }}
                    >
                        Shop
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {shopLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 11,
                                    color: "rgba(26, 28, 25, 0.6)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#3c5a25")}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "rgba(26, 28, 25, 0.6)")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact + CTA */}
                <div>
                    <div
                        style={{
                            fontSize: 9,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            color: "#3c5a25",
                            fontFamily: "'Raleway', sans-serif",
                            marginBottom: 20,
                        }}
                    >
                        Contact
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            marginBottom: 28,
                        }}
                    >
                        <a
                            href="mailto:ambianz.solutionsit@gmail.com"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 11,
                                color: "rgba(26, 28, 25, 0.6)",
                                textDecoration: "none",
                            }}
                        >
                            ambianz.solutionsit@gmail.com
                        </a>
                        <a
                            href="tel:+923317416486"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 11,
                                color: "rgba(26, 28, 25, 0.6)",
                                textDecoration: "none",
                            }}
                        >
                            +92 331 7416486
                        </a>
                    </div>

                    <Link
                        to="/get-a-quote"
                        style={{
                            display: "inline-block",
                            border: "1px solid #3c5a25",
                            color: "#3c5a25",
                            fontSize: 9,
                            letterSpacing: 2.5,
                            padding: "10px 20px",
                            textDecoration: "none",
                            fontFamily: "'Raleway', sans-serif",
                            textTransform: "uppercase",
                            transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#3c5a25";
                            e.currentTarget.style.color = "#F8F6F1";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#3c5a25";
                        }}
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(26, 28, 25, 0.1)",
                    padding: "18px 48px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 10,
                        color: "rgba(26, 28, 25, 0.45)",
                    }}
                >
                    © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                    {["Privacy Policy", "Terms & Conditions"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 10,
                                color: "rgba(26, 28, 25, 0.45)",
                                textDecoration: "none",
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
