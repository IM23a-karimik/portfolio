import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: {
        default: "Kian Karimi | Software Developer",
        template: "%s | Kian Karimi"
    },
    description: "Portfolio website of Kian Karimi, a software developer specializing in web development and cloud technologies",
    keywords: ["software developer", "web development", "portfolio", "Kian Karimi"],
    authors: [{name: "Kian Karimi"}],
    creator: "Kian Karimi",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
} 