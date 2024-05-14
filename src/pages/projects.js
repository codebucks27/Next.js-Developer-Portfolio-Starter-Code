import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import StarShower from "../../public/images/projects/Brians_Stuff-Star_Shower.webp";
import Omnifood from "../../public/images/projects/Brians_Stuff-Omnifood_Project.webp";
import ReflectionMat from "../../public/images/projects/reflection-material.webp";
import QuoteCloud from "../../public/images/projects/quote-cloud.webp";
import SunsetRacer from "../../public/images/projects/sunset-racer.webp";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
      xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Brian Williams | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Innovation Meets Usability!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="ThreeJS Quote Cloud"
                img={QuoteCloud}
                summary="A quote made of 3D Text floating in a cloud of randomly generated geometry."
                link="https://quote-cloud.vercel.app/"
                type="Featured Project"
                github="https://github.com/bwilliams91/quote-cloud"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Star Shower"
                img={StarShower}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Sunset Racer"
                img={SunsetRacer}
                link="https://sunsetracer.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Sunset-Racing"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Reflection Material ThreeJS"
                img={ReflectionMat}
                summary="Experimenting with geometries and materials in threejs"
                link="https://materialexp.netlify.app/"
                type="Featured Project"
                github="https://github.com/bwilliams91/material-experimentation"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://omnifoodbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Omnifood-project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
