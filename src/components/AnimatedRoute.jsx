import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Location from '../pages/Location'
import Contact from '../pages/ContactUs';
import Trainers from  '../pages/Trainers'
import Pricing from '../pages/Pricing';
import LoadingSpinner from "./LoadingSpinner"; 
const NoPage = lazy(() => import("../pages/NoPage"));

const AnimatedRoute = () => {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        {/* Fallback UI while loading lazy components */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoute
