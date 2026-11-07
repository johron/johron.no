"use client"

import { AcornText } from "@/components/AcornText"
import { Text } from "@/components/Text"
import Image from "next/image"
import { IconLink } from "@/components/IconLink"
import { Icon } from "@tabler/icons-react"

interface ProjectsSectionProps {
    title: string,
    projects: {
        title: string,
        image: string,
        description:  string,
        links: {
            href: string,
            icon: Icon,
            openInNewTab: boolean,
        }[],
    }[],
}

export function ProjectsSection({title, projects}: ProjectsSectionProps) {
    return (
        <div className="flex flex-col w-full max-w-240 justify-center items-center gap-6 sm:gap-8">
            <AcornText className="text-5xl sm:text-7xl lg:text-9xl text-center text-[#8fdcc2]/50">{title}</AcornText>
            <div className="flex flex-col gap-12 w-full">
                {projects.map((project, i) => {
                    return (
                        <div key={i} className={`flex flex-col-reverse items-center ${i%2 ? "md:flex-row" : "md:flex-row-reverse"} justify-center gap-6 md:gap-10`}>
                            <div className="flex flex-col items-center justify-center text-center gap-4 md:max-w-sm">
                                <div>
                                    <AcornText className="text-4xl text-center">{project.title}</AcornText>
                                    <Text>{project.description}</Text>
                                </div>
                                <div className="flex gap-2 sm:gap-4">
                                    {project.links.map((link) => {
                                        return (
                                            <IconLink key={link.href} icon={link.icon} href={link.href} openInNewTab={link.openInNewTab} className="hover:bg-white/2 active:bg-white/5 rounded-full p-3 sm:p-2"/>
                                        )
                                    })}
                                </div>
                            </div>
                            <Image
                                className="rounded-lg border border-[#145f45] w-full max-w-120 md:w-120 md:max-w-none h-auto"
                                src={project.image}
                                width={1920/4}
                                height={1042/4}
                                alt=""
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}