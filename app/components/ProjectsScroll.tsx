import Image from "next/image";
import { HorizontalScroll } from "./HorizontalScroll";

interface ProjectsScrollProps {
  projects: {
    title: string,
    github: {
      user: string,
      repo: string,
    },
    href: string,
    imageBg: string,
  }[],
}

export function ProjectsScroll({ projects }: ProjectsScrollProps) {
  return <HorizontalScroll>
    {projects.map((project) => {
      return <div key={project.href} className="relative inline-block h-screen w-screen">
        <Image src={project.imageBg} alt="" className="block w-max h-max" sizes="100vw" fill/>
        <div className="flex flex-col items-center justify-center text-4xl absolute inset-0 bg-black/50">
          <h1>{project.title}</h1>          
        </div>
      </div>
    })}
  </HorizontalScroll>
}