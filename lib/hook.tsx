import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";




export function useSectionInView(ActiveSection: SectionName, threshold: number) {
  const { setActiveSection, lastTimeClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: threshold
  })

  useEffect(() => {
    if (inView && Date.now() - lastTimeClick > 1000) {
      setActiveSection(ActiveSection);
    }

  }, [inView, setActiveSection, lastTimeClick]);



  return { ref, inView }
}