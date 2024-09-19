import React from "react";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import BlogSection from "../components/BlogSection";
import BlogSocios from "../components/BlogSocios";
import CoopStats from "../components/CoopStats";
import Accordion from "../components/AccordionFAQ";
import LocationMap from "../components/LocationMap";
import LoanOptions from "../components/LoanOptions";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Homepage from "../components/HomePage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <LogoSection />
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
