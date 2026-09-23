import Link from "next/link";

interface NavbarProps {
    links: {
        title: string,
        href: string,
    }[],
}

export function Navbar({ links }: NavbarProps) {
    return <div className="flex flex-column p-4 px-8 bg-gray-950/60 justify-between">
        <div className="text-5xl font-bold">
            Johan Rong
        </div>
        <div className="flex flex-row gap-4">
            {links.map((link) => {
                return <Link key={link.title} href={link.href} className="font-bold text-xl rounded-xl py-2 px-6 bg-blue-950 hover:bg-blue-900">{link.title}</Link>
            })}
        </div>
    </div>
}
