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
        <img src="/arrow-up.svg" alt="Light" className="w-6 h-6 filter invert brightness-200 transition-all duration-500"/> 
      )}
    </button>
  );
};

export default ScrollToTop;