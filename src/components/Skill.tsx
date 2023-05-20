import { motion } from "framer-motion";
import { Skill } from '../lib/types/types';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.image_path}
        className="rounded-full border border-[#0d0d6e] object-cover w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 easing-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 easing-in-out group-hover:bg-main-font h-20 w-20 xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#0d0d6e] opacity-100">{skill.level}%</p>
        </div>
      </div>
    </div>
  );
}
