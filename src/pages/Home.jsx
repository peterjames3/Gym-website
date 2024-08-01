import React, { useEffect} from "react";
import Hero from "../components/Hero";
import AboutComponent from "../components/AboutComponent";
import Features from "../components/Features";
import Program from "../components/Program";
import Whyus from "../components/Whyus";
import Testimonials from "../components/Testimonials";
import OurTeam from "../components/OurTeam";
import Equipments from "../components/Equipments";
import Prices from "../components/Prices";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom'
const Home = () => {
     const location = useLocation();
     useEffect(() => {
       window.scrollTo(0, 0); // Reset scroll position to top
     }, [location]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <AboutComponent />
      <Program />
      <Whyus />
      <Testimonials />
      <OurTeam />
      <Equipments />
      <Prices />
      <CTA />
      <Contact />
    </motion.section>
  );
};

export default Home;
