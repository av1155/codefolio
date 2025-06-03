import { Project } from "@/data/projectsData";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface ProjectModalProps {
    selectedProject: Project | null;
    closeProjectModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, closeProjectModal }) => {
    if (!selectedProject) return null;

    return (
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
                                {/* Title and Close Button */}
                                <div className="flex justify-between items-start px-6 pt-6 pb-2">
                                    <DialogTitle className="text-2xl font-bold text-gray-900 flex-grow">
                                        {selectedProject.title}
                                    </DialogTitle>
                                    <button
                                        onClick={closeProjectModal}
                                        className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Close modal"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Modal Body Content */}
                                <div className="bg-white px-6 pb-4">
                                    {/* Image */}
                                    <div
                                        className="relative w-full mt-2"
                                        style={{ aspectRatio: "1100 / 629" }}
                                    >
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill={true}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                            style={{ objectFit: "cover" }}
                                            className="rounded-lg"
                                            draggable={false}
                                            priority={true}
                                            loading="eager"
                                            placeholder="blur"
                                            blurDataURL={selectedProject.blurDataURL}
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="mt-4 text-gray-700 space-y-4">
                                        {selectedProject.detailedDescription
                                            .split("\n\n")
                                            .map((para, idx) => (
                                                <p key={idx}>{para}</p>
                                            ))}
                                    </div>

                                    {/* Technologies */}
                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            Technologies Used:
                                        </h4>
                                        <ul className="mt-2 flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
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
                                                <FontAwesomeIcon icon={faCode} className="mr-2" />
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
    );
};

export default ProjectModal;
