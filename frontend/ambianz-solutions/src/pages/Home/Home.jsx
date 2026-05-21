import React from "react";
import Herosection from "./components/Herosection";
import ServicesDisciplines from "./components/ServicesDisciplines";
import WhyAmbianz from "./components/WhyAmbianz";
import ShopPreview from "./components/ShopPreview";
import FeaturedProject from "./components/FeaturedProject";
import CTAStrip from "./components/CTAStrip";

const Home = () => {
  return (
    <>
      <Herosection />
      <ServicesDisciplines />
      <WhyAmbianz />
      <FeaturedProject />
      <ShopPreview />
      <CTAStrip />
    </>
  );
};

export default Home;
