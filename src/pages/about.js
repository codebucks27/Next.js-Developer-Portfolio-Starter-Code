import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/jcThree.png'
import { useSpring, useMotionValue, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({ value }) => {

  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  //Only animates once, when page is loaded.

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

  return (
    <span ref={ref}>

    </span>
  )
}

const about = () => {
  return (
    <>
      <Head>
        <title>JoaoCamba | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
          sm:mb-8' />
          <div className='grid - w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium '>
                Hi, I'm João, an engineer using the humble of tools of JavaScript/HTML/CSS to transform measly code into beautiful digital experiences.

              </p>
              <p className='my-4 font-medium'>
                I understand that engineering is more than just making things look cool, it's about solving real world issues and creating intuitive,
                enjoyable expriences.

              </p>
              <p className='font-medium'>
                Starting my journey as an Engineer with Multiverse, taught me valuable lessons about
                team work and the importance of professionalism. What I've understood professionalism to mean,
                in the context of Software Development, is to approach each day with a set goal in mind. Understanding that
                communication within a team structure is essential. Wherever my labour is appreciated, I plan to execute my work
                with the upmost professionalism.
              </p>
            </div>
            <div
              className='col-span-3 relative h-max rounded-2xl
              border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
              xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 
                w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' />
              <Image src={profilePic} alt="Joao Camba" className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'/>
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={23} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Age</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about