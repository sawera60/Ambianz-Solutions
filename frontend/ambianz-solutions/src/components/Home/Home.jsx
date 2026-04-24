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
import ServicesDisciplines from './ServicesDisciplines'
import WhyAmbianz from './WhyAmbianz'
import ShopPreview from './ShopPreview'
import CTAStrip from './CTAStrip'
import FeaturedProject from './FeaturedProject'




const Home = () => {
    return (
        <>

            <Herosection />
            <ServicesDisciplines />
            {/* <Bestseller /> */}
            {/* <Collection /> */}
            <WhyAmbianz />
            <FeaturedProject />
            <ShopPreview />
            {/* <MiniServices /> */}
            {/* <Bottomfeature /> */}
            <CTAStrip />
            {/* <Process /> */}
            {/* <Newsletter /> */}


        </>
    )
}

export default Home