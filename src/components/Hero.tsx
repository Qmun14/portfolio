"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link";
import { useRef } from "react";

import image from '../../public/me/qmun.jpg';

type Props = {}

export default function Hero({ }: Props) {

  const aboutRef = useRef<HTMLAnchorElement>(null!);

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <h2 className="text-sm uppercase text-[#335c85] pb-2 tracking-[15px] ">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00ff00" />
        </h1>
        <div className="pt-5">
          <a ref={aboutRef}>
            <button className="heroButton" onClick={handleScrollToAbout}>About</button>
          </a>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}