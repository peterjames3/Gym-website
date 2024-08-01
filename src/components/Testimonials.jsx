import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const previousRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const prevHandler = () => slider.prev();
      const nextHandler = () => slider.next();

      if (previousRef.current) {
        previousRef.current.addEventListener("click", prevHandler);
      }

      if (nextRef.current) {
        nextRef.current.addEventListener("click", nextHandler);
      }

      return () => {
        if (previousRef.current) {
          previousRef.current.removeEventListener("click", prevHandler);
        }
        if (nextRef.current) {
          nextRef.current.removeEventListener("click", nextHandler);
        }
        slider.destroy();
      };
    }
  }, []);

  return (
    <section className="">
      <div className="wrapper px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl font-body text-5xl font-bold tracking-tight text-white sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={previousRef}
              className="rounded-full border border-primary p-3 text-rose-600 transition hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-primary p-3 text-rose-600 transition hover:bg-primary hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 font-Lato shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-Lato text-xl font-bold text-textColor sm:text-2xl">
                      "Best Decision Ever"
                    </h3>
                    <p className="mt-4 font-Lato text-gray-500">
                      Joining this gym has been one of the best decisions I’ve
                      ever made. The staff is incredibly friendly and
                      supportive, and the facilities are top-notch. I've seen
                      amazing progress in my fitness journey, and I couldn't be
                      happier!"
                    </p>
                  </div>
                </div>
                <footer className="mt-8 font-Lato text-sm text-primary">
                  &mdash; Jane Cooper
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4 font-Lato">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      "Variety of Classes".
                    </h3>
                    <p className="mt-4 text-gray-500">
                      "I love the variety of classes offered here. Whether it's
                      yoga, HIIT, or spin classes, there's always something new
                      to try. The trainers are knowledgeable and always push you
                      to do your best. Highly recommend!"
                    </p>
                  </div>
                </div>
                <footer className="mt-8 font-Lato text-sm text-primary">
                  &mdash; Samantha Lee
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4 font-Lato">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      "Top-Notch Facilities".
                    </h3>
                    <p className="mt-4 text-gray-500">
                      "The gym has a great atmosphere and is always clean and
                      well-maintained. The equipment is modern and there’s
                      plenty of space, so I never have to wait to use a machine.
                      It’s the perfect place to achieve my fitness goals."
                    </p>
                  </div>
                </div>
                <footer className="mt-8 font-Lato text-sm text-primary">
                  &mdash; Michael Brown
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4 font-Lato">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      "Amazing Community"
                    </h3>
                    <p className="mt-4 text-gray-500">
                      "I've been a member for over a year now, and I can't
                      imagine going anywhere else. The community here is
                      fantastic, and I've made so many friends. The personal
                      training sessions have been especially helpful in keeping
                      me motivated and on track."
                    </p>
                  </div>
                </div>
                <footer className="mt-8 font-Lato text-sm text-primary">
                  &mdash; Emily Davis
                </footer>
              </blockquote>
            </div>
            {/* Add more slides as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
