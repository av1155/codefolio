// src/app/clouds.tsx
import Image from "next/image";

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
    // Add more technologies here
];

export default function Clouds() {
    // Duplicate the array for seamless looping
    const scrollingTechnologies = [...technologies, ...technologies];

    return (
        <div className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex space-x-20 animate-marquee"
                    // Apply initial transform to start from center
                    style={{ transform: "translateX(-50%)" }}
                >
                    {scrollingTechnologies.map((tech, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                alt={tech.name}
                                src={tech.src}
                                width={tech.width}
                                height={tech.height}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
