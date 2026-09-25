import { PropsWithChildren } from "react"

type TextProps = PropsWithChildren<{
    className?: string,
    size?: string | "text-xl",
}>

export function Text({ children, className, size }: TextProps) {
    return (
        <p className={`${className || ""} ${size} font-google-sans antialiased`}>
            {children}
        </p>
    )
}