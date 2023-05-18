import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import React from "react";
import Head from "next/head";

const articles = () => {
  return (
    <>
      <Head>
        <title>Brian Williams | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="I Don't Know, Satan Is Pretty Cool"
            className="mb-16"
          />
          <ul className="grid grid-col-2 gap-16">
            <li>Featured Article</li>
            <li>Featured Article</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
