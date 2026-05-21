// import React, { useState } from "react";
// import Herosections from "./components/Herosections";
// import axios from "axios";
// import authContext from "../../context/AuthContext.jsx";
// import { useContext } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Luxury Sofa",
//     category: "Furniture",
//     price: "Rs. 85,000",
//     material: "Velvet",
//     img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
//   },
//   {
//     id: 2,
//     name: "Pendant Light",
//     category: "Lighting",
//     price: "Rs. 12,000",
//     material: "Metal",
//     img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400",
//   },
//   {
//     id: 3,
//     name: "Wall Mirror",
//     category: "Mirrors",
//     price: "Rs. 18,000",
//     material: "Glass",
//     img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400",
//   },
//   {
//     id: 4,
//     name: "Coffee Table",
//     category: "Furniture",
//     price: "Rs. 35,000",
//     material: "Wood",
//     img: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=400",
//   },
//   {
//     id: 5,
//     name: "Floor Lamp",
//     category: "Lighting",
//     price: "Rs. 9,500",
//     material: "Metal",
//     img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
//   },
//   {
//     id: 6,
//     name: "Cabinet Handle",
//     category: "Hardware",
//     price: "Rs. 2,500",
//     material: "Brass",
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
//   },
//   {
//     id: 7,
//     name: "Wardrobe Unit",
//     category: "Furniture",
//     price: "Rs. 1,20,000",
//     material: "Wood",
//     img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400",
//   },
//   {
//     id: 8,
//     name: "Ceiling Light",
//     category: "Lighting",
//     price: "Rs. 15,000",
//     material: "Crystal",
//     img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
//   },
//   {
//     id: 9,
//     name: "Decorative Vase",
//     category: "Home Decor",
//     price: "Rs. 4,500",
//     material: "Ceramic",
//     img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400",
//   },
//   {
//     id: 10,
//     name: "Dining Table",
//     category: "Furniture",
//     price: "Rs. 95,000",
//     material: "Marble",
//     img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400",
//   },
//   {
//     id: 11,
//     name: "Wall Sconce",
//     category: "Lighting",
//     price: "Rs. 7,800",
//     material: "Metal",
//     img: "https://images.unsplash.com/photo-1513506003901-1e6a35f04b7d?w=400",
//   },
//   {
//     id: 12,
//     name: "Curtain Set",
//     category: "Curtains",
//     price: "Rs. 22,000",
//     material: "Linen",
//     img: "https://images.unsplash.com/photo-1558618047-f4743f7e3f4b?w=400",
//   },
// ];

// const categories = [
//   "All Products",
//   "Furniture",
//   "Lighting",
//   "Mirrors",
//   "Hardware",
//   "Wall Arts",
//   "Curtains",
//   "Planters",
// ];
// const categoryCounts = categories.map(() => Math.floor(Math.random() * 20) + 1);
// const materials = [
//   "Wood",
//   "Metal",
//   "Glass",
//   "Marble",
//   "Velvet",
//   "Ceramic",
//   "Brass",
//   "Linen",
//   "Crystal",
// ];

// const Shop = () => {
//   const [isGrid, setIsGrid] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const serverUrl = useContext(authContext);

//   const getProducts = async () => {
//     try {
//       e.preventDefault();
//       const response = await axios.get(serverUrl + "/api/product");
//     } catch (error) {
//       return res.status(500).json("error", error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ---- Hero Banner ---- */}
//       <Herosections />

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 lg:py-12 flex flex-col lg:flex-row gap-10">
//         {/* Mobile Filter Toggle Responsivness*/}
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="lg:hidden flex items-center justify-center gap-3 w-full py-4 bg-[#3c5a25] text-white font-raleway text-xs tracking-[3px] uppercase font-bold transition-all duration-300"
//         >
//           {showFilters ? "Hide Filters" : "Show Filters"}
//           <svg
//             className={`w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {/* LEFT PANE — Filters */}
//         <div
//           className={`${showFilters ? "flex" : "hidden"} lg:flex w-full lg:w-[260px] shrink-0 flex-col gap-10`}
//         >
//           {/* Search */}
//           <div className="relative group">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full font-raleway text-sm border-2 border-[#f0f0f0] px-5 py-3 outline-none focus:border-[#adb940] transition-all duration-300 placeholder:text-gray-300"
//             />
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#adb940]">
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="flex flex-col gap-4">
//             <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
//               Categories
//             </h4>
//             <div className="space-y-3">
//               {categories.map((cat, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between group cursor-pointer"
//                 >
//                   <span
//                     className={`font-raleway text-[13px] transition-all duration-300 group-hover:text-[#adb940] ${index === 0 ? "text-[#adb940] font-semibold" : "text-gray-400"}`}
//                   >
//                     {cat}
//                   </span>
//                   <span className="font-raleway text-[11px] text-gray-300 group-hover:text-[#adb940] transition-all duration-300">
//                     {categoryCounts[index]}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Price Range */}
//           <div className="flex flex-col gap-4">
//             <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
//               Price Range
//             </h4>
//             <div className="pt-2">
//               <input
//                 type="range"
//                 min="0"
//                 max="200000"
//                 defaultValue="200000"
//                 className="w-full accent-[#3c5a25] cursor-pointer h-1 bg-[#f0f0f0] rounded-lg"
//               />
//               <div className="flex justify-between mt-4">
//                 <span className="font-raleway text-[12px] text-gray-400">
//                   Rs. 0
//                 </span>
//                 <span className="font-raleway text-[12px] text-[#3c5a25] font-bold">
//                   Rs. 2,00,000
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Material */}
//           <div className="flex flex-col gap-4">
//             <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
//               Material
//             </h4>
//             <div className="space-y-3">
//               {materials.map((mat, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-4 cursor-pointer group"
//                 >
//                   <div className="w-4 h-4 border-2 border-[#f0f0f0] group-hover:border-[#adb940] transition-all duration-300 shrink-0" />
//                   <span className="font-raleway text-[13px] text-gray-400 group-hover:text-[#adb940] transition-all duration-300">
//                     {mat}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Clear Filters */}
//           <button className="font-raleway text-[11px] tracking-[3px] uppercase py-4 border-2 border-[#f0f0f0] text-gray-400 hover:border-[#adb940] hover:text-[#adb940] font-bold transition-all duration-300">
//             Clear Filters
//           </button>
//         </div>

//         {/* RIGHT PANE — Products */}
//         <div className="flex-1 flex flex-col gap-8">
//           {/* Top Bar — Results + Sort + View */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#f0f0f0] pb-6">
//             {/* Results count */}
//             <p className="font-raleway text-[13px] text-gray-400 order-2 sm:order-1">
//               Showing <span className="text-[#1A1C19] font-semibold">1-12</span>{" "}
//               of <span className="text-[#1A1C19] font-semibold">60</span>{" "}
//               products
//             </p>

//             <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end order-1 sm:order-2">
//               {/* Sort By */}
//               <select className="font-raleway text-[13px] text-gray-400 border-2 border-[#f0f0f0] px-4 py-2.5 outline-none bg-white focus:border-[#adb940] transition-all duration-300 cursor-pointer">
//                 <option>Featured</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Newest First</option>
//               </select>

//               {/* View Toggle */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setIsGrid(true)}
//                   className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${isGrid ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3A1.5 1.5 0 0 1 15 10.5v3A1.5 1.5 0 0 1 13.5 15h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={() => setIsGrid(false)}
//                   className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${!isGrid ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Product Grid / List */}
//           <div
//             className={
//               isGrid
//                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                 : "flex flex-col gap-6"
//             }
//           >
//             {products.map((product) =>
//               isGrid ? (
//                 <div
//                   key={product.id}
//                   className="group flex flex-col border border-[#f0f0f0] hover:border-[#adb940]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-white"
//                 >
//                   <div className="overflow-hidden h-[240px] relative">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-[#3c5a25]/20 transition-all duration-500 flex items-center justify-center">
//                       <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-3">
//                         <button className="w-11 h-11 bg-white hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center rounded-full">
//                           🤍
//                         </button>
//                         <button className="w-11 h-11 bg-white hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center rounded-full">
//                           🛒
//                         </button>
//                       </div>
//                     </div>
//                     <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold shadow-sm">
//                       {product.category}
//                     </span>
//                   </div>
//                   <div className="p-6 flex flex-col gap-2">
//                     <h4 className="font-cinzel text-sm font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
//                       {product.name}
//                     </h4>
//                     <p className="font-raleway text-[11px] text-gray-400 tracking-wider">
//                       {product.material}
//                     </p>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="font-cinzel text-base font-bold text-[#3c5a25]">
//                         {product.price}
//                       </span>
//                       <button className="font-raleway text-[9px] tracking-[2px] px-4 py-2.5 bg-[#3c5a25] text-white font-bold uppercase transition-all duration-300 hover:bg-[#adb940]">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={product.id}
//                   className="group flex flex-col sm:flex-row border border-[#f0f0f0] hover:border-[#adb940]/40 transition-all duration-500 cursor-pointer overflow-hidden bg-white"
//                 >
//                   <div className="overflow-hidden w-full sm:w-[220px] h-[200px] sm:h-auto shrink-0 relative">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
//                     />
//                     <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold">
//                       {product.category}
//                     </span>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-6 md:px-10 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <h4 className="font-cinzel text-base font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
//                         {product.name}
//                       </h4>
//                       <p className="font-raleway text-xs text-gray-400 tracking-wider">
//                         {product.material}
//                       </p>
//                     </div>
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
//                       <span className="font-cinzel text-lg font-bold text-[#3c5a25]">
//                         {product.price}
//                       </span>
//                       <button className="w-full sm:w-auto font-raleway text-[9px] tracking-[2px] px-8 py-3 bg-[#3c5a25] text-white font-bold uppercase transition-all duration-300 hover:bg-[#adb940] shadow-lg shadow-[#3c5a25]/10">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ),
//             )}
//           </div>

//           {/* Pagination */}
//           <div className="flex items-center justify-center gap-3 mt-12">
//             <button className="w-10 h-10 flex items-center justify-center border-2 border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940] transition-all duration-300 rounded-full">
//               ‹
//             </button>
//             {[1, 2, 3].map((num) => (
//               <button
//                 key={num}
//                 className={`w-10 h-10 flex items-center justify-center border-2 font-cinzel text-xs transition-all duration-300 rounded-full
//                                             ${num === 1 ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940]"}`}
//               >
//                 {num}
//               </button>
//             ))}
//             <button className="w-10 h-10 flex items-center justify-center border-2 border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940] transition-all duration-300 rounded-full">
//               ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;



import React, { useState } from "react";
import Herosections from "./components/Herosections";

const products = [
  {
    id: 1,
    name: "Luxury Sofa",
    category: "Furniture",
    price: "Rs. 85,000",
    material: "Velvet",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
  },
  {
    id: 2,
    name: "Pendant Light",
    category: "Lighting",
    price: "Rs. 12,000",
    material: "Metal",
    img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400",
  },
  {
    id: 3,
    name: "Wall Mirror",
    category: "Mirrors",
    price: "Rs. 18,000",
    material: "Glass",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400",
  },
  {
    id: 4,
    name: "Coffee Table",
    category: "Furniture",
    price: "Rs. 35,000",
    material: "Wood",
    img: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=400",
  },
  {
    id: 5,
    name: "Floor Lamp",
    category: "Lighting",
    price: "Rs. 9,500",
    material: "Metal",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  },
  {
    id: 6,
    name: "Cabinet Handle",
    category: "Hardware",
    price: "Rs. 2,500",
    material: "Brass",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  },
  {
    id: 7,
    name: "Wardrobe Unit",
    category: "Furniture",
    price: "Rs. 1,20,000",
    material: "Wood",
    img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400",
  },
  {
    id: 8,
    name: "Ceiling Light",
    category: "Lighting",
    price: "Rs. 15,000",
    material: "Crystal",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
  },
  {
    id: 9,
    name: "Decorative Vase",
    category: "Home Decor",
    price: "Rs. 4,500",
    material: "Ceramic",
    img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400",
  },
  {
    id: 10,
    name: "Dining Table",
    category: "Furniture",
    price: "Rs. 95,000",
    material: "Marble",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400",
  },
  {
    id: 11,
    name: "Wall Sconce",
    category: "Lighting",
    price: "Rs. 7,800",
    material: "Metal",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a35f04b7d?w=400",
  },
  {
    id: 12,
    name: "Curtain Set",
    category: "Curtains",
    price: "Rs. 22,000",
    material: "Linen",
    img: "https://images.unsplash.com/photo-1558618047-f4743f7e3f4b?w=400",
  },
];

const categories = [
  "All Products",
  "Dining",
  "Kitchen",
  "Bathroom",
  "Living Room",
  "Bedroom",
  "Office",
  "Outdoor",
  "Decor",
  "Others",
];

const categoryCounts = categories.map(() => Math.floor(Math.random() * 20) + 1);
const materials = [
  "Wood",
  "Metal",
  "Glass",
  "Marble",
  "Velvet",
  "Ceramic",
  "Brass",
  "Linen",
  "Crystal",
];

const Shop = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ---- Hero Banner ---- */}
      <Herosections />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 lg:py-12 flex flex-col lg:flex-row gap-10">
        {/* Mobile Filter Toggle Responsivness*/}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center gap-3 w-full py-4 bg-[#3c5a25] text-white font-raleway text-xs tracking-[3px] uppercase font-bold transition-all duration-300"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* LEFT PANE — Filters */}
        <div
          className={`${showFilters ? "flex" : "hidden"} lg:flex w-full lg:w-[260px] shrink-0 flex-col gap-10`}
        >
          {/* Search */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full font-raleway text-sm border-2 border-[#f0f0f0] px-5 py-3 outline-none focus:border-[#adb940] transition-all duration-300 placeholder:text-gray-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#adb940]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Categories
            </h4>
            <div className="space-y-3">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <span
                    className={`font-raleway text-[13px] transition-all duration-300 group-hover:text-[#adb940] ${index === 0 ? "text-[#adb940] font-semibold" : "text-gray-400"}`}
                  >
                    {cat}
                  </span>
                  <span className="font-raleway text-[11px] text-gray-300 group-hover:text-[#adb940] transition-all duration-300">
                    {categoryCounts[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Price Range
            </h4>
            <div className="pt-2">
              <input
                type="range"
                min="0"
                max="200000"
                defaultValue="200000"
                className="w-full accent-[#3c5a25] cursor-pointer h-1 bg-[#f0f0f0] rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <span className="font-raleway text-[12px] text-gray-400">
                  Rs. 0
                </span>
                <span className="font-raleway text-[12px] text-[#3c5a25] font-bold">
                  Rs. 2,00,000
                </span>
              </div>
            </div>
          </div>

          {/* Material */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Material
            </h4>
            <div className="space-y-3">
              {materials.map((mat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-4 h-4 border-2 border-[#f0f0f0] group-hover:border-[#adb940] transition-all duration-300 shrink-0" />
                  <span className="font-raleway text-[13px] text-gray-400 group-hover:text-[#adb940] transition-all duration-300">
                    {mat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button className="font-raleway text-[11px] tracking-[3px] uppercase py-4 border-2 border-[#f0f0f0] text-gray-400 hover:border-[#adb940] hover:text-[#adb940] font-bold transition-all duration-300">
            Clear Filters
          </button>
        </div>

        {/* RIGHT PANE — Products */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Top Bar — Results + Sort + View */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#f0f0f0] pb-6">
            {/* Results count */}
            <p className="font-raleway text-[13px] text-gray-400 order-2 sm:order-1">
              Showing <span className="text-[#1A1C19] font-semibold">1-12</span>{" "}
              of <span className="text-[#1A1C19] font-semibold">60</span>{" "}
              products
            </p>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end order-1 sm:order-2">
              {/* Sort By */}
              <select className="font-raleway text-[13px] text-gray-400 border-2 border-[#f0f0f0] px-4 py-2.5 outline-none bg-white focus:border-[#adb940] transition-all duration-300 cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsGrid(true)}
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${isGrid ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3A1.5 1.5 0 0 1 15 10.5v3A1.5 1.5 0 0 1 13.5 15h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsGrid(false)}
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${!isGrid ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid / List */}
          <div
            className={
              isGrid
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {products.map((product) =>
              isGrid ? (
                <div
                  key={product.id}
                  className="group flex flex-col border border-[#f0f0f0] hover:border-[#adb940]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-white"
                >
                  <div className="overflow-hidden h-[240px] relative">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#3c5a25]/20 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-3">
                        <button className="w-11 h-11 bg-white hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center rounded-full">
                          🤍
                        </button>
                        <button className="w-11 h-11 bg-white hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center rounded-full">
                          🛒
                        </button>
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h4 className="font-cinzel text-sm font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
                      {product.name}
                    </h4>
                    <p className="font-raleway text-[11px] text-gray-400 tracking-wider">
                      {product.material}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-cinzel text-base font-bold text-[#3c5a25]">
                        {product.price}
                      </span>
                      <button className="font-raleway text-[9px] tracking-[2px] px-4 py-2.5 bg-[#3c5a25] text-white font-bold uppercase transition-all duration-300 hover:bg-[#adb940]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={product.id}
                  className="group flex flex-col sm:flex-row border border-[#f0f0f0] hover:border-[#adb940]/40 transition-all duration-500 cursor-pointer overflow-hidden bg-white"
                >
                  <div className="overflow-hidden w-full sm:w-[220px] h-[200px] sm:h-auto shrink-0 relative">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-6 md:px-10 gap-6">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-cinzel text-base font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
                        {product.name}
                      </h4>
                      <p className="font-raleway text-xs text-gray-400 tracking-wider">
                        {product.material}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
                      <span className="font-cinzel text-lg font-bold text-[#3c5a25]">
                        {product.price}
                      </span>
                      <button className="w-full sm:w-auto font-raleway text-[9px] tracking-[2px] px-8 py-3 bg-[#3c5a25] text-white font-bold uppercase transition-all duration-300 hover:bg-[#adb940] shadow-lg shadow-[#3c5a25]/10">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button className="w-10 h-10 flex items-center justify-center border-2 border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940] transition-all duration-300 rounded-full">
              ‹
            </button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 flex items-center justify-center border-2 font-cinzel text-xs transition-all duration-300 rounded-full
                                            ${num === 1 ? "border-[#3c5a25] bg-[#3c5a25] text-white" : "border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940]"}`}
              >
                {num}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center border-2 border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940] transition-all duration-300 rounded-full">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

