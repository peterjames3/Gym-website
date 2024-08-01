import React from "react";
import yogaT from "../assets/coach1.jpg";
import coach2 from "../assets/coach2.jpg";
import coach3 from "../assets/coach3.jpg";
import coach4 from "../assets/coach4.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";

const OurTeam = () => {
  return (
    <section className="my-20 w-full">
      <div className="mx-auto mt-2 space-y-5 text-center">
        <h3 className="text-center font-body text-5xl font-bold text-white">
          Meet Our Team
        </h3>
        <p className="font-Lato text-2xl text-textColor">
          Our certified and experienced trainers are here to help you achieve
          your fitness goals.
        </p>
      </div>

      <div className="wrapper grid grid-cols-1 gap-8 px-3 py-10 *:overflow-hidden *:rounded-xl ss:grid-cols-2 md:grid-cols-4 md:px-0">
        {/* Add team members here */}
        <div className="flex flex-col">
          <div className="h-[90%]">
            <img
              src={coach2}
              alt="/"
              loading="lazy"
              className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:transform hover:cursor-pointer"
            />
          </div>
          <div className="flex-grow space-y-3 bg-cardbg py-3 text-center">
            <h4 className="tex-bold text-center text-2xl text-white">
              Benjamin Garcia
            </h4>
            <p className="text-xl text-textColor">Fitness Coach</p>
            <nav className="flex items-center justify-around text-2xl">
              <FaInstagramSquare className="text-orange-600 transition-all delay-300 hover:cursor-pointer" />
              <BsTwitterX className="text-slate-400 transition-all delay-300 hover:cursor-pointer" />
              <IoLogoLinkedin className="text-blue-500 transition-all delay-300 hover:cursor-pointer" />
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[90%]">
            <img
              src={yogaT}
              alt="/"
              loading="lazy"
              className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:transform hover:cursor-pointer"
            />
          </div>
          <div className="flex-grow space-y-3 bg-cardbg py-3 text-center">
            <h4 className="tex-bold text-center text-2xl text-white">
              Sophia Johnson
            </h4>
            <p className="text-xl text-textColor">Yoga Trainer</p>
            <nav className="flex items-center justify-around text-2xl">
              <FaInstagramSquare className="text-orange-600 transition-all delay-300 hover:cursor-pointer" />
              <BsTwitterX className="text-slate-400 transition-all delay-300 hover:cursor-pointer" />
              <IoLogoLinkedin className="text-blue-500 transition-all delay-300 hover:cursor-pointer" />
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[90%]">
            <img
              src={coach3}
              alt="/"
              loading="lazy"
              className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:transform hover:cursor-pointer"
            />
          </div>
          <div className="flex-grow space-y-3 bg-cardbg py-3 text-center">
            <h4 className="tex-bold text-center text-2xl text-white">
              David Anderson
            </h4>
            <p className="text-xl text-textColor">Strength Coach</p>
            <nav className="flex items-center justify-around text-2xl">
              <FaInstagramSquare className="text-orange-600 transition-all delay-300 hover:cursor-pointer" />
              <BsTwitterX className="text-slate-400 transition-all delay-300 hover:cursor-pointer" />
              <IoLogoLinkedin className="text-blue-500 transition-all delay-300 hover:cursor-pointer" />
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[90%]">
            <img
              src={coach4}
              alt="/"
              loading="lazy"
              className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:transform hover:cursor-pointer"
            />
          </div>
          <div className="flex-grow space-y-3 bg-cardbg py-3 text-center">
            <h4 className="tex-bold text-center text-2xl text-white">
              James Wilson
            </h4>
            <p className="text-xl text-textColor">Group Fitness Instruction</p>
            <nav className="flex items-center justify-around text-2xl">
              <FaInstagramSquare className="text-orange-600 transition-all delay-300 hover:cursor-pointer" />
              <BsTwitterX className="text-slate-400 transition-all delay-300 hover:cursor-pointer" />
              <IoLogoLinkedin className="text-blue-500 transition-all delay-300 hover:cursor-pointer" />
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
