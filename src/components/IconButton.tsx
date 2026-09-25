"use client"

import { ComponentType } from "react"

interface IconButtonProps {
    className?: string,
    icon: ComponentType<{ className?: string }>
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