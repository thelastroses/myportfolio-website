"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) return null;

  return (
    <div>
    <button
       id="myButton" className="rounded text-black dark:text-white transition transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="pt-1">
      {theme === "dark" ? (
        <img src="/sun.svg" alt= "Light mode" className="w-4 h-4 filter invert brightness-200 transition-all duration-500" style={{ cursor: "pointer" }}/>
      ) : (
        <img src="/moon.svg" alt="Dark mode" className="w-4 h-4 transition-all duration-500" style={{ cursor: "pointer" }}/>
      )}
      </div>
    </button>
    </div>
  );
}