"use client"

import { AcornText } from "@/components/AcornText";
import { Text } from "@/components/Text";
import Image from "next/image";
import { IconLink } from "@/components/IconLink";
import { IconBrandGithub } from "@tabler/icons-react";

interface ProjectsSectionProps {
    title: string,
    projects: {
        title: string,
        image: string,
        description:  string,
        href: string,
    }[],
}

export function ProjectsSection({title, projects}: ProjectsSectionProps) {
    return <div className="flex flex-col max-w-240 justify-center items-center gap-8">
        <AcornText className="text-9xl text-[#8fdcc2]/50">{title}</AcornText>
        <div className="flex flex-col gap-12">
            {projects.map((project, i) => {
                return <div key={i} className={`flex ${i%2 ? "flex-row" : "flex-row-reverse"} justify-center gap-10`}>
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <div>
                            <AcornText className="text-4xl text-center">{project.title}</AcornText>
                            <Text>{project.description}</Text>
                        </div>
                        <div className="flex gap-4">
                            <IconLink icon={IconBrandGithub} href={project.href} openInNewTab={true}/>
                        </div>
                    </div>
                    <Image
                        className="rounded-lg border border-[#145f45]"
                        src={project.image}
                        width={1920/4}
                        height={1042/4}
                        alt=""
                    />
                </div>
            })}
        </div>
    </div>
}