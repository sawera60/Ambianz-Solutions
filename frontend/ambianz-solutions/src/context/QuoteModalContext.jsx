import React, { createContext, useContext, useState } from 'react';

const QuoteModalContext = createContext();

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider = ({ children }) => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);

    return (
        <QuoteModalContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
            {children}
        </QuoteModalContext.Provider>
    );
};
