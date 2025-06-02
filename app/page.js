"use client";

import Image from "next/image";
import SliderComponent from "./components/SliderComponent";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import GalleryComponent from "./components/GalleryComponent";
import ContactComponent from "./components/ContactComponent";
import Link from "next/link";
import './TextAnimation.css';
import ImageContactComponent from "./components/ImageContactComponent";

export default function Home() {
  const about = useRef(null);
  const projects = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <NavBar
        about={about}
        projects={projects}
        gallery={gallery}
        contact={contact}
      />

      <div >
        <div className="relative w-full h-[80vh] bg-cover bg-center transition-all duration-500" style={{ backgroundImage: "var(--img)" }}>
  <div className="absolute h-full w-3/5 z-10" style={{background: "var(--background-overlay"}}></div>
  <div className="relative z-20 flex flex-col justify-center h-full pl-40">
    <h1 className="text-white text-6xl font-bold">Jennifer Spencer</h1>
    <div className="text-animation pt-4">
      <div className="inline-flex">
        <div className="static-txt">I'm a</div>
        <ul className="dynamic-txts">
          <li><span>Software Engineer</span></li>
          <li><span>Game Developer</span></li>
          <li><span>Digital Artist</span></li>
          <li><span>Computer Science Student</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
        <div className="" style={{ background: "var(--gradient)" }}>
           <div ref={about} className="pt-60 pb-20 container mx-auto px-8 xl:px-20 flex flex-col md:flex-row gap-8 md:gap-65 p-8 ld:pl-40 ld:pr-40 ld:items-start items-center justify-center">
            <h2 className="font-bold text-6xl ld:text-6xl font-[family-name:var(--font-geist-mono)] whitespace-nowrap mb-4 ld:mb-0 ld:mr-8 mt-8">
              About
            </h2>
            <p className="md:pl-24 font-[family-name:var(--font-geist-mono)]">Hello, I am Jennifer Spencer! A Computer Science enthusiast with a passion for game development and digital art! 
              I graduate from Concordia University of Wisconsin in 2027 with a Bachelors Degree in Computer Science.
              The goal of this website is to showcase my coding projects and artworks.</p>
          </div> 
          <div ref={projects} className="container mx-auto px-8 flex gap-8 p-8 pt-40 items-center justify-center">
            <h2 className="font-bold pb-4 text-6xl font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
              Projects
            </h2>
          </div>
          <div className="pb-60 items-center justify-center">
            <SliderComponent />
          </div>
          <div ref={(gallery)} className="container mx-auto px-8 flex gap-8 p-8 items-center justify-center">
            <h2 className="font-bold pb-4 text-6xl font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
              Gallery
            </h2>
          </div>
          <div>
            
            <div className="h-250 pt-15" style={{ background: "var(--navbar-bg)" }}>
              <div className="flex justify-center "><img
              className="w-auto h-189 duration-500"
                src="/46708ff6-ba65-42a1-8147-0a4ae1f1229a.png" 
              style={{
                position: 'absolute',
                zIndex: 3, 
        }}
      />
            <GalleryComponent /></div>
            </div>
          </div>
          <div className="pb-30"></div>
          <div ref={(contact)} className="container mx-auto px-8 flex gap-8 p-8 pt-30 pb-45 md:pr-40 pr-20 justify-end ">
            <ImageContactComponent/>
            <ContactComponent /> 
        </div>
        
        </div>
      </div>
    </>
  );
}
