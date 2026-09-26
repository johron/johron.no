import "@/app/globals.css"
import { NotFound } from "@/components/NotFound"
import { useTranslations } from "next-intl"

export default function GlobalNotFound() {
    const t = useTranslations("notFound")

    return (
        <html lang="en">
            <body>
                <NotFound title={t("title")} description={t("description")} home={t("home")}/>
            </body>
        </html>
    )
}