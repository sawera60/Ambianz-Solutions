import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

const Favorites = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8F6F1] px-4">
            <div className="max-w-md w-full text-center space-y-8 py-16">
                
                {/* Visual Icon */}
                <div className="relative inline-block">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e0ddd5]">
                        <FiHeart className="text-3xl text-[#adb940] opacity-30" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3c5a25] rounded-full flex items-center justify-center text-white text-xs border-2 border-[#F8F6F1]">
                        0
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h1 className="font-cinzel text-3xl font-bold text-[#1A1C19] tracking-[4px] uppercase">
                        Your Favorites
                    </h1>
                    <div className="w-12 h-[1px] bg-[#adb940] mx-auto" />
                    <p className="font-raleway text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Your favorites list is currently empty. Start exploring our collection to save pieces that inspire you.
                    </p>
                </div>

                {/* CTA Links */}
                <div className="pt-6 flex flex-col gap-4">
                    <Link 
                        to="/signin"
                        className="w-full bg-[#1A1C19] text-[#F8F6F1] py-4 font-raleway text-[10px] tracking-[3px] font-bold hover:bg-[#3c5a25] transition-all duration-300 shadow-lg uppercase no-underline"
                    >
                        Login to See Your Favorites
                    </Link>
                    
                    <Link 
                        to="/shop"
                        style={{
                            borderBottom: '1px solid #d8d4c8',
                            display: 'inline-block',
                            margin: '0 auto'
                        }}
                        className="font-raleway text-[9px] tracking-[2px] text-[#3c5a25] py-2 uppercase no-underline font-semibold hover:text-[#adb940] transition-colors"
                    >
                        Browse Our Collection →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Favorites;
