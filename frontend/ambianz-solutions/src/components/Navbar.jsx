// import React from 'react'
import logo from "../images/logo.png";

import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useQuoteModal } from "../context/QuoteModalContext";
import { CartContext } from "../context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Shop", path: "/shop" },
  { label: "Projects", path: "/projects" },
];

export default function Navbar() {
  const location = useLocation();
  const { getTotalItems, setIsCartOpen } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favCount, setFavCount] = useState(JSON.parse(localStorage.getItem("favorites") || "[]").length);

  useEffect(() => {
    const handler = () => {
      setFavCount(JSON.parse(localStorage.getItem("favorites") || "[]").length);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F1] border-b border-[#e0ddd5]">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 shrink-0">
            <img
              src={logo}
              alt="Ambianz Logo"
              className="w-12 h-10 md:w-16 md:h-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-cinzel text-[#1A1C19] text-[10px] md:text-xs font-bold tracking-[2px] md:tracking-[3px] leading-tight">
                AMBIANZ SOLUTIONS
              </span>
              <span className="text-[#3c5a25] text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] font-raleway font-medium">
                PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links — centered */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 xl:gap-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-raleway text-[10px] tracking-[3px] uppercase transition-all duration-300 py-2 border-b-2 ${
                    isActive 
                      ? "text-[#3c5a25] border-[#adb940] font-semibold" 
                      : "text-[#1A1C19] border-transparent hover:text-[#3c5a25]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Account Dropdown */}
            <div className="relative group py-2">
              <FiUser className="text-[#1A1C19] text-lg cursor-pointer opacity-70 transition-all duration-300 group-hover:text-[#3c5a25] group-hover:opacity-100" />
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#e0ddd5] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                <div className="absolute -top-2 left-0 w-full h-2" />
                <div className="absolute -top-1.5 right-4 w-3 h-3 bg-white border-l border-t border-[#e0ddd5] rotate-45 z-0" />
                <div className="relative bg-white z-10 flex flex-col py-1">
                  <Link to="/signin" className="px-5 py-3 text-[10px] font-raleway tracking-[2px] text-[#1A1C19] hover:bg-[#F8F6F1] hover:text-[#3c5a25] transition-colors duration-200 uppercase font-semibold">
                    Sign In
                  </Link>
                  <div className="h-[0.5px] bg-[#e0ddd5]/60 mx-4" />
                  <Link to="/signup" className="px-5 py-3 text-[10px] font-raleway tracking-[2px] text-[#1A1C19] hover:bg-[#F8F6F1] hover:text-[#3c5a25] transition-colors duration-200 uppercase font-semibold">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/favorites" className="relative group">
              <FiHeart className="text-[#1A1C19] text-lg opacity-70 transition-all duration-300 group-hover:text-[#3c5a25] group-hover:opacity-100" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#adb940] rounded-full flex items-center justify-center text-[8px] text-[#1A1C19] font-bold">
                {favCount}
              </span>
            </Link>

            <button onClick={() => setIsCartOpen(true)} className="relative group">
              <FiShoppingCart className="text-[#3c5a25] text-lg opacity-90 transition-all duration-300 group-hover:text-[#2a3f1a] group-hover:opacity-100" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#adb940] rounded-full flex items-center justify-center text-[8px] text-[#1A1C19] font-bold">
                {getTotalItems()}
              </span>
            </button>

            <button
              onClick={openQuoteModal}
              className="bg-[#3c5a25] text-[#F8F6F1] text-[10px] tracking-[2px] px-6 py-2.5 font-raleway hover:bg-[#2a3f1a] transition-all duration-300 uppercase font-bold shadow-md hover:shadow-lg"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex lg:hidden items-center gap-4">
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <FiShoppingCart className="text-[#1A1C19] text-lg" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#adb940] rounded-full flex items-center justify-center text-[7px] text-[#1A1C19] font-bold">
                {getTotalItems()}
              </span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#1A1C19] hover:text-[#3c5a25] transition-colors"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#F8F6F1] shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-[#e0ddd5] flex justify-between items-center">
            <span className="font-cinzel text-xs font-bold tracking-[2px]">MENU</span>
            <button onClick={() => setMenuOpen(false)} className="text-[#1A1C19]">
              <FiX size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-raleway text-xs tracking-[3px] uppercase transition-colors ${
                    location.pathname === link.path ? "text-[#3c5a25] font-bold" : "text-[#1A1C19]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#e0ddd5] space-y-6">
              <div className="flex flex-col gap-4">
                <Link 
                  to="/signin" 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-[11px] font-raleway tracking-[2px] text-[#1A1C19] uppercase"
                >
                  <FiUser className="text-base" /> Sign In
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-[11px] font-raleway tracking-[2px] text-[#1A1C19] uppercase"
                >
                  <FiUser className="text-base" /> Create Account
                </Link>
                <Link 
                  to="/favorites" 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-[11px] font-raleway tracking-[2px] text-[#1A1C19] uppercase"
                >
                  <FiHeart className="text-base" /> Favorites
                </Link>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full bg-[#3c5a25] text-[#F8F6F1] py-4 text-[10px] tracking-[3px] font-raleway font-bold uppercase shadow-lg"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
