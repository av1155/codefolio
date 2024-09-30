"use client";

import React from "react";
import AOSInitializer from "@/components/AOSInitializer";

export default function ResumePage() {
    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130">
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

                {/* Main Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
                    <h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl"
                        data-aos="fade-down"
                    >
                        Resume
                    </h1>

                    <div className="mt-12 flex justify-center" data-aos="zoom-in">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-md bg-white bg-opacity-80 px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-opacity-100 transform hover:scale-105 transition duration-300"
                        >
                            Download
                        </a>
                    </div>

                    <div className="mt-8" data-aos="fade-up">
                        <div className="transform scale-95 sm:scale-90 transition-transform duration-300">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-screen rounded-lg border-2 border-white"
                                title="Resume PDF"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
