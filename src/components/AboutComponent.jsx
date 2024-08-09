import AboutImg from "../assets/about.webp";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section className="my-20 w-full">
      <div className="mx-auto mt-0 min-h-[40rem] max-w-[1400px] items-center justify-between gap-4 px-4 ss:gap-6 sm:flex md:gap-16 md:px-0">
        <div className="h-[40rem] w-full overflow-hidden rounded-md sm:w-1/2 md:w-[70%]">
          <img
            src={AboutImg}
            alt="about us image"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="sm,:w-1/2 w-full space-y-5 py-10 font-Lato sm:px-20 sm:pt-0 md:flex-grow">
          <h3 className="font-body font-bold text-white ss:text-4xl md:text-5xl">
            About us
          </h3>
          <h4 className="text-textColor ss:text-2xl md:text-3xl">
            Welcome to KimGym Nairobi&apos;s best gym experience.
          </h4>
          <p className="text-xl text-textColor ss:line-clamp-6 md:line-clamp-none md:leading-[2rem]">
            Our members enjoy 24/7 access to state-of-the-art facilities and
            benefit from the guidance of our dedicated and knowledgeable staff.
            Achieving peak physical fitness involves a balanced combination of
            nutritious eating, regular exercise, and adequate rest.
          </p>
          <div>
            <Link to="/about" className="btn btn--primary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
