import React from "react";
import whyusImg from "../assets/whyus.jpg";

const Whyus = () => {
  return (
    <section className="my-20 w-full">
      <div className="wrapper space-y-6 py-10">
        <h3 className="text-center font-body text-5xl text-white">
          Why Should You Choose Us
        </h3>

        <p className="text-balance text-center font-Lato text-2xl text-textColor">
          We provide a wide range of comprehensive fitness programs tailored to
          individuals of all fitness levels. Our goal is to help you achieve
          specific targets and maximize your results.
        </p>
      </div>
      <div className="bg mx-auto mt-0 grid min-h-[40rem] max-w-[1400px] grid-cols-1 gap-5 px-5 py-2 ss:grid-cols-3">
        <div className="flex flex-col justify-between *:rounded-2xl *:border *:border-primary *:text-center">
          <div className="space-y-3 bg-cardbg py-4 text-white xs:px-1 ss:bg-transparent md:px-4">
            <h4 className="text-2xl">Qualfied Trainers</h4>
            <p className="text-xl text-white">
              {" "}
              Achieve your bodybuilding goals with our expert trainers and
              tailored programs, focusing on strength,
            </p>
          </div>
          <div className="space-y-3 bg-cardbg py-4 text-white xs:px-1 ss:bg-transparent md:px-4">
            <h4 className="text-2xl">Personal Trainers</h4>
            <p className="text-xl">
              {" "}
              Certified trainers offer personalized plans and coaching to help
              you achieve your fitness goals.
            </p>
          </div>
        </div>
        <div>
          {/*  <img
            src={ToolsImg}
            alt="img"
            loading="lazy"
            className="h-[40rem] rounded-3xl"
          /> */}
        </div>
        <div className="flex flex-col justify-between *:rounded-2xl *:border *:border-primary *:text-center">
          <div className="space-y-3 bg-cardbg py-4 text-white xs:px-1 ss:bg-transparent md:px-4">
            <h4 className="text-2xl">Flexible Time</h4>
            <p className="text-xl">
              {" "}
              We offer flexible scheduling options to fit your busy lifestyle,
              ensuring you can work out when it's most convenient for you.
            </p>
          </div>
          <div className="space-y-3 bg-cardbg py-4 text-white xs:px-1 ss:bg-transparent md:px-4">
            <h4 className="text-2xl">Community</h4>
            <p className="text-xl">
              {" "}
              Join a supportive and motivating community of like-minded
              individuals who encourage and inspire each other to reach their
              fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
