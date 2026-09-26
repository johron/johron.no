"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IconChevronDown, IconLanguage } from "@tabler/icons-react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"

const languageOptions = [
    { code: "nn", label: "Nynorsk" },
    { code: "en", label: "English" },
]

export function NavbarLangButton() {
    const t = useTranslations("navbar")
    const menuRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    
    const currentLocale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handlePointerDown)
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("mousedown", handlePointerDown)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const currentLanguage =
        languageOptions.find((option) => option.code === currentLocale) ?? languageOptions[0]

    const selectLanguage = (nextLocale: string) => {
        if (nextLocale !== currentLocale) {
            const cleanPathname = pathname.replace(/^\/(nn|en)/, '') || '/'
            router.replace(cleanPathname, { locale: nextLocale })
        }
        setIsOpen(false)
    }

    return (
        <div ref={menuRef} className="relative">
            <button
                type="button"
                className={`flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#fffce1]/80 transition-colors duration-300 ease-out hover:text-white ${isOpen ? "bg-white/10 text-white" : ""}`}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
            >
                <IconLanguage className="h-5 w-5" />
                <span className="hidden sm:inline">{currentLanguage.label}</span>
                <IconChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-1 shadow-2xl backdrop-blur-md"
                        role="menu"
                    >
                        {languageOptions.map((option) => {
                            const isSelected = option.code === currentLocale

                            return (
                                <button
                                    key={option.code}
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={isSelected}
                                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors duration-200 ${isSelected ? "bg-white/10 text-white" : "text-[#fffce1]/80 hover:bg-white/5 hover:text-white"}`}
                                    onClick={() => selectLanguage(option.code)}
                                >
                                    <span>{option.label}</span>
                                    {isSelected && (
                                        <span className="text-xs uppercase tracking-widest text-white/60">
                                            {t("activeLabel")}
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
