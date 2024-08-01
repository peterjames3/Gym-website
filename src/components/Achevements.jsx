import React from "react";

const achievementsData = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients" },
  { value: "2+", label: "Branch" },
  { value: "10+", label: "Trainers" },
];

const Achievements = () => {
  return (
    <section className=" mx-auto my-20 grid max-w-[1400px] grid-cols-1 divide-x divide-slate-800 bg-[#0a0a0a] ss:grid-cols-4">
      {achievementsData.map((achievement, index) => (
        <div
          key={index}
          className="py-8  xs:px-9 ss:px-10 sm:px-16 md:px-24"
        >
          <div className="flex items-center justify-center gap-3 text-5xl font-semibold text-white">
            <h3>{achievement.value}</h3>
          </div>
          <div className="text-center text-xl text-slate-300">
            {achievement.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
