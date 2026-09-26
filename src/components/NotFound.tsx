"use client"

import { AcornText } from "@/components/AcornText"
import { Text } from "@/components/Text"
import Link from "next/link"

interface NotFoundProps {
    title: string,
    description: string,
    home: string,
}

export function NotFound({ title, description, home }: NotFoundProps) {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col text-center p-32 w-3xl justify-center items-center gap-2">
                <AcornText className="text-4xl">404 - {title}</AcornText>
                <Text>{description}</Text>
                <Link
                    type="button"
                    className={`hover:text-white hover:bg-[#4f7668]/20 border border-[#4f7668]/20 rounded-full p-1 px-4 items-center text-center cursor-pointer`}
                    href="/"
                >
                    {home}
                </Link>
            </div>
        </div>
    )
}