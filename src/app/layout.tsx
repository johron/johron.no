import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local";
import { Google_Sans } from 'next/font/google'
import { Navbar } from "../components/Navbar";

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
   fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const acorn = localFont({
  src: [
    {
      path: "../fonts/Acorn/TrialAcorn-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Acorn/TrialAcorn-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-acorn",
});

export const metadata: Metadata = {
  title: "Johan Rong",
  description: "Personleg portefølje",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${acorn.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        <div className="min-h-full pt-40 flex flex-col py-12">{children}</div>
      </body>
    </html>
  )
}
