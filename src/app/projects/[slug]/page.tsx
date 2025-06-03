import { projects } from "@/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";

// Explicitly type the params object
type ProjectPageProps = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};

    return {
        title: `${project.title} | Andrea Venti`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url: `https://www.andreaventi.com/projects/${project.slug}`,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <Image
                src={project.image}
                alt={project.title}
                width={1100}
                height={600}
                className="rounded-lg mb-6"
            />
            <div className="text-gray-700 space-y-4 whitespace-pre-line">
                {project.detailedDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
        </div>
    );
}
