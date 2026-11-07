import { PropsWithChildren } from "react"

type TextProps = PropsWithChildren<{
    className?: string,
    size?: string,
}>

export function Text({ children, className, size = "text-lg sm:text-xl" }: TextProps) {
    return (
        <p className={`${className || ""} ${size} font-google-sans antialiased`}>
            {children}
        </p>
    )
}
