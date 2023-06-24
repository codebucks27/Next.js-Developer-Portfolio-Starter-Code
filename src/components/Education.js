import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

  <LiIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {type}
        </h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {place}
      </span>
      <p className="font-medium w-full md:text-sm">
        {info}
      </p>
    </motion.div>
  </li>

}

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Software Engineering Immersive"
            time="03/2023-06/2023"
            place="General Assembly"
            info="As a student, I completed an intensive twelve-week, full-time program in full-stack web development. This practical and immersive course, designed to emulate real-world professional environments, honed my abilities in both front-end and back-end technologies. My training was comprehensive, preparing me to directly apply my skills in today's tech industry."
            />
            
            <Details
            type="Liberal Arts"
            time="2019-2022"
            place="Mission College, Santa Clara, CA"
            info="Relevant courses included Java, Python, and Engineering. I also completed a number of general education courses, including Calculus, Physics, and English Composition."
            />
        </ul>
      </div>
    </div>
  )
}

export default Education;