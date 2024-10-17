import { inter } from "@/app/fonts/fonts";
import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

// Define global metadata
export const metadata: Metadata = {
    title: "Andrea Venti - Software Engineer Portfolio",
    description:
        "Discover Andrea Venti's journey as a software engineer, highlighting innovative projects and a focus on modern technology solutions.",
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
    authors: [{ name: "Andrea A. Venti", url: "https://www.andreaventi.com" }],
    alternates: {
        canonical: "https://www.andreaventi.com",
        types: {
            "application/rss+xml": "/feed.xml",
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: "https://www.andreaventi.com",
        title: "Andrea Venti - Software Engineer Portfolio",
        description:
            "Discover Andrea Venti's journey as a software engineer, highlighting innovative projects and a focus on modern technology solutions.",
        siteName: "Andrea Venti Portfolio",
        images: [
            {
                url: "/favicon.jpg",
                width: 1024,
                height: 1024,
                alt: "Andrea Venti - Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Andru_VF",
        creator: "@Andru_VF",
        title: "Andrea Venti - Software Engineer",
        description:
            "Discover Andrea Venti's journey as a software engineer, highlighting innovative projects and a focus on modern technology solutions.",
        images: [
            {
                url: "/favicon.jpg",
                alt: "Andrea Venti - Software Engineer",
            },
        ],
    },
    icons: {
        icon: "/favicon.jpg",
        apple: "/favicon.jpg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.className} antialiased`}>
            <head>
                {/* Link to Web App Manifest */}
                <link rel="manifest" href="/site.webmanifest" />

                {/* Additional icons */}
                <link rel="apple-touch-icon" href="/favicon.jpg" />
            </head>
            <body className="font-sans antialiased bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-size-130">
                <Header />
                <Analytics />
                <SpeedInsights />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
