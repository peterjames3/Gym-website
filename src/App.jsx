import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimatedRoute from './components/AnimatedRoute'
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Aos from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easeing: "ease-i-sine,",
    });
  }, []);

  return (
    <Router>
      <div>
       
          <section>
            <Navbar />
            <AnimatedRoute />
            <ScrollToTop />
            <Footer />
          </section>
      
      </div>
    </Router>
  );
}

export default App;
