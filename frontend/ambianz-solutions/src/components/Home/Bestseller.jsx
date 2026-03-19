import React from 'react'
import Cards from "../Home/Cards"
import coffeetable from '../../images/coffeetable.jpg'
import table from "../../images/table.jpg"

const Bestseller = () => {
    const obj = [
        {
            img: table,
            pname: "Table",
            price: "Rs.15,000",

        },
        {
            img: coffeetable,
            pname: "Coffee Table",
            price: "Rs.25,000",

        },
        {
            img: table,
            pname: "Table",
            price: "Rs.15,000",

        },
        {
            img: coffeetable,
            pname: "Coffee Table",
            price: "Rs.25,000",

        },

        {
            img: table,
            pname: "Table",
            price: "Rs.15,000",

        },
        {
            img: coffeetable,
            pname: "Coffee Table",
            price: "Rs.25,000",

        },
        {
            img: table,
            pname: "Table",
            price: "Rs.15,000",

        },
        {
            img: coffeetable,
            pname: "Coffee Table",
            price: "Rs.25,000",

        },



    ]
    return (
        <div className='bestseller py-14 px-10 bg-white '>
            <h3 className='font-cinzel text-[28px] font-bold text-center mb-2
                           text-[black]'>
                Best Sellers
            </h3>
            <p className='font-raleway text-center text-white/50 text-[14px] mb-10'>
                Our most loved pieces
            </p>
            <Cards object={obj} />

        </div>
    )
}

export default Bestseller