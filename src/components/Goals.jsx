import React from "react";
import { goals } from "../goals";

const Goals = () => {
  return (
    <section className="text-center">
      <h2 className="py-10 font-body text-6xl font-bold text-white">
        Four{" "}
        <span className="relative mx-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-700">
          <span className="relative text-white">Smart</span>
        </span>
        Steps To Reach Your goal
      </h2>
      <div className="wrapper grid grid-cols-1 gap-10 ss:grid-cols-4">
        {goals.map((goal, index) => (
          <div key={index} className=" ">
            <div className="mb-4 rounded-full p-4">
              <img
                src={goal.icon}
                alt={`${goal.title} icon`}
                className="mx-auto size-20"
              />
            </div>
            <div className="text-start">
              <h3 className="mb-2 text-2xl font-bold text-white">
                {goal.title}
              </h3>
              <p className="mb-4 font-Lato text-[1.2rem] leading-[2.2rem] text-textColor">
                {goal.description}
              </p>
              {goal.link && (
                <a
                  href={goal.link.url}
                  className="text-primary font-body font-bold hover:underline"
                >
                  {goal.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
