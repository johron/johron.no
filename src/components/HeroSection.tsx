import { AcornText } from "./AcornText";
import { Text } from "./Text";

export function HeroSection() {
    return <div className="flex flex-col w-full justify-center text-center gap-12 py-12">
        <div>
            <AcornText className="text-9xl">Hei, eg er <span className="text-[#0ab9af]">Johan</span>.</AcornText>
            <AcornText className="text-9xl">Ein Programmerar.</AcornText>
        </div>
        <Text>Informatikkstudent med spesialisering i nynorske operativsystem**</Text>
    </div>
}