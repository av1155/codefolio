"use client";

import Clouds from "@/app/clouds";
import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130">
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <BackgroundShape />
                </div>

                {/* Hero Section */}
                <div className="relative z-10 mx-auto pt-32 pb-12 sm:pt-40 sm:pb-20 lg:pt-36 lg:pb-20 px-6 text-center text-white">
                    <h1
                        className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white drop-shadow-lg"
                        data-aos="fade-down"
                    >
                        Andrea A. Venti Fuentes
                    </h1>
                    <p
                        className="mt-6 text-xl sm:text-2xl leading-8 text-gray-200"
                        data-aos="zoom-in"
                    >
                        B.S. in Computer Science & Minor in Mathematics @ University of Miami
                    </p>

                    <div
                        className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center gap-6"
                        data-aos="fade-up"
                    >
                        <Link
                            href="https://github.com/av1155"
                            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-indigo-600 hover:bg-gray-200 ease-in-out shadow-lg hover:bg-opacity-100 transform hover:scale-105 transition duration-300 inline-flex items-center"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />{" "}
                            {/* GitHub icon */}
                            Explore GitHub
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-base font-semibold text-white hover:underline hover:text-gray-200 ease-in-out hover:bg-opacity-100 transform hover:scale-105 transition duration-300"
                        >
                            View Projects <ArrowRightIcon className="w-5 h-5 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Clouds Section*/}
                <div className="relative z-10 mt-0 sm:mt-4 lg:mt-24" data-aos="fade-up">
                    <Clouds />
                </div>
            </div>
        </>
    );
}
