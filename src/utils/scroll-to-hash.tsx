"use client";
import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        console.log(window.location.hash);
        const element = document.querySelector(window.location.hash);
        if (element) {
          window.scrollTo({
            behavior: "smooth",
            top: Math.max(0, window.pageYOffset - 120),
          });
        }
      }
    };

    // Call the function when the component mounts
    scrollToHash();

    // Add event listener to handle hash change
    window.addEventListener("hashchange", () => {
      setTimeout(() => {
        scrollToHash();
      }, 100);
    });

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
};

export default ScrollToHash;
