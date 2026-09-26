import { NotFound } from "@/components/NotFound"
import { useTranslations } from "next-intl"

export default function LocalizedNotFound() {
    const t = useTranslations("notFound")

    return (
        <NotFound title={t("title")} description={t("description")} home={t("home")}/>
    )
}