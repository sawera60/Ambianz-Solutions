import React from 'react'
import logo from '../../images/logo.png'
import { IoSearch } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { GrFavorite } from "react-icons/gr"
import { MdOutlineShoppingCart } from "react-icons/md"
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const isShop = location.pathname === '/shop'
    const isService = location.pathname === '/services'
    const isGetQuote = location.pathname === '/getquote'


    return (
        <>
            <div className='navbar w-full'>

                {/* Top Navbar */}
                <div className="top-navbar w-full h-[57px] flex items-center justify-between px-6 bg-green-900">

                    {/* LEFT — Logo + Brand */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo image" className='w-[55px] h-[50px] object-contain' />
                        <span className='font-cinzel text-[20px] font-bold text-white'>
                            Ambianz Solutions Pvt.Ltd
                        </span>
                    </div>

                    {/* CENTER — Search */}
                    <div className="searchbar bg-gray-100 flex items-center rounded-[20px] gap-[4px] px-4 py-2">
                        <IoSearch className='text-[18px] text-gray-400' />
                        <input
                            type="text"
                            placeholder='Search products or services....'
                            className='w-[320px] outline-none bg-transparent text-[14px]
                                       text-gray-600 placeholder:text-gray-300 font-raleway'
                        />
                    </div>

                    {/* RIGHT — Account, Favorites, Cart */}
                    <div className="flex items-center gap-6 pr-4">
                        <div className="flex items-center flex-col gap-0.5 cursor-pointer group">
                            <CgProfile className='text-[20px] text-white group-hover:text-[#d1c400]
                                                   transition-all duration-300' />
                            <span className='text-white text-[11px] font-raleway
                                             group-hover:text-[#d1c400] transition-all duration-300'>
                                Account
                            </span>
                        </div>
                        <div className="flex items-center flex-col gap-0.5 cursor-pointer group">
                            <GrFavorite className='text-[20px] text-white group-hover:text-[#d1c400]
                                                    transition-all duration-300' />
                            <span className='text-white text-[11px] font-raleway
                                             group-hover:text-[#d1c400] transition-all duration-300'>
                                Favorites
                            </span>
                        </div>
                        <div className="flex items-center flex-col gap-0.5 cursor-pointer group relative">
                            <MdOutlineShoppingCart className='text-[20px] text-white group-hover:text-[#d1c400]
                                                               transition-all duration-300' />
                            <span className='absolute -top-1 -right-2 w-4 h-4 bg-[#d1c400] text-black
                                             text-[9px] font-bold font-cinzel flex items-center justify-center'>
                                0
                            </span>
                            <span className='text-white text-[11px] font-raleway
                                             group-hover:text-[#d1c400] transition-all duration-300'>
                                Cart
                            </span>
                        </div>
                    </div>

                </div>

                {/* Mid Navbar */}
                <div className="flex items-center justify-center gap-[40px] py-3 bg-white
                                border-b border-gray-100">
                    {[
                        { to: "/", label: "HOME" },
                        { to: "/shop", label: "SHOP" },
                        { to: "/services", label: "SERVICES" },
                        { to: "/getquote", label: "GET A QUOTE" },
                    ].map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `font-cinzel text-[13px] cursor-pointer tracking-[2px] border-b-2
                                 transition-all duration-300
                                 ${isActive
                                    ? 'border-[#d1c400] text-green-900 font-bold'
                                    : 'border-transparent text-gray-800 font-semibold hover:text-green-900 hover:border-[#d1c400]'
                                }`
                            }>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Bottom Navbar — hidden on shop page */}

                {!isService && !isGetQuote && !isShop && (
                    <div className="flex items-center justify-center gap-3 py-3 bg-gray-100
                                    border-b border-gray-100">
                        {['Lighting', 'Furniture', 'Home Decor', 'Hardware', 'Mirrors', 'Curtains'].map((cat) => (
                            <button key={cat}
                                className='font-raleway rounded-full border border-gray-200 bg-white
                                           text-gray-500 px-5 py-1.5 text-[13px]
                                           hover:bg-[#e4d722] hover:border-[#d1c400] hover:text-black
                                           transition-all duration-300 cursor-pointer'>
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default Navbar