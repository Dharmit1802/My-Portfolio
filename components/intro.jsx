"use client";

import React, { useEffect } from 'react'
import Image from 'next/image';
import profilephoto from '@/public/profilephoto.jpg';
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hook';


function Intro() {

  const { ref } = useSectionInView('Home', 0.5);

  const { setActiveSection, setLastTimeClick } = useActiveSectionContext();

  // const {ref,inView} = useInView({
  //   threshold: 0.5
  // })

  // console.log(inView);

  // useEffect(()=>{
  //   if(inView && Date.now()-lastTimeClick > 1000){
  //     setActiveSection('Home')
  //   }
  // },[inView,setActiveSection,lastTimeClick])

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36" id="home">
      <div className="flex justify-center items-center">
        <div className='relative'>
          <motion.div className=" w-24 h-24 overflow-hidden  rounded-full border-[0.35rem] border-white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src={profilephoto}
              width={120}
              height={120}
              quality={95}
              alt='Dharmit Dungarani'
              priority={true}
              className="scale-150 object-cover pb-16"
            />

          </motion.div>

          <motion.span className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I'm Dharmit.</span> I'm learning{" "}<span className="font-bold">Full Stack Web Development</span>. I enjoy building{" "}<span className="italic">projects</span>. My focus is{" "}<span className="underline">React & Node</span>.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 px-4 text-lg font-medium justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          onClick={() => { setActiveSection('Contact'); setLastTimeClick(Date.now()) }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
            hover:bg-gray-950"
        >
          Contact me here <BsArrowRight className="group-hover:translate-x-1 opacity-70 transition" />
        </Link>

        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer scale-100 dark:bg-white/20 dark:text-white/90" href="/Resume.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-x-4">
          <a className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100 dark:bg-white/20 dark:text-white/90 dark:hover:text-white" href="https://www.linkedin.com/in/dharmit-dungarani-79b929222/" target="_blank">
            <BsLinkedin />
          </a>
          <a className="bg-white p-4 flex items-center gap-2 text-[1.3rem] rounded-full text-gray-700 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100 dark:bg-white/20 dark:text-white/90 dark:hover:text-white" href="https://github.com/Dharmit1802" target="_blank">
            <FaGithubSquare />
          </a>
        </div>

      </motion.div>
    </section>
  )
}

export default Intro;