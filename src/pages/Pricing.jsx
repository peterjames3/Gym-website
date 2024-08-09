import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation} from 'react-router-dom'
import Membership from "../components/Membership";
import Prices from "../components/Prices";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
    const location = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);
  return (
    <>
    <Helmet>
      <title>Pricing - KimGym</title>
      <meta
        name="description"
        content="Discover KimGym's membership options, pricing, and benefits. Learn more about our different fitness levels and personalized plans."
      />
      <link rel="canonical" href="https://kimgym.netlify.app/pricing" />
    </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Membership />
        <Prices />
      </motion.section>
    </>
  );
};

export default Pricing;
