import React from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center mb-8 pb-4 lg:pb-2 md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
       lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] 
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       Md:bg-circularLightMd Md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="CSS" x="-6vw" y="-9vw" />
        <Skill name="JavaScript" x="19vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="10vw" />
        <Skill name="D3.js" x="-21vw" y="-15vw" />
        <Skill name="CanvasJS" x="19vw" y="-12vw" />
        <Skill name="NextJS" x="31vw" y="-5vw" />
        <Skill name="Python" x="19vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="Figma" x="-24vw" y="18vw" />
        <Skill name="Spline" x="17vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
