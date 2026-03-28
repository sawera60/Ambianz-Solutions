
import React, { useState } from 'react'

const products = [
    { id: 1, name: "Luxury Sofa", category: "Furniture", price: "Rs. 85,000", material: "Velvet", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
    { id: 2, name: "Pendant Light", category: "Lighting", price: "Rs. 12,000", material: "Metal", img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400" },
    { id: 3, name: "Wall Mirror", category: "Mirrors", price: "Rs. 18,000", material: "Glass", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400" },
    { id: 4, name: "Coffee Table", category: "Furniture", price: "Rs. 35,000", material: "Wood", img: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=400" },
    { id: 5, name: "Floor Lamp", category: "Lighting", price: "Rs. 9,500", material: "Metal", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { id: 6, name: "Cabinet Handle", category: "Hardware", price: "Rs. 2,500", material: "Brass", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 7, name: "Wardrobe Unit", category: "Furniture", price: "Rs. 1,20,000", material: "Wood", img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400" },
    { id: 8, name: "Ceiling Light", category: "Lighting", price: "Rs. 15,000", material: "Crystal", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400" },
    { id: 9, name: "Decorative Vase", category: "Home Decor", price: "Rs. 4,500", material: "Ceramic", img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400" },
    { id: 10, name: "Dining Table", category: "Furniture", price: "Rs. 95,000", material: "Marble", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400" },
    { id: 11, name: "Wall Sconce", category: "Lighting", price: "Rs. 7,800", material: "Metal", img: "https://images.unsplash.com/photo-1513506003901-1e6a35f04b7d?w=400" },
    { id: 12, name: "Curtain Set", category: "Curtains", price: "Rs. 22,000", material: "Linen", img: "https://images.unsplash.com/photo-1558618047-f4743f7e3f4b?w=400" },
]

const categories = ["All Products", "Furniture", "Lighting", "Mirrors", "Hardware", "Home Decor", "Curtains", "Planters"]
const categoryCounts = categories.map(() => Math.floor(Math.random() * 20) + 1)
const materials = ["Wood", "Metal", "Glass", "Marble", "Velvet", "Ceramic", "Brass", "Linen", "Crystal"]

const Shop = () => {
    const [isGrid, setIsGrid] = useState(true)

    return (
        <div className='min-h-screen bg-white'>

            {/* ---- Hero Banner ---- */}
            <div className='relative w-full h-[220px] overflow-hidden'>
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400"
                    alt="Shop Banner"
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/55' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            Browse
                        </span>
                        <div className='h-[1px] w-[40px] bg-[#d1c400]' />
                    </div>
                    <h1 className='font-cinzel text-[36px] font-bold text-white'>
                        Our Collection
                    </h1>
                    <p className='font-raleway text-[13px] text-white/60 mt-2'>
                        Curated for premium living
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex px-10 py-8 gap-8'>

                {/* LEFT PANE — Filters */}
                <div className='w-[240px] shrink-0 flex flex-col gap-8'>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder='Search products...'
                        className='font-raleway text-[13px] border-2 border-gray-100
                                   px-4 py-2.5 outline-none focus:border-[#d1c400]
                                   transition-all duration-300 placeholder:text-gray-300'
                    />

                    {/* Categories */}
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-cinzel text-[13px] font-bold text-green-900
                                       tracking-widest uppercase border-b border-gray-100 pb-3'>
                            Categories
                        </h4>
                        {categories.map((cat, index) => (
                            <div key={index} className='flex items-center justify-between group cursor-pointer'>
                                <span className={`font-raleway text-[13px] transition-all duration-300
                                                  group-hover:text-[#d1c400]
                                                  ${index === 0 ? 'text-[#d1c400] font-semibold' : 'text-gray-400'}`}>
                                    {cat}
                                </span>
                                <span className='font-raleway text-[11px] text-gray-300
                                                 group-hover:text-[#d1c400] transition-all duration-300'>
                                    {categoryCounts[index]}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Price Range */}
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-cinzel text-[13px] font-bold text-green-900
                                       tracking-widest uppercase border-b border-gray-100 pb-3'>
                            Price Range
                        </h4>
                        <input type="range" min="0" max="200000" defaultValue="200000"
                            className='w-full accent-green-800 cursor-pointer' />
                        <div className='flex justify-between'>
                            <span className='font-raleway text-[12px] text-gray-400'>Rs. 0</span>
                            <span className='font-raleway text-[12px] text-[#d1c400] font-semibold'>Rs. 2,00,000</span>
                        </div>
                    </div>

                    {/* Material */}
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-cinzel text-[13px] font-bold text-green-900
                                       tracking-widest uppercase border-b border-gray-100 pb-3'>
                            Material
                        </h4>
                        {materials.map((mat, index) => (
                            <div key={index} className='flex items-center gap-3 cursor-pointer group'>
                                <div className='w-4 h-4 border-2 border-gray-200
                                                group-hover:border-[#d1c400]
                                                transition-all duration-300 shrink-0' />
                                <span className='font-raleway text-[13px] text-gray-400
                                                 group-hover:text-[#d1c400] transition-all duration-300'>
                                    {mat}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Clear Filters */}
                    <button className='font-raleway text-[12px] tracking-widest uppercase
                                       py-2.5 border-2 border-gray-200 text-gray-300
                                       hover:border-[#d1c400] hover:text-[#d1c400]
                                       transition-all duration-300 cursor-pointer'>
                        Clear Filters
                    </button>

                </div>

                {/* RIGHT PANE — Products */}
                <div className='flex-1 flex flex-col gap-6'>

                    {/* Top Bar — Results + Sort + View */}
                    <div className='flex items-center justify-between border-b border-gray-100 pb-4'>

                        {/* Results count */}
                        <p className='font-raleway text-[13px] text-gray-400'>
                            Showing <span className='text-green-900 font-semibold'>1-12</span> of{' '}
                            <span className='text-green-900 font-semibold'>60</span> products
                        </p>

                        <div className='flex items-center gap-4'>

                            {/* Sort By — moved here ✅ */}
                            <select className='font-raleway text-[13px] text-gray-400 border-2
                                               border-gray-100 px-3 py-2 outline-none bg-white
                                               focus:border-[#d1c400] transition-all duration-300 cursor-pointer'>
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>

                            {/* Divider */}
                            <div className='w-[1px] h-6 bg-gray-200' />

                            {/* View Toggle */}
                            <div className='flex items-center gap-2'>
                                <span className='font-raleway text-[12px] text-gray-300 tracking-widest uppercase'>
                                    View
                                </span>
                                <button
                                    onClick={() => setIsGrid(true)}
                                    className={`w-9 h-9 flex items-center justify-center border-2
                                                transition-all duration-300 cursor-pointer
                                                ${isGrid
                                                    ? 'border-green-800 bg-green-800 text-white'
                                                    : 'border-gray-200 text-gray-300 hover:border-green-800 hover:text-green-800'
                                                }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3A1.5 1.5 0 0 1 15 10.5v3A1.5 1.5 0 0 1 13.5 15h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setIsGrid(false)}
                                    className={`w-9 h-9 flex items-center justify-center border-2
                                                transition-all duration-300 cursor-pointer
                                                ${!isGrid
                                                    ? 'border-green-800 bg-green-800 text-white'
                                                    : 'border-gray-200 text-gray-300 hover:border-green-800 hover:text-green-800'
                                                }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Product Grid / List */}
                    <div className={isGrid ? 'grid grid-cols-3 gap-5' : 'flex flex-col gap-4'}>
                        {products.map((product) => (
                            isGrid ? (
                                <div key={product.id}
                                    className='group flex flex-col border border-gray-100
                                               hover:border-[#d1c400]/30 hover:shadow-lg
                                               transition-all duration-300 cursor-pointer overflow-hidden'>
                                    <div className='overflow-hidden h-[220px] relative'>
                                        <img src={product.img} alt={product.name}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
                                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20
                                                        transition-all duration-300 flex items-center justify-center'>
                                            <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2'>
                                                <button className='w-9 h-9 bg-white flex items-center justify-center
                                                                   hover:bg-[#d1c400] transition-all duration-300 text-[14px]'>🤍</button>
                                                <button className='w-9 h-9 bg-white flex items-center justify-center
                                                                   hover:bg-[#d1c400] transition-all duration-300 text-[14px]'>🛒</button>
                                            </div>
                                        </div>
                                        <span className='absolute top-3 left-3 font-raleway text-[10px]
                                                         bg-white/90 text-green-900 px-2 py-1 tracking-widest uppercase'>
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <h4 className='font-cinzel text-[14px] font-semibold text-gray-800
                                                       group-hover:text-green-900 transition-all duration-300'>
                                            {product.name}
                                        </h4>
                                        <p className='font-raleway text-[12px] text-gray-300'>{product.material}</p>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='font-cinzel text-[15px] font-bold text-green-900'>{product.price}</span>
                                            <button className='font-raleway text-[11px] px-3 py-1.5
                                                               bg-green-800 text-white border-2 border-green-800
                                                               hover:bg-transparent hover:text-[#d1c400]
                                                               hover:border-[#d1c400] transition-all duration-300'>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div key={product.id}
                                    className='group flex flex-row border border-gray-100
                                               hover:border-[#d1c400]/30 hover:shadow-md
                                               transition-all duration-300 cursor-pointer overflow-hidden'>
                                    <div className='overflow-hidden w-[180px] h-[130px] shrink-0 relative'>
                                        <img src={product.img} alt={product.name}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
                                        <span className='absolute top-2 left-2 font-raleway text-[10px]
                                                         bg-white/90 text-green-900 px-2 py-1 tracking-widest uppercase'>
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between w-full px-6 py-4'>
                                        <div className='flex flex-col gap-1'>
                                            <h4 className='font-cinzel text-[15px] font-semibold text-gray-800
                                                           group-hover:text-green-900 transition-all duration-300'>
                                                {product.name}
                                            </h4>
                                            <p className='font-raleway text-[12px] text-gray-300'>{product.material}</p>
                                        </div>
                                        <div className='flex items-center gap-6'>
                                            <span className='font-cinzel text-[16px] font-bold text-green-900'>{product.price}</span>
                                            <button className='font-raleway text-[11px] px-4 py-2
                                                               bg-green-800 text-white border-2 border-green-800
                                                               hover:bg-transparent hover:text-[#d1c400]
                                                               hover:border-[#d1c400] transition-all duration-300'>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className='flex items-center justify-center gap-2 mt-4'>
                        <button className='font-cinzel w-9 h-9 border-2 border-gray-200 text-gray-300
                                           hover:border-[#d1c400] hover:text-[#d1c400]
                                           transition-all duration-300 cursor-pointer text-[16px]'>‹</button>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button key={num}
                                className={`font-cinzel w-9 h-9 border-2 text-[13px] transition-all duration-300 cursor-pointer
                                            ${num === 1
                                                ? 'border-green-800 bg-green-800 text-white'
                                                : 'border-gray-200 text-gray-300 hover:border-[#d1c400] hover:text-[#d1c400]'
                                            }`}>
                                {num}
                            </button>
                        ))}
                        <button className='font-cinzel w-9 h-9 border-2 border-gray-200 text-gray-300
                                           hover:border-[#d1c400] hover:text-[#d1c400]
                                           transition-all duration-300 cursor-pointer text-[16px]'>›</button>
                    </div>

                </div>
            </div>

            {/* Bottom Banner */}
           

        </div>
    )
}

export default Shop