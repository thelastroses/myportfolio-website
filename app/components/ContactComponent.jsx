"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ContactComponent = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="gap-8  flex flex-col items-center" >
        <h2 className="font-bold pb-4 text-6xl font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
            Contact
        </h2>            
    <div className="rounded-[20] flex justify-center h-125 w-125" style={{ background: "var(--slides)"}}>
        <div className="flex flex-col gap-6 items-center justify-center text-center">
            <ul className="text-2xl">
            <div className="">
            <li>
            <Link id="myContactButton" className="flex items-center gap-2" href="mailto:jspencer0709@gmail.com">
            
            {theme === "dark" ? (
                <><div className=""></div><div className="pl-5"></div><img className="w-10 filter invert brightness-e" src="/tbGmailLogo.webp" /></>
            ) : (
                <><div className=""></div><div className="pl-5"></div><img className="w-10" src="/tbGmailLogo.webp" /></>
            )}
              Mail
            </Link>
            </li></div>
            <div className="">
            <li>
            <Link id="myContactButton" className="flex items-center gap-2" href="https://github.com/thelastroses">
            
            {theme === "dark" ? (
                <><div className=""></div><div className="pl-5"></div><img className="w-10 filter invert brightness-e" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></>
            ) : (
            <><div className=""></div><div className="pl-5"></div><img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></>
            )}
              GitHub
            </Link>
            </li></div>
            <div className="">
            <li>
            <Link id="myContactButton" className="flex items-center gap-2" href="https://www.linkedin.com/in/jennifer-spencer-718414285">
            
            {theme === "dark" ? (
                <><div className=""></div><div className="pl-5"></div><img className="w-10 filter invert brightness-e" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" /></>
            ) : (
                <><div className=""></div><div className="pl-5"></div><img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" /></>
            )}
              LinkedIn
            </Link>
            </li></div>
            <div className="">
            <li>
            <div id="myContactButton" className="flex items-center gap-2">
            
            {theme === "dark" ? (
                <><div className=""></div><div className="pl-5"></div><img className="w-10 filter invert brightness-e" src="/tbArtStationLogo.webp" /></>
            ) : (
                <><div className=""></div><div className="pl-5"></div><img className="w-10" src="/tbArtStationLogo.webp" /></>
            )}
              ArtStation
            </div>
            </li></div>
            </ul>
        </div>
    </div>
    </div>          
  );
}

export default ContactComponent;