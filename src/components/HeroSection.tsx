"use client"

import { AcornText } from "@/components/AcornText"
import { Text } from "@/components/Text"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
    const [hovered, setHovered] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex">
                <div className="flex justify-center items-center">
                    <Image src="/johan.png" alt="" width="400" height="400" className="border-6 border-[#0ab9af] rounded-full" />
                </div>
                <div className="flex flex-col w-full justify-center text-center gap-12">
                    <div>
                        <AcornText className="text-9xl">Hei, eg er <motion.span
                            className="inline-block text-[#0ab9af]"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -2 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 10 }}
                        >{hovered ? "/juˈhaːn/" : "Johan"}</motion.span></AcornText>
                        <AcornText className="text-9xl">Ein programmerar</AcornText>
                    </div>
                </div>
            </div>
            <Text className="text-[#d3e1dc]">Hobbyprogrammerar i 7+ år og ny informatikkstudent ved NTNU i Trondheim</Text>
        </div>
    )
}