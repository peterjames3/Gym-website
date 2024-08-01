import React, { useState } from "react";
import { prices } from "../prices";

const Pricing = () => {
  const [isPricing, setIsPricing] = useState(false);
  const handlePrices = () => {
    setIsPricing((preValue) => !preValue);
  };
  console.log(isPricing);
  return (
    <section className="my-20 w-full">
      <div className="space-y-3 text-center">
        <h3 className="font-body text-5xl font-bold text-white">
          Choose The
          <span className="relative mx-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-700">
            <span className="relative text-white">Best</span>
          </span>
          Plan
        </h3>
        <p className="font-Lato text-2xl text-textColor">
          Choose the membership plan that is right for your fitness.
        </p>
      </div>
      <div className="wrapper flex items-center justify-center gap-4">
        <nav className="rounded-lg bg-primary p-1 text-xl text-textColor">
          Weekly
        </nav>
        <nav>
          <label
            htmlFor="AcceptConditions"
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-700 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
          >
            <input
              type="checkbox"
              id="AcceptConditions"
              className="peer sr-only"
            />

            <span
              onClick={handlePrices}
              className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-cardbg transition-all peer-checked:start-6"
            ></span>
          </label>
        </nav>
        <nav className="rounded-lg bg-primary p-1 text-xl text-textColor">
          Monthly
        </nav>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1400px] grid-cols-1 gap-4 px-4 pt-2 ss:gap-5 sm:grid-cols-3 sm:gap-8 md:px-0">
        {prices.map((plan) => (
          <div
            key={plan.id}
            className={`space-y-9 border px-6 py-14 text-center sm:text-start md:px-12 ${plan.id == 2 ? "border-primary" : "border-slate-800"}`}
          >
            <h4 className="mb-2 font-body text-2xl font-bold text-white">
              {plan.name}
            </h4>
            <p className="mb-4 font-Lato text-xl text-textColor">
              {plan.description}
            </p>
            <nav className="mb-4 flex items-center justify-center gap-1 font-bold text-primary sm:justify-start">
              ${" "}
              <span className="text-5xl">
                {isPricing ? plan.priceM : plan.priceW}
              </span>
              {isPricing ? "/mo" : "/we"}
            </nav>

            <ul className="mb-4 space-y-2">
              <h5 className="text-center text-xl text-textColor sm:text-start">
                Includes:
              </h5>
              {plan.features.map((feature, index) => (
                <li key={index} className="font-Lato text-xl text-textColor">
                  {feature}
                </li>
              ))}
            </ul>
          {/*   <button className="btn btn--secondary">
              {plan.buttonText}
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
