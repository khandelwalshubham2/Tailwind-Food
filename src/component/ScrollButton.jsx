import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollButton = () => {
  const [scrollButton, setScrollButton] = useState(false);
  const listenToScroll = () => {
    if (window.scrollY > 250) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    scrollButton && (
      <div
        className="h-10 w-10 fixed bottom-5 right-5 bg-secondaryColor rounded-full flex justify-center items-center cursor-pointer"
        onClick={goToTop}
      >
        <FaArrowUp className="text-blackColor"></FaArrowUp>
      </div>
    )
  );
};

export default ScrollButton;
