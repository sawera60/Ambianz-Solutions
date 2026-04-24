import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const QuoteModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-white p-8 md:p-10 shadow-2xl border border-[#e0ddd5] z-[210]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-[#1A1C19] opacity-40 hover:opacity-100 transition-opacity duration-300"
                        >
                            <FiX size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="font-cinzel text-xl font-bold text-[#1A1C19] tracking-[4px] uppercase mb-3">
                                Request a Quote
                            </h2>
                            <div className="w-12 h-[1px] bg-[#adb940] mx-auto mb-4" />
                            <p className="font-raleway text-[11px] text-gray-500 tracking-[1px] leading-relaxed">
                                Tell us about your project and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                            <div className="relative">
                                <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    required
                                    placeholder="FULL NAME"
                                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300"
                                />
                            </div>

                            <div className="relative">
                                <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="email"
                                    required
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300"
                                />
                            </div>

                            <div className="relative">
                                <FiPhone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="tel"
                                    required
                                    placeholder="PHONE NUMBER"
                                    className="w-full pl-8 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300"
                                />
                            </div>

                            <div className="relative">
                                <FiMessageSquare className="absolute left-0 top-4 text-gray-400 text-sm" />
                                <textarea
                                    required
                                    rows={6}
                                    placeholder="YOUR MESSAGE"
                                    className="w-full pl-8 pt-1 pb-2 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[10px] tracking-widest transition-colors duration-300 bg-transparent placeholder:text-gray-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3c5a25] text-white py-4 font-raleway text-[10px] tracking-[4px] font-bold hover:bg-[#2a3f1a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl uppercase mt-8"
                            >
                                Request Quote
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
