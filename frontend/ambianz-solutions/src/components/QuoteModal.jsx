import React, { useState, useContext } from "react";
import { authDataContext } from "../context/AuthContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiX,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiMapPin,
  FiLayers,
} from "react-icons/fi";

const MotionDiv = motion.div;

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let { serverUrl } = useContext(authDataContext);

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(serverUrl + "/api/quote", formData);
      if (res.status === 201) {
        toast.success("Quote Request Submitted Successfully", {
          position: "top-right",
        });

        // Reset form fields
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          service: "",
          location: "",
          message: "",
        });

        // Close modal after success alert is displayed
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Overlay */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-white p-6 md:p-8 shadow-2xl border border-[#e0ddd5] z-[210] overflow-y-auto max-h-[95vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#1A1C19] opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <FiX size={22} />
            </button>

            <div className="text-center mb-6">
              <h2 className="font-cinzel text-lg font-bold text-[#1A1C19] tracking-[4px] uppercase mb-2">
                Request a Quote
              </h2>
              <div className="w-12 h-[1px] bg-[#adb940] mx-auto mb-3" />
              <p className="font-raleway text-[10px] text-gray-500 tracking-[1px] leading-relaxed">
                Tell us about your project and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleQuoteSubmit}>
              <ToastContainer />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="relative">
                  <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="FULL NAME"
                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-[#1A1C19]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="EMAIL ADDRESS"
                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-[#1A1C19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="relative">
                  <FiPhone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="PHONE NUMBER"
                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-[#1A1C19]"
                  />
                </div>

                {/* Location */}
                <div className="relative">
                  <FiMapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="LOCATION / AREA"
                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-[#1A1C19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Service Dropdown */}
                <div className="relative">
                  <FiLayers className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent text-[#1A1C19] cursor-pointer appearance-none uppercase"
                  >
                    <option value="" disabled className="text-gray-400">
                      SELECT SERVICE
                    </option>
                    <option value="Kitchen" className="text-[#1A1C19]">
                      Kitchen
                    </option>
                    <option value="Doors" className="text-[#1A1C19]">
                      Doors
                    </option>
                    <option value="Wardrobe" className="text-[#1A1C19]">
                      Wardrobe
                    </option>
                    <option value="Media Wall" className="text-[#1A1C19]">
                      Media Wall
                    </option>
                    <option value="Cafe Fitout" className="text-[#1A1C19]">
                      Cafe Fitout
                    </option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">
                    ▼
                  </div>
                </div>

                {/* Message (shorter rows to fit on screen) */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-0 top-2 text-gray-400 text-sm" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    placeholder="YOUR MESSAGE"
                    className="w-full pl-8 pt-0 pb-1 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 resize-none text-[#1A1C19]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3c5a25] text-white py-3.5 font-raleway text-[10px] tracking-[4px] font-bold hover:bg-[#2a3f1a] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl uppercase mt-4"
              >
                Request Quote
              </button>
            </form>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
