"use client"

import { ProjectsSection } from "@/components/ProjectsSection"
import { HeroSection } from "../../components/HeroSection"
import { IconAlbum, IconBrandGithub } from "@tabler/icons-react"
import { useTranslations } from "next-intl"

export default function WorkPage() {
  const t = useTranslations('workPage')

  const inProgress = [
    {
      title: "Moose",
      image: "/projects/moose.png",
      description: t("inProgress.moose.description"),
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

  const inHibernation = [
    {
      title: "Glare",
      image: "/projects/glare.png",
      description: t("inHibernation.glare.description"),
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
      description: t("inHibernation.zelkel.description"),
      links: [
        {
          href: "https://github.com/johron/zelkel",
          icon: IconBrandGithub,
          openInNewTab: true,
        },
      ],
    },
  ]

  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <HeroSection />
        <div className="flex flex-col gap-32 pt-48">
          <ProjectsSection title={t("inProgress.title")} projects={inProgress} />
          <ProjectsSection title={t("inHibernation.title")} projects={inHibernation} />
        </div>
      </main>
    </div>
  )
}
