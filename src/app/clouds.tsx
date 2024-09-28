"use client";

import Image from "next/image";
import AOSInitializer from "@/components/AOSInitializer";

const technologies = [
    {
        name: "Python",
        src: "/technologies/python.png",
        width: 2048,
        height: 1234,
    },
    {
        name: "React",
        src: "/technologies/react.png",
        width: 1481,
        height: 512,
    },
    {
        name: "NextJS",
        src: "/technologies/nextjs.png",
        width: 2048,
        height: 1234,
    },
    {
        name: "Docker",
        src: "/technologies/docker.png",
        width: 1280,
        height: 361,
    },
    {
        name: "PostgreSQL",
        src: "/technologies/postgresql.png",
        width: 373,
        height: 135,
    },
];

export default function Clouds() {
    // Duplicate the array for seamless looping
    const scrollingTechnologies = [...technologies, ...technologies];

    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden">
                {/* Main Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                    {/* Scrolling Logos */}
                    <div className="mt-16 relative w-full overflow-hidden">
                        <div
                            className="flex space-x-20 animate-marquee"
                            // Apply initial transform to start from center
                            style={{ transform: "translateX(-50%)" }}
                            data-aos="zoom-in"
                        >
                            {scrollingTechnologies.map((tech, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <Image
                                        alt={tech.name}
                                        src={tech.src}
                                        width={tech.width}
                                        height={tech.height}
                                        className="h-16 w-auto object-contain"
                                        draggable={false}
                                        loading="eager"
                                        priority={true}
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
