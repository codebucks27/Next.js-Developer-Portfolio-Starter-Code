import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {

  return (
    <motion.div
      className='flex items-center justify-center py-3 px-6
          rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    // viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>
        Skills
      </h2>
      <div
        className='w-full h-screen relative flex items-center
        justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center 
          rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-25vw" y="2vw" />
        <Skill name="HTML" x="12vw" y="-20vw" />
        <Skill name="JavaScript" x="21vw" y="6vw" />
        <Skill name="TypeScript" x="0vw" y="11vw" />
        <Skill name="ReactJS" x="-19vw" y="-15vw" />
        <Skill name="NextJS" x="15" y="-12vw" />
        <Skill name="AWS" x="32vw" y="-5vw" />
        <Skill name="Apollo GraphQL" x="-15vw" y="20vw" />
        <Skill name="GitHub" x="15vw" y="20vw" />
      </div>
    </>
  )
}

export default Skills