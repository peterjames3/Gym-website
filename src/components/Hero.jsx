import React from "react";
import heroImg from "../assets/half-naked.webp";
import { Link } from 'react-router-dom'
 
const Hero = () => {
  return (
    <section className=" h-[60rem] to-gray-green-800 relative  w-full bg-gradient-to-r from-black to-gray-600">
      <div className=" h-full w-full">
        <img
          src={heroImg}
          alt="hero img"
          loading="lazy"
          className="h-full w-full object-cover bg-right mix-blend-overlay"
        />
      </div>
      <div className="absolute left-[0%] top-[25%] max-w-[800px] space-y-6 px-5 py-4 sm:left-[0%] xl:translate-x-[14%] xxl:translate-x-1/2">
        <h1 className="py-2 font-body text-7xl font-semibold text-primary">
          Achieve Your Best Self.
        </h1>
        <h2 className="text-5xl font-medium text-white">
          Join Us for a Healthier Tomorrow.
        </h2>
        <p className="text-textColor text-3xl">
          Our gym features top-of-the-line strength and cardio equipment to help
          you reach your fitness goals.
        </p>
        <div>
            <Link to='/contact' className="btn btn--primary">
          Get Started
        </Link>
          
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
