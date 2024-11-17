import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="2016-2020"
            place="Massachusetts Institute of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />

          <Details
            type="Master of Computer Science"
            time="2020-2022"
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
          />

          <Details
            type="Online Coursework"
            time="2016-2020"
            place="Coursera and edX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
