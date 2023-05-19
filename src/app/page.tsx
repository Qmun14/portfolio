import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import image from '../../public/me/ocie.jpg'

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-[#B4C6EF] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-blue-800/20 scrollbar-thumb-[#00b21f]/80 ">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-3 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image src={image.src} alt="qmun14-cat" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" width={10} height={10} />
          </div>
        </footer>
      </Link>

    </div>
  )
}
