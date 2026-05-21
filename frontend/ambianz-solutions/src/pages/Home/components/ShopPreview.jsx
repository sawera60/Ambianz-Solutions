import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        category: "Furniture",
        name: "Luxury Sofa",
        price: "Rs. 85,000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    },
    {
        id: 2,
        category: "Lighting",
        name: "Pendant Light",
        price: "Rs. 12,000",
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80",
    },
    {
        id: 3,
        category: "Mirrors",
        name: "Wall Mirror",
        price: "Rs. 18,000",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
    },
    {
        id: 4,
        category: "Furniture",
        name: "Dinning Chair",
        price: "Rs. 2,500",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    },
];

export default function ShopPreview() {
  return (
    <section className="bg-[#F8F6F1] pt-10 md:pt-16 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="font-raleway text-[9px] md:text-[10px] tracking-[4px] text-[#adb940] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#adb940]" />
              curated pieces
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-normal mb-4">
              Explore Our Shop
            </h2>
            <p className="font-raleway text-xs md:text-sm text-[#888] max-w-sm">
              Premium home accessories to complement your space.
            </p>
          </div>

          <Link
            to="/shop"
            className="border border-[#3c5a25] text-[#3c5a25] text-[10px] tracking-[3px] px-8 py-3.5 font-raleway font-bold uppercase transition-all duration-300 hover:bg-[#3c5a25] hover:text-white"
          >
            View All Products
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group block bg-white border border-[#e0ddd5] transition-all duration-300 hover:border-[#adb940]"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-[#f0ece3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <div className="font-raleway text-[8px] md:text-[9px] tracking-[2.5px] text-[#adb940] uppercase mb-2">
                  {product.category}
                </div>
                <div className="font-cinzel text-sm md:text-base text-[#1A1C19] mb-3 group-hover:text-[#3c5a25] transition-colors">
                  {product.name}
                </div>
                <div className="font-raleway text-xs md:text-sm text-[#3c5a25] font-bold">
                  {product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
