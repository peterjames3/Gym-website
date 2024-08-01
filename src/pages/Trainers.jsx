import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TrainersHero from '../components/TrainersHero'
import OurTeam from '../components/OurTeam'
import { useLocation } from 'react-router-dom'
import Goals from  '../components/Goals'

const Trainers = () => {
    const location = useLocation();
    useEffect(()=>{
       window.scrollTo(0, 0)
    }, [location])
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TrainersHero />
      <OurTeam />
      <Goals />
    </motion.section>
  );
}

export default Trainers
