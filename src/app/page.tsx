"use client"

import { AcornText } from "@/components/AcornText";
import { HeroSection } from "../components/HeroSection";
import { Text } from "@/components/Text";
import Image from "next/image";
import { IconLink } from "@/components/IconLink";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <HeroSection />
        <div className="flex flex-col py-16 max-w-240 justify-center items-center">
          <AcornText className="text-9xl text-[#8fdcc2]/50">Under utvikling</AcornText>
          <div className="flex flex-row justify-center gap-10">
            <Image
              className="rounded-lg border border-[#145f45]"
              src="/moose.png"
              width={1920/4}
              height={1042/4}
              alt=""
            />
            <div className="flex flex-col items-center text-center gap-8">
              <div>
                <AcornText className="text-4xl text-center">Moose</AcornText>
                <Text className="wrap-anywhere">Terminal-based text editor written in Go, inspired by Emacs, Vim and VS Code.</Text>
              </div>
              <div className="flex gap-4">
                <IconLink icon={IconBrandGithubFilled} href="https://github.com/johron/moose" openInNewTab={true}/>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <AcornText className="text-9xl text-[#8fdcc2]/50">Prosjekt i dvale</AcornText>
        </div>
      </main>
    </div>
  );
}
