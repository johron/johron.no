import { Text } from "@/components/Text"
import { AcornText } from "@/components/AcornText"

export default function AboutPage() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center p-8 bg-white/5 w-3xl rounded-4xl">
                <AcornText className="text-4xl pb-6">Om meg</AcornText>
                <Text>Eg har vore hobbyprogrammerar i omkring 7 år og har nyleg byrja på informatikkstudiet ved NTNU i Trondheim</Text>
            </div>
        </div>
    )
}