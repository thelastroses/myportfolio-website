"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };
    
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  if (!showScrollTopButton) return null;

  return (
    <button className="top-btn-position top-btn-style flex items-center justify-center" onClick={scrollTop} aria-label="Scroll to top">
      {theme === "dark" ? (
        <img src="/arrow-up.svg" alt="Dark" className="w-6 h-6 transition-all duration-500" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 bi bi-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
        </svg>
      )}
    </button>
  );
};

export default ScrollToTop;