import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import BlogSection from "../components/BlogSection";
import BlogSocios from "../components/BlogSocios";
import CoopStats from "../components/CoopStats";
import Accordion from "../components/AccordionFAQ";
import LocationMap from "../components/LocationMap";
import LoanOptions from "../components/LoanOptions";
import Footer from "../components/Footer";
import LogoSection from "@/components/LogoSection";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
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
