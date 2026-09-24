"use client"

import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "../components/HeroSection";

const utvikling = [
  {
    title: "Moose",
    image: "/projects/moose.png",
    description: "Terminalbasert teksteditor skrive i Go, inspirert av Emacs, Vim og VS Code",
    href: "https://github.com/johron/moose",
  },
]

const dvale = [
  {
    title: "Glare",
    image: "/projects/glare.png",
    description: "Modulær, cross-platform game-engine bygd i Kotlin ved hjelp av LWJGL og OpenGL",
    href: "https://github.com/johron/glare",
  },
  {
    title: "Zelkel",
    image: "/projects/zelkel.png",
    description: "Low-level objektorientert programmeringsspråk",
    href: "https://github.com/johron/zelkel",
  },
]

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <HeroSection />
        <div className="flex flex-col gap-16 pt-16">
          <ProjectsSection title="Under utvikling" projects={utvikling} />
          <ProjectsSection title="Prosjekt i dvale" projects={dvale} />
        </div>
      </main>
    </div>
  );
}
