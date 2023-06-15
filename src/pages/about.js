import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from 'next/head'
import React from "react";
import profilePic from '../../public/images/profile/Profile-Pic.JPG'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <Head>
        <title>Abdallah Awadalla | Full-Stack Software Engineer</title>
        <meta name="description" content="Abdallah Awadalla | Full-Stack Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
              <p className="font-medium">
                Hello, I'm Abdallah Awadalla, a full-stack software engineer with a knack for bridging design and functionality in web development. Leveraging my robust experience with JavaScript, HTML, CSS, React, and Node.js, I continuously seek innovative ways to turn my clients' vision into reality.
              </p>

              <p className="my-4 font-medium">
                I believe web development is more than just writing code – it's about solving challenges and crafting intuitive experiences for users. Whether I'm building a full-stack web app or a classic PONG game, my commitment to engineering excellence and user-centered design is evident. I look forward to utilizing my skills and passion to make a significant impact on your next project.
              </p>

              <p className="font-medium">
                With a strong foundation in MERN stack development and an effective problem-solving aptitude, I seamlessly manage the end-to-end lifecycle of web applications. Having transitioned from warehouse management to software engineering, I bring a unique perspective that enables me to optimize solutions for improved user engagement. As I continue to learn and grow in this dynamic field, I look forward to the prospect of building more accessible, user-friendly, and innovative applications that truly make a difference.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-{2rem} border-2 border-solid border-dark bg-light p-8
          ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image src={profilePic} alt="Abdallah Awadalla" className='w-full h-auto rounded-2xl' />
            </div>

<div className="col-span-2 flex flex-col items-end justify-between">

    <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold">
        20+
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
    </div>

    <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold">
        10+
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75">projects comleted</h2>
    </div>

    {/* <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold">
        1+
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
    </div> */}

</div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default about;