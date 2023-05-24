"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { skills as skillsData } from "../../data";
import { useState } from "react";

type Props = {

};

export default function Skills({ }: Props) {
  const [skills, setSkills] = useState(skillsData);

  return (
    <motion.div

      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-main-font text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-main-font text-sm">
        Hover over a skill for the current profeciency
      </h3>

      <div className="grid grid-cols-4 gap-5 max-sm:gap-4">
        {
          skills.slice(0, skills.length / 2).map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))
        }

        {
          skills.slice(skills.length / 2, skills.length).map((skill, i) => (
            <Skill key={i} skill={skill} directionLeft />
          ))
        }

      </div>
    </motion.div>
  );
}
