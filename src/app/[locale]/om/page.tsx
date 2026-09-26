import { Text } from "@/components/Text"
import { AcornText } from "@/components/AcornText"
import { useTranslations } from "next-intl"

export default function AboutPage() {
    const t = useTranslations("aboutPage")

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center p-8 bg-white/5 w-3xl rounded-4xl">
                <AcornText className="text-4xl pb-6">{t("title")}</AcornText>
                <Text>{t("paragraph")}</Text>
            </div>
        </div>
    )
}