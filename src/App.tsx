import React from 'react';
import Hero from './sections/Hero';
import Navbar from './compoents/Navbar';
import Features from './sections/Features';
import Footer from './compoents/Footer';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import FAQ from './sections/FAQ';
import Team from './sections/Team';
import Blog from "./sections/Blog";
import HowItWorks from "./sections/HowItWorks";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Team />
      <Blog />
    </>
  );
};

export default App;