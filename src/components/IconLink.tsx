"use client"

import { Icon } from "@tabler/icons-react"
import { Link } from "@/i18n/navigation"
import { PropsWithChildren } from "react"

type IconLinkProps = PropsWithChildren<{
    className?: string,
    icon: Icon
    href: string,
    openInNewTab?: boolean,
}>

export function IconLink({ className, icon, href, openInNewTab, children }: IconLinkProps) {
    const IconComponent = icon

    return (
        <Link
            className={`flex justify-center hover:text-white ${className || ""}`}
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
            {children}
            <IconComponent className={`h-6 w-6}`} />
        </Link>
    )
}