"use client"

import { motion } from 'framer-motion';
import picture from '../../public/me/qmun2.jpg';

const image: string = picture.src;
const about = "I'm Ma'mun. 💖  here's a little bit about me.. I've been coding in web development  almost 10 years and I have also worked as an IT support in the government sector as an outsourcer for the last 7 years.  As a  Full Stack Developer Experienced 🌟 passionate about crafting beautiful, intuitive mobile and web applications that drive user engagement, and also I like to crafting digital experiences with code and design. Bridging the gap between humans and technology. Always learning, never stopping.. "

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col top-8  relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 max-sm:top-16 uppercase tracking-[20px] text-main-font text-2xl max-sm:tracking-[12px]">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[350px] xl:h-[450px] max-sm:-mb-40 max-sm:w-40 max-sm:h-40'
      />
      <div className='space-y-10 px-0 md:px-10 max-sm:space-y-5 max-sm:mt-12'>
        <h4 className='text-4xl font-semibold max-sm:text-2xl'>Here is a <span className='underline decoration-[#00ff00]/50'>little</span> background</h4>
        <p className='text-sm max-sm:text-xs'>{about}</p>
      </div>
    </motion.div>
  )
}