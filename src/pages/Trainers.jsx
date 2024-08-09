import { useEffect } from "react";
import { motion } from "framer-motion";
import TrainersHero from "../components/TrainersHero";
import OurTeam from "../components/OurTeam";
import { useLocation } from "react-router-dom";
import Goals from "../components/Goals";
import { Helmet } from "react-helmet-async";

const Trainers = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Trainers - KimGym</title>
        <meta
          name="description"
          content="Discover KimGym's team of certified trainers, personalized training plans, and coaching styles. Learn more about our top-rated trainers and their expertise."
        />
        <link rel="canonical" href="https://kimgym.netlify.app/trainers" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <TrainersHero />
        <OurTeam />
        <Goals />
      </motion.section>
    </>
  );
};

export default Trainers;
