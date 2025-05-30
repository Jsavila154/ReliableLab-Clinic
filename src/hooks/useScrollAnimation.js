
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Trigger once on load
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);
};

export default useScrollAnimation;
