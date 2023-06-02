import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
          <Link className="underline underline-offset-2" Link href="/" target={"_blank"}>
            JC
          </Link>
        </div>
        <Link className="underline underline-offset-2" href="/" target={"_blank"}>
          Say Hello!
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer;