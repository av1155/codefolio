import type { Metadata } from "next";
import ResumePageClient from "./ResumePageClient";

export const metadata: Metadata = {
    title: "Resume - Andrea Venti | Software & Platform Engineer",
    description:
        "View and download Andrea Venti's resume. Software & Platform Engineer with experience in SRE, DevOps, Kubernetes, infrastructure automation, and full-stack development.",
    alternates: { canonical: "/resume" },
};

export default function ResumePage() {
    return <ResumePageClient />;
}
