// import React from 'react'
// import Designgallery from './Designgallery'
// import WhyUs from './WhyUs'
// import CTAbanner from './CTAbanner'

// // Placeholder images from unsplash (replace with your own later)
// const kitchenImg = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
// const doorImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
// const wardrobeImg = "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800"
// const mediaWallImg = "https://images.unsplash.com/photo-1662454420647-3d20ddcdb8f8?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// const services = [
//   {
//     img: kitchenImg,
//     title: "Bespoke Kitchens",
//     desc: "Custom-designed kitchens built around your lifestyle. From modern minimalist to classic luxury — crafted with premium materials and precision.",
//     tag: "Most Popular"
//   },
//   {
//     img: doorImg,
//     title: "Designer Doors",
//     desc: "Make a statement from the entrance. Our bespoke doors combine elegance, security and craftsmanship tailored to your home's character.",
//     tag: null
//   },
//   {
//     img: wardrobeImg,
//     title: "Bespoke Wardrobes",
//     desc: "Tailored organizational luxury. Every wardrobe is designed to maximize space while reflecting your personal style and taste.",
//     tag: null
//   },
//   {
//     img: mediaWallImg,
//     title: "Media Walls",
//     desc: "Transform your living room into a cinematic experience. Custom media walls that blend technology seamlessly with stunning design.",
//     tag: "Trending"
//   },
// ]

// const Services = () => {
//   return (
//     //  bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]  bg-clip-text text-transparent
//     <>
//       <div className='py-16 px-10 '>

//         {/* Heading */}
//         <div className='text-center mb-12'>
//           <span className='font-raleway text-[12px] text-black tracking-widest uppercase'>
//             What We Offer
//           </span>
//           <h2 className='font-cinzel text-[36px] font-bold mt-3 text-black'>
//             Our Bespoke Services
//           </h2>
//           <p className='font-raleway text-[15px] text-gray-800 mt-4 max-w-[620px] mx-auto leading-relaxed'>
//             Transforming your living space with premium craftsmanship and innovative
//             3D-modeled design solutions tailored to your unique lifestyle.
//           </p>
//         </div>

//         {/* Cards Grid — 2 per row */}
//         <div className='grid grid-cols-2 gap-6'>
//           {services.map((service, index) => (
//             <div key={index}
//               className='relative rounded-sm overflow-hidden group cursor-pointer h-[380px]'>

//               {/* Image */}
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className='w-full h-full object-cover
//                                        group-hover:scale-105 transition-all duration-700'
//               />

//               {/* Gradient Overlay */}
//               <div className='absolute inset-0 bg-gradient-to-t
//                                         from-black/95 via-black/40 to-transparent' />

//               {/* Tag Badge */}
//               {service.tag && (
//                 <span className='absolute top-4 right-4 font-raleway text-[11px]
//                                              bg-[#d1c400] text-black px-3 py-1
//                                              font-semibold tracking-wider uppercase'>
//                   {service.tag}
//                 </span>
//               )}

//               {/* Text Content */}
//               <div className='absolute bottom-0 left-0 p-8 flex flex-col gap-3'>
//                 <h3 className='font-cinzel text-[22px] font-bold text-white
//                                            group-hover:text-[#d1c400] transition-all duration-300'>
//                   {service.title}
//                 </h3>
//                 <p className='font-raleway text-[13px] text-white/60
//                                           max-w-[380px] leading-relaxed'>
//                   {service.desc}
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className='flex gap-3 mt-2'>
//                   <button className='font-raleway px-5 py-2 bg-green-800 text-white
//                                                    text-[12px] font-semibold border-2 border-green-800
//                                                    hover:bg-transparent hover:text-[#d1c400]
//                                                    hover:border-[#d1c400] transition-all duration-300'>
//                     Request Quote
//                   </button>
//                   <button className='font-raleway px-5 py-2 bg-transparent text-white
//                                                    text-[12px] font-semibold border-2 border-transparent
//                                                    hover:text-[#d1c400] hover:border-[#d1c400]
//                                                    transition-all duration-300'>
//                     View 3D Designs →
//                   </button>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//       <Designgallery />
//       <WhyUs />
//       <CTAbanner/>
//     </>
//   )
// }

// export default Services

import React from 'react'
import Designgallery from './Designgallery'
import WhyUs from './WhyUs'
import CTAbanner from './CTAbanner'

const kitchenImg = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
const doorImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
const wardrobeImg = "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800"
const mediaWallImg = "https://images.unsplash.com/photo-1662454420647-3d20ddcdb8f8?w=800"

const services = [
    {
        img: kitchenImg,
        title: "Bespoke Kitchens",
        desc: "Custom-designed kitchens built around your lifestyle. From modern minimalist to classic luxury — crafted with premium materials and precision.",
        tag: "Most Popular"
    },
    {
        img: doorImg,
        title: "Designer Doors",
        desc: "Make a statement from the entrance. Our bespoke doors combine elegance, security and craftsmanship tailored to your home's character.",
        tag: null
    },
    {
        img: wardrobeImg,
        title: "Bespoke Wardrobes",
        desc: "Tailored organizational luxury. Every wardrobe is designed to maximize space while reflecting your personal style and taste.",
        tag: null
    },
    {
        img: mediaWallImg,
        title: "Media Walls",
        desc: "Transform your living room into a cinematic experience. Custom media walls that blend technology seamlessly with stunning design.",
        tag: "Trending"
    },
]

const Services = () => {
    return (
        <>
            <div className='py-16 px-10 bg-white'>

                {/* Heading */}
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                        <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                            What We Offer
                        </span>
                        <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                    </div>
                    <h2 className='font-cinzel text-[36px] font-bold
                                   text-gray-900'>
                        Our Bespoke Services
                    </h2>
                    <p className='font-raleway text-[14px] text-gray-400 mt-4
                                   max-w-[580px] mx-auto leading-relaxed'>
                        Transforming your living space with premium craftsmanship and innovative
                        3D-modeled design solutions tailored to your unique lifestyle.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-2 gap-6'>
                    {services.map((service, index) => (
                        <div key={index}
                             className='relative rounded-sm overflow-hidden group cursor-pointer h-[380px]'>
                            <img
                                src={service.img}
                                alt={service.title}
                                className='w-full h-full object-cover
                                           group-hover:scale-105 transition-all duration-700'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t
                                            from-black/95 via-black/40 to-transparent' />
                            {service.tag && (
                                <span className='absolute top-4 right-4 font-raleway text-[11px]
                                                 bg-[#d1c400] text-black px-3 py-1
                                                 font-semibold tracking-wider uppercase'>
                                    {service.tag}
                                </span>
                            )}
                            <div className='absolute bottom-0 left-0 p-8 flex flex-col gap-3'>
                                <h3 className='font-cinzel text-[22px] font-bold text-white
                                               group-hover:text-[#d1c400] transition-all duration-300'>
                                    {service.title}
                                </h3>
                                <p className='font-raleway text-[13px] text-white/60
                                              max-w-[380px] leading-relaxed'>
                                    {service.desc}
                                </p>
                                <div className='flex gap-3 mt-2'>
                                    <button className='font-raleway px-5 py-2 bg-green-800 text-white
                                                       text-[12px] font-semibold border-2 border-green-800
                                                       hover:bg-transparent hover:text-[#d1c400]
                                                       hover:border-[#d1c400] transition-all duration-300'>
                                        Request Quote
                                    </button>
                                    <button className='font-raleway px-5 py-2 bg-transparent text-white
                                                       text-[12px] font-semibold border-2 border-transparent
                                                       hover:text-[#d1c400] hover:border-[#d1c400]
                                                       transition-all duration-300'>
                                        View 3D Designs →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Designgallery />
            <WhyUs />
            <CTAbanner />
        </>
    )
}

export default Services
