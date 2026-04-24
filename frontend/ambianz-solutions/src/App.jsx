import React from 'react'
import Home from './components/Home/Home'
import Services from "./components/Services/Services"
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'
import GetQuote from "./components/GetQuote/GetQuote"
import Shop from './components/Shop/Shop'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import { Routes, Route, useLocation } from "react-router-dom"
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Favorites from './components/Favorites/Favorites'
import QuoteModal from './components/Home/QuoteModal'
import KitchenDetail from './components/Services/KitchenDetail'
import MediaWallDetail from './components/Services/MediaWallDetail'
import WardrobeDetail from './components/Services/WardrobeDetail'
import DoorDetail from './components/Services/DoorDetail'
import CafeDetail from './components/Services/CafeDetail'
import SubNavbar from './components/Services/SubNavbar'
import { QuoteModalProvider, useQuoteModal } from './context/QuoteModalContext'

// Helper component to render the modal since it needs the context
const GlobalModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal();
  return <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />;
};

const AppContent = () => {
  const location = useLocation();
  const showSubNavbar = location.pathname.startsWith('/services');

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      {showSubNavbar && <SubNavbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/kitchens" element={<KitchenDetail />} />
          <Route path="/services/media-walls" element={<MediaWallDetail />} />
          <Route path="/services/wardrobes" element={<WardrobeDetail />} />
          <Route path="/services/doors" element={<DoorDetail />} />
          <Route path="/services/cafe-fitouts" element={<CafeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/getquote" element={<GetQuote />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <GlobalModal />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

const App = () => {
  return (
    <QuoteModalProvider>
      <AppContent />
    </QuoteModalProvider>
  )
}

export default App