import React from 'react'
// import logo from '../images/logo.png'
import Simple_logo from '../images/Simple_logo.png'
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
    return (
        // Navbar
        <div className='navbar w-[full] '>
            <div className="top-navbar flex items-center justify-between border-b-[1px] border-solid border-gray-300 p-[10px] bg-green-900 ">
                <div className="flex items-center justify-center">
                    <img src={Simple_logo} alt="logo image" className='w-[75px] h-[50px] object-contain' />
                    <span className='font-bold text-[25px] text-white'>
                        Ambianz Solutions Pvt.Ltd
                    </span>
                </div>
                <div className="searchbar  bg-gray-200 flex items-center justify-between rounded-[20px] gap-[8px] p-[8px]    ">
                    <IoSearch /><input type="text" placeholder='Search products or services..' className='w-[400px] outline-none ' />
                </div>
                <div className="sidebar gap-[10px] flex items-center justify-center">
                    <div className="profile flex items-center flex-col">
                        <CgProfile className='text-[22px] text-white' /> <span className='text-white'>Account</span>
                    </div>
                    <div className="favorite flex items-center flex-col ">
                        <GrFavorite className='text-[22px] text-white' /> <span className='text-white'>Favorites</span>
                    </div>
                    <div className="cart flex items-center flex-col">
                        <MdOutlineShoppingCart className='text-[22px] text-white ' /> <span className='text-white'>Cart</span>
                    </div>


                </div>

            </div>
            <div className="mid-navbar flex items-center justify-center gap-[20px] m-[10px] pb-[5px] ">
                <p className='font-medium text-[20px] '>Home</p>
                <p className='font-medium text-[20px]'>Shop</p>
                <p className='font-medium text-[20px]'>Services</p>
                <p className='font-medium text-[20px]'>Contact</p>
            </div>
            <div className="bottom-navbar w-full bg-gray-200 p-[10px] flex items-center justify-center gap-[20px] m-[10px] p-[10px] ">
                <button className='rounded-[20px] outline-none border-none bg-yellow-300 p-[9px] '>Lighting</button>
                <button className='rounded-[20px] outline-none border-none bg-yellow-300 p-[9px]' >Furniture</button>
                <button className='rounded-[20px] outline-none border-none bg-yellow-300 p-[9px]' >Home Decor</button>
                <button className='rounded-[20px] outline-none border-none bg-yellow-300 p-[9px]' >Hardware</button>
                <button className='rounded-[20px] outline-none border-none bg-yellow-300 p-[9px]' >Mirror</button>
            </div>
        </div>

        // HERO SECTION

    )
}

export default Navbar