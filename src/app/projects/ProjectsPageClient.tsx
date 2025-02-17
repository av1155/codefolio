"use client";

import { Project } from "@/data/projectsData";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import CategoryFilter from "@/components/projects/CategoryFilter";
import LanguageFilter from "@/components/projects/LanguageFilter";
import ProjectModal from "@/components/projects/ProjectModal";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ProjectsPageClientProps {
    projectsWithBlurData: Project[];
}

export default function ProjectsPageClient({ projectsWithBlurData }: ProjectsPageClientProps) {
    // State hooks
    const [activeCategory, setActiveCategory] = useState<"All" | "Projects" | "Programs">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeLanguage, setActiveLanguage] = useState<string>("All");

    // Next.js hooks for handling search params and router navigation
    const searchParams = useSearchParams();
    const router = useRouter();

    // useEffect to handle search params and set selected project based on the query
    useEffect(() => {
        const projectSlug = searchParams.get("project");

        if (projectSlug) {
            const project = projectsWithBlurData.find((p) => p.slug === projectSlug);
            if (project) {
                setSelectedProject(project);
            } else {
                console.warn(`Project with slug '${projectSlug}' not found.`);
            }
        }
    }, [searchParams, projectsWithBlurData]);

    // Function to open the project modal
    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        router.push(`/projects?project=${project.slug}`, { scroll: false });
    };

    // Function to close the project modal
    const closeProjectModal = () => {
        setSelectedProject(null);
        router.push("/projects", { scroll: false });
    };

    // Filtering logic for displaying projects based on active category and language
    const filteredProjects = projectsWithBlurData.filter((project) => {
        const categoryMatches = activeCategory === "All" || project.category === activeCategory;
        const languageMatches =
            activeLanguage === "All" || project.languages.includes(activeLanguage);

        return categoryMatches && languageMatches;
    });

    return (
        <>
            <AOSInitializer />
            <div
                id="projects"
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130 animate-gradient-move py-24 sm:py-32"
            >
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <BackgroundShape />
                </div>

                <div className="relative z-40 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center text-white" data-aos="fade-down">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h2>
                        <p className="mt-6 text-lg leading-8">
                            A collection of some of Andrea&apos;s favorite and most challenging
                            projects.
                        </p>
                    </div>

                    {/* Category and Language Filters */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <CategoryFilter
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        <LanguageFilter
                            activeLanguage={activeLanguage}
                            setActiveLanguage={setActiveLanguage}
                        />
                    </div>

                    {/* Projects Grid */}
                    <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {filteredProjects.map((project, index) => (
                            <div key={project.title} data-aos="zoom-in">
                                {/* Inner container for hover effects */}
                                <div
                                    className="group relative bg-white bg-opacity-20 border border-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-200 p-4 h-full flex flex-col hover:bg-white hover:bg-opacity-30 cursor-pointer"
                                    onClick={() => openProjectModal(project)}
                                >
                                    {/* Content Wrapper */}
                                    <div className="flex-grow">
                                        {/* Image */}
                                        <div
                                            className="relative w-full h-48 md:h-64 lg:h-48 rounded-lg overflow-hidden group-hover:opacity-90 transition duration-200"
                                            style={{ aspectRatio: "16 / 9" }}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                style={{ objectFit: "cover" }}
                                                className="rounded-lg"
                                                draggable={false}
                                                priority={index < 6}
                                                loading={index < 6 ? "eager" : "lazy"}
                                                placeholder="blur"
                                                blurDataURL={project.blurDataURL}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-6 text-lg font-bold text-white">
                                            {project.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="mt-2 text-sm text-white">
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* Buttons */}
                                    <div
                                        className="mt-auto flex space-x-3 pt-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white bg-opacity-80 hover:bg-opacity-100 transform hover:scale-105 transition duration-200"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faExternalLinkAlt}
                                                    className="mr-2"
                                                />
                                                See Live
                                            </Link>
                                        )}
                                        {project.sourceUrl && (
                                            <Link
                                                href={project.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white bg-opacity-80 hover:bg-opacity-100 transform hover:scale-105 transition duration-200"
                                            >
                                                <FontAwesomeIcon icon={faCode} className="mr-2" />
                                                Source Code
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal for Detailed View */}
                    <ProjectModal
                        selectedProject={selectedProject}
                        closeProjectModal={closeProjectModal}
                    />
                </div>
            </div>
        </>
    );
}
