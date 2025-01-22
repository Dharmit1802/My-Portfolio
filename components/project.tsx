"use client";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleprogress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityprogress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0 "
            style={{
                scale: scaleprogress,
                opacity: opacityprogress,
            }}
        >
            <section className=" bg-gray-100 max-w-[42rem] border max-h-fit rounded-lg border-black/5 overflow-hidden md:pr-8 relative md:h-[25rem] hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:pr-2 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[20rem]">
                    <h3 className="text-2xl font-semibold dark:text-white/95">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {
                            tags.map((tag, index) => (
                                <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <Image src={imageUrl} alt='projects i worked on' quality={90}
                    className="md:absolute top-8 md:-right-40 max-h-[15rem] md:h-[20rem] md:max-h-none mx-auto w-[80%] md:w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            md:group-even:-left-40 md:group-even:right-[initial]"
                />
            </section>
        </motion.div>

    )

}