import Image from "next/image";

export function HeroSection() {
    return <div className="p-8 bg-blue-300/10 0">
        <div className="flex flex-column m-8">
            <Image
                src={"/rong.png"}
                width={3872/5}
                height={2592/5}
                alt="Rong"
                className="rounded-4xl border-4 border-gray-400"
                />
            <div className="flex flex-col gap-4 justify-center items-center group text-center">
                <h1 className="text-8xl font-black bg-linear-to-r from-white to-blue-500 bg-clip-text text-transparent">Velkommen til porteføljen min</h1>
                <p className="text-xl">Informatikk med spesialisering i nynorske operativsystem</p>
            </div>
        </div>
    </div>
}