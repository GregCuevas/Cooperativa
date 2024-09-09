import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import BlogSection from "../components/BlogSection";
import BlogSocios from "../components/BlogSocios";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <BlogSection />
      <BlogSocios />
    </>
  );
};

export default Home;
