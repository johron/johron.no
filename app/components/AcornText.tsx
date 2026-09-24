import { PropsWithChildren } from "react";

type AcornTextProps = PropsWithChildren<{
    className?: string,
}>

export function AcornText({ children, className }: AcornTextProps) {
    return <h1 className={`font-bold font-acorn antialiased ${className || ""}`}>
        {children}
    </h1>
}