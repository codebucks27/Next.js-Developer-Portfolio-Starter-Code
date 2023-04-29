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
                text="Taking what is possible tomorrow and creating it today."
                className="!text-6xl !text-left"
              />
              <p>
                I love making something beautiful and functional with the newest
                development techniques. I look for challenges in the unknown and
                the new. Right now, I'm practicing with React. While you are
                here, feel free to check out some of my other recent work or
                read one of my articles.
              </p>
            </div>
          </div>
        </layout>
      </main>
    </>
  );
}
