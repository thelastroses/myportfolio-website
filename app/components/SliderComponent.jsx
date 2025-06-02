"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";


const slides = [
  
  {
    title: "Connect 4",
    content: "A Connect 4 game built with Unity and C#, during Coding II class",
    href: "https://github.com/thelastroses/Connect4",
    image: "/Connect 4.webp",
  },
  {
    title: "Dugeon Crawler",
    content: "A dungeon crawler game built with Unity and C#, during Coding I class",
    href: "https://github.com/thelastroses/DungeonCrawler",
    image: "/Dugeon Crawler.webp",
  },
  {
    title: "Rollaball",
    content: "A Rollaball game following unity tutorial, built with Unity and C#, during Coding I class",
    image: "/Rollaball.webp",
  },
  {
    title: "To Do List",
    content: "This section is under construction... A personal To Do List app built with...",
    image: "/Under Construction.webp",
  },
];

const SliderComponent = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 16},
  });

  return (
    <div className="text-center">
    <div className="mb-6 flex justify-center">
      {slides.slice(0, 4).map((slide, idx) => (
        <div key={slide.title} id="myProjectButton" className={
            (idx === 0
              ? "rounded-l-[20px]"
              : idx === 3
              ? "rounded-r-[20px]"
              : "")
          }>
        <div >
        <button
          key={slide.title}
          className="w-50 h-15" 
          style={{ cursor: "pointer"}}
          onClick={() => slider.current?.moveToIdx(idx-1)}
        >
          {slide.title}
        </button></div></div>
      ))}
    </div>
    <div ref={sliderRef} className="keen-slider max-w-300 h-100 mx-auto">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="rounded-[20] keen-slider__slide bg-[var(--slides)] text-[var(--text)] p-8 rounded-[0px] flex flex-col items-center min-w-[500px] min-h-[400px]"
        >
          {slide.href ? (
            <Link href={slide.href} target="_blank" rel="noopener noreferrer">
              <img id="image-style" className="h-50 rounded-[20]" src={slide.image} alt={slide.title} style={{ cursor: "pointer" }} />
            </Link>
          ) : (
              <img className="h-50 rounded-[20]" src={slide.image} alt={slide.title} />
          )}
          <h2 className="pt-5 text-2xl font-bold mb-2">{slide.title}</h2>
          <p className="mb-4">{slide.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SliderComponent;