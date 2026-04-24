import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

export default function SignUp() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F6F1] py-20 px-4">
      <div className="max-w-md w-full bg-white p-10 shadow-2xl border border-[#e0ddd5] transform hover:scale-[1.01] transition-all duration-500">
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-2xl font-bold text-[#1A1C19] tracking-[4px] uppercase mb-3">
            Join Ambianz
          </h2>
          <div className="w-12 h-[1px] bg-[#adb940] mx-auto mb-4" />
          <p className="font-raleway text-xs text-gray-500 tracking-wider">
            Create your bespoke account today
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
              />
            </div>
            <div className="relative">
              <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
              />
            </div>
          </div>

          <div className="relative">
            <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
            />
          </div>

          <div className="relative">
            <FiPhone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
            />
          </div>

          <button
            className="w-full bg-[#3c5a25] text-white py-4 font-raleway text-[10px] tracking-[3px] font-bold hover:bg-[#2a3f1a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg uppercase mt-4"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-8">
            <div className="w-full border-t border-[#e0ddd5]"></div>
            <span className="absolute bg-white px-4 font-raleway text-[9px] text-gray-400 tracking-[3px] uppercase">
              Or
            </span>
          </div>

          <button
            className="w-full border border-[#e0ddd5] py-3.5 flex items-center justify-center gap-3 hover:bg-[#F8F6F1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <FcGoogle className="text-xl" />
            <span className="font-raleway text-[10px] tracking-[2px] text-gray-600 font-bold group-hover:text-[#1A1C19]">
              SIGN UP WITH GOOGLE
            </span>
          </button>
        </div>

        <p className="mt-10 text-center font-raleway text-[11px] text-gray-500 tracking-wider">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#3c5a25] font-bold hover:text-[#adb940] transition-colors duration-200 no-underline">
            SIGN IN
          </Link>
        </p>
      </div>
    </div>
  );
}
