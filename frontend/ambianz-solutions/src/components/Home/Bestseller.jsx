// import React from 'react'
// import Cards from "../Home/Cards"
// import coffeetable from '../../images/coffeetable.jpg'
// import table from "../../images/table.jpg"

// const Bestseller = () => {
//     const obj = [
//         {
//             img: table,
//             pname: "Table",
//             price: "Rs.15,000",

//         },
//         {
//             img: coffeetable,
//             pname: "Coffee Table",
//             price: "Rs.25,000",

//         },
//         {
//             img: table,
//             pname: "Table",
//             price: "Rs.15,000",

//         },
//         {
//             img: coffeetable,
//             pname: "Coffee Table",
//             price: "Rs.25,000",

//         },

//         {
//             img: table,
//             pname: "Table",
//             price: "Rs.15,000",

//         },
//         {
//             img: coffeetable,
//             pname: "Coffee Table",
//             price: "Rs.25,000",

//         },
//         {
//             img: table,
//             pname: "Table",
//             price: "Rs.15,000",

//         },
//         {
//             img: coffeetable,
//             pname: "Coffee Table",
//             price: "Rs.25,000",

//         },



//     ]
//     return (


//        <div className='py-14 px-10 bg-[#F8F6F1]'>
//   <div className='flex items-center justify-between mb-10'>
//     <div>
//       <p className='font-raleway text-[11px] tracking-[0.18em] uppercase text-[#ADB940] mb-2'>
//         Curated picks
//       </p>
//       <h3 className='font-cinzel text-[32px] font-medium text-[#1A1C19]'>
//         Best Sellers
//       </h3>
//     </div>
//   </div>
//   <div className='px-6'>
//     <Cards object={obj} />
//   </div>
// </div>
//     )
// }

// export default Bestseller

import React from 'react'
import Cards from "../Home/Cards"
import coffeetable from '../../images/coffeetable.jpg'
import table from "../../images/table.jpg"

const Bestseller = () => {
    const obj = [
        { img: table, pname: "Table", price: "Rs. 15,000", badge: "Popular" },
        { img: coffeetable, pname: "Coffee Table", price: "Rs. 25,000" },
        { img: table, pname: "Table", price: "Rs. 15,000" },
        { img: coffeetable, pname: "Coffee Table", price: "Rs. 25,000", badge: "New" },
        { img: table, pname: "Table", price: "Rs. 15,000" },
        { img: coffeetable, pname: "Coffee Table", price: "Rs. 25,000" },
        { img: table, pname: "Table", price: "Rs. 15,000" },
        { img: coffeetable, pname: "Coffee Table", price: "Rs. 25,000" },
    ]

    return (
        <div className='py-10 px-10 bg-gray-100'>

            {/* Header */}
            {/* Header */}
            <div className='text-center mb-10'>
                <div className='flex items-center justify-center gap-3 mb-3'>
                    <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                        Curated Picks
                    </span>
                    <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                </div>
                <h3 className='font-cinzel text-[28px] font-bold text-gray-900'>
                    Trending Products
                </h3>
            </div>

            {/* Cards */}
            <div className='px-6'>
                <Cards object={obj} />
            </div>

        </div>
    )
}

export default Bestseller