import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { Metadata } from "next";
import { getPlaiceholder } from "plaiceholder";
import path from "path";

export const metadata: Metadata = {
    title: "About - Andrea Venti | Software & Platform Engineer",
    description:
        "Computer Science graduate from the University of Miami. Software & Platform Engineer with a focus on SRE, DevOps, Kubernetes, infrastructure automation, and full-stack development.",
    alternates: { canonical: "/about" },
};

interface ImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

export default async function AboutPage() {
    const images: ImageProps[] = [
        {
            src: "/about/snowboarding-colorado.jpeg",
            alt: "Andrea snowboarding on a scenic mountain slope in Colorado",
        },
        {
            src: "/about/university-of-miami.jpeg",
            alt: "Andrea posing with his dog in front of the University of Miami 'U' statue",
        },
        {
            src: "/about/shellhacks-2023-team.jpeg",
            alt: "Andrea with his hackathon team at ShellHacks 2023, sitting around a table with laptops",
        },
        {
            src: "/about/iPad+RaspberryPi5.jpeg",
            alt: "iPad running terminal session connected to a Raspberry Pi 5 on Andrea’s desk",
        },
        {
            src: "/about/homelab.jpeg",
            alt: "Andrea’s homelab setup with UniFi gear, Intel NUCs, Raspberry Pi, and a Synology NAS",
        },
        {
            src: "/about/dog-beach-walk.jpeg",
            alt: "Andrea walking his German Shepherd along the beach at sunset",
        },
        {
            src: "/about/boating-trip.jpeg",
            alt: "Andrea standing on the edge of a boat holding a rope, looking out at the water",
        },
        {
            src: "/about/horseback-riding.jpeg",
            alt: "Andrea riding a horse through a wooded trail with sun filtering through the trees",
        },
    ];

    // Generate blurDataURL for each image
    const imagesWithBlurData = await Promise.all(
        images.map(async (image) => {
            const { base64 } = await getPlaiceholder(path.join(process.cwd(), "public", image.src));
            return {
                ...image,
                blurDataURL: base64,
            };
        }),
    );

    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130">
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <BackgroundShape />
                </div>

                {/* Main Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
                    <h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl"
                        data-aos="fade-down"
                    >
                        Hi, I&apos;m Andrea Venti
                    </h1>
                    <p className="mt-6 text-lg leading-8" data-aos="fade-up">
                        I’m a Computer Science graduate from the{" "}
                        <span className="font-bold">University of Miami</span> with a passion for
                        building systems that are not just functional, but reliable, secure, and
                        maintainable. My background blends{" "}
                        <span className="font-bold">Software Engineering</span> fundamentals with a
                        growing focus on{" "}
                        <span className="font-bold">Site Reliability Engineering</span> and{" "}
                        <span className="font-bold">DevOps</span>.
                    </p>
                    <p className="mt-6 text-lg leading-8" data-aos="fade-up">
                        Whether I’m writing code, managing containerized deployments, or optimizing
                        my homelab’s high-availability setup, I love working at the intersection of
                        code, infrastructure, automation, and scalability. My projects span from
                        full-stack apps and microservices to self-hosted platforms that mirror
                        real-world production environments.
                    </p>

                    {/* Cards Section */}
                    <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
                        {/* Academic Excellence */}
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-md"
                            data-aos="zoom-in"
                        >
                            <AcademicCapIcon className="h-12 w-12 text-white transform hover:scale-125 transition duration-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Academic Excellence
                            </h3>
                            <p className="mt-4 text-base leading-7">
                                I’m proud to have been recognized with honors like the{" "}
                                <span className="font-bold">Dean’s List</span> and{" "}
                                <span className="font-bold">Provost Honor Roll</span> at the
                                University of Miami. I also earned{" "}
                                <span className="font-bold">2nd place</span> at{" "}
                                <span className="font-bold">UHack Hackathon</span> for building a
                                sustainability project.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-md"
                            data-aos="zoom-in"
                        >
                            <CodeBracketIcon className="h-12 w-12 text-white transform hover:scale-125 transition duration-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Engineering Toolkit
                            </h3>
                            <p className="mt-4 text-base leading-7">
                                I work fluently with <span className="font-bold">Python</span>,{" "}
                                <span className="font-bold">Go</span>,{" "}
                                <span className="font-bold">Java</span>,{" "}
                                <span className="font-bold">C</span>, and{" "}
                                <span className="font-bold">TypeScript</span>. I&apos;m experienced
                                with <span className="font-bold">Linux</span>,{" "}
                                <span className="font-bold">Docker</span>,{" "}
                                <span className="font-bold">AWS</span>, and{" "}
                                <span className="font-bold">GitHub Actions</span> for CI/CD.
                            </p>
                            <p className="mt-4 text-base leading-7">
                                I’ve deployed and monitored containerized systems using{" "}
                                <span className="font-bold">Uptime Kuma</span>,{" "}
                                <span className="font-bold">CloudWatch</span>, and{" "}
                                <span className="font-bold">Grafana</span>, and I’m learning{" "}
                                <span className="font-bold">Terraform</span> and{" "}
                                <span className="font-bold">Ansible</span> for infrastructure as
                                code.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-md"
                            data-aos="zoom-in"
                        >
                            <LightBulbIcon className="h-12 w-12 text-white transform hover:scale-125 transition duration-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Reliability Mindset
                            </h3>
                            <p className="mt-4 text-base leading-7">
                                I design systems to be <span className="font-bold">resilient</span>,{" "}
                                <span className="font-bold">highly available</span>,{" "}
                                <span className="font-bold">observable</span>, and{" "}
                                <span className="font-bold">automated</span>. In my homelab, I treat
                                every service like production; scripting{" "}
                                <span className="font-bold">backups</span>, managing{" "}
                                <span className="font-bold">TLS</span>, and building tools like my{" "}
                                <a
                                    href="https://github.com/av1155/rpi-usb-nas-restore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-bold"
                                >
                                    Raspberry Pi restore workflow
                                </a>{" "}
                                to streamline recovery and improve reliability.
                            </p>
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="mt-16" data-aos="fade-up">
                        <ImageCarousel images={imagesWithBlurData} />
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to Collaborate!
                        </h2>
                        <p className="mt-4 text-lg leading-8">
                            Always eager to connect with like-minded professionals and explore new
                            opportunities. Let’s work together to bring innovative ideas to life!
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 inline-block rounded-md bg-white bg-opacity-80 px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-opacity-100 transform hover:scale-105 transition duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
