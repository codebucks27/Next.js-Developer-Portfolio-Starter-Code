import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-7.png";

const about = () => {
    return(
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description"/>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='font-medium'>
                        Hello, I'm  Adriana, a dedicated Computer Science student at Portland State University with a strong 
                        passion for software engineering and problem-solving. I am set to graduate in June 2024 with a Bachelor of Science 
                        degree in Computer Science.

                        </p>
                            
                        <p className='my-4 font-medium'>
                        My skills encompass a wide range of programming languages and tools, including C++, C, Python, Rust, and more. 
                        I'm comfortable with data structures and problem-solving. My experience as a Software Engineer Intern in Portland 
                        allowed me to work within a SCRUM agile team, collaborating with my team to improve existing tools and migrate 
                        databases to AWS successfully. I contributed to streamlining development processes, maintained and enhanced 
                        existing tools, and played a role in the successful migration of databases to AWS.


                        </p>

                        <p className='my-4 font-medium'>
                        My commitment to excellence is also reflected in my past 
                        experiences, including completing the L’SPACE Mission Concept Academy, where I received training from NASA scientists 
                        and engineers.
                        </p>

                        <p className='font-medium'>
                        In addition to my academic and professional endeavors, I am an enthusiastic participant in coding challenges and hackathons, 
                        such as the Nike Insidious Hackathon and the UDEMY 100 days of Python Code Challenge. I am excited to bring my technical expertise,
                        problem-solving skills, and passion for software development to contribute meaningfully to your team.

                        </p>
                    </div>
<div className='col-span-3 relative h-max rounded-2xl barder-2 border-solid border-dark
bg-light p-8
'>
    <Image src={profilePic} alt="Adriana" className='w-full h-auto rounded-2xl'/>
</div>
                </div>
                </Layout>
            </main>
        </>
    )
}

export default about