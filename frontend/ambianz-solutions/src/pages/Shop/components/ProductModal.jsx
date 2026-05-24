import React, { useContext } from "react";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { CartContext } from "../../../context/CartContext.jsx";
import { FavoritesContext } from "../../../context/FavoritesContext.jsx";
import { formatPricePKR } from "../../../utils/pricing.js";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  if (!product) return null;

  const isFav = isFavorite(product.id);

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
              <button onClick={() => toggleFavorite(product)} className={`px-3 py-2 rounded border flex items-center gap-2 ${isFav ? "bg-[#fdecec] text-[#b91c1c]" : "bg-white text-gray-700"}`}>
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
