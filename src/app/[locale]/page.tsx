"use client"

import { ProjectsSection } from "@/components/ProjectsSection"
import { HeroSection } from "../../components/HeroSection"
import { IconAlbum, IconBrandGithub } from "@tabler/icons-react"

const utvikling = [
  {
    title: "Moose",
    image: "/projects/moose.png",
    description: "Terminalbasert teksteditor skrive i Go, inspirert av Emacs, Vim og VS Code",
    links: [
      {
        href: "https://github.com/johron/moose",
        icon: IconBrandGithub,
        openInNewTab: true,
      },
      {
        href: "/arbeid/moose",
        icon: IconAlbum,
        openInNewTab: false,
      },
    ],
  },
]

const dvale = [
  {
    title: "Glare",
    image: "/projects/glare.png",
    description: "Modulær, cross-platform game-engine bygd i Kotlin ved hjelp av LWJGL og OpenGL",
    links: [
      {
        href: "https://github.com/johron/glare",
        icon: IconBrandGithub,
        openInNewTab: true,
      },
    ],
  },
  {
    title: "Zelkel",
    image: "/projects/zelkel.png",
    description: "Low-level objektorientert programmeringsspråk",
    links: [
      {
        href: "https://github.com/johron/zelkel",
        icon: IconBrandGithub,
        openInNewTab: true,
      },
    ],
  },
]

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <HeroSection />
        <div className="flex flex-col gap-32 pt-48">
          <ProjectsSection title="Under utvikling" projects={utvikling} />
          <ProjectsSection title="Prosjekt i dvale" projects={dvale} />
        </div>
      </main>
    </div>
  )
}
