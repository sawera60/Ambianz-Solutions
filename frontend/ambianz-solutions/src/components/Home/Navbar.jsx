

// import React from 'react'
import logo from '../../images/logo.png'
// import { IoSearch } from "react-icons/io5"
// import { CgProfile } from "react-icons/cg"
// import { GrFavorite } from "react-icons/gr"
// import { MdOutlineShoppingCart } from "react-icons/md"
// import { NavLink, useLocation } from 'react-router-dom'

// const categoryMenus = {
//     Lighting: {
//         columns: [
//             {
//                 title: 'Ceiling Lights',
//                 items: ['Pendant Lights', 'Chandeliers', 'Flush Mounts', 'Semi-Flush Mounts', 'Recessed Lighting', 'Track Lighting'],
//             },
//             {
//                 title: 'Lamps',
//                 items: ['Table Lamps', 'Floor Lamps', 'Desk Lamps', 'Bedside Lamps', 'Arc Lamps', 'Buffet Lamps'],
//             },
//         ],
//     },
//     Furniture: {
//         columns: [
//             {
//                 title: 'Living Room',
//                 items: ['Sofas & Sectionals', 'Coffee Tables', 'TV Units', 'Accent Chairs', 'Bookshelves', 'Side Tables'],
//             },
//             {
//                 title: 'Office Furniture',
//                 items: ['Desks', 'Office Chairs', 'Filing Cabinets', 'Bookshelves', 'Conference Tables', 'Storage Units'],
//             },
//         ],
//     },
//     'Home Decor': {
//         columns: [
//             {
//                 title: 'Wall Decor',
//                 items: ['Wall Art', 'Wall Clocks', 'Wall Shelves', 'Photo Frames', 'Tapestries'],
//             },
//             {
//                 title: 'Table Decor',
//                 items: ['Vases', 'Candles & Holders', 'Decorative Trays', 'Sculptures', 'Planters'],
//             },
//         ],
//     },
//     Hardware: {
//         columns: [
//             {
//                 title: 'Door Hardware',
//                 items: ['Door Handles', 'Door Knobs', 'Hinges', 'Door Stoppers', 'Locks & Latches'],
//             },
//             {
//                 title: 'Cabinet Hardware',
//                 items: ['Cabinet Pulls', 'Cabinet Knobs', 'Drawer Slides', 'Cabinet Hinges', 'Hooks & Rails'],
//             },
//         ],
//     },
//     Mirrors: {
//         columns: [
//             {
//                 title: 'Wall Mirrors',
//                 items: ['Full Length Mirrors', 'Decorative Mirrors', 'Frameless Mirrors', 'Antique Mirrors'],
//             },
//             {
//                 title: 'Functional Mirrors',
//                 items: ['Bathroom Mirrors', 'Vanity Mirrors', 'LED Mirrors', 'Magnifying Mirrors'],
//             },
//         ],
//     },
//     Curtains: {
//         columns: [
//             {
//                 title: 'Curtain Types',
//                 items: ['Blackout Curtains', 'Sheer Curtains', 'Velvet Curtains', 'Linen Curtains', 'Eyelet Curtains'],
//             },
//             {
//                 title: 'Blinds & Shades',
//                 items: ['Roller Blinds', 'Roman Blinds', 'Venetian Blinds', 'Wooden Blinds', 'Zebra Blinds'],
//             },
//         ],
//     },
// }

// const Navbar = () => {
//     const location = useLocation()
//     const isShop = location.pathname === '/shop'
//     const isService = location.pathname === '/services'
//     const isGetQuote = location.pathname === '/getquote'

//     return (
//         <div className='navbar w-full'>

//             {/* Top Navbar */}
//             <div className="w-full h-[55px] flex items-center justify-between px-8 bg-green-900">
//                 <div className="flex items-center gap-2">
//                     <img src={logo} alt="logo" className='w-[50px] h-[40px] object-contain' />
//                     <span className='font-cinzel text-[17px] font-bold text-white tracking-wide'>
//                         Ambianz Solutions Pvt.Ltd
//                     </span>
//                 </div>

//                 <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
//                     <IoSearch className='text-[15px] text-white/50' />
//                     <input
//                         type="text"
//                         placeholder='Search products or services...'
//                         className='w-[300px] outline-none bg-transparent text-[13px]
//                        text-white placeholder:text-white/30 font-raleway'
//                     />
//                 </div>

//                 <div className="flex items-center gap-4 pr-2">
//                     <div className="flex flex-col items-center cursor-pointer group relative">
//                         <CgProfile className='text-[23px] text-white/80 group-hover:text-[#d1c400] transition-all duration-300' />
//                         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[155px] bg-white
//                             border border-gray-100 shadow-xl z-50
//                             opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                             transition-all duration-200">
//                             <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5
//                               bg-white border-l border-t border-gray-100 rotate-45" />
//                             <div className="flex flex-col py-1.5">
//                                 <button className="font-raleway text-[12px] text-gray-700 px-5 py-2.5
//                                    hover:bg-[#F8F6F1] hover:text-[#3c5a25] text-left
//                                    tracking-wide transition-colors duration-200">
//                                     Sign In
//                                 </button>
//                                 <div className="border-t border-gray-100 mx-3" />
//                                 <button className="font-raleway text-[12px] text-gray-700 px-5 py-2.5
//                                    hover:bg-[#F8F6F1] hover:text-[#3c5a25] text-left
//                                    tracking-wide transition-colors duration-200">
//                                     Create Account
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center cursor-pointer group">
//                         <GrFavorite className='text-[23px] text-white/80 group-hover:text-[#d1c400] transition-all duration-300' />
//                     </div>

//                     <div className="flex flex-col items-center cursor-pointer group relative">
//                         <MdOutlineShoppingCart className='text-[23px] text-white/80 group-hover:text-[#d1c400] transition-all duration-300' />
//                         <span className='absolute -top-1 -right-2 w-4 h-4 bg-[#d1c400] text-black
//                              text-[9px] font-bold font-cinzel flex items-center justify-center rounded-full'>
//                             0
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Mid Navbar */}
//             <div className="flex items-center justify-center gap-[40px] py-3 bg-gray-100 border-b border-gray-200">
//                 {[
//                     { to: "/", label: "HOME" },
//                     { to: "/shop", label: "SHOP" },
//                     { to: "/services", label: "SERVICES" },
//                     { to: "/getquote", label: "GET A QUOTE" },
//                 ].map((link) => (
//                     <NavLink
//                         key={link.to}
//                         to={link.to}
//                         className={({ isActive }) =>
//                             `font-cinzel text-[12px] cursor-pointer tracking-[3px] border-b-2 pb-0.5
//                transition-all duration-300
//                ${isActive
//                                 ? 'border-[#d1c400] text-[#3c5a25] font-bold'
//                                 : 'border-transparent text-gray-600 font-semibold hover:text-[#3c5a25] hover:border-[#d1c400]'
//                             }`
//                         }>
//                         {link.label}
//                     </NavLink>
//                 ))}
//             </div>

//             {/* Category Strip with Mega Dropdowns */}
//             {!isService && !isGetQuote && !isShop && (
//                 <div className="flex items-center justify-center gap-2 py-2.5 bg-white border-b border-gray-100 relative">
//                     {Object.entries(categoryMenus).map(([cat, menu]) => (
//                         <div key={cat} className="relative group">

//                             {/* Category Button */}
//                             <button
//                                 className='font-raleway border border-gray-200 bg-gray-100
//                            text-gray-500 px-5 py-1.5 text-[11px] tracking-wider uppercase rounded-[10px]
//                            hover:bg-[#3c5a25] hover:border-[#3c5a25] hover:text-white
//                            group-hover:bg-[#3c5a25] group-hover:border-[#3c5a25] group-hover:text-white
//                            transition-all duration-300 cursor-pointer'>
//                                 {cat}
//                             </button>

//                             {/* Mega Dropdown */}
//                             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50
//                               opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                               transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">

//                                 {/* Arrow */}
//                                 <div className="flex justify-center">
//                                     <div className="w-2.5 h-2.5 bg-white border-l border-t border-gray-200 rotate-45 -mb-1.5 z-10 relative" />
//                                 </div>

//                                 {/* Dropdown Panel */}
//                                 <div className="bg-white border border-gray-200 shadow-2xl"
//                                     style={{ width: `${menu.columns.length * 200}px` }}>

//                                     {/* Top green accent line */}
//                                     <div className="h-[3px] bg-[#3c5a25] w-full" />

//                                     <div className="flex divide-x divide-gray-100 p-5 gap-0">
//                                         {menu.columns.map((col, i) => (
//                                             <div key={i} className={`flex flex-col gap-2 ${i > 0 ? 'pl-6' : ''} ${i < menu.columns.length - 1 ? 'pr-6' : ''}`}
//                                                 style={{ minWidth: '180px' }}>

//                                                 {/* Column heading */}
//                                                 <div className="mb-1">
//                                                     <span className="font-cinzel text-[11px] font-bold text-[#3c5a25] tracking-[2px] uppercase">
//                                                         {col.title}
//                                                     </span>
//                                                     <div className="mt-1 h-[1px] bg-[#d1c400] w-8" />
//                                                 </div>

//                                                 {/* Sub items */}
//                                                 {col.items.map((item, j) => (
//                                                     <button key={j}
//                                                         className="font-raleway text-[12px] text-gray-500 text-left
//                                        hover:text-[#3c5a25] hover:pl-1
//                                        transition-all duration-200 tracking-wide">
//                                                         {item}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Navbar

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useQuoteModal } from "../../context/QuoteModalContext";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Shop", path: "/shop" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { openQuoteModal } = useQuoteModal();

    return (
        <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

            {/* Top Bar */}
            <div
                style={{
                    background: "#F8F6F1",
                    borderBottom: "0.5px solid #e0ddd5",
                    padding: "12px 48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                }}
            >
                {/* Logo */}
                <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
                    <img src={logo} alt="Ambianz Logo" style={{ width: 72, height: 58, objectFit: "contain" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <div
                            style={{
                                fontFamily: "'Cinzel', serif",
                                color: "#1A1C19",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: 3,
                                lineHeight: 1.2,
                            }}
                        >
                            AMBIANZ SOLUTIONS
                        </div>
                        <div style={{
                            color: "#3c5a25",
                            fontSize: 10,
                            letterSpacing: 4,
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 500,
                        }}>PVT. LTD.</div>
                    </div>
                </Link>

                {/* Nav Links — centered absolutely */}
                <nav
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        gap: 40,
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 10,
                                    letterSpacing: 3,
                                    textTransform: "uppercase",
                                    color: isActive ? "#3c5a25" : "#1A1C19",
                                    textDecoration: "none",
                                    padding: "6px 0",
                                    borderBottom: isActive ? "2px solid #adb940" : "2px solid transparent",
                                    fontWeight: isActive ? 600 : 400,
                                    transition: "color 0.2s, border-color 0.2s",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    {/* Account Dropdown */}
                    <div className="relative group py-2">
                        <FiUser className="text-[#1A1C19] text-base cursor-pointer opacity-70 transition-all duration-300 group-hover:text-[#3c5a25] group-hover:opacity-100" />
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-[#e0ddd5] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                            {/* Invisible Bridge */}
                            <div className="absolute -top-2 left-0 w-full h-2" />
                            
                            {/* Triangle Arrow */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e0ddd5] rotate-45 z-0" />
                            
                            <div className="relative bg-white z-10 flex flex-col py-1">
                                <Link 
                                    to="/signin" 
                                    className="px-5 py-3 text-[10px] font-raleway tracking-[2px] text-[#1A1C19] hover:bg-[#F8F6F1] hover:text-[#3c5a25] transition-colors duration-200 no-underline uppercase font-semibold text-left"
                                >
                                    Sign In
                                </Link>
                                <div className="h-[0.5px] bg-[#e0ddd5]/60 mx-4" />
                                <Link 
                                    to="/signup" 
                                    className="px-5 py-3 text-[10px] font-raleway tracking-[2px] text-[#1A1C19] hover:bg-[#F8F6F1] hover:text-[#3c5a25] transition-colors duration-200 no-underline uppercase font-semibold text-left"
                                >
                                    Create Account
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/favorites">
                        <FiHeart className="text-[#1A1C19] text-base cursor-pointer opacity-70 transition-all duration-300 hover:text-[#3c5a25] hover:opacity-100" />
                    </Link>
                    <div className="relative">
                        <FiShoppingCart className="text-[#1A1C19] text-base cursor-pointer opacity-70 transition-all duration-300 hover:text-[#3c5a25] hover:opacity-100" />
                        <div
                            style={{
                                position: "absolute",
                                top: -6,
                                right: -6,
                                width: 14,
                                height: 14,
                                background: "#adb940",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 8,
                                color: "#1A1C19",
                                fontWeight: 700,
                            }}
                        >
                            0
                        </div>
                    </div>
                    <button
                        onClick={openQuoteModal}
                        style={{
                            background: "#3c5a25",
                            color: "#F8F6F1",
                            fontSize: 9,
                            letterSpacing: 2,
                            padding: "8px 16px",
                            textDecoration: "none",
                            fontFamily: "'Raleway', sans-serif",
                            whiteSpace: "nowrap",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        GET A QUOTE
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "none",
                            color: "#1A1C19",
                        }}
                        className="mobile-menu-btn"
                    >
                        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </div>


        </header>
    );
}
