import { inter } from "@/app/fonts/fonts";
import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

// Define global metadata
export const metadata: Metadata = {
    metadataBase: new URL("https://andreaventi.com"),
    title: "Andrea Venti - DevOps & Platform Engineer Portfolio",
    description:
        "DevOps & Platform Engineer focused on site reliability, infrastructure automation, and keeping systems stable.",
    applicationName: "Andrea Venti Portfolio",
    referrer: "origin-when-cross-origin",
    manifest: "/site.webmanifest",
    keywords: [
        "Andrea",
        "Andrea Venti",
        "Andrea Venti Fuentes",
        "Software Engineer",
        "Developer",
        "Portfolio",
        "Java",
        "Python",
        "C++",
        "C",
        "JavaScript",
        "TypeScript",
        "Full Stack",
        "Front End",
        "Back End",
        "React",
        "NextJS",
        "TailwindCSS",
        "HTML",
        "CSS",
        "University of Miami",
        "Computer Science",
    ],
    authors: [{ name: "Andrea A. Venti", url: "https://andreaventi.com" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: "https://andreaventi.com",
        title: "Andrea Venti - DevOps & Platform Engineer Portfolio",
        description:
            "DevOps & Platform Engineer focused on site reliability, infrastructure automation, and keeping systems stable.",
        siteName: "Andrea Venti Portfolio",
        images: [
            {
                url: "/favicon.png",
                width: 1024,
                height: 1024,
                alt: "Andrea Venti - DevOps & Platform Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Andru_VF",
        creator: "@Andru_VF",
        title: "Andrea Venti - DevOps & Platform Engineer Portfolio",
        description:
            "DevOps & Platform Engineer focused on site reliability, infrastructure automation, and keeping systems stable.",
        images: [
            {
                url: "/favicon.png",
                alt: "Andrea Venti - DevOps & Platform Engineer",
            },
        ],
    },
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
        { media: "(prefers-color-scheme: dark)", color: "#101827" },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.className} antialiased`}>
            <head>
                {/* Prefetch resume PDF */}
                <link rel="prefetch" href="/sre-resume.pdf" as="fetch" type="application/pdf" />
            </head>
            <body className="font-sans antialiased bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-size-130">
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
