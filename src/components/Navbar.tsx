"use client"

import { PropsWithChildren, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion"
import { IconButton } from "@/components/IconButton"
import {
    IconBrandGithub,
    IconLanguage,
} from "@tabler/icons-react"
import { IconLink } from "@/components/IconLink"

type NavbarButtonProps = PropsWithChildren<{
    href: string;
    isActive: boolean;
}>

function NavbarButton({ children, href, isActive }: NavbarButtonProps) {
    return (
        <Link 
            href={href}
            className={`
                relative z-10 text-lg px-6 font-semibold text-[#fffce1]/80 p-2 m-3 rounded-full transition-colors duration-300 ease-out
                ${isActive
                    ? "text-white"
                    : "hover:text-white"
                }
            `}
        >
            {isActive && (
                <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
            )}
            {children}
        </Link>
    )
}

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return
        const onScroll = () => setIsScrolled(window.scrollY > 0)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="flex my-8 w-full justify-center fixed z-9999">
            <LayoutGroup>
                <div className={`flex rounded-full justify-between items-center bg-transparent transition-colors duration-300 ease-out ${isScrolled ? 'bg-black/30 backdrop-blur-sm' : ''}`}>
                    <NavbarButton href="/" isActive={pathname === "/"}>Arbeid</NavbarButton>
                    <NavbarButton href="/om-meg" isActive={pathname === "/om-meg"}>Om meg</NavbarButton>
                    <NavbarButton href="/meir" isActive={pathname === "/meir"}>Meir</NavbarButton>
                    <NavbarButton href="/kontakt-meg" isActive={pathname === "/kontakt-meg"}>Kontakt meg</NavbarButton>
                    <IconButton
                        icon={IconLanguage}
                        onClick={() => {
                            console.log("pressed")
                        }
                    }/>
                    <IconLink
                        className="px-6"
                        icon={IconBrandGithub}
                        href="https://github.com/johron/"
                        openInNewTab={true}
                    />
                </div>
            </LayoutGroup>
        </div>
    )
}
