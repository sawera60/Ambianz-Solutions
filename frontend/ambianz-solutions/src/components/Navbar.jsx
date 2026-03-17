import React from 'react'
import logo from '../images/logo.png'
//import Simple_logo from '../images/Simple_logo.png'
import hero from "../images/hero.jpg"
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
    return (

        <>
        {/* -------------------------- Navbar--------------------------- */}
            <div className='navbar w-[full]  '>
                {/* Top Navbar */}
                <div className="top-navbar w-full h-[55px] flex items-center justify-between border-b-[1px] border-solid border-gray-300   ">
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="logo image" className='w-[85px] h-[50px] object-contain' />
                        <span className='font-semibold text-[22px] font-cinzel text-green-900 drop-shadow-[1px_.5px_0.5px_#3c5a25]'>
                            Ambianz Solutions Pvt.Ltd
                        </span>
                    </div>
                    <div className="searchbar  bg-gray-200 flex items-center justify-center rounded-[20px] gap-[4px] p-[2px]    ">
                        <IoSearch className='text-[28px] pl-[8px]' />
                        <input type="text" placeholder='Search products or services....' className='w-[370px] outline-none pl-[4px] ' />
                    </div>
                    <div className="sidebar gap-[10px] flex items-center justify-center pr-[15px] ">
                        <div className="profile flex items-center flex-col">
                            <CgProfile className='text-[18px] text-gray-800' /> <span className='text-gray-800 text-[14px]' >Account</span>
                        </div>
                        <div className="favorite flex items-center flex-col ">
                            <GrFavorite className='text-[18px] text-gray-800' /> <span className='text-gray-800 text-[14px]' >Favorites</span>
                        </div>
                        <div className="cart flex items-center flex-col">
                            <MdOutlineShoppingCart className='text-[18px] text-gray-800 ' /> <span className='text-gray-800 text-[14px]'>Cart</span>
                        </div>

                    </div>
                </div>
                {/*-------------- Mid Navbar--------- */}
                <div className="mid-navbar flex items-center justify-center gap-[20px] m-[8px] pb-[5px] bg-[#f0ece4] bg-white ">
                    <p className='font-semibold text-[20px] font-raleway text-gray-800 cursor-pointer border-b-2 border-transparent hover:border-[#FFF44F] transition-all duration-300 '>Home</p>
                    <p className='font-semibold text-[20px] font-raleway text-gray-800'>Shop</p>
                    <p className='font-semibold text-[20px] font-raleway text-gray-800'>Services</p>
                    <p className='font-semibold text-[20px] font-raleway text-gray-800'>Contact</p>
                </div>
                <div className="bottom-navbar w-full h-[50px] bg-[#f0ece4] p-[10px] flex items-center justify-center gap-[20px]  ">
                    <button className='rounded-[15px] outline-none border-none bg-yellow-300 p-[4px] text-[14px] w-[100px] font-raleway '>Lighting</button>
                    <button className='rounded-[20px] outline-none border-none bg-yellow-300  p-[4px] text-[14px] w-[100px] font-raleway' >Furniture</button>
                    <button className='rounded-[20px] outline-none border-none bg-yellow-300  p-[4px] text-[14px] w-[100px] font-raleway' >Home Decor</button>
                    <button className='rounded-[20px] outline-none border-none bg-yellow-300  p-[4px] text-[14px] w-[100px] font-raleway' >Hardware</button>
                    <button className='rounded-[20px] outline-none border-none bg-yellow-300  p-[4px] text-[14px] w-[100px] font-raleway' >Mirror</button>
                </div>
            </div>

        {/* // -------HERO SECTION----------- */}
            <div className="herosection">
                <div className="img w-full">
                    <img src={hero} alt="" />
                </div>
            </div>

        </>

    )
}

export default Navbar