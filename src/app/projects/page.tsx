import { projects as allProjects } from "@/data/projectsData";
import type { Metadata } from "next";
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
    title: "Projects - Andrea Venti | Software & Platform Engineer",
    description:
        "Browse Andrea Venti's engineering projects: homelab SRE platform, full-stack web apps, CLI tools, algorithms, and more — built with TypeScript, Python, Go, Java, and C.",
};

export default async function ProjectsPage() {
    // Generate blurDataURL for each project's image
    const projectsWithBlurData = await Promise.all(
        allProjects.map(async (project) => {
            const { base64 } = await getPlaiceholder(
                path.join(process.cwd(), "public", project.image),
            );
            return {
                ...project,
                blurDataURL: base64,
            };
        }),
    );

    return <ProjectsPageClient projectsWithBlurData={projectsWithBlurData} />;
}
