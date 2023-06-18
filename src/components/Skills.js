import React from "react";
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  
    "
    whileHover={{scale: 1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration: 1.5}}
    viewport={{once: true}}

    >
      {name}
    </motion.div>
  )
}

const Skills =({name, x, y}) => {
  return (
    <>
    <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">

      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
      "
      whileHover={{scale: 1.05}}
      >
        Web Dev
      </motion.div>

      <Skill name="CSS" x="-1vw" y="-15vw" />

      <Skill name="HTML" x="-24vw" y="2vw" />

      <Skill name="JavaScript" x="21vw" y="7vw" />

      <Skill name="Python" x="0vw" y="11vw" />

      <Skill name="C#" x="-24vw" y="-17vw" />

      <Skill name="Node.js" x="-15vw" y="-12vw" />

      <Skill name="React" x="35vw" y="-5vw" />

      <Skill name="Tailwind CSS" x="0vw" y="-22vw" />

      <Skill name="REST API's" x="-22vw" y="18vw" />

      <Skill name="SQL" x="18vw" y="-15vw" />

      <Skill name="MongoDB" x="20vw" y="18vw" />

      <Skill name="Next.js" x="-35vw" y="-5vw" />

    </div>
    </>
  )
}

export default Skills;