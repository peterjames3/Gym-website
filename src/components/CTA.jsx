import React from "react";
import CTAbtn from "./CTAbtn";

const CTA = () => {
  return (
    <section
      className="relative my-20 w-full py-10"
      style={{
        backgroundImage: `url('/src/assets/coach4.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className=" relative mx-auto mt-0 max-w-[800px] space-y-6 text-center">
        <h3 className="font-body opacity-80 text-5xl font-bold text-white">
          Come in Today!
        </h3>
        <p className="font-Lato opacity-40 text-3xl leading-[3rem] text-textColor">
          We believe in providing the best workout for the best results. Feel
          good, feel good fast.
        </p>
      </div>
      <div className=" relative mt-14 flex justify-center">
        <CTAbtn />
      </div>
    </section>
  );
};

export default CTA;
