import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <div className="relative bg-white py-24 sm:py-32">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Hi, I&apos;m Andrea Venti Fuentes
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A passionate <span className="font-bold">Software Engineer</span> with a
                        keen interest in crafting efficient and elegant solutions to complex
                        problems. I’m currently pursuing my{" "}
                        <span className="font-bold">B.S. in Computer Science</span>
                        with a minor in Mathematics at the{" "}
                        <span className="font-bold">University of Miami</span>, and I love turning
                        ideas into reality through code.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
                    {/* Academic Excellence */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                        <AcademicCapIcon className="h-12 w-12 text-indigo-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            Academic Excellence
                        </h3>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Proud recipient of numerous honors like the{" "}
                            <span className="font-bold">Dean’s List</span> and{" "}
                            <span className="font-bold">Provost Honor Roll</span>. My hard work also
                            led me to secure <span className="font-bold">2nd place</span> in the
                            prestigious <span className="font-bold">UHack Hackathon</span>.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                        <CodeBracketIcon className="h-12 w-12 text-indigo-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Tech Stack</h3>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Skilled in{" "}
                            <span className="font-bold">Python, Java, C/C++, JavaScript</span>, and
                            more. Experienced with tools like{" "}
                            <span className="font-bold">Docker</span>,{" "}
                            <span className="font-bold">Git</span>, and frameworks like{" "}
                            <span className="font-bold">Flask</span> and{" "}
                            <span className="font-bold">TensorFlow</span>. My versatile skills
                            enable me to work across the full stack, creating efficient software
                            solutions.
                        </p>
                    </div>

                    {/* My Philosophy */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                        <LightBulbIcon className="h-12 w-12 text-indigo-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">My Philosophy</h3>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            I believe in constant learning and innovation. Whether I’m building web
                            apps, delving into AI projects, or optimizing code, I aim to create
                            software that is <span className="font-bold">reliable</span>,{" "}
                            <span className="font-bold">scalable</span>, and{" "}
                            <span className="font-bold">user-friendly</span>.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Let&apos;s Collaborate!
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        I&apos;m always excited to connect with like-minded individuals and explore
                        new opportunities. Let&apos;s bring your ideas to life!
                    </p>
                    <a
                        href="/contact"
                        className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
