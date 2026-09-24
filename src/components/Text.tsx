import { PropsWithChildren } from "react";

type TextProps = PropsWithChildren<{
    className?: string,
}>

export function Text({ children, className }: TextProps) {
    return <p className={`text-xl font-google-sans antialiased ${className || ""}`}>
        {children}
    </p>
}