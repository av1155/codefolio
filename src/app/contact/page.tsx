import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact - Andrea Venti | Software & Platform Engineer",
    description:
        "Get in touch with Andrea Venti. Open to new opportunities, collaborations, and conversations about software engineering, SRE, and DevOps.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
