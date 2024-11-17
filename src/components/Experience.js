import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Staff Software Engineer"
            company="TechStyleOS JustFab"
            companyLink="https://www.justfab.com"
            time="Nov, 2023 - Oct, 2024"
            address="Remote"
            work="Led the successful delivery of a new React e-commerce site that unified three brands into a single codebase, ensuring functionality and scalability for future enhancements. Utilized technologies like React, TypeScript, Jest, HTML, SASS, RESTful APIs, Git."
          />

          <Details
            position="Senior Software Engineer"
            company="TechStyleOS JustFab"
            companyLink="https://www.justfab.com"
            time="July, 2021 - Nov, 2023"
            address="Remote"
            work="Spearheaded the transition from a legacy ColdFusion eCommerce site to a modern React platform, making key architectural decisions and implementing a component-based model using React and Styled Components."
          />

          <Details
            position="Lead UI Developer"
            company="BuyerQuest"
            companyLink="https://www.buyerquest.com"
            time="July, 2020 - July, 2021"
            address="Cleveland, Ohio"
            work="Oversaw all Front-End Development for a B2B eCommerce product, including feature development, bug resolution, sprint planning, task delegation, and peer code reviews. Technologies used: PHP, HTML, React, JavaScript, jQuery, SASS."
          />

          <Details
            position="Senior Front End Developer"
            company="Xngage"
            companyLink="https://www.xngage.com"
            time="Nov, 2018 - July, 2020"
            address="Cleveland, Ohio"
            work="Responsible for the Front-End Development of Custom B2B eCommerce Solutions utilizing Insite Commerce written in AngularJS, Sass, HTML, and version control via Git."
          />

          <Details
            position="Senior Experience Engineer"
            company="Publicis Sapient"
            companyLink="https://www.publicissapient.com"
            time="March, 2015 - July, 2018"
            address="Cleveland, Ohio"
            work="Managed front-end development for Fortune 300 clients such as Timberland, The North Face, Wrangler, Vans, Smartwool, and Lee. Collaborated in an agile global team using WebSphere Commerce (WCS) and Adobe Experience Manager (AEM)."
          />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
