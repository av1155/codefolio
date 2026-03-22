import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
    title: "Andrea Venti - DevOps & Platform Engineer Portfolio",
    description:
        "DevOps & Platform Engineer focused on site reliability, infrastructure automation, and keeping systems stable.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return <HomePageClient />;
}
