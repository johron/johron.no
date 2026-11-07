"use client"

import { PropsWithChildren, useEffect, useState } from "react"
import { Link, usePathname } from "@/i18n/navigation"

import { LayoutGroup, motion, AnimatePresence } from "framer-motion"
import {
    IconBrandGithub,
    IconMenu2,
    IconSlash,
    IconX,
} from "@tabler/icons-react"
import { IconLink } from "@/components/IconLink"
import { NavbarLangButton } from "@/components/NavbarLangButton"
import { AcornText } from "@/components/AcornText"
import { useTranslations } from "next-intl"

type NavbarButtonProps = PropsWithChildren<{
    href: string;
    isActive: boolean;
}>

function NavbarButton({ children, href, isActive }: NavbarButtonProps) {
    return (
        <Link 
            href={href}
            className={`
                relative z-10 text-lg px-6 font-semibold text-[#fffce1]/80 p-2 m-3 rounded-full transition-colors duration-300 ease-out flex gap-2 hover:bg-white/2
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

function MobileNavLink({ children, href, isActive }: NavbarButtonProps) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-lg font-semibold transition-colors ${
                isActive
                    ? "bg-white/10 text-white"
                    : "text-[#fffce1]/80 active:bg-white/5 hover:text-white"
            }`}
        >
            {children}
        </Link>
    )
}

export function Navbar() {
    const t = useTranslations("navbar")
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return
        const onScroll = () => setIsScrolled(window.scrollY > 0)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
        const mq = window.matchMedia("(min-width: 1024px)")
        const onChange = () => mq.matches && setMenuOpen(false)
        document.addEventListener("keydown", onKey)
        mq.addEventListener("change", onChange)
        return () => {
            document.removeEventListener("keydown", onKey)
            mq.removeEventListener("change", onChange)
        }
    }, [])

    const isWork = pathname === "/" || pathname.startsWith("/arbeid/")

    return (
        <div className="fixed top-0 inset-x-0 z-9999 flex justify-center px-3 pt-[max(1rem,env(safe-area-inset-top))] lg:pt-8 pointer-events-none">
            <LayoutGroup>
                <div className={`pointer-events-auto hidden lg:flex rounded-full border border-[#4f7668]/20 justify-between items-center bg-transparent transition-colors duration-300 ease-out ${isScrolled ? 'bg-black/30 backdrop-blur-sm' : ''}`}>
                    <NavbarButton href="/" isActive={isWork}>{t("work")}<IconSlash /></NavbarButton>
                    <NavbarButton href="/om" isActive={pathname === "/om"}>{t("about")}</NavbarButton>
                    <NavbarButton href="/meir" isActive={pathname === "/meir"}>{t("more")}</NavbarButton>
                    <NavbarButton href="/kontakt" isActive={pathname === "/kontakt"}>{t("contact")}</NavbarButton>
                    <NavbarLangButton />
                    <IconLink
                        className="p-2 hover:bg-white/2 rounded-full mx-6"
                        icon={IconBrandGithub}
                        href="https://github.com/johron/"
                        openInNewTab={true}
                    />
                </div>
            </LayoutGroup>

            <div className="pointer-events-auto relative w-full max-w-md lg:hidden">
                <div className={`flex items-center justify-between rounded-full border border-[#4f7668]/20 pl-5 pr-2 py-1.5 transition-colors duration-300 ease-out ${isScrolled || menuOpen ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
                    <Link href="/" aria-label="Home">
                        <AcornText className="text-xl">Johan Rong</AcornText>
                    </Link>
                    <button
                        type="button"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((o) => !o)}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-[#fffce1]/80 active:bg-white/10 hover:text-white cursor-pointer"
                    >
                        {menuOpen ? <IconX /> : <IconMenu2 />}
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-[#4f7668]/20 bg-[#0a0a0a]/90 backdrop-blur-md p-2 shadow-2xl"
                        >
                            <MobileNavLink href="/" isActive={isWork}>{t("work")}</MobileNavLink>
                            <MobileNavLink href="/om" isActive={pathname === "/om"}>{t("about")}</MobileNavLink>
                            <MobileNavLink href="/meir" isActive={pathname === "/meir"}>{t("more")}</MobileNavLink>
                            <MobileNavLink href="/kontakt" isActive={pathname === "/kontakt"}>{t("contact")}</MobileNavLink>
                            <div className="mt-1 flex items-center justify-between border-t border-[#4f7668]/20 pt-2">
                                <NavbarLangButton />
                                <IconLink
                                    className="p-3 hover:bg-white/2 active:bg-white/5 rounded-full"
                                    icon={IconBrandGithub}
                                    href="https://github.com/johron/"
                                    openInNewTab={true}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
