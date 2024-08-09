import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import ContactHero from "../components/ContactHero";
import Map from "../components/Map";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Contact Us - KimGym</title>
        <meta
          name="description"
          content="Get in touch with KimGym. Find contact details, our location on the map, and read our FAQ section for more information."
        />
        <link rel="canonical" href="https://kimgym.netlify.app/contact" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContactHero />
        <Contact />
        <Map />
        <FAQ />
      </motion.section>
    </>
  );
};

export default ContactUs;
