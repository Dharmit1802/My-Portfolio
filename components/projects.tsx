'use client';

import React, { useEffect } from 'react'
import Sectionheading from './sectionheading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hook';


export default function Projects() {

    const {ref} = useSectionInView('Projects',0.45);
    // const {setActiveSection,lastTimeClick} = useActiveSectionContext();

    // const {ref,inView} = useInView({
    //   threshold: 0.3
    // })
  
    // useEffect(()=>{
    //   if(inView && Date.now()-lastTimeClick > 1000){
    //     setActiveSection('Projects')
    //   }
    // },[inView,setActiveSection,lastTimeClick])
  return (
    <section ref={ref} id="projects" className="relative scroll-mt-28 mb-28 w-[100%] flex items-center justify-center">
        <div className='overflow-x-hidden'>
            <Sectionheading>My projects</Sectionheading>
            <div>
                {
                    projectsData.map((project,index)=>(
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>

        </div>
    </section>
  )
}


