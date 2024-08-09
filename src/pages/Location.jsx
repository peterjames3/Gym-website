import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LocationHero from "../components/LocationHero";
import LocationComponent from "../components/LocationComponent";
import Program from "../components/Program";
import Equipments from "../components/Equipments";
import { Helmet } from 'react-helmet-async'

const Location = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);
  return (
    <>
    <Helmet>
      <title>Location - KimGym</title>
      <meta
        name="description"
        content="Find KimGym's location, hours, and nearest gym. Explore our various fitness programs, equipment, and pricing options."
      />
      <link rel="canonical" href="https://kimgym.netlify.app/location" />
    </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LocationHero />
        <Program />
        <LocationComponent />
        <Equipments />
      </motion.section>
    </>
  );
};

export default Location;
