"use client"

import { Icon } from "@tabler/icons-react"

interface IconButtonProps {
    className?: string,
    icon: Icon
    onClick: () => void,
}

export function IconButton({ className, icon, onClick }: IconButtonProps) {
    const IconComponent = icon

    return (
        <button
            type="button"
            className={`hover:text-white ${className || ""}`}
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >
            <IconComponent />
        </button>
    )
}