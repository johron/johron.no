"use client"

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarButtonProps = PropsWithChildren<{
    href: string;
    isActive: boolean;
}>

function NavbarButton({ children, href, isActive }: NavbarButtonProps) {
    return (
        <Link 
            href={href}
            className={`
                text-lg px-6 font-semibold text-[#fffce1]/80 p-2 m-3 rounded-full transition-colors
                ${isActive
                    ? "bg-white/10 hover:bg-white/15 text-white"
                    : "hover:bg-white/5"
                }
            `}
        >
            {children}
        </Link>
    )
}

export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex my-8 w-full justify-center">
            <div className="flex rounded-full justify-between items-center">
                <NavbarButton href="/" isActive={pathname === "/"}>Arbeid</NavbarButton>
                <NavbarButton href="/om-meg" isActive={pathname === "/om-meg"}>Om meg</NavbarButton>
                <NavbarButton href="/meir" isActive={pathname === "/meir"}>Meir</NavbarButton>
                <NavbarButton href="/kontakt" isActive={pathname === "/kontakt"}>Kontakt</NavbarButton>
            </div>
        </div>
    )
}
