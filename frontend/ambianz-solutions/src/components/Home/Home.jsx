import React from 'react'
import Navbar from "./Navbar"
import Herosection from './Herosection'
import Collection from './Collection'
import Footer from './Footer'
import Bestseller from './Bestseller'
import Services from './Services'
import Process from "./Process"

const Home = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <Bestseller />
            <Collection />
            <Services />
            <Process />
            <Footer />

        </>
    )
}

export default Home