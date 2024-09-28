import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

// File: src/app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export const metadata: Metadata = {
    title: "Andrea Venti - Portfolio",
    description: "Andrea Venti Fuentes software engineer portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="font-sans antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
