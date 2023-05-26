"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import { useEffect, useRef } from "react";

import image from '../../public/me/qmun.jpg';

type Props = {}

export default function Hero({ }: Props) {

  const handleScrollToAbout = () => {
    const aboutRef = document.getElementById('about');
    if (aboutRef) {
      aboutRef.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToSkills = () => {
    const skillsRef = document.getElementById('skills');
    if (skillsRef) {
      skillsRef.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToProjects = () => {
    const projectsRef = document.getElementById('projects');
    if (projectsRef) {
      projectsRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Ma'mun Ramdhan", "Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image src={image} alt={"qmun foto"} height={150} width={150} className="relative rounded-full mx-auto object-cover" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#335c85] pb-2 tracking-[15px] max-sm:tracking-[8px] ">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 max-sm:text-2xl max-sm:w-full">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00ff00" />
        </h1>
        <div className="pt-5">
          <a>
            <button className="heroButton" onClick={handleScrollToAbout}>About</button>
          </a>
          <a>
            <button className="heroButton" onClick={handleScrollToSkills}>Skills</button>
          </a>
          <a>
            <button className="heroButton" onClick={handleScrollToProjects}>Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}