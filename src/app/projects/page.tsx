"use client";

import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, Suspense, useEffect, useState } from "react";
import AOSInitializer from "@/components/AOSInitializer";
import { Project } from "@/data/projectsData";

// Suspense fallback component
const FallbackComponent = () => <div>Loading...</div>;

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<"All" | "Main" | "Other">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);

    const searchParams = useSearchParams(); // Get search params
    const router = useRouter(); // Get router

    useEffect(() => {
        const projectSlug = searchParams.get("project");

        if (projectSlug) {
            const project = projects.find((p) => p.slug === projectSlug);
            if (project) {
                setSelectedProject(project);
            } else {
                // Optionally handle invalid slug
                console.warn(`Project with slug '${projectSlug}' not found.`);
            }
        }
    }, [searchParams, projects]);

    useEffect(() => {
        // Fetch projects from the API route
        const fetchProjects = async () => {
            const res = await fetch("/api/projects"); // Call the API route
            const data: Project[] = await res.json();
            setProjects(data); // Set the fetched projects
        };

        fetchProjects();
    }, []);

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        // Update the URL with the project slug, preventing scrolling
        router.push(`/projects?project=${project.slug}`, { scroll: false });
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        // Remove the project parameter from the URL, preventing scrolling
        router.push("/projects", { scroll: false });
    };

    const filteredProjects = projects.filter((project) => {
        if (activeCategory === "All") return true;
        return project.category === activeCategory;
    });

    return (
        <Suspense fallback={<FallbackComponent />}>
            <AOSInitializer />
            <div
                id="projects"
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130 animate-gradient-move py-24 sm:py-32"
            >
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <div className="absolute inset-x-0 top-0 transform-gpu overflow-hidden blur-3xl opacity-70">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-indigo-500 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center text-white" data-aos="fade-down">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h2>
                        <p className="mt-6 text-lg leading-8">
                            A collection of some of Andrea&apos;s favorite and most challenging
                            projects.
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="mt-10 flex justify-center space-x-4">
                        {["All", "Main", "Other"].map((category) => (
                            <div
                                key={category}
                                data-aos="fade-up" // Apply AOS animation to the parent div
                            >
                                <button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 transform ${
                                        activeCategory === category
                                            ? "bg-white bg-opacity-80 text-indigo-700"
                                            : "bg-white bg-opacity-20 text-white hover:text-indigo-700"
                                    } hover:bg-opacity-100 hover:scale-105`}
                                    onClick={() =>
                                        setActiveCategory(category as "All" | "Main" | "Other")
                                    }
                                >
                                    {category === "All" ? "All" : `${category} Projects`}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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
                                        <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-90 transition duration-200">
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
                    {selectedProject && (
                        <Transition appear show={!!selectedProject} as={Fragment}>
                            <Dialog
                                as="div"
                                aria-labelledby="project-title"
                                aria-describedby="project-description"
                                className="relative z-50"
                                onClose={closeProjectModal}
                            >
                                {/* Background Overlay */}
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 transition-opacity duration-200" />
                                </TransitionChild>

                                {/* Modal Content */}
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <TransitionChild
                                            as={Fragment}
                                            enter="ease-out duration-300 transform"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200 transform"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <DialogPanel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                                                {/* Close Button */}
                                                <button
                                                    onClick={closeProjectModal}
                                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
                                                    aria-label="Close modal"
                                                >
                                                    <XMarkIcon className="h-6 w-6" />{" "}
                                                </button>

                                                {/* Modal Content */}
                                                <div className="bg-white px-6 pt-6 pb-4">
                                                    <DialogTitle className="text-2xl font-bold text-gray-900">
                                                        {selectedProject.title}
                                                    </DialogTitle>
                                                    {/* Image */}
                                                    <div className="mt-4">
                                                        <div
                                                            className="relative w-full"
                                                            style={{
                                                                paddingTop:
                                                                    selectedProject.image.includes(
                                                                        "/main_projects/",
                                                                    )
                                                                        ? "100%" // 1:1 aspect ratio for main_projects
                                                                        : "56.25%", // 16:9 aspect ratio for other_projects
                                                            }}
                                                        >
                                                            <Image
                                                                src={selectedProject.image}
                                                                alt={selectedProject.title}
                                                                fill
                                                                className="object-cover rounded-lg"
                                                                draggable={false}
                                                                priority={true}
                                                                placeholder="blur"
                                                                blurDataURL={
                                                                    selectedProject.blurDataURL
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Description */}
                                                    <p className="mt-4 text-gray-700">
                                                        {selectedProject.detailedDescription}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div className="mt-4">
                                                        <h4 className="text-lg font-semibold text-gray-800">
                                                            Technologies Used:
                                                        </h4>
                                                        <ul className="mt-2 flex flex-wrap gap-2">
                                                            {selectedProject.technologies.map(
                                                                (tech) => (
                                                                    <li
                                                                        key={tech}
                                                                        className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 flex items-center space-x-1"
                                                                    >
                                                                        <span>{tech}</span>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="mt-6 flex space-x-3">
                                                        {selectedProject.liveUrl && (
                                                            <Link
                                                                href={selectedProject.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 transition duration-200"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faExternalLinkAlt}
                                                                    className="mr-2"
                                                                />
                                                                See Live
                                                            </Link>
                                                        )}
                                                        {selectedProject.sourceUrl && (
                                                            <Link
                                                                href={selectedProject.sourceUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-500 transition duration-200"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faCode}
                                                                    className="mr-2"
                                                                />
                                                                Source Code
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    )}
                </div>
            </div>
        </Suspense>
    );
}
