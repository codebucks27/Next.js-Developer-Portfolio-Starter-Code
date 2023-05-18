import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import StarShower from "../../public/images/projects/Brians_Stuff-Star_Shower.webp";
import Omnifood from "../../public/images/projects/Brians_Stuff-Omnifood_Project.webp";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-xl" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-xl" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Innovation Meets Usability!" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Star Shower"
                img={StarShower}
                summary="A randomly generated star shower effect with collision."
                link="https://starshowerbkw.netlify.app/"
                type="Featured Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Star Shower"
                img={StarShower}
                summary="A randomly generated star shower effect with collision."
                link="https://starshowerbkw.netlify.app/"
                type="Featured Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Omnifood Food Delivery"
                img={Omnifood}
                link="https://starshowerbkw.netlify.app/"
                type="Project"
                github="https://github.com/bwilliams91/Star-Shower"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
