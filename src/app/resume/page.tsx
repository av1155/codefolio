import type { Metadata } from "next";
import ResumePageClient from "./ResumePageClient";

export const metadata: Metadata = {
    title: "Resume - Andrea Venti | Software & Platform Engineer",
    description:
        "View and download Andrea Venti's resume. Software & Platform Engineer with experience in SRE, DevOps, Kubernetes, infrastructure automation, and full-stack development.",
    alternates: { canonical: "/resume" },
    openGraph: {
        type: "article",
        url: "https://andreaventi.com/resume",
        title: "Andrea Venti Fuentes - Resume",
        description:
            "View and download Andrea Venti's software and platform engineering resume.",
        images: [
            {
                url: "/resume/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Andrea Venti Fuentes Resume",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Andrea Venti Fuentes - Resume",
        description:
            "View and download Andrea Venti's software and platform engineering resume.",
        images: ["/resume/opengraph-image"],
    },
};

export default function ResumePage() {
    return <ResumePageClient />;
}
