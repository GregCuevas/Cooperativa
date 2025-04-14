import React from "react";
import Navbar from "../../components/layouts/Navbar";
import FeatureSection from "../../components/sections/FeatureSection";
import BlogSection from "../../components/sections/BlogSection";
import BlogSocios from "../../components/sections/BlogSocios";
import CoopStats from "../../components/sections/CoopStats";
import Accordion from "../../components/sections/AccordionFAQ";
import LocationMap from "../../components/LocationMap";
import LoanOptions from "../../components/sections/LoanOptions";
import Footer from "../../components/layouts/Footer";
import Homepage from "../../components/sections/HomePage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <FeatureSection />
      <BlogSection />
      <BlogSocios />
      <CoopStats />
      <LoanOptions />
      <Accordion />
      <LocationMap />
      <Footer />
    </>
  );
};

export default Home;
