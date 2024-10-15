import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import fs from "fs";
import { Project, projects as projectData } from "@/data/projectsData";

export async function GET() {
    // Process all projects to generate blurDataURL
    const processedProjects = await Promise.all(
        projectData.map(async (project: Project) => {
            const imagePath = path.join(process.cwd(), "public", project.image);
            const imageBuffer = fs.readFileSync(imagePath);

            const { base64 } = await getPlaiceholder(imageBuffer);
            return {
                ...project,
                blurDataURL: base64,
            };
        }),
    );

    // Return the processed projects with the blurDataURL
    return NextResponse.json(processedProjects);
}
