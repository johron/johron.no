import { Text } from "@/components/Text"
import { AcornText } from "./AcornText"
import Link from "next/link"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations("footer")

    return (
        <div className="flex w-full py-12 justify-center mt-auto">
            <div className="flex w-4xl max-w-4xl justify-between">
                <div className="flex flex-col-reverse">
                    <Text size="text-md">
                        <span className="inline-flex items-center gap-1 leading-none">
                            <span className="align-middle text-[1.4em] leading-none">©</span>
                            <span>2026 Johan Rong - <Link href="https://github.com/johron/johron.no" className="underline">{t("source")}</Link></span>
                        </span>
                    </Text>
                    <Text>{t("fontNotice1")} <Link className="underline" href="https://typeverything.com/" target="_blank">Typeverything</Link> {t("fontNotice2")}</Text>
                </div>
                <div className="flex flex-col gap-3">
                    <AcornText className="text-2xl font-medium">{t("external")}</AcornText>
                    <Link href="https://github.com/johron" target="_blank">
                        <Text size="text-md underline">Github</Text>
                    </Link>
                    <Link href="https://www.linkedin.com/in/johanrong/" target="_blank">
                        <Text size="text-md underline">LinkedIn</Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}