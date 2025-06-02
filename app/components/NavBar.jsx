"use client";

import { use, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({about, projects, gallery, contact}) => {


  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  }
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ background: "var(--navbar-bg)" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold py-5">My Portfolio</div>
        <button
  className="md:hidden focus:outline-none"
  onClick={toggleMenu}
>
  {isOpen ? (
    <span className="text-3xl font-bold text-white hover:text-red-400 transition">&times;</span>
  ) : (
    <span className="text-base font-semibold text-white">Menu</span>
  )}
</button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex `}
        >
          <li onClick={() => scrollToSection(about)} className="hover:text-gray-400"  id="myButton" style={{ cursor: "pointer" }}>
              About
          </li>
          <li onClick={() => scrollToSection(projects)} className="hover:text-gray-400"  id="myButton" style={{ cursor: "pointer" }}>
              Projects
          </li>
          <li onClick={() => scrollToSection(gallery)} className="hover:text-gray-400"  id="myButton" style={{ cursor: "pointer" }}>
              Gallery
          </li>
          <li onClick={() => scrollToSection(contact)} className="hover:text-gray-400" id="myButton" style={{ cursor: "pointer" }}>
              Contact
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
         
      </div>
    </nav>
  );
}


export default NavBar;