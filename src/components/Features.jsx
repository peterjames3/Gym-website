import log1 from "../assets/a-1.webp";
import log2 from "../assets/b-1.webp";
import log3 from "../assets/c-1.webp";
import log4 from "../assets/d-1.webp";

const Features = () => {
  return (
    <section className="my-20 w-full">
      <h3 className="text-textColor font-Lato text-center text-3xl font-bold">
        Featutes
      </h3>
      <div className="wrapper grid  gap-10 px-4 py-10 grid-cols-1  place-items-center sm:grid-cols-4 md:grid-rows-1 ">
        <div>
          <img src={log2} alt="log2" />
        </div>
        <div>
          <img src={log1} alt="log1" />
        </div>
        <div>
          <img src={log3} alt="log3" />
        </div>
        <div>
          <img src={log4} alt="log4" />
        </div>
      </div>
    </section>
  );
};

export default Features;
