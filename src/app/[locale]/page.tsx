"use client";

import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "../../components/HeroSection";
import { IconAlbum, IconBrandGithub } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function WorkPage() {
	const t = useTranslations("workPage");

	const inProgress = [
		{
			title: "Plunk",
			image: "/projects/plunk.png",
			description: t("projects.plunk.description"),
			links: [
				{
					href: "https://github.com/plunk-lang/plunk",
					icon: IconBrandGithub,
					openInNewTab: true,
				},
				{
					href: "/arbeid/plunk",
					icon: IconAlbum,
					openInNewTab: false,
				},
			],
		},
		{
			title: "Moose",
			image: "/projects/moose.png",
			description: t("projects.moose.description"),
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
	];

	const onPause = [
		{
			title: "Glare",
			image: "/projects/glare.png",
			description: t("projects.glare.description"),
			links: [
				{
					href: "https://github.com/johron/glare",
					icon: IconBrandGithub,
					openInNewTab: true,
				},
			],
		},
	];

	return (
		<div>
			<main className="flex flex-col justify-center items-center">
				<HeroSection />
				<div className="flex flex-col items-center gap-20 sm:gap-24 lg:gap-32 pt-24 sm:pt-32 lg:pt-48 w-full">
					<ProjectsSection
						title={t("projectsTitles.progress")}
						projects={inProgress}
					/>
					<ProjectsSection
						title={t("projectsTitles.pause")}
						projects={onPause}
					/>
				</div>
			</main>
		</div>
	);
}
