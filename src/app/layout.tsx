import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "@/app/fonts/fonts";
// import { lusitana } from "@/app/fonts/fonts";

// Define global metadata
export const metadata: Metadata = {
    title: "Andrea Venti - Software Engineer Portfolio",
    description:
        "Welcome to Andrea Venti's portfolio showcasing projects in software engineering, development, and more.",
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
    authors: [{ name: "Andrea A. Venti", url: "https://www.andrea-venti.com" }],
    alternates: {
        canonical: "https://www.andrea-venti.com",
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
        url: "https://www.andrea-venti.com",
        title: "Andrea Venti - Software Engineer Portfolio",
        description:
            "Discover Andrea Venti's journey as a software engineering innovator with academic achievements and cutting-edge projects.",
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
        title: "Andrea Venti - Software Engineer Portfolio",
        description:
            "Showcasing Andrea Venti's work in software development, engineering, and innovative projects.",
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
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#9150D0" },
        { media: "(prefers-color-scheme: dark)", color: "#9150D0" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.className} antialiased`}>
            <head>
                {/* Link to Web App Manifest */}
                <link rel="manifest" href="/site.webmanifest" />

                {/* Additional icons */}
                <link rel="apple-touch-icon" href="/favicon.jpg" />
            </head>
            <body className="font-sans antialiased bg-white text-black dark:bg-gray-900 dark:text-white">
                {/* Accessibility Skip Link */}
                <a href="#main-content" className="sr-only focus:not-sr-only">
                    Skip to content
                </a>
                <Header />
                <main id="main-content">{children}</main>
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
