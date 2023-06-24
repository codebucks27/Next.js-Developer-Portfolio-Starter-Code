import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

  <LiIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
        target="_blank"
        className="text-primary dark:text-primaryDark capitalize">
        @{company}</a></h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {address}
      </span>
      <p className="font-medium w-full md:text-sm">
        {work}
      </p>
    </motion.div>
  </li>

}

const Experience = () => {
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
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          " />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Warehouse Manager" 
            company="Napolitana Foods/Troia Foods"
            companyLink="https://www.troiafoods.com/"
            time="2017-2023"
            address=" Hayward, CA"
            work="Optimized inventory management and distribution processes, resulting in a 15% reduction in shrinkage.
            Successfully coordinated multiple projects concurrently in a deadline-driven environment.
            Trained 4 new employees and established a new onboarding flow
            "
          />

          <Details
            position="Manager" 
            company="Nizarios Pizza"
            companyLink="http://nizarios.com/"
            time="2016-2017"
            address=" San Francisco, CA"
            work="Grew monthly sales by 10% by focusing on catering orders and a focus on improved customer service.
            Optimized restaurant presence on 3rd party delivery apps leading to a 20% increase on DoorDash and UberEats platforms."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience;