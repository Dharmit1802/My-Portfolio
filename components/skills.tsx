'use client';

import Sectionheading from './sectionheading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hook'
import { motion } from 'framer-motion'


import { Progress } from '@material-tailwind/react';
import CircularSkillBar from './CircularSkillBar';


export default function Skills() {
    const { ref, inView } = useSectionInView('Skills', 0.3);

    const fadeInAnimationVarient = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * custom,
            }
        })
    }



    return (
        <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>


            <Sectionheading>my skills</Sectionheading>
            <div className='flex w-full flex-wrap relative text-center justify-evenly px-10 mx-auto my-10 gap-y-3'>
                <div className="container mx-auto px-4 py-0 md:py-16">

                    {/* <div className="w-24 h-1 mx-auto mb-12 bg-gray-800 rounded-full" /> */}

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-0 md:gap-y-12 max-w-5xl mx-auto">
                        <CircularSkillBar percentage={80} skillName="React" lightcolor="#DC2626" darkcolor="#60A5FA" />
                        <CircularSkillBar percentage={70} skillName="MongoDB" lightcolor="#1E40AF" darkcolor="#FBBF24" />
                        <CircularSkillBar percentage={75} skillName="Express.js" lightcolor="#065F46" darkcolor="#34D399" />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-[50px] p-5 gap-y-4 text-sm">
                <div className='flex flex-col px-3 gap-[2px]'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>Typescript</span>
                        <span className='font-semibold'>50%</span>
                    </h3>
                    <Progress value={50} color='indigo' size='sm' placeholder={undefined} />
                </div>
                <div className='flex flex-col px-3 gap-1'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>framer motion</span>
                        <span className='font-semibold'>50%</span>
                    </h3>
                    <Progress value={50} color="blue-gray" size='sm' placeholder={undefined} />
                </div>
                <div className='flex flex-col px-3 gap-1'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>node.js</span>
                        <span className='font-semibold'>70%</span>
                    </h3>
                    <Progress value={70} color="blue" size='sm' placeholder={undefined} />
                </div>
                <div className='flex flex-col px-3 gap-1'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>tailwind-css</span>
                        <span className='font-semibold'>90%</span>
                    </h3>
                    <Progress value={90} color="teal" size='sm' placeholder={undefined} />
                </div>
                <div className='flex flex-col px-3 gap-1'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>python</span>
                        <span className='font-semibold'>30%</span>
                    </h3>
                    <Progress value={30} color="purple" size='sm' placeholder={undefined} />
                </div>
                <div className='flex flex-col px-3 gap-1'>
                    <h3 className='w-full flex px-1 justify-between'>
                        <span className='uppercase'>git</span>
                        <span className='font-semibold'>80%</span>
                    </h3>
                    <Progress value={80} color="cyan" size='sm' placeholder={undefined} />
                </div>
            </div>

            <ul className='flex justify-center flex-wrap gap-2 text-md md:text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li className="bg-white hover:bg-gray-700 dark:bg-gray-500 dark:text-black/90 border border-black/[0.1] rounded-xl px-5 py-3" variants={fadeInAnimationVarient} initial="initial" whileInView='animate' viewport={{ once: true }} custom={index} key={index}>
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
