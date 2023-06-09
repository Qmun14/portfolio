"use client"

import { motion } from "framer-motion";
import { projects as projectsData } from '../../data';
import { useState } from "react";

type Props = {};

export default function Projects({ }: Props) {
  const [projects, setProjects] = useState(projectsData)

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-main-font text-2xl max-sm:tracking-[12px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-blue-800/20 scrollbar-thumb-[#00b21f]/80">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 max-sm:space-y-2 items-center justify-center p-20 md:p-44 h-screen"
          >

            <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image_path}
              alt=""
              width={350}
              height={350}
            />

            <div className="space-y-10 max-sm:space-y-3  px-0 md:px-10 max-w-6xl lg:space-y-5">
              <h4 className="text-4xl max-sm:text-base font-semibold text-center lg:text-3xl">
                <span className="underline decoration-[#61f236]/50">
                  {" "}
                  Case {index + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {
                  project.techs.map((tech, i) => (
                    <motion.img
                      initial={{
                        x: 200,
                        opacity: 0,
                      }}
                      transition={{ duration: 1 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      src={tech.image_url} key={i} alt={tech.name} width={35} height={35} className={`bg-transparent max-sm:w-5 max-sm:h-5`} whileHover={tech.name} />
                  ))
                }
              </div>

              <p className="text-lg text-center md:text-left max-sm:text-xs">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#61f236]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
