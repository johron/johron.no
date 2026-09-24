"use client"

import { PropsWithChildren } from "react";

type NavbarButtonProps = PropsWithChildren

function NavbarButton({ children }: NavbarButtonProps) {
    return <button className="text-lg ">
        {children}
    </button>
}

export function Navbar() {
    return <div className="flex my-8 w-full justify-center">
        <div className="flex p-4 px-6 w-[35vw] bg-[#7c7c6f] rounded-full justify-between items-center">
            <NavbarButton>Arbeid</NavbarButton>
        </div>
    </div>
}