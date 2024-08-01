import React from 'react';
import heroImg from "../assets/About-equipment.jpg";

const TrainersHero = () => {
  return (
    <section className="to-gray-green-800 relative h-[30rem] bg-gradient-to-r from-black to-gray-700">
      <div className="h-full w-full">
        <img
          src={heroImg}
          alt="hero img"
          loading='lazy'
          className="h-full w-full bg-right object-cover mix-blend-overlay"
        />
      </div>
      <div className="absolute left-[0%] top-[35%] max-w-[800px] space-y-6 px-5 py-4 sm:left-[0%] xl:translate-x-[14%] xxl:translate-x-1/2">
        <h3 className="py-2 font-body text-5xl font-semibold text-primary">
          Our Trainers
        </h3>

        <p className="text-2xl text-textColor">
          Our gym is loved by thousands of people all around the world. Here is
          what they say about us.
        </p>
      </div>
    </section>
  );
}

export default TrainersHero
