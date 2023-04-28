import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic-upscaled-removebg.png";

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
          </div>
        </layout>
      </main>
    </>
  );
}
