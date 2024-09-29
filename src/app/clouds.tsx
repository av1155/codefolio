"use client";

import Image from "next/image";
import AOSInitializer from "@/components/AOSInitializer";

const technologies = [
    {
        name: "JavaScript/TypeScript",
        src: "/technologies/typescript.png",
        width: 644,
        height: 388,
    },
    {
        name: "React",
        src: "/technologies/react.png",
        width: 2048,
        height: 1822,
    },
    {
        name: "NextJS",
        src: "/technologies/nextjs.png",
        width: 2048,
        height: 1234,
    },
    {
        name: "Bootstrap",
        src: "/technologies/bootstrap.png",
        width: 512,
        height: 408,
    },
    {
        name: "Python",
        src: "/technologies/python.png",
        width: 644,
        height: 388,
    },
    {
        name: "Flask",
        src: "/technologies/flask.png",
        width: 72,
        height: 72,
    },
    {
        name: "PostgreSQL",
        src: "/technologies/postgresql.png",
        width: 373,
        height: 135,
    },
    {
        name: "Docker",
        src: "/technologies/docker.png",
        width: 662,
        height: 377,
    },
    {
        name: "Java",
        src: "/technologies/java.png",
        width: 151,
        height: 151,
    },
    {
        name: "C",
        src: "/technologies/c.png",
        width: 96,
        height: 96,
    },
    {
        name: "Git",
        src: "/technologies/git.png",
        width: 1024,
        height: 428,
    },
    {
        name: "Vercel",
        src: "/technologies/vercel.png",
        width: 3840,
        height: 2160,
    },
    {
        name: "Heroku",
        src: "/technologies/heroku.png",
        width: 1024,
        height: 1024,
    },
    {
        name: "Netlify",
        src: "/technologies/netlify.png",
        width: 512,
        height: 512,
    },
];

export default function Clouds() {
    // Duplicate the array for seamless looping
    const scrollingTechnologies = [...technologies, ...technologies];

    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden">
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-32 lg:pb-24">
                    <div className="relative w-full py-12 mt-auto lg:mt-12 md:py-20 lg:py-4">
                        <div
                            className="
                                flex 
                                space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-20 
                                animate-marquee-sm 
                                sm:animate-marquee-md 
                                lg:animate-marquee-lg
                            "
                            aria-label="Scrolling list of technologies"
                        >
                            {scrollingTechnologies.map((tech, index) => (
                                <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                                    <Image
                                        alt={tech.name}
                                        src={tech.src}
                                        width={tech.width}
                                        height={tech.height}
                                        className="h-9 sm:h-12 md:h-14 w-auto object-contain"
                                        draggable={false}
                                        loading="eager"
                                        priority={true}
                                        aria-label={`Logo of ${tech.name}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
