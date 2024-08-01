import React from "react";
import images from "../equip";

const Equipments = () => {
  return (
    <section className="my-20 w-full">
      <div className="w-full space-y-5 text-center">
        <h3 className="font-body text-5xl font-bold text-white">
          Some of Our Equipments
        </h3>
        <p className="font-Lato text-2xl text-textColor">
          Have a look into our gallery to have glimpse of our gym
        </p>
      </div>
      <div className=" wrapper grid grid-cols-1 gap-8 px-3 py-10 *:overflow-hidden *:rounded-xl ss:grid-cols-2 md:grid-cols-3 md:px-0">
        {images.map((eq, index) => (
          <div key={index} className="h-[20rem]">
            <img
              src={eq.src}
              alt={eq.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipments;
