"use client"

import { AcornText } from "@/components/AcornText"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function ContactPage() {
    const t = useTranslations("contactPage")
    const [result, setResult] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setResult("")

        const form = event.currentTarget
        const formData = new FormData(form)
        formData.append("access_key", "296a1605-759f-4bdb-acb4-53a6aa5e6c5f")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()
            if (data.success) {
                setResult(t("form.send.sent"))
                form.reset()
            } else {
                setResult(t("form.send.error"))
            }
        } catch {
            setResult(t("form.send.error"))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <AcornText className="text-4xl">{t("title")}</AcornText>

            <form onSubmit={handleSubmit} className="flex flex-col w-2xl gap-3">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">{t("form.name")}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#07928b] focus:ring-[#07928b] border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">{t("form.email")}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#07928b] focus:ring-[#07928b] border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">{t("form.title")}</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#07928b] focus:ring-[#07928b] border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">{t("form.message")}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={10}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#07928b] focus:ring-[#07928b] border p-2"
                    />
                </div>
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0ab9af] cursor-pointer text-white py-2 px-4 rounded-md hover:bg-[#07928b] disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                >
                    {isSubmitting ? t("form.send.sending") : t("form.send.send")}
                </button>

                {result && (
                    <p className="text-center text-sm font-medium mt-2">
                        {result}
                    </p>
                )}
            </form>
        </div>
    )
}