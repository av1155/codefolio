import { projects as allProjects } from "@/data/projectsData";
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import ProjectsPageClient from "./ProjectsPageClient"; // Import the client component

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
