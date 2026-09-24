"use client"

import { AcornText } from "@/components/AcornText";
import { Text } from "@/components/Text";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
    const [hovered, setHovered] = useState(false);

    return <div className="flex flex-col w-full justify-center text-center gap-12">
        <div>
            <AcornText className="text-9xl">Hei, eg er <motion.span
                className="inline-block text-[#0ab9af]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -2 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >{hovered ? "/juˈhaːn/" : "Johan"}</motion.span></AcornText>
            <AcornText className="text-9xl">Ein Programmerar</AcornText>
        </div>
        <Text className="text-[#d3e1dc]">Informatikk med spesialisering i nynorske operativsystem</Text>
    </div>
}