import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'

const Projects = () => {
  return (
    <>
      <Head>
        <title>JoaoCamba | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>
    </>
  )
}

export default Projects