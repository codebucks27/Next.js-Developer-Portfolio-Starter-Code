import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic-upscaled-removebg.png";
import AnimatedText from "../components/AnimatedText.js";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my Portfolio</title>
        <meta name="description" content="Brian Williams Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
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
              <p className="my-4 text-base font-medium">
                I love making something beautiful and functional with the newest
                development techniques. I look for challenges in the unknown and
                the new. Right now, I am practicing with React. While you are
                here, feel free to check out some of my other recent work or
                read one of my articles.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:brianw.developer@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </layout>

        <HireMe />
      </main>
    </>
  );
}
