import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
      items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
          <a
            className='text-primary capitalize dark:text-primaryDark'
            href={companyLink}
            target={"_blank"}>{company}
          </a>
        </h3>
        <span
          className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'
        >
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position="Junior Associate Software Engineer"
            company="@PublicisSapient"
            companyLink="https://www.publicissapient.com/"
            time="2021-2022"
            address="City of London"
            work="Upon graduating from the Apprenticeship programme, and stepping into a new role at Publicis, one of my first calls to duty 
            was to mentor the new Junior Engineers joining the company. I was fortunate to be able to share my similar experiences and grow as a teacher."
          />
          <Details
            position="Multiverse Apprentice: Junior Engineer"
            company="@Multiverse @PublicisSapient"
            companyLink="www.google.com"
            time="2020-2021"
            address="City of London"
            work="During my 18 Month Apprenticeship I had the opportunity to learn from great teachers at Multiverse, split my time at an amazing company in Publicis Sapient, and soak up as much information as I could during my first taste of Engineering at the professional level."
          />
          <Details
            position="Event Security"
            company="@SERVOCA"
            companyLink="https://www.servoca.com/"
            time="2019-2020"
            address="City of London"
            work="My responsibilities included maintaining order, assisting in disturbances, 
            and providing a sense of protection for attendees and fellow members."
          />

        </ul>
      </div>
    </div>
  )
}

export default Experience