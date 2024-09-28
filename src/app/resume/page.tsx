import React from "react";

export default function ResumePage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        My Resume
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Feel free to download or view my resume below.
                    </p>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="mt-12">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-screen"
                        title="Resume PDF"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
