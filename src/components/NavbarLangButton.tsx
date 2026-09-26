"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
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
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [coords, setCoords] = useState({ top: 0, left: 0 })
    
    const currentLocale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const updateCoords = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setCoords({
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2 - 88,
            })
        }
    }

    const toggleOpen = () => {
        if (!isOpen) {
            updateCoords()
        }
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (
                buttonRef.current && 
                !buttonRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('[role="menu"]')
            ) {
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
        window.addEventListener("scroll", updateCoords, { passive: true })
        window.addEventListener("resize", updateCoords)

        return () => {
            document.removeEventListener("mousedown", handlePointerDown)
            document.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("scroll", updateCoords)
            window.removeEventListener("resize", updateCoords)
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
        <div>
            <button
                ref={buttonRef}
                type="button"
                className={`flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 text-sm font-semibold text-[#fffce1]/80 transition-colors duration-300 ease-out hover:text-white hover:bg-white/2 ${isOpen ? "bg-white/10 hover:bg-white/12 text-white" : ""}`}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={toggleOpen}
            >
                <IconLanguage className="h-5 w-5" />
                <span className="hidden sm:inline">{currentLanguage.label}</span>
                <IconChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {typeof window !== "undefined" && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            style={{
                                position: "fixed",
                                top: `${coords.top}px`,
                                left: `${coords.left}px`,
                            }}
                            className="z-10000 w-44 overflow-hidden rounded-2xl border border-[#4f7668]/20 bg-[#0a0a0a]/80 backdrop-blur-sm p-1.5 shadow-2xl"
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
                                        className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-colors duration-200 ${
                                            isSelected 
                                                ? "bg-white/10 text-white" 
                                                : "text-[#fffce1]/80 hover:bg-white/5 hover:text-white"
                                        }`}
                                        onClick={() => selectLanguage(option.code)}
                                    >
                                        <span>{option.label}</span>
                                        {isSelected && (
                                            <span className="text-[10px] uppercase tracking-widest text-white/50 font-normal">
                                                {t("activeLabel")}
                                            </span>
                                        )}
                                    </button>
                                )
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    )
}