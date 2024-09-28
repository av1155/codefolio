import Clouds from "./clouds";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0">
                {/* Background gradient design */}
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

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-48 lg:py-56 text-center text-white">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white drop-shadow-lg">
                    Andrea A. Venti Fuentes
                </h1>

                <p className="mt-6 text-xl sm:text-2xl leading-8 text-gray-200">
                    B.S. in Computer Science & Minor in Mathematics @ University of Miami
                </p>
                <div className="mt-10 flex flex-col items-center sm:flex-row sm:justify-center gap-6">
                    <Link
                        href="https://github.com/av1155"
                        className="rounded-md bg-white px-5 py-3 text-base font-semibold text-indigo-600 hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg"
                    >
                        Explore GitHub
                    </Link>

                    <Link
                        href="/projects"
                        className="inline-flex items-center text-base font-semibold text-white hover:underline hover:text-gray-200 transition duration-300 ease-in-out"
                    >
                        View Projects <ArrowRightIcon className="w-5 h-5 ml-1" />
                    </Link>
                </div>
            </div>

            <div className="relative z-10">
                <Clouds />
                <SpeedInsights />
                <Analytics />
            </div>
        </div>
    );
}
