import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// Prevent static prerendering: NEXT_PUBLIC_FORMSPREE_KEY is a runtime
// env var and useForm("") throws synchronously if the key is empty.
// This restores the original runtime-only behaviour the page had when
// it was a bare "use client" file.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Contact - Andrea Venti | Software & Platform Engineer",
    description:
        "Get in touch with Andrea Venti. Open to new opportunities, collaborations, and conversations about software engineering, SRE, and DevOps.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
