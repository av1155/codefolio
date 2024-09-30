"use client";

import Image from "next/image";
import AOSInitializer from "@/components/AOSInitializer";

import { logos } from "@/data/logosData";

export default function Clouds() {
    // Duplicate the array for seamless looping
    const scrollingTechnologies = [...logos, ...logos];

    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden">
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-32 lg:pb-24">
                    <div className="relative w-full py-12 mt-auto lg:mt-12 md:py-20 lg:py-4">
                        <div
                            className="
                                flex 
                                space-x-6 sm:space-x-10 md:space-x-12 lg:space-x-20 
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
                                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
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
