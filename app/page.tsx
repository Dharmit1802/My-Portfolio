import Intro from "@/components/intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contect"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}
