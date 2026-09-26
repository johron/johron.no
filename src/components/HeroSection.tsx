"use client"

import { AcornText } from "@/components/AcornText"
import { Text } from "@/components/Text"
import { IconSchool } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
    const t = useTranslations('workPage.hero')
    const [hovered, setHovered] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex">
                <div className="flex justify-center items-center">
                    <Image src="/johan.png" alt="" width="400" height="400" />
                </div>
                <div className="flex flex-col w-full justify-center text-center gap-12">
                    <div>
                        <AcornText className="text-9xl">{t("title1")} <motion.span
                            className="inline-block text-[#0ab9af]"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -2 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 10 }}
                        >{hovered ? "/juˈhaːn/" : "Johan"}</motion.span></AcornText>
                        <AcornText className="text-9xl">{t("title2")}</AcornText>
                    </div>
                </div>
            </div>
            <Text className="text-[#d3e1dc] flex gap-2">{t("subtitle1")}<Link href="https://www.ntnu.no/" target="_blank" className="underline">NTNU</Link>{t("subtitle2")}<IconSchool /></Text>
        </div>
    )
}