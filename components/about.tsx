"use client";

import React, { useEffect } from 'react'
import SectionHeading from "./sectionheading"
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hook';

export default function About() {

  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section ref={ref} id="about" className="mb-28 max-w-[45rem] text-center leading-6 md:leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing degree of{" "}
        <span className="font-medium">Computer Science</span> from GEC gandhinagar, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Indoor/Outdoor games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning how to improve Skills.
      </p>
    </motion.section>
  )
}
