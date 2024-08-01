import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation} from 'react-router-dom'
import Membership from "../components/Membership";
import Prices from "../components/Prices";

const Pricing = () => {
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
      <Membership />
      <Prices />
    </motion.section>
  );
};

export default Pricing;
