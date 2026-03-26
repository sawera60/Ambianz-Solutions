import React from 'react'
import logo from '../../images/logo.png'
//import Simple_logo from '../images/Simple_logo.png'

import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (

        <>
            {/* -------------------------- Navbar--------------------------- */}
            <div className='navbar w-full sticky top-0 z-50  '>
                <div className="w-full h-[20px] bg-[#f0ece4] text-black flex p-[8px] justify-between items-center">
                    <span className='text-[12px]'>Free delivery on orders above 5000-/</span>
                    <div className="flex items-center justify-center gap-1 cursor-pointer">

                        <IoMdClose className='text-[12px] text-white' />
                    </div>
                </div>
                {/* Top Navbar */}
                <div className="top-navbar w-full h-[55px] flex items-center justify-between border-b-[1px] border-solid border-gray-300 bg-green-900  ">
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="logo image" className='w-[85px] h-[50px] object-contain' />
                        <span className='font-semibold text-[22px] font-cinzel text-white drop-shadow-[0.5px_.5px_0.5px_#3c5a25]'>
                            Ambianz Solutions Pvt.Ltd
                        </span>
                    </div>
                    <div className="searchbar  bg-gray-200 flex items-center justify-center rounded-[20px] gap-[4px] p-[2px]    ">
                        <IoSearch className='text-[28px] pl-[8px]' />
                        <input type="text" placeholder='Search products or services....' className='w-[370px] outline-none pl-[4px] ' />
                    </div>
                    <div className="sidebar gap-[10px] flex items-center justify-center pr-[15px] ">
                        <div className="profile flex items-center flex-col">
                            <CgProfile className='text-[18px] text-white' /> <span className='text-white text-[14px] font-sans' >Account</span>
                        </div>
                        <div className="favorite flex items-center flex-col ">
                            <GrFavorite className='text-[18px] text-white' /> <span className='text-white text-[14px] font-sans' >Favorites</span>
                        </div>
                        <div className="cart flex items-center flex-col">
                            <MdOutlineShoppingCart className='text-[18px] text-white ' /> <span className='text-white text-[14px] font-sans'>Cart</span>
                        </div>

                    </div>
                </div>
                {/*-------------- Mid Navbar--------- */}


                <div className="mid-navbar flex items-center justify-center gap-[22px] m-[4px] pt-[3px] bg-white">
                    <NavLink to="/" className={({ isActive }) => `font-semibold text-[15px] font-cinzel text-gray-800 cursor-pointer border-b-2 transition-all duration-300 ${isActive ? 'border-[#FFF44F]' : 'border-transparent hover:border-[#FFF44F]'}`
                    }>
                        HOME
                    </NavLink>

                    <NavLink to="/shop"
                        className={({ isActive }) =>
                            `font-semibold text-[15px] font-cinzel text-gray-800 cursor-pointer border-b-2
             transition-all duration-300
             ${isActive ? 'border-[#FFF44F]' : 'border-transparent hover:border-[#FFF44F]'}`
                        }>
                        SHOP
                    </NavLink>

                    <NavLink to="/services"
                        className={({ isActive }) =>
                            `font-semibold text-[15px] font-cinzel text-gray-800 cursor-pointer border-b-2
             transition-all duration-300
             ${isActive ? 'border-[#FFF44F]' : 'border-transparent hover:border-[#FFF44F]'}`
                        }>
                        SERVICES
                    </NavLink>

                    <NavLink to="/getquote"
                        className={({ isActive }) =>
                            `font-semibold text-[15px] font-cinzel text-gray-800 cursor-pointer border-b-2
             transition-all duration-300
             ${isActive ? 'border-[#FFF44F]' : 'border-transparent hover:border-[#FFF44F]'}`
                        }>
                        Get a Quote
                    </NavLink>
                </div>
                <div className="bottom-navbar w-full h-[50px] bg-gray-200 p-[10px] flex items-center justify-center gap-[20px]  ">
                    <button className='rounded-[15px] outline-none border-none  bg-[white] text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway '>Lighting</button>
                    <button className='rounded-[15px] outline-none border-none   bg-white text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway' >Furniture</button>
                    <button className='rounded-[15px] outline-none border-none  bg-white text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway' >Home Decor</button>
                    <button className='rounded-[15px] outline-none border-none bg-white text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway' >Hardware</button>
                    <button className='rounded-[15px] outline-none border-none bg-white text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway' >Mirrors</button>
                    <button className='rounded-[15px] outline-none border-none bg-[#e4d722] text-gray-800 p-[4px] text-[14px] w-[100px] font-raleway' >Curtains</button>
                </div>
            </div>



        </>

    )
}

export default Navbar