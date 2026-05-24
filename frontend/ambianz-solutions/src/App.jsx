import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop/Shop";
import Projects from "./pages/Projects/Projects";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Favorites from "./components/Favorites/Favorites";
import QuoteModal from "./components/QuoteModal";
import Cart from "./components/Cart";
import KitchenDetail from "./pages/Services/components/KitchenDetail";
import MediaWallDetail from "./pages/Services/components/MediaWallDetail";
import WardrobeDetail from "./pages/Services/components/WardrobeDetail";
import DoorDetail from "./pages/Services/components/DoorDetail";
import CafeDetail from "./pages/Services/components/CafeDetail";
import SubNavbar from "./pages/Services/components/SubNavbar";
import { QuoteModalProvider, useQuoteModal } from "./context/QuoteModalContext";
import CartProvider from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Dashboard from "./pages/admin/Dashboard";
import { authDataContext } from "./context/AuthContext.jsx";

// Helper component to render the modal since it needs the context
const GlobalModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal();
  return <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />;
};

const AdminRoute = () => {
  const { user } = useContext(authDataContext);

  if (!user) return <Navigate to="/signin" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return <Dashboard />;
};

const AppContent = () => {
  const location = useLocation();
  const showSubNavbar = location.pathname.startsWith("/services");
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F1]">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminRoute />} />
        </Routes>
      </main>
      {!isAdmin && <GlobalModal />}
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
    </div>
  );
};

const App = () => {
  return (
    <FavoritesProvider>
      <CartProvider>
        <QuoteModalProvider>
          <AppContent />
          <Cart />
        </QuoteModalProvider>
      </CartProvider>
    </FavoritesProvider>
  );
};

export default App;
