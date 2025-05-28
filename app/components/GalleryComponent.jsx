"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const images = [
  { src: "/jinx.jpg"},
  { src: "/girl_gojo.jpg"},
  { src: "/gray.jpg"},
  { src: "/spicy.jpg"},
  { src: "/jennie.jpg"},
  { src: "/wtf_going_on (1).jpg"},
  { src: "/candle.jpg"},
  { src: "/classy (1).jpg"},
  { src: "/tiger.jpg"},
  { src: "/doggy.jpg"},
];

const THUMBNAILS_VISIBLE = 5;

const GalleryComponent = () => {
  const [selected, setSelected] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (selected < thumbStart) {
      setThumbStart(selected);
    } else if (selected >= thumbStart + THUMBNAILS_VISIBLE) {
      setThumbStart(selected - THUMBNAILS_VISIBLE + 1);
    }
  }, [selected]);

  if (!mounted) return null;

  const canScrollLeft = thumbStart > 0;
  const canScrollRight = thumbStart + THUMBNAILS_VISIBLE < images.length;

  const visibleThumbs = images.slice(thumbStart, thumbStart + THUMBNAILS_VISIBLE);

  return (
    
    <div className="rounded-[20] w-full max-w-lg mx-auto flex flex-col items-center">
      {/* Large preview */}
      <div className="mb-6 w-full flex justify-center">
        <img
          src={images[selected].src}
          alt={`Gallery image ${selected + 5}`}
          className="rounded-lg object-contain max-h-150 w-full"
        />
      </div>
      {/* Thumbnails with arrows */}
      <div className="flex items-center gap-2">
        {images.length > THUMBNAILS_VISIBLE && canScrollLeft && (
          <button
            onClick={() => setThumbStart(thumbStart - 5)}
            className="p-1"
            aria-label="Scroll thumbnails left"
          >
            
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
          <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
        </svg>
      ) : (
        <img src="/caret-left.svg" alt="Left" className="w-6 h-6 transition-all duration-500" style={{ cursor: "pointer" }}/>
      )}
          </button>
        )}
        <div className="flex gap-4 overflow-x-auto">
          {visibleThumbs.map((img, idx) => {
            // idx is relative to visibleThumbs, so get the real index:
            const realIdx = thumbStart + idx;
            return (
              <button
                key={realIdx}
                onClick={() => setSelected(realIdx)}
                className={`border-2 rounded-lg p-1 transition-all ${
                  realIdx === selected ? "border-white" : "border-transparent"
                }`}
                aria-label={`Show image ${realIdx + 5}`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${realIdx + 5}`}
                  className="w-24 h-24 object-cover rounded"
                />
              </button>
            );
          })}
        </div>
        {images.length > THUMBNAILS_VISIBLE && canScrollRight && (
          <button
            onClick={() => setThumbStart(thumbStart + 5)}
            className="p-1"
            aria-label="Scroll thumbnails right"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
            ) : (
              <img src="/caret-right.svg" alt="Right" className="w-6 h-6 transition-all duration-500" style={{ cursor: "pointer" }}/>
            )}
          </button>
        )}
      </div>
    </div>
    
  );
};

export default GalleryComponent;