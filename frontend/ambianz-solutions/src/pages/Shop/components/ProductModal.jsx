import React, { useContext, useEffect, useState } from "react";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { CartContext } from "../../../context/CartContext.jsx";
import { formatPricePKR } from "../../../utils/pricing.js";

const ProductModal = ({ product, onClose }) => {
  const [isFav, setIsFav] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!product) return;
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFav(favs.includes(product.id));
  }, [product]);

  if (!product) return null;

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    let next;
    if (favs.includes(product.id)) {
      next = favs.filter((id) => id !== product.id);
      setIsFav(false);
    } else {
      next = [...favs, product.id];
      setIsFav(true);
    }
    localStorage.setItem("favorites", JSON.stringify(next));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white max-w-4xl w-full mx-4 rounded shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-cinzel font-semibold">{product.name}</h3>
          <button onClick={onClose} className="p-2 text-gray-600"><FiX /></button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-6">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src={product.img} alt={product.name} className="w-full max-h-[520px] object-contain bg-gray-50" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-600">Material: {product.material}</p>
            <p className="font-cinzel text-lg text-[#3c5a25]">{formatPricePKR(product)}</p>
            <p className="text-sm text-gray-700">{product.description || "No description available."}</p>
            <div className="flex items-center gap-3 mt-auto">
              <button onClick={() => addToCart(product)} className="px-4 py-2 bg-[#3c5a25] text-white rounded flex items-center gap-2">
                <FiShoppingCart /> Add to Cart
              </button>
              <button onClick={toggleFav} className={`px-3 py-2 rounded border flex items-center gap-2 ${isFav ? "bg-[#fdecec] text-[#b91c1c]" : "bg-white text-gray-700"}`}>
                <FiHeart /> {isFav ? "Remove" : "Favorite"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
