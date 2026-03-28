import React from 'react'
import Home from './components/Home/Home'
import Services from "./components/Services/Services"
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'
import GetQuote from "./components/GetQuote/GetQuote"
import Shop from './components/Shop/Shop'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      {/* always show navbar and footer on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App