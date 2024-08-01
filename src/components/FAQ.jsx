import React from "react";
import faqImg from "../assets/fitness-bicycles.webp";

const FAQ = () => {
  return (
    <section className="to-gray-green-800 relative h-[45rem] ss:h-[35rem] bg-gradient-to-r from-black to-gray-800">
      <div className="h-full w-full">
        <img
          src={faqImg}
          alt="hero img"
          className="h-full w-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="absolute left-[0%] top-[1%] h-auto max-w-[800px] space-y-6 px-5 py-4 sm:left-[0%] xl:translate-x-[14%] xxl:translate-x-1/2">
        <div className="space-y-4">
          <h4 className="font-body text-4xl font-semibold text-white">
            Most Asked Question
          </h4>
          <details className="group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 font-Lato text-xl text-gray-900 dark:bg-gray-900 dark:text-white">
              <h2 className="font-medium">
                What are your gym's operating hours?
              </h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-2 p-4 font-Lato text-gray-700 dark:text-gray-200">
              Our gym is open from 5:00 AM to 10:00 PM on weekdays and 7:00 AM
              to 8:00 PM on weekends.
            </p>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 font-Lato text-xl text-gray-900 dark:bg-gray-900 dark:text-white">
              <h2 className="font-medium">
                Do I need to book classes in advance?
              </h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-2 p-4 font-Lato text-gray-700 dark:text-gray-200">
              Yes, we recommend booking classes in advance as they can fill up
              quickly. You can book through our website or mobile app.
            </p>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 font-Lato text-xl text-gray-900 dark:bg-gray-900 dark:text-white">
              <h2 className="font-medium">
                What types of membership plans do you offer?
              </h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-2 p-4 font-Lato text-gray-700 dark:text-gray-200">
              We offer weekly and monthly membership plans, with options for
              single gym access or multi-gym access. You can find detailed
              pricing and benefits on our membership page.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
