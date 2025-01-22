"use client";

import React, { useRef } from "react";
import Sectionheading from "./sectionheading";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function Experience() {
  const { ref } = useSectionInView("Education", 0.3);

  const reference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });

  const animation = {
    initial: { x: "var(--translate-in)", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      id="education"
      className="flex flex-col items-center scroll-mt-28 mb-28 md:mb-40"
    >
      <Sectionheading>My Education</Sectionheading>
      <div className="w-[min(100%,62rem)] overflow-x-hidden">
        <div ref={reference} className="relative md:mx-[1rem] h-fit md:p-5">
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
            className="absolute origin-top top-0 left-[10%] md:left-[50%] bg-gray-700 md:translate-x-[-50%] h-[100%] w-1"
          />
          <ul className="relative flex flex-col gap-y-10">
            <li className="relative flex justify-center md:justify-normal">
              <motion.div
                initial={{ opacity: 0, y: 40, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[44px] flex items-center justify-center dark:bg-blue-gray-300 dark:text-black w-[44px] top-2 rounded-full border-4 bg-blue-gray-100 z-20 border-gray-100 left-[10%] md:left-[50%] absolute"
              >
                <IoSchool fontSize="1.25rem" />
              </motion.div>

              <motion.div
                className="flex flex-col w-[75%] md:w-[46%] text-left md:text-right rounded-md text-lg px-5 py-4 bg-gray-100 dark:bg-gray-700 dark:border-none dark:bg-opacity-60 border md:ml-[initial] ml-[2.8rem] border-blue-gray-100 [--translate-in:50%] md:[--translate-in:-50%]"
                variants={animation}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
              >
                <h3 className="capitalize text-2xl dark:text-white/95 text-black">
                  Bachlor Degree
                </h3>
                <h4 className="text-sm mt-[-2px] text-blue-gray-500 dark:text-gray-300  tracking-wide">
                  2021-2025
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-500 mt-[26px] leading-normal">
                  I start my college Bachlor degree in B.E from the government
                  engineering college Sector-28, Gandhinagar
                </p><h4 className="mt-2 md:mt-0 text-md dark:text-gray-300 text-gray-800">CGPI : <span className="font-semibold">8.20</span></h4>

              </motion.div>
            </li>

            <li className="relative flex justify-center md:justify-normal">
              <motion.div
                initial={{ opacity: 0, y: 40, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[44px] flex items-center justify-center w-[44px] top-2 rounded-full border-4 bg-blue-gray-100 z-20 border-gray-100 dark:bg-blue-gray-300 dark:text-black left-[10%] md:left-[50%] absolute"
              >
                <IoSchool fontSize="1.25rem" />
              </motion.div>

              <motion.div
                className="flex flex-col w-[75%] md:w-[46%] text-left ml-[2.8rem] md:ml-[54%] rounded-md text-lg px-5 py-4 bg-gray-100 border dark:bg-gray-700 dark:border-none dark:bg-opacity-60 border-blue-gray-100 [--translate-in:50%]"
                variants={animation}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
              >
                <h3 className="capitalize text-2xl dark:text-white/95 text-black">
                  Higher Degree
                </h3>
                <h4 className="text-sm mt-[2px] text-blue-gray-500 dark:text-gray-300  tracking-wide">
                  2020-2021
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-500 mt-[26px] leading-normal">
                  I complete my Higher Studies at BAPS Swaminarayan
                  Vidhyamandir, Surat
                </p>
                <h4 className="mt-2 md:mt-0 text-md dark:text-gray-300 text-gray-800">Percentile Rank : <span className="font-semibold">88.66</span></h4>
              </motion.div>
            </li>

            <li className="relative flex justify-center md:justify-normal">
              <motion.div
                initial={{ opacity: 0, y: 40, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[44px] flex items-center justify-center w-[44px] top-2 rounded-full border-4 bg-blue-gray-100 dark:bg-blue-gray-300 dark:text-black z-20 border-gray-100 left-[10%] md:left-[50%] absolute"
              >
                <IoSchool fontSize="1.25rem" />
              </motion.div>

              <motion.div
                className="flex flex-col w-[75%] md:w-[46%] text-left md:text-right rounded-md text-lg px-5 py-4 ml-[2.8rem] md:ml-[initial] bg-gray-100 dark:bg-gray-700 dark:border-none dark:bg-opacity-60 border border-blue-gray-100 [--translate-in:50%] md:[--translate-in:-50%]"
                variants={animation}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
              >
                <h3 className="capitalize text-2xl dark:text-white/95 text-black">
                  Secondary Degree ( 10th grade )
                </h3>
                <h4 className="text-sm mt-[2px] text-blue-gray-500 dark:text-gray-300  tracking-wide">
                  2018-2019
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-500 mt-[26px] leading-normal">
                  I completed my 10th grade from BAPS Swaminarayan
                  vidhyamandir, Surat
                </p>
                <h4 className="mt-2 md:mt-0 text-md dark:text-gray-300 text-gray-800">Percentile Rank : <span className="font-semibold">98.99</span></h4>
              </motion.div>
            </li>




            {/* <li className='relative flex justify-center md:justify-normal' >
                        <motion.div initial={{opacity:0,y:40,x:-20}} whileInView={{opacity:1,y:0,x:-20}} transition={{duration:0.5,delay:0.2}} className='h-[44px] flex items-center justify-center dark:bg-blue-gray-300 dark:text-black w-[44px] top-2 rounded-full border-4 bg-blue-gray-100 z-20 border-gray-100 left-[10%] md:left-[50%] absolute'><IoSchool fontSize='1.25rem'/></motion.div>

                        <motion.div className='flex flex-col w-[75%] md:w-[46%] text-left ml-[2.8rem] md:ml-[54%] rounded-sm text-lg px-5 py-4 bg-gray-100 dark:bg-gray-700 dark:border-none dark:bg-opacity-60 border border-blue-gray-100 [--translate-in:50%]' variants={animation} initial='initial' whileInView='whileInView' transition={{duration:0.8}}>

                        <h3 className='capitalize text-2xl dark:text-white/95 text-black'>master degree</h3>
                        <h4 className='text-sm mt-[-2px] text-blue-gray-500 dark:text-gray-300 tracking-wide'>2025-27</h4>
                        <p className='text-lg text-gray-700 dark:text-gray-500 mt-[26px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        </motion.div>
                    </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
