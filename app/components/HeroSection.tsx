import Image from "next/image";

export function HeroSection() {
    return <div className="p-8 bg-blue-300/1 0">
        <div className="flex flex-column m-8">
            <Image
                src={"/rong.png"}
                width={968}
                height={1495.5}
                alt="Rong"
                className="rounded-4xl"
                />
            <div className="flex flex-col gap-4 justify-center items-center group text-center">
                <h1 className="text-8xl font-black">Velkommen til Porteføljen min</h1>
                <p className="text-xl">Informatikk med spesialisering i nynorske operativsystem</p>
            </div>
        </div>
    </div>
}