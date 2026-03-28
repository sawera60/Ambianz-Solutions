import React from 'react'
import Navbar from "./Navbar"
import Herosection from './Herosection'
import Collection from './Collection'
import Footer from './Footer'
import Bestseller from './Bestseller'
import Process from "./Process"
import MiniServices from './Services'
import Bottomfeature from './bottomfeature'
import Newsletter from './Newsletter'



const Home = () => {
    return (
        <>
          
            <Herosection />
            <Bestseller />
            <Collection />
            <MiniServices />
            <Bottomfeature />
            <Process />
            <Newsletter />
            <Footer />

        </>
    )
}

export default Home