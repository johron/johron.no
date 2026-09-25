"use client"

import Link from "next/link"
import { ComponentType } from "react"

interface IconLinkProps {
    className?: string,
    icon: ComponentType<{ className?: string }>
    href: string,
    openInNewTab?: boolean,
}

export function IconLink({ className, icon, href, openInNewTab }: IconLinkProps) {
    const IconComponent = icon

    return (
        <Link
            className={`hover:text-white ${className || ""}`}
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
            <IconComponent className={`h-6 w-6}`} />
        </Link>
    )
}