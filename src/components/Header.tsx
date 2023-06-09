"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {}

const color = '#00b21f'

export default function Header({ }: Props) {

  const handleScrollToContact = () => {
    const contactRef = document.getElementById('contact');
    if (contactRef) {
      contactRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 mx-auto p-5 flex items-start justify-between max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/ma-mun-ramdhan-540ab824b"
          fgColor={color}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/mr_dh4n"
          fgColor={color}
          bgColor="transparent"
        />
        <SocialIcon
          network="whatsapp"
          url="https://wa.link/bq3grb"
          fgColor={color}
          bgColor="transparent"
        />
        <SocialIcon
          network="youtube"
          url=""
          fgColor={color}
          bgColor="transparent"
        />
      </motion.div>
      <a onClick={handleScrollToContact}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor={color}
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-main-font">Get In Touch</p>
        </motion.div>
      </a>
    </header>
  )
}