"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const images = [
  { src: "/spicy.webp"},
  { src: "/jennie.webp"},
  { src: "/jinx.webp"},
  { src: "/girl_gojo.webp"},
  { src: "/gray.webp"},
  { src: "/wtf_going_on (1).webp"},
  { src: "/candle.webp"},
  { src: "/classy (1).webp"},
  { src: "/tiger.webp"},
  { src: "/doggy.webp"},
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
    
    <div className="pt-38 w-full max-w-lg mx-auto flex flex-col items-center " style={{
                position: 'absolute',
                zIndex: 2,
        }}>
      <div className=" mb-6 flex justify-center">
        <img
          src={images[selected].src}
          alt={`Gallery image ${selected + 5}`}
          className="object-contain max-h-115 w-full"
        />
      </div>
      <div className="pt-29 flex items-center gap-2">
        {images.length > THUMBNAILS_VISIBLE && canScrollLeft && (
          <button
            onClick={() => setThumbStart(thumbStart - 5)}
            className="p-1"
            aria-label="Scroll thumbnails left"
            id="myGalleryButton"
          >
            
      {theme === "dark" ? (
        <img src="/caret-left.svg" alt="Left" className="w-6 h-6 filter invert brightness-200 transition-all duration-500" style={{ cursor: "pointer" }}/>
      ) : (
        <img src="/caret-left.svg" alt="Left" className="w-6 h-6 transition-all duration-500" style={{ cursor: "pointer" }}/>
      )}
          </button>
        )}
        <div className="flex gap-4 overflow-x-auto">
          {visibleThumbs.map((img, idx) => {
            const realIdx = thumbStart + idx;
            return (
              <button
                key={realIdx}
                onClick={() => setSelected(realIdx)}
                className={`border-2 rounded-[20] p-1 transition-all ${
                  realIdx === selected ? "border-white" : "border-transparent"
                }`}
                aria-label={`Show image ${realIdx + 5}`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${realIdx + 5}`}
                  className="w-auto h-20 object-cover rounded-[20]"
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
            id="myGalleryButton"
          >
            {theme === "dark" ? (
              <img src="/caret-right.svg" alt="Right" className="w-6 h-6 filter invert brightness-200 border-radius: 50% gallery-btn:hover transition-all duration-500" style={{ cursor: "pointer" }}/>
            ) : (
              <img src="/caret-right.svg" alt="Right" className="w-6 h-6 transition-all duration-500 border-radius: 50% gallery-btn:hover" style={{ cursor: "pointer" }}/>
            )}
          </button>
        )}
      </div>
    </div>
    
  );
};

export default GalleryComponent;