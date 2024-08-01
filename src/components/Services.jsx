import React from "react";
import cardio from "../assets/cardio.jpg";
import crossfit from "../assets/crossfit-workout.jpg";
import boxing from "../assets/couple-boxing-gym.jpg";
import workout from "../assets/workout.jpg";

const services = [
  {
    title: "Cardio Exercise",
    description:
      "Your first step is to choose the right cardio workout for you to get better shape.",
    image: cardio,
  },
  {
    title: "Boxing Training",
    description:
      "Boxing has become a popular fitness trend for people who are trying to lose weight.",
    image: boxing,
  },
  {
    title: "Power Workouts",
    description:
      "Power workouts help you burn more calories and achieve results faster.",
    image: workout,
  },
  {
    title: "Crossfit",
    description:
      "You may prefer CrossFit classes instead of doing the workouts on your own.",
    image: crossfit,
  },
];

const Services = () => {
  return (
    <section className="wrapper py-12 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-body text-5xl font-bold">Our Program</h2>
        <p className="mt-2 font-Lato text-2xl text-textColor">
          We always provide the best fitness services to help you get in better
          shape
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-lg transition duration-300 hover:bg-cardbg"
          >
            <div className="h-[70%]">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-grow p-6">
              <h3 className="font-body text-2xl font-semibold transition duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-2 font-Lato text-[1.2rem] leading-[2.2rem] text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
