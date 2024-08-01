import React from "react";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { GiJumpingRope } from "react-icons/gi";
const Program = () => {
  return (
    <section className="mt-20 w-full">
      <div className="mx-auto mt-0 max-w-[1400px] space-y-5">
        <div className="flex flex-col items-center justify-between space-y-10 px-4 sm:flex-row md:gap-24 md:space-y-0 md:px-0">
          <div className="w-full font-body text-5xl font-bold text-white sm:w-1/2">
            <h3>
              The Best Services We
              <span class="relative mr-1 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-700">
                <span class="relative text-white">Offers </span>
              </span>
              For You
            </h3>
          </div>
          <div className="w-full text-2xl leading-[2rem] text-textColor sm:w-1/2">
            <p>
              We offer a wide range of comprehensive fitness programs designed
              to cater to individuals of all fitness levels. Our aim to help you
              achieve specific goals & maximize results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-10 px-5 py-8 *:rounded-xl ss:grid-cols-2 md:grid-cols-4">
          <div className="group space-y-5 bg-cardbg p-4 transition-all delay-300 hover:cursor-pointer hover:bg-secondary">
            <nav className="grid size-16 place-items-center rounded-full border border-primary">
              <CgGym className="text-5xl text-primary" />
            </nav>
            <h4 className="text-2xl text-white transition-all delay-300 group-hover:text-textColor">
              Strenght Training
            </h4>
            <p className="text-xl text-textColor transition-all delay-300 group-hover:text-textColor">
              Our certified trainers create customized workout plans that help
              you progressively build muscle and increase strength effectively.
            </p>
          </div>
          <div className="group space-y-5 bg-cardbg p-4 transition-all delay-300 hover:cursor-pointer hover:bg-secondary">
            <nav className="grid size-16 place-items-center rounded-full border border-primary">
              <GrYoga className="text-5xl text-primary" />
            </nav>
            <h4 className="text-2xl text-white transition-all delay-300 group-hover:text-textColor">
              Yoga Training
            </h4>
            <p className="line-clamp-5 transform text-xl text-textColor transition-all delay-300 duration-300 ease-in-out hover:line-clamp-6 group-hover:text-textColor">
              Experience the transformative power of yoga with our personalized
              sessions, designed to enhance flexibility, reduce stress, and
              improve overall well-being.
            </p>
          </div>
          <div className="group space-y-5 bg-cardbg p-4 transition-all delay-300 hover:cursor-pointer hover:bg-secondary">
            <nav className="grid size-16 place-items-center rounded-full border border-primary">
              <GiMuscleUp className="text-5xl text-primary" />
            </nav>
            <h4 className="text-2xl text-white transition-all delay-300 group-hover:text-textColor">
              Body Building
            </h4>
            <p className="text-xl text-textColor transition-all delay-300 group-hover:text-textColor">
              Achieve your bodybuilding goals with our expert trainers and
              tailored programs, focusing on strength, muscle growth, and
              endurance.
            </p>
          </div>
          <div className="group space-y-5 bg-cardbg p-4 transition-all delay-300 hover:cursor-pointer hover:bg-secondary">
            <nav className="grid size-16 place-items-center rounded-full border border-primary">
              <GiJumpingRope className="text-5xl text-primary" />
            </nav>
            <h4 className="text-2xl text-white transition-all delay-300 group-hover:text-textColor">
              Weight Loss
            </h4>
            <p className="text-xl text-textColor transition-all delay-300 group-hover:text-textColor">
              Achieve your weight loss goals with our personalized workout
              plans, focusing on effective fat burning and sustainable fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
