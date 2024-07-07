"use client"

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-brand-darkcyan text-white p-4 rounded-full shadow-md hover:bg-brand-darkgreen hover:text-brand-honeydew transition-colors"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 2L3.707 10.293a1 1 0 0 0 1.414 1.414L11 5.414V20a1 1 0 1 0 2 0V5.414l6.879 6.879a1 1 0 1 0 1.414-1.414L12 2z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
