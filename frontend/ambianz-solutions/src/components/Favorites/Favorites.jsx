import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { FavoritesContext } from '../../context/FavoritesContext';
import { CartContext } from '../../context/CartContext';
import { authDataContext } from '../../context/AuthContext';

const Favorites = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(authDataContext);

    // If not logged in, show login CTA
    if (!user) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8F6F1] px-4">
                <div className="max-w-md w-full text-center space-y-8 py-16">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e0ddd5]">
                            <FiHeart className="text-3xl text-[#adb940] opacity-30" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3c5a25] rounded-full flex items-center justify-center text-white text-xs border-2 border-[#F8F6F1]">
                            0
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-cinzel text-3xl font-bold text-[#1A1C19] tracking-[4px] uppercase">
                            Your Favorites
                        </h1>
                        <div className="w-12 h-[1px] bg-[#adb940] mx-auto" />
                        <p className="font-raleway text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                            Sign in to save your favourite pieces and access them from any device.
                        </p>
                    </div>
                    <div className="pt-6 flex flex-col gap-4">
                        <Link
                            to="/signin"
                            className="w-full bg-[#1A1C19] text-[#F8F6F1] py-4 font-raleway text-[10px] tracking-[3px] font-bold hover:bg-[#3c5a25] transition-all duration-300 shadow-lg uppercase no-underline text-center block"
                        >
                            Login to See Your Favorites
                        </Link>
                        <Link
                            to="/shop"
                            style={{ borderBottom: '1px solid #d8d4c8', display: 'inline-block', margin: '0 auto' }}
                            className="font-raleway text-[9px] tracking-[2px] text-[#3c5a25] py-2 uppercase no-underline font-semibold hover:text-[#adb940] transition-colors"
                        >
                            Browse Our Collection →
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Empty favorites (logged in)
    if (favorites.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8F6F1] px-4">
                <div className="max-w-md w-full text-center space-y-8 py-16">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e0ddd5]">
                            <FiHeart className="text-3xl text-[#adb940] opacity-30" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3c5a25] rounded-full flex items-center justify-center text-white text-xs border-2 border-[#F8F6F1]">
                            0
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-cinzel text-3xl font-bold text-[#1A1C19] tracking-[4px] uppercase">
                            Your Favorites
                        </h1>
                        <div className="w-12 h-[1px] bg-[#adb940] mx-auto" />
                        <p className="font-raleway text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                            You haven't saved any favourites yet. Start exploring our collection to save pieces that inspire you.
                        </p>
                    </div>
                    <div className="pt-6">
                        <Link
                            to="/shop"
                            className="inline-block border border-[#3c5a25] text-[#3c5a25] text-[10px] tracking-[3px] px-8 py-3.5 font-raleway font-bold uppercase transition-all duration-300 hover:bg-[#3c5a25] hover:text-white no-underline"
                        >
                            Browse Our Collection
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] bg-[#F8F6F1] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="font-raleway text-[9px] tracking-[4px] text-[#adb940] uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#adb940]" />
                            Saved Items
                        </div>
                        <h1 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-normal mb-2">
                            Your Favorites
                        </h1>
                        <p className="font-raleway text-xs text-gray-500 tracking-wider">
                            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved
                        </p>
                    </div>
                    <Link
                        to="/shop"
                        className="border border-[#3c5a25] text-[#3c5a25] text-[10px] tracking-[3px] px-8 py-3.5 font-raleway font-bold uppercase transition-all duration-300 hover:bg-[#3c5a25] hover:text-white no-underline"
                    >
                        Continue Shopping
                    </Link>
                </div>

                {/* Favorites Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {favorites.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white border border-[#e0ddd5] hover:border-[#adb940] transition-all duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-square overflow-hidden bg-[#f0ece3] relative">
                                <img
                                    src={product.img || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                {/* Remove from favorites overlay btn */}
                                <button
                                    onClick={() => toggleFavorite(product)}
                                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#adb940] shadow hover:bg-[#adb940] hover:text-white transition-all duration-200"
                                    title="Remove from Favorites"
                                >
                                    <FiTrash2 size={13} />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="p-4 flex flex-col flex-1">
                                <div className="font-raleway text-[8px] tracking-[2.5px] text-[#adb940] uppercase mb-1">
                                    {product.category}
                                </div>
                                <h4 className="font-cinzel text-sm text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors leading-tight flex-1 mb-3">
                                    {product.name}
                                </h4>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="font-cinzel text-sm font-bold text-[#3c5a25]">
                                        {product.price}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex items-center gap-2 px-3 py-2 bg-[#3c5a25] text-white text-[9px] font-raleway tracking-[1.5px] uppercase font-bold hover:bg-[#adb940] transition-all duration-300"
                                        title="Add to Cart"
                                    >
                                        <FiShoppingCart size={12} />
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
