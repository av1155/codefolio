"use client";

import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { ArrowDownTrayIcon, ShareIcon } from "@heroicons/react/24/outline";
import type { MouseEvent } from "react";

const RESUME_PDF_PATH = "/sre-resume.pdf";
const RESUME_PAGE_PATH = "/resume";
const RESUME_FILE_NAME = "Andrea-Venti-Fuentes-Resume.pdf";
const RESUME_SHARE_TITLE = "Andrea Venti Fuentes - Resume";
const RESUME_SHARE_LINK_TEXT = "Resume and portfolio";

export default function ResumePageClient() {
    const handleDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const shouldDownload = window.confirm("Download resume PDF?");

        if (!shouldDownload) {
            event.preventDefault();
        }
    };

    const copyShareLink = async (shareLink: string) => {
        if (!navigator.clipboard?.writeText) {
            return;
        }

        await navigator.clipboard.writeText(shareLink);
    };

    const handleShare = async () => {
        const shareLink = new URL(RESUME_PAGE_PATH, window.location.origin).toString();

        if (!navigator.share) {
            await copyShareLink(shareLink);
            return;
        }

        try {
            const resumeUrl = new URL(RESUME_PDF_PATH, window.location.origin).toString();
            const response = await fetch(resumeUrl);

            if (response.ok) {
                const pdfBlob = await response.blob();
                const pdfFile = new File([pdfBlob], RESUME_FILE_NAME, {
                    type: "application/pdf",
                });

                if (navigator.canShare?.({ files: [pdfFile] })) {
                    await navigator.share({
                        title: RESUME_SHARE_TITLE,
                        files: [pdfFile],
                    });
                    return;
                }
            }

            await navigator.share({
                title: RESUME_SHARE_TITLE,
                text: RESUME_SHARE_LINK_TEXT,
                url: shareLink,
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                return;
            }

            await copyShareLink(shareLink);
        }
    };

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

                    <div
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                        data-aos="zoom-in"
                    >
                        <a
                            href={RESUME_PDF_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-white/80 px-4 py-2 text-base font-semibold text-indigo-700 hover:bg-white transform hover:scale-105 transition duration-300 flex items-center justify-center w-36"
                        >
                            View PDF
                        </a>
                        <a
                            href={RESUME_PDF_PATH}
                            download={RESUME_FILE_NAME}
                            onClick={handleDownloadClick}
                            className="rounded-md bg-white/80 px-4 py-2 text-base font-semibold text-indigo-700 hover:bg-white transform hover:scale-105 transition duration-300 flex items-center justify-center w-36"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                            Download
                        </a>
                        <button
                            type="button"
                            className="rounded-md bg-white/80 px-4 py-2 text-base font-semibold text-indigo-700 hover:bg-white transform hover:scale-105 transition duration-300 flex items-center justify-center w-36"
                            onClick={handleShare}
                        >
                            <ShareIcon className="h-5 w-5 mr-2" />
                            Share
                        </button>
                    </div>

                    <div className="mt-6 md:hidden" data-aos="fade-up">
                        <p className="rounded-lg border border-white/50 bg-black/15 px-4 py-3 text-sm text-white/90">
                            For the best viewing experience on phones, use View PDF. The in-page preview is
                            available on tablets and desktops.
                        </p>
                    </div>

                    {/* Resume Embed */}
                    <div className="mt-8 sm:mt-2 hidden md:block" data-aos="fade-up">
                        <div className="transform scale-100 sm:scale-95 transition-transform duration-300">
                            <iframe
                                src={`${RESUME_PDF_PATH}#zoom=page-width&view=FitH`}
                                className="w-full h-[80vh] sm:h-screen rounded-lg border-2 border-white"
                                title="Resume PDF"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
