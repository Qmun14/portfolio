"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Ma'mun Ramdhan", "Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#00ff00" />
      </h1>
    </div>
  )
}