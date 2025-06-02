"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ImageContactComponent = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    
    if (!mounted) return null;
    
  return (
    <div>
    {theme === "dark" ? (
        <img src="/7c014728-0e26-4cd6-8cbb-062be19e3b8b.png" className="w-auto h-145 pr-50 pt-20 duration-500" />
    ) : (
        <img src="/Adobe Express - file.png" className="w-auto h-140 pr-50 pt-25 duration-500" />
    )}
    </div>
  );
}

export default ImageContactComponent;