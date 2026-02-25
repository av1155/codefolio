import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
    title: "Andrea Venti - Software & Platform Engineer Portfolio",
    description:
        "Software & Platform Engineer focused on building scalable, reliable systems through automation, infrastructure, and modern tooling.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return <HomePageClient />;
}
