import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic-upscaled-removebg.png";
import AnimatedText from "../components/AnimatedText.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Brian Williams Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Brian" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </layout>
      </main>
    </>
  );
}
