import React from 'react'
import Navbar from "./Navbar"
import Herosection from './Herosection'
import Collection from './Collection'
import Footer from './Footer'
import Bestseller from './Bestseller'
import Process from "./Process"
import MiniServices from './Services'

const Home = () => {
    return (
        <>
           
            <Herosection />
            <Bestseller />
            <Collection />
            <MiniServices />
            <Process />
            <Footer />

        </>
    )
}

export default Home