import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FloorPlans from "../components/FloorPlans";
import Emi from "../components/Emi";
import OtherProject from "../components/OtherProject";
import Contact from "../components/Contact";
import Rera from "../components/Rera";
import Location from "../components/Location";
import FixWhatsapp from "../components/FixWhatsapp";
import Amenitie from "../components/Amenitie";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Gallery />
      <FloorPlans />
      <Emi />
      <Amenitie/>
      <Location />
      <Rera />
      <Contact />
      <OtherProject />
      <FixWhatsapp />
    </>
  );
};

export default Home;
