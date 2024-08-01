import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NoPage() {
  const location = useNavigate();
  const navigateHome = () => {
    setTimeout(() => {
      location("/");
    }, 300);
  };

  return (
    <motion.section
      className="grid h-screen place-content-center bg-transparent px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p class="text-2xl font-bold tracking-tight text-textColor sm:text-4xl">
          Uh-oh!
        </p>

        <p class="mt-4 text-gray-500">We can't find that page.</p>
        <button
          onClick={navigateHome}
          type="button"
          className="btn btn--primary"
        >
          Go Back Home
        </button>
      </div>
    </motion.section>
  );
}

export default NoPage;
