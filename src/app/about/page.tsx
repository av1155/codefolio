import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
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
                        Andrea Venti is a passionate{" "}
                        <span className="font-bold">Software Engineer</span> who thrives on crafting
                        efficient and elegant solutions to complex problems. Currently pursuing a{" "}
                        <span className="font-bold">B.S. in Computer Science </span>
                        with a minor in Mathematics at the{" "}
                        <span className="font-bold">University of Miami</span>, Andrea turns ideas
                        into reality through code, with a deep love for innovation and
                        problem-solving.
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
                                A consistent achiever, Andrea has earned distinctions such as{" "}
                                <span className="font-bold">Dean’s List</span> and{" "}
                                <span className="font-bold">Provost Honor Roll</span>, and secured{" "}
                                <span className="font-bold">2nd place</span> in the prestigious{" "}
                                <span className="font-bold">UHack Hackathon</span>.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-md"
                            data-aos="zoom-in"
                        >
                            <CodeBracketIcon className="h-12 w-12 text-white transform hover:scale-125 transition duration-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">Tech Stack</h3>
                            <p className="mt-4 text-base leading-7">
                                Proficient in languages like{" "}
                                <span className="font-bold">Python</span>,{" "}
                                <span className="font-bold">Java</span>,{" "}
                                <span className="font-bold">C/C++</span>,{" "}
                                <span className="font-bold">TypeScript</span>, among others. Andrea
                                is skilled in tools such as{" "}
                                <span className="font-bold">Docker</span>,{" "}
                                <span className="font-bold">Git</span>,{" "}
                                <span className="font-bold">React</span>,{" "}
                                <span className="font-bold">Next.js</span>, and{" "}
                                <span className="font-bold">Flask</span>. With experience in cloud
                                platforms like <span className="font-bold">Vercel</span> and{" "}
                                <span className="font-bold">Heroku</span>, Andrea delivers
                                high-quality, full-stack software solutions.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-md"
                            data-aos="zoom-in"
                        >
                            <LightBulbIcon className="h-12 w-12 text-white transform hover:scale-125 transition duration-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">Philosophy</h3>
                            <p className="mt-4 text-base leading-7">
                                Believing in the power of continuous learning and innovation, Andrea
                                strives to create software that is{" "}
                                <span className="font-bold">reliable</span>,{" "}
                                <span className="font-bold">scalable</span>, and{" "}
                                <span className="font-bold">user-friendly</span>. Whether building
                                web applications or exploring AI, each project is approached with a
                                commitment to quality and efficiency.
                            </p>
                        </div>
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
                        <a
                            href="/contact"
                            className="mt-6 inline-block rounded-md bg-white bg-opacity-80 px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-opacity-100 transform hover:scale-105 transition duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
