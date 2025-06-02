"use client";

import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { ArrowDownTrayIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function ResumePage() {
    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130">
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <BackgroundShape />
                </div>

                {/* Main Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
                    <h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl"
                        data-aos="fade-down"
                    >
                        Resume
                    </h1>

                    <p className="mt-4 text-lg leading-8 max-w-3xl mx-auto">
                        I&apos;m currently focused on{" "}
                        <span className="font-bold">Site Reliability Engineering</span> and{" "}
                        <span className="font-bold">DevOps</span> roles. Below is my tailored resume
                        for those fields. For teams hiring full-stack developers, my{" "}
                        <a
                            href="/swe-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold"
                        >
                            Software Engineering resume
                        </a>{" "}
                        is also available.
                    </p>

                    <div className="mt-8 flex justify-center space-x-4" data-aos="zoom-in">
                        <a
                            href="/sre-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-white bg-opacity-80 px-4 py-2 text-md font-semibold text-indigo-700 hover:bg-opacity-100 transform hover:scale-105 transition duration-300 flex items-center justify-center w-36"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                            Download
                        </a>
                        <button
                            className="rounded-md bg-white bg-opacity-80 px-4 py-2 text-md font-semibold text-indigo-700 hover:bg-opacity-100 transform hover:scale-105 transition duration-300 flex items-center justify-center w-36"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator
                                        .share({
                                            title: "Andrea Venti Fuentes - Resume",
                                            text: "Check out Andrea Venti Fuentes' SRE/DevOps resume. View or download it here.",
                                            url: window.location.href,
                                        })
                                        .then(() => console.log("Shared successfully!"))
                                        .catch((error) => console.error("Error sharing:", error));
                                } else {
                                    alert("Your browser does not support the Share feature.");
                                }
                            }}
                        >
                            <ShareIcon className="h-5 w-5 mr-2" />
                            Share
                        </button>
                    </div>

                    {/* Resume Embed */}
                    <div className="mt-8 sm:mt-2" data-aos="fade-up">
                        <div className="transform scale-100 sm:scale-95 transition-transform duration-300">
                            <iframe
                                src="/sre-resume.pdf#zoom=page-width&view=FitH"
                                className="w-full h-[80vh] sm:h-screen rounded-lg border-2 border-white"
                                title="SRE Resume"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
