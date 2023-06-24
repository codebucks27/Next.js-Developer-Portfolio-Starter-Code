import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from 'next/head'
import React, { useEffect, useRef } from "react";
import profilePic from '../../public/images/profile/Profile_pic.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experiance from "@/components/Experiance";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })

  }, [springValue, value])


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
      <title>Abdallah Awadalla | About me</title>
        <meta name="description" content="Abdallah Awadalla | Full-Stack Software Engineer" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-auto">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
              <p className="font-medium">
                Hello, I&apos;m Abdallah Awadalla, a full-stack software engineer with a knack for bridging design and functionality in web development. Leveraging my robust experience with JavaScript, HTML, CSS, React, and Node.js, I continuously seek innovative ways to turn my clients vision into reality.
              </p>

              <p className="my-4 font-medium">
                I believe web development is more than just writing code – it&apos;s about solving challenges and crafting intuitive experiences for users. Whether I&apos;m building a full-stack web app or a classic PONG game, my commitment to engineering excellence and user-centered design is evident. I look forward to utilizing my skills and passion to make a significant impact on your next project.
              </p>

              <p className="font-medium">
                With a strong foundation in MERN stack development and an effective problem-solving aptitude, I seamlessly manage the end-to-end lifecycle of web applications. Having transitioned from warehouse management to software engineering, I bring a unique perspective that enables me to optimize solutions for improved user engagement. As I continue to learn and grow in this dynamic field, I look forward to the prospect of building more accessible, user-friendly, and innovative applications that truly make a difference.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl-col-span-4 md:order-1 md:col-span-8
          ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image src={profilePic} alt="Abdallah Awadalla" className='w-full h-auto rounded-2xl' priority
                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              33vw' />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects Completed</h2>
              </div>

              {/* <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
              </div> */}

            </div>
          </div>
          <Skills />
          <Experiance />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;