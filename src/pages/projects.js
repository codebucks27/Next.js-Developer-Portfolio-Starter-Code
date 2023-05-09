import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
  return (
    <>
      <Head>
        <title>Brian Williams | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
          <AnimatedText text="Innovation Meets Usability!" />
        </Layout>
      </main>
    </>
  );
};

export default projects;
