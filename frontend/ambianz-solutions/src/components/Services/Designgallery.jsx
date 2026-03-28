// // import React from 'react'
// // import{ useState } from 'react'

// // // Kitchen imports
// // import kitchen1 from "../../images/3d-kitchen/kitchen1.png"
// // import kitchen2 from "../../images/3d-kitchen/kitchen2.png"
// // import kitchen3 from "../../images/3d-kitchen/kitchen3.png"

// // // Wardrobe imports
// // import wardrobe1 from "../../images/3d-wardrobe/wardrobe1.jpg"
// // import wardrobe2 from "../../images/3d-wardrobe/wardrobe2.jpg"

// // // Doors imports
// // import door1 from "../../images/3d-doors/door1.png"

// // // Media Wall imports
// // import mediawall1 from "../../images/3d-mediawall/mediawall1.png"
// // import mediawall2 from "../../images/3d-mediawall/mediawall2.jpg"
// // const tabs = [
// //     {
// //         label: "Kitchen",
// //         images: [kitchen1, kitchen2, kitchen3]
// //     },
// //     {
// //         label: "Wardrobe",
// //         images: [wardrobe1, wardrobe2]
// //     },
// //     {
// //         label: "Doors",
// //         images: door1
// //     },
// //     {
// //         label: "Media Wall",
// //         images: [mediawall1, mediawall2]
// //     },
// // ]
// // const Designgallery = () => {
// //     const [activeTab, setActiveTab] = useState(0)
// //     const [lightbox, setLightbox] = useState(null) // stores clicked image
// //   return (
// //       <div className='py-16 px-10 bg-black'>

// //             {/* Heading */}
// //             <div className='text-center mb-10'>
// //                 <span className='font-raleway text-[12px] text-[#d1c400] tracking-widest uppercase'>
// //                     Our Work
// //                 </span>
// //                 <h2 className='font-cinzel text-[36px] font-bold mt-3
// //                                bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
// //                                bg-clip-text text-transparent'>
// //                     3D Design Gallery
// //                 </h2>
// //                 <p className='font-raleway text-[15px] text-white/50 mt-4 max-w-[520px]
// //                                mx-auto leading-relaxed'>
// //                     Explore our photorealistic 3D designs before a single nail is hammered.
// //                     See your dream space come to life.
// //                 </p>
// //             </div>

// //             {/* Tabs */}
// //             <div className='flex justify-center gap-3 mb-10 flex-wrap'>
// //                 {tabs.map((tab, index) => (
// //                     <button
// //                         key={index}
// //                         onClick={() => setActiveTab(index)}
// //                         className={`font-raleway px-6 py-2 text-[14px] font-semibold
// //                                     border-2 transition-all duration-300 cursor-pointer
// //                                     ${activeTab === index
// //                                         ? 'bg-green-800 border-green-800 text-white'
// //                                         : 'bg-transparent border-white/20 text-white/50 hover:border-[#d1c400] hover:text-[#d1c400]'
// //                                     }`}
// //                     >
// //                         {tab.label}
// //                     </button>
// //                 ))}
// //             </div>

// //             {/* Image Grid */}
// //             <div className='grid grid-cols-3 gap-4'>
// //                 {tabs[activeTab].images.map((img, index) => (
// //                     <div
// //                         key={index}
// //                         className='overflow-hidden rounded-sm cursor-pointer group h-[260px]'
// //                         onClick={() => setLightbox(img)}
// //                     >
// //                         <img
// //                             src={img}
// //                             alt={`design-${index}`}
// //                             className='w-full h-full object-cover
// //                                        group-hover:scale-110 transition-all duration-500'
// //                         />
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Lightbox Popup */}
// //             {lightbox && (
// //                 <div
// //                     className='fixed inset-0 bg-black/90 z-50 flex items-center
// //                                 justify-center p-6'
// //                     onClick={() => setLightbox(null)}  // click outside to close
// //                 >
// //                     {/* Close Button */}
// //                     <button
// //                         className='absolute top-6 right-8 text-white text-[30px]
// //                                    hover:text-[#d1c400] transition-all duration-300'
// //                         onClick={() => setLightbox(null)}
// //                     >
// //                         ✕
// //                     </button>

// //                     {/* Full Image */}
// //                     <img
// //                         src={lightbox}
// //                         alt="design"
// //                         className='max-w-[90vw] max-h-[85vh] object-contain rounded-sm'
// //                         onClick={(e) => e.stopPropagation()}
// //                     />
// //                 </div>
// //             )}

// //         </div>
   
// //   )
// // }

// // export default Designgallery



// import React, { useState } from 'react'

// // Kitchen imports
// import kitchen1 from "../../images/3d-kitchen/kitchen1.png"
// import kitchen2 from "../../images/3d-kitchen/kitchen2.png"
// import kitchen3 from "../../images/3d-kitchen/kitchen3.png"

// // Wardrobe imports
// import wardrobe1 from "../../images/3d-wardrobe/wardrobe1.jpg"
// import wardrobe2 from "../../images/3d-wardrobe/wardrobe2.jpg"

// // Doors imports
// import door1 from "../../images/3d-doors/door1.png"

// // Media Wall imports
// import mediawall1 from "../../images/3d-mediawall/mediawall1.png"
// import mediawall2 from "../../images/3d-mediawall/mediawall2.jpg"

// const tabs = [
//     { label: "Kitchen", icon: "✦", images: [kitchen1, kitchen2, kitchen3] },
//     { label: "Wardrobe", icon: "✦", images: [wardrobe1, wardrobe2] },
//     { label: "Doors", icon: "✦", images: [door1] },
//     { label: "Media Wall", icon: "✦", images: [mediawall1, mediawall2] },
// ]

// const Designgallery = () => {
//     const [activeTab, setActiveTab] = useState(0)
//     const [lightbox, setLightbox] = useState(null)
//     const [lightboxIndex, setLightboxIndex] = useState(0)

//     const openLightbox = (img, index) => {
//         setLightbox(img)
//         setLightboxIndex(index)
//     }

//     const prevImage = (e) => {
//         e.stopPropagation()
//         const imgs = tabs[activeTab].images
//         const newIndex = (lightboxIndex - 1 + imgs.length) % imgs.length
//         setLightboxIndex(newIndex)
//         setLightbox(imgs[newIndex])
//     }

//     const nextImage = (e) => {
//         e.stopPropagation()
//         const imgs = tabs[activeTab].images
//         const newIndex = (lightboxIndex + 1) % imgs.length
//         setLightboxIndex(newIndex)
//         setLightbox(imgs[newIndex])
//     }

//     return (
//         <div className='py-20 px-10 bg-black relative overflow-hidden'>

//             {/* Background decorative elements */}
//             <div className='absolute top-0 left-0 w-[400px] h-[400px] rounded-full
//                             bg-green-900/10 blur-[120px] pointer-events-none' />
//             <div className='absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
//                             bg-yellow-900/10 blur-[120px] pointer-events-none' />

//             {/* Heading */}
//             <div className='text-center mb-14 relative z-10'>
//                 <div className='flex items-center justify-center gap-3 mb-4'>
//                     <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
//                     <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
//                         Portfolio
//                     </span>
//                     <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
//                 </div>
//                 <h2 className='font-cinzel text-[42px] font-bold
//                                bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
//                                bg-clip-text text-transparent leading-tight'>
//                     3D Design Gallery
//                 </h2>
//                 <p className='font-raleway text-[14px] text-white/40 mt-4
//                                max-w-[480px] mx-auto leading-relaxed tracking-wide'>
//                     Photorealistic renders crafted before a single nail is hammered.
//                     Visualize your dream space with precision.
//                 </p>
//             </div>

//             {/* Tabs — Underline Style */}
//             <div className='flex justify-center mb-12 relative z-10'>
//                 <div className='flex border-b border-white/10'>
//                     {tabs.map((tab, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setActiveTab(index)}
//                             className={`font-cinzel px-8 py-4 text-[13px] tracking-widest
//                                         uppercase relative transition-all duration-400 cursor-pointer
//                                         ${activeTab === index
//                                             ? 'text-[#d1c400]'
//                                             : 'text-white/30 hover:text-white/60'
//                                         }`}
//                         >
//                             {tab.label}
//                             {/* Active underline */}
//                             {activeTab === index && (
//                                 <span className='absolute bottom-0 left-0 w-full h-[2px]
//                                                  bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]' />
//                             )}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Image Grid — Masonry-like layout */}
//             <div className='grid grid-cols-3 gap-3 relative z-10'>
//                 {tabs[activeTab].images.map((img, index) => (
//                     <div
//                         key={index}
//                         onClick={() => openLightbox(img, index)}
//                         className={`relative overflow-hidden cursor-pointer group
//                                     ${index === 0 ? 'col-span-2 h-[420px]' : 'col-span-1 h-[420px]'}
//                                     ${tabs[activeTab].images.length === 1 ? 'col-span-3' : ''}
//                                     ${tabs[activeTab].images.length === 2 ? 'col-span-1 h-[360px]' : ''}
//                                     `}
//                     >
//                         <img
//                             src={img}
//                             alt={`design-${index}`}
//                             className='w-full h-full object-cover transition-all duration-700
//                                        group-hover:scale-110'
//                         />

//                         {/* Hover overlay */}
//                         <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40
//                                         transition-all duration-500 flex items-center justify-center'>
//                             <div className='opacity-0 group-hover:opacity-100 transition-all
//                                             duration-300 flex flex-col items-center gap-2'>
//                                 <div className='w-12 h-12 rounded-full border-2 border-[#d1c400]
//                                                 flex items-center justify-center'>
//                                     <span className='text-[#d1c400] text-[20px]'>⤢</span>
//                                 </div>
//                                 <span className='font-raleway text-[11px] text-white/80
//                                                  tracking-widest uppercase'>
//                                     View Full
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Corner accent */}
//                         <div className='absolute top-0 left-0 w-0 h-0
//                                         group-hover:w-[40px] group-hover:h-[40px]
//                                         border-t-2 border-l-2 border-[#d1c400]
//                                         transition-all duration-300' />
//                         <div className='absolute bottom-0 right-0 w-0 h-0
//                                         group-hover:w-[40px] group-hover:h-[40px]
//                                         border-b-2 border-r-2 border-[#d1c400]
//                                         transition-all duration-300' />
//                     </div>
//                 ))}
//             </div>

//             {/* Image count */}
//             <div className='text-center mt-6 relative z-10'>
//                 <span className='font-raleway text-[12px] text-white/20 tracking-widest'>
//                     {tabs[activeTab].images.length} DESIGN{tabs[activeTab].images.length > 1 ? 'S' : ''} IN {tabs[activeTab].label.toUpperCase()}
//                 </span>
//             </div>

//             {/* Lightbox */}
//             {lightbox && (
//                 <div
//                     className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
//                     onClick={() => setLightbox(null)}
//                 >
//                     {/* Close */}
//                     <button
//                         onClick={() => setLightbox(null)}
//                         className='absolute top-6 right-8 font-raleway text-white/40
//                                    hover:text-[#d1c400] transition-all duration-300
//                                    text-[13px] tracking-widest uppercase flex items-center gap-2'
//                     >
//                         Close ✕
//                     </button>

//                     {/* Image counter */}
//                     <span className='absolute top-8 left-8 font-cinzel text-white/20 text-[13px]'>
//                         {lightboxIndex + 1} / {tabs[activeTab].images.length}
//                     </span>

//                     {/* Prev Arrow */}
//                     {tabs[activeTab].images.length > 1 && (
//                         <button
//                             onClick={prevImage}
//                             className='absolute left-6 text-white/30 hover:text-[#d1c400]
//                                        transition-all duration-300 text-[40px] z-10'
//                         >
//                             ‹
//                         </button>
//                     )}

//                     {/* Full Image */}
//                     <img
//                         src={lightbox}
//                         alt="design"
//                         className='max-w-[85vw] max-h-[85vh] object-contain'
//                         onClick={(e) => e.stopPropagation()}
//                     />

//                     {/* Next Arrow */}
//                     {tabs[activeTab].images.length > 1 && (
//                         <button
//                             onClick={nextImage}
//                             className='absolute right-6 text-white/30 hover:text-[#d1c400]
//                                        transition-all duration-300 text-[40px] z-10'
//                         >
//                             ›
//                         </button>
//                     )}

//                     {/* Bottom thumbnails */}
//                     <div className='absolute bottom-6 flex gap-3'>
//                         {tabs[activeTab].images.map((img, i) => (
//                             <div
//                                 key={i}
//                                 onClick={(e) => { e.stopPropagation(); setLightbox(img); setLightboxIndex(i) }}
//                                 className={`w-[60px] h-[40px] overflow-hidden cursor-pointer
//                                             transition-all duration-300 border-2
//                                             ${lightboxIndex === i
//                                                 ? 'border-[#d1c400] opacity-100'
//                                                 : 'border-transparent opacity-40 hover:opacity-70'
//                                             }`}
//                             >
//                                 <img src={img} alt="" className='w-full h-full object-cover' />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default Designgallery

import React, { useState } from 'react'

// Kitchen imports
import kitchen1 from "../../images/3d-kitchen/kitchen1.png"
import kitchen2 from "../../images/3d-kitchen/kitchen2.png"
import kitchen3 from "../../images/3d-kitchen/kitchen3.png"

// Wardrobe imports
import wardrobe1 from "../../images/3d-wardrobe/wardrobe1.jpg"
import wardrobe2 from "../../images/3d-wardrobe/wardrobe2.jpg"

// Doors imports
import door1 from "../../images/3d-doors/door1.png"

// Media Wall imports
import mediawall1 from "../../images/3d-mediawall/mediawall1.png"
import mediawall2 from "../../images/3d-mediawall/mediawall2.jpg"

const tabs = [
    { label: "Kitchen", icon: "✦", images: [kitchen1, kitchen2, kitchen3] },
    { label: "Wardrobe", icon: "✦", images: [wardrobe1, wardrobe2] },
    { label: "Doors", icon: "✦", images: [door1] },
    { label: "Media Wall", icon: "✦", images: [mediawall1, mediawall2] },
]

const Designgallery = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [lightbox, setLightbox] = useState(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    const openLightbox = (img, index) => {
        setLightbox(img)
        setLightboxIndex(index)
    }

    const prevImage = (e) => {
        e.stopPropagation()
        const imgs = tabs[activeTab].images
        const newIndex = (lightboxIndex - 1 + imgs.length) % imgs.length
        setLightboxIndex(newIndex)
        setLightbox(imgs[newIndex])
    }

    const nextImage = (e) => {
        e.stopPropagation()
        const imgs = tabs[activeTab].images
        const newIndex = (lightboxIndex + 1) % imgs.length
        setLightboxIndex(newIndex)
        setLightbox(imgs[newIndex])
    }

    return (
        <div className='py-20 px-10 bg-white relative overflow-hidden'>

            {/* Heading */}
            <div className='text-center mb-14 relative z-10'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                        Portfolio
                    </span>
                    <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                </div>
                <h2 className='font-cinzel text-[42px] font-bold
                               text-gray-900 leading-tight'>
                    3D Design Gallery
                </h2>
                <p className='font-raleway text-[14px] text-gray-400 mt-4
                               max-w-[480px] mx-auto leading-relaxed tracking-wide'>
                    Photorealistic renders crafted before a single nail is hammered.
                    Visualize your dream space with precision.
                </p>
            </div>

            {/* Tabs — Underline Style */}
            <div className='flex justify-center mb-12 relative z-10'>
                <div className='flex border-b border-gray-200'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`font-cinzel px-8 py-4 text-[13px] tracking-widest
                                        uppercase relative transition-all duration-300 cursor-pointer
                                        ${activeTab === index
                                            ? 'text-[#d1c400]'
                                            : 'text-gray-300 hover:text-gray-500'
                                        }`}
                        >
                            {tab.label}
                            {activeTab === index && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px]
                                                 bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]' />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image Grid */}
            <div className='grid grid-cols-3 gap-3 relative z-10'>
                {tabs[activeTab].images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(img, index)}
                        className={`relative overflow-hidden cursor-pointer group
                                    ${index === 0 ? 'col-span-2 h-[420px]' : 'col-span-1 h-[420px]'}
                                    ${tabs[activeTab].images.length === 1 ? 'col-span-3' : ''}
                                    ${tabs[activeTab].images.length === 2 ? 'col-span-1 h-[360px]' : ''}
                                    `}
                    >
                        <img
                            src={img}
                            alt={`design-${index}`}
                            className='w-full h-full object-cover transition-all duration-700
                                       group-hover:scale-110'
                        />

                        {/* Hover overlay */}
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40
                                        transition-all duration-500 flex items-center justify-center'>
                            <div className='opacity-0 group-hover:opacity-100 transition-all
                                            duration-300 flex flex-col items-center gap-2'>
                                <div className='w-12 h-12 rounded-full border-2 border-[#d1c400]
                                                flex items-center justify-center'>
                                    <span className='text-[#d1c400] text-[20px]'>⤢</span>
                                </div>
                                <span className='font-raleway text-[11px] text-white/80
                                                 tracking-widest uppercase'>
                                    View Full
                                </span>
                            </div>
                        </div>

                        {/* Corner accents */}
                        <div className='absolute top-0 left-0 w-0 h-0
                                        group-hover:w-[40px] group-hover:h-[40px]
                                        border-t-2 border-l-2 border-[#d1c400]
                                        transition-all duration-300' />
                        <div className='absolute bottom-0 right-0 w-0 h-0
                                        group-hover:w-[40px] group-hover:h-[40px]
                                        border-b-2 border-r-2 border-[#d1c400]
                                        transition-all duration-300' />
                    </div>
                ))}
            </div>

            {/* Image count */}
            <div className='text-center mt-6 relative z-10'>
                <span className='font-raleway text-[12px] text-gray-300 tracking-widest'>
                    {tabs[activeTab].images.length} DESIGN{tabs[activeTab].images.length > 1 ? 'S' : ''} IN {tabs[activeTab].label.toUpperCase()}
                </span>
            </div>

            {/* Lightbox — keep dark for fullscreen focus */}
            {lightbox && (
                <div
                    className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className='absolute top-6 right-8 font-raleway text-white/40
                                   hover:text-[#d1c400] transition-all duration-300
                                   text-[13px] tracking-widest uppercase flex items-center gap-2'
                    >
                        Close ✕
                    </button>

                    <span className='absolute top-8 left-8 font-cinzel text-white/20 text-[13px]'>
                        {lightboxIndex + 1} / {tabs[activeTab].images.length}
                    </span>

                    {tabs[activeTab].images.length > 1 && (
                        <button onClick={prevImage}
                            className='absolute left-6 text-white/30 hover:text-[#d1c400]
                                       transition-all duration-300 text-[40px] z-10'>
                            ‹
                        </button>
                    )}

                    <img
                        src={lightbox}
                        alt="design"
                        className='max-w-[85vw] max-h-[85vh] object-contain'
                        onClick={(e) => e.stopPropagation()}
                    />

                    {tabs[activeTab].images.length > 1 && (
                        <button onClick={nextImage}
                            className='absolute right-6 text-white/30 hover:text-[#d1c400]
                                       transition-all duration-300 text-[40px] z-10'>
                            ›
                        </button>
                    )}

                    <div className='absolute bottom-6 flex gap-3'>
                        {tabs[activeTab].images.map((img, i) => (
                            <div
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setLightbox(img); setLightboxIndex(i) }}
                                className={`w-[60px] h-[40px] overflow-hidden cursor-pointer
                                            transition-all duration-300 border-2
                                            ${lightboxIndex === i
                                                ? 'border-[#d1c400] opacity-100'
                                                : 'border-transparent opacity-40 hover:opacity-70'
                                            }`}
                            >
                                <img src={img} alt="" className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Designgallery