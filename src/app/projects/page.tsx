import { projects as allProjects } from "@/data/projectsData";
import type { Metadata } from "next";
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import { Suspense } from "react";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
    title: "Projects - Andrea Venti | Software & Platform Engineer",
    description:
        "Browse Andrea Venti's engineering projects: homelab SRE platform, full-stack web apps, CLI tools, algorithms, and more — built with TypeScript, Python, Go, Java, and C.",
    alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
    const projectsWithBlurData = await Promise.all(
        allProjects.map(async (project) => {
            try {
                const imgPath = path.join(
                    process.cwd(),
                    "public",
                    project.image.replace(/^\/+/, ""),
                );
                const { base64 } = await getPlaiceholder(imgPath);
                return { ...project, blurDataURL: base64 };
            } catch {
                return { ...project, blurDataURL: "" };
            }
        }),
    );

    return (
        <>
            {/* Required for useSearchParams() inside the client page */}
            <Suspense fallback={null}>
                <ProjectsPageClient projectsWithBlurData={projectsWithBlurData} />
            </Suspense>

            {/* Crawlable snapshot for bots / no-JS */}
            <section className="sr-only" aria-label="Projects (text version)">
                <h1>Projects</h1>
                {allProjects.map((p) => (
                    <article key={p.slug}>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <p>{p.detailedDescription}</p>
                        <p>Technologies: {p.technologies.join(", ")}</p>
                        {p.liveUrl ? <a href={p.liveUrl}>Live</a> : null}{" "}
                        {p.sourceUrl ? <a href={p.sourceUrl}>Source</a> : null}
                    </article>
                ))}
            </section>
        </>
    );
}
