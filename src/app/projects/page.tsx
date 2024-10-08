"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

import { Project, projects } from "@/data/projectsData";
import AOSInitializer from "@/components/AOSInitializer";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<"All" | "Main" | "Other">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter((project) => {
        if (activeCategory === "All") return true;
        return project.category === activeCategory;
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
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 transform ${activeCategory === category
                                        ? "bg-white bg-opacity-80 text-indigo-700"
                                        : "bg-white bg-opacity-20 text-white hover:text-indigo-700"
                                    } hover:bg-opacity-100 hover:scale-105`}
                                onClick={() =>
                                    setActiveCategory(category as "All" | "Main" | "Other")
                                }
                                data-aos="fade-up"
                            >
                                {category === "All" ? "All" : `${category} Projects`}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group relative bg-white bg-opacity-20 border border-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-200 p-4 h-full flex flex-col hover:bg-white hover:bg-opacity-30 cursor-pointer"
                                data-aos="zoom-in"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Content Wrapper */}
                                <div className="flex-grow">
                                    {/* Image */}
                                    <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-90 transition duration-200">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw,
                             (max-width: 1024px) 50vw,
                             33vw"
                                            style={{ objectFit: "cover" }}
                                            className="rounded-lg"
                                            draggable={false}
                                            priority={index < 6}
                                            loading={index < 6 ? "eager" : "lazy"}
                                        />
                                    </div>
                                    {/* Title */}
                                    <h3 className="mt-6 text-lg font-bold text-white">
                                        {project.title}
                                    </h3>
                                    {/* Description */}
                                    <p className="mt-2 text-sm text-white">{project.description}</p>
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
                        ))}
                    </div>

                    {/* Modal for Detailed View */}
                    {selectedProject && (
                        <Transition appear show={!!selectedProject} as={Fragment}>
                            <Dialog
                                as="div"
                                className="relative z-50"
                                aria-labelledby="project-title"
                                aria-describedby="project-description"
                                onClose={() => setSelectedProject(null)}
                            >
                                {/* Background Overlay */}
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                                </Transition.Child>

                                {/* Modal Content */}
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300 transform"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200 transform"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                                                {/* Close Button */}
                                                <button
                                                    onClick={() => setSelectedProject(null)}
                                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1 hover:bg-gray-100"
                                                    aria-label="Close modal"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                {/* Modal Content */}
                                                <div className="bg-white px-6 pt-6 pb-4">
                                                    <Dialog.Title className="text-2xl font-bold text-gray-900">
                                                        {selectedProject.title}
                                                    </Dialog.Title>
                                                    {/* Image */}
                                                    <div className="mt-4">
                                                        <Image
                                                            src={selectedProject.image}
                                                            alt={selectedProject.title}
                                                            width={800}
                                                            height={600}
                                                            className="rounded-lg"
                                                            draggable={false}
                                                            priority={true}
                                                            loading="eager"
                                                        />
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
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    )}
                </div>
            </div>
        </>
    );
}
