import { Text } from "@/components/Text"
import { AcornText } from "@/components/AcornText"
import { useTranslations } from "next-intl"

export default function AboutPage() {
    const t = useTranslations("aboutPage")

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center p-6 sm:p-8 bg-white/5 w-full max-w-3xl rounded-3xl sm:rounded-4xl">
                <AcornText className="text-3xl sm:text-4xl pb-4 sm:pb-6">{t("title")}</AcornText>
                <Text>{t("paragraph")}</Text>
            </div>
        </div>
    )
}