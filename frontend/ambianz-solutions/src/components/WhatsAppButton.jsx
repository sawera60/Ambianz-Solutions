import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/923317416486"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#3c5a25] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{
                boxShadow: "0 4px 14px rgba(60, 90, 37, 0.4)"
            }}
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default WhatsAppButton;
