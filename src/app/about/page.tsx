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
                        About Me
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        I&apos;m Andrea A. Venti Fuentes, a Computer Science student at the
                        University of Miami with a minor in Mathematics. Originally from Spain, I
                        have received numerous academic honors such as the Dean&apos;s List and
                        Provost Honor Roll, and I placed 2nd in the UHack Hackathon.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        I specialize in languages like Python, Java, C/C++, and JavaScript, with
                        experience in tools like Docker, Git, and frameworks like Flask and
                        TensorFlow. I’m equally comfortable on both front-end and back-end
                        technologies, and I’m excited about building robust software solutions.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        I’m always open to collaboration and looking forward to working on exciting
                        new projects. Let’s connect and explore how we can innovate together.
                    </p>
                </div>
            </div>
        </div>
    );
}
