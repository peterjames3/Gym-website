import React, { useEffect} from "react";
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero";
import Achevements from "../components/Achevements";
import OurTeam from "../components/OurTeam";
import Services from '../components/Services'
import CTA from '../components/CTA'
import AboutComponent from '../components/AboutComponent'

const About = () => {
    const location = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <AboutHero />
      <Achevements />
      <AboutComponent />
      <OurTeam />
      <Services />
      <CTA />
    </motion.section>
  );
};

export default About;
