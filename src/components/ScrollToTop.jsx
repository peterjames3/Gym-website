import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-16">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="rounded-md border border-primary bg-primary p-4 text-white shadow-lg transition duration-300 hover:bg-transparent"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
