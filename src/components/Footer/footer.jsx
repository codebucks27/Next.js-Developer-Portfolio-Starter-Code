import React from "react";
import Layout from "../../components/Layout/layout";
import Link from "next/link";

const footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <Link href='/'>CodeBucks</Link>
        <Link href='/'>Say Hi!</Link>
      </Layout>
    </footer>
  );
};

export default footer;
