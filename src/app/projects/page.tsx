"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AOSInitializer from "@/components/AOSInitializer";

interface Project {
    title: string;
    description: string;
    detailedDescription: string;
    image: string;
    liveUrl?: string;
    sourceUrl?: string;
    category: "Main" | "Other";
    technologies: string[];
}

const projects: Project[] = [
    // Main Projects
    {
        title: "FlaskKeyring",
        description: "A secure password manager using Flask, PostgreSQL, and Bootstrap.",
        detailedDescription:
            "FlaskKeyring is a fully-functional, full-stack web application that demonstrates my comprehensive skills in software development and a strong grasp of cybersecurity principles. This advanced password manager is built with a robust stack including Python, Flask, PostgreSQL, JavaScript, HTML, CSS, Bootstrap, jQuery, and AJAX, highlighting my ability to integrate multiple technologies for a cohesive solution. In FlaskKeyring's development, I utilized SQLite for local testing, ensuring robust quality before updates to the remote PostgreSQL database. The application features comprehensive user authentication, an intuitive UI/UX, and integration of Flask-Mail with Mailgun for custom domain email services.",
        image: "/main_projects/FlaskKeyring.png",
        liveUrl: "https://flaskkeyring.tech",
        sourceUrl: "https://github.com/av1155/FlaskKeyring",
        category: "Main",
        technologies: [
            "Python",
            "Flask",
            "PostgreSQL",
            "Bootstrap",
            "JavaScript",
            "HTML",
            "CSS",
            "jQuery",
            "AJAX",
        ],
    },
    {
        title: "IndexNet Engine",
        description:
            "A Java-based search engine simulation utilizing the PageRank algorithm and web crawling features.",
        detailedDescription:
            "IndexNet-Engine is a Java-based search engine simulator that focuses on replicating the web crawling and page ranking functionalities similar to Google's PageRank algorithm. This project showcases in-depth utilization of object-oriented programming to implement complex algorithms for web crawling, indexing, and page ranking. It demonstrates advanced algorithmic concepts, including the use of B-Trees for efficient data indexing and External Sorting techniques for managing large datasets that exceed memory limits.",
        image: "/main_projects/indexNet-engine.png",
        liveUrl: "https://github.com/av1155/IndexNet-Engine/blob/main/README.md",
        sourceUrl: "https://github.com/av1155/IndexNet-Engine/tree/main/src/main/java/edu/aav66",
        category: "Main",
        technologies: ["Java", "Algorithms", "Data Structures", "PageRank", "Web Crawling"],
    },
    {
        title: "The .dotfiles Project",
        description: "Unix Mastery & Automated Environment Setup: The .dotfiles Project.",
        detailedDescription:
            "My .dotfiles repository is a reflection of my deep dive into Unix and Bash scripting, tailored specifically for macOS development environments. The centerpiece, the mac_bootstrap.zsh script, simplifies the setup and maintenance of my developer environment. The script covers everything from basic configuration to complex setups, streamlining the process of setting up or maintaining a MacBook. It handles tasks like installing essential tools, creating symlinks, and customizing the macOS environment through a single command.",
        image: "/main_projects/Dotfiles+Bootstrap.png",
        sourceUrl: "https://gitfront.io/r/av1155/19cAs3DhXmSD/.dotfiles/",
        category: "Main",
        technologies: ["Bash", "Zsh", "Shell Scripting", "macOS", "Unix", "Homebrew", "Git"],
    },
    {
        title: "Raspberry Pi 5 Codepi Setup Guide",
        description:
            "Seamless Integration and Development Environment setup guide for Raspberry Pi 5.",
        detailedDescription:
            "This Raspberry Pi 5 Codepi Setup Guide provides a comprehensive guide for configuring your Raspberry Pi 5 to work seamlessly with an iPad Pro via USB-C Thunderbolt 4 and USB Ethernet connection. It covers SSH setup using Blink Shell, remote access through RealVNC Viewer, and setting up Code-Server for a portable development environment. This setup offers significant advantages for developers, including a stable, portable, and powerful development platform that maximizes productivity and flexibility.",
        image: "/main_projects/CodepiSetup.png",
        sourceUrl: "https://github.com/av1155/RaspberryPi5-FullSetup",
        category: "Main",
        technologies: [
            "Raspberry Pi",
            "SSH",
            "VNC",
            "Code-Server",
            "Docker",
            "Linux",
            "Blink Shell",
        ],
    },
    {
        title: "GPA Calculator Webapp",
        description:
            "Allows users to calculate their GPA easily. Streamlined Elegance in Academic Tracking.",
        detailedDescription:
            "The GPA Calculator web app is a straightforward, yet elegantly designed tool for students to manage their academic performance with ease. This application allows users to effortlessly add and remove courses, input grades and credit hours, and calculate both semester and cumulative GPAs. Uniquely, this project was developed without the use of external UI frameworks or tools, showcasing a deep understanding of raw web technologies.",
        image: "/main_projects/GPACalculatorWeb.png",
        liveUrl: "https://av1155.github.io/GPA-Calculator-Webapp/",
        sourceUrl: "https://github.com/av1155/GPA-Calculator-Webapp",
        category: "Main",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "PyPassManager CLI",
        description: "Mastering Password Security with Python and Fernet Encryption.",
        detailedDescription:
            "PyPassManager is a command-line interface program that is an advanced password manager combining Python, Fernet encryption, and the Colorama library. It delivers unbreakable 256-bit encryption, rapid key generation, and swift user authentication. The program is meticulously designed for safeguarding sensitive data, employing a robust file-based system for encrypted storage and integrating Pwinput for enhanced security.",
        image: "/main_projects/PyPassManager.png",
        sourceUrl: "https://github.com/av1155/PyPassManager",
        category: "Main",
        technologies: ["Python", "Cryptography", "Fernet", "CLI", "Encryption", "Colorama"],
    },
    {
        title: "Space Invaders Clone",
        description: "An Interactive Java Game Simulation of the classic Space Invaders game.",
        detailedDescription:
            "AlienInvaders is an action-packed game inspired by the classic Space Invaders, developed using Java Swing. This project showcases advanced game development techniques, including real-time rendering, collision detection, and comprehensive game state management, delivering a robust arcade experience. It introduces varied alien types with unique scoring impacts, adding depth to gameplay diversity.",
        image: "/main_projects/alienInvaders.png",
        liveUrl: "https://github.com/av1155/AlienInvaders/releases/tag/v1.0.0",
        sourceUrl: "https://github.com/av1155/AlienInvaders/tree/main/src/main/java/edu/aav66",
        category: "Main",
        technologies: ["Java", "Java Swing", "Game Development", "OOP"],
    },
    {
        title: "Mastermind Trilogy",
        description:
            "Java Mastery in AI, Adaptability, and Strategy in the classic Mastermind game.",
        detailedDescription:
            "The Mastermind Trilogy is an ensemble of three Java projects, reinventing the classic game of Mastermind. The first, MastermindAI, features an advanced AI opponent. The second, Mastermind with Progressive Difficulty, elevates the user experience by dynamically scaling the game's difficulty. The third, Mastermind with Dynamic Guess Generation, brings unpredictability with a strategy-based gameplay.",
        image: "/main_projects/MastermindAI.png",
        sourceUrl: "https://github.com/av1155/MastermindAI",
        category: "Main",
        technologies: ["Java", "Algorithms", "Game Development", "Artificial Intelligence"],
    },
    {
        title: "StockfolioHub",
        description:
            "Real-Time Trading at Your Fingertips. A dynamic, full-stack web application for stock trading.",
        detailedDescription:
            "StockfolioHub is a dynamic, full-stack web application designed to revolutionize the way users interact with the stock market. Built with Python and Flask and utilizing HTML, JavaScript, and CSS for a responsive front end. By integrating real-time data from the IEX API, StockfolioHub offers an accurate and up-to-date trading experience.",
        image: "/main_projects/StockfolioHub.png",
        liveUrl: "https://stockfoliohub-fc1d02d45c81.herokuapp.com/",
        sourceUrl: "https://github.com/av1155/Finance-WebApp",
        category: "Main",
        technologies: ["Python", "Flask", "IEX API", "SQLite", "Bootstrap", "JavaScript"],
    },
    {
        title: "PlanetPath",
        description: "Mapping Sustainable Routes with Geopy and Streamlit Integration.",
        detailedDescription:
            "At the UHack Hackathon, I championed environmental awareness and secured 2nd place by crafting PlanetPath, an interactive Streamlit web app. Leveraging the Geopy library for precise distance calculations, this innovative tool educates users about carbon emissions and empowers them to make eco-conscious transportation choices.",
        image: "/main_projects/PlanetPath.png",
        liveUrl:
            "https://a-projectspython-projectsplanetpathstreamlit-planetpath-v2swas.streamlit.app/",
        sourceUrl: "https://github.com/av1155/PlanetPath",
        category: "Main",
        technologies: ["Python", "Streamlit", "Geopy", "Environmental Awareness"],
    },
    {
        title: "Weather Alert Program",
        description: "Weather Alert Program with Twilio and API Integration.",
        detailedDescription:
            "This project is an impressive demonstration of my proficiency in Python programming and API integration. I have created a Weather Alert Program that provides real-time weather updates for any location through OpenWeatherMap API. To make it more convenient for users, I have also integrated Twilio, a messaging API, that sends prompt SMS weather alerts.",
        image: "/main_projects/WeatherAlertService.png",
        sourceUrl: "https://github.com/av1155/Weather-Alert-Service",
        category: "Main",
        technologies: ["Python", "Twilio API", "OpenWeatherMap API", "SMS Integration"],
    },

    // Other Projects
    {
        title: "FlaskKeyring iOS App",
        description: "WebKit Port for iOS.",
        detailedDescription:
            "This project is a WebKit port of the FlaskKeyring application for iOS devices. It allows users to access FlaskKeyring with a native app experience on iOS. This showcases my ability to adapt web applications into mobile platforms.",
        image: "/other_projects/FlaskKeyringIOS.png",
        sourceUrl: "https://github.com/av1155/FlaskKeyringiOSApp",
        category: "Other",
        technologies: ["iOS", "WebKit", "Swift", "Xcode"],
    },
    {
        title: "Mastermind with Dynamic Guess Generation",
        description: "Mastermind Game with Computer Algorithm for Guess Adaptation.",
        detailedDescription:
            "An extension of the classic Mastermind game implemented in Java, featuring a computer algorithm that adapts its guesses based on the player's input. This project demonstrates my skills in algorithm development and adaptive game mechanics.",
        image: "/other_projects/MastermindDynamicGuess.png",
        sourceUrl: "https://gist.github.com/av1155/7fe25750ab291e56f59ae9b056cdc733",
        category: "Other",
        technologies: ["Java", "Algorithms", "Game Development"],
    },
    {
        title: "Python Learning Resources",
        description: "Webapp with Resources for Learning Python.",
        detailedDescription:
            "A web application that compiles various resources for learning Python programming. It includes tutorials, exercises, and project ideas to help beginners and intermediate learners enhance their Python skills.",
        image: "/other_projects/PythonLearningResources.png",
        sourceUrl: "https://github.com/av1155/Python-Learning-Resources",
        category: "Other",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Projectile Motion Calculator",
        description: "Java Application for Calculating Projectile Motion Parameters.",
        detailedDescription:
            "A Java application that calculates various parameters of projectile motion, such as range, maximum height, and time of flight. It applies physics formulas and allows users to input initial conditions to compute results.",
        image: "/other_projects/ProjectileMotionCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/ProjectileMotionCalculator",
        category: "Other",
        technologies: ["Java", "Physics", "Math Calculations"],
    },
    {
        title: "Bakery Shop Simulator",
        description: "Java Program Simulating a Bakery Order System.",
        detailedDescription:
            "A Java program that simulates a bakery shop's ordering system. Users can select from various baked goods, customize orders, and receive a summary with pricing. This project demonstrates object-oriented programming and user input handling.",
        image: "/other_projects/BakeryShopSimulator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Bakery%20Shop",
        category: "Other",
        technologies: ["Java", "OOP", "Console Application"],
    },
    {
        title: "My Bash Scripts Repository",
        description: "Collection of Useful Bash Scripts.",
        detailedDescription:
            "This repository contains a collection of Bash scripts that automate various tasks, improving efficiency and productivity. The scripts cover tasks like system maintenance, file management, and automation of routine operations.",
        image: "/other_projects/BashScripts.png",
        sourceUrl: "https://github.com/av1155/scripts",
        category: "Other",
        technologies: ["Bash", "Shell Scripting", "Automation", "Unix"],
    },
    {
        title: "AstroNvim User Configuration",
        description: "Custom Configuration for AstroNvim with Preferred Plugins and Mappings.",
        detailedDescription:
            "A custom configuration for AstroNvim, a Neovim configuration framework. This project includes preferred plugins, key mappings, and settings to enhance development productivity in Neovim.",
        image: "/other_projects/NeovimConfiguration.png",
        sourceUrl: "https://github.com/av1155/astronvim_config",
        category: "Other",
        technologies: ["Neovim", "Lua", "Vimscript", "Text Editors"],
    },
    {
        title: "CodeHub",
        description: "Central Hub for Smaller Projects.",
        detailedDescription:
            "CodeHub is a repository that serves as a central hub for various smaller projects and code snippets. It includes experimental code, utility functions, and practice exercises in different programming languages.",
        image: "/other_projects/CodeHub.png",
        sourceUrl: "https://github.com/av1155/CodeHub",
        category: "Other",
        technologies: ["Various Languages", "Practice Projects"],
    },
    {
        title: "PyFun",
        description:
            "Python Program with Lottery, Pig Latin Translator, and Rock-Paper-Scissors Game.",
        detailedDescription:
            "PyFun is a collection of fun Python programs including a lottery simulator, a Pig Latin translator, and a Rock-Paper-Scissors game. It showcases fundamental Python programming concepts and user interaction.",
        image: "/other_projects/PyFun.png",
        sourceUrl: "https://github.com/av1155/PyFun",
        category: "Other",
        technologies: ["Python", "CLI", "Game Development"],
    },
    {
        title: "String Edit",
        description: "Java Program for String Manipulation.",
        detailedDescription:
            "A Java program that performs various string manipulation tasks such as reversing strings, changing case, and finding substrings. It demonstrates proficiency in string handling and manipulation in Java.",
        image: "/other_projects/StringEdit.png",
        sourceUrl: "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/StringEdit",
        category: "Other",
        technologies: ["Java", "String Manipulation"],
    },
    {
        title: "Volume Comparison",
        description: "Java Tool for Comparing Volumes of 3D Shapes.",
        detailedDescription:
            "A Java application that calculates and compares the volumes of different 3D shapes like spheres, cylinders, and cubes. It allows users to input dimensions and outputs the computed volumes.",
        image: "/other_projects/VolumeComparison.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/VolumeComparison",
        category: "Other",
        technologies: ["Java", "Math Calculations"],
    },
    {
        title: "Gravity Calculator",
        description: "Java Program for Calculating Speed and Distance of Falling Objects.",
        detailedDescription:
            "A Java program that calculates the speed and distance of an object in free fall under gravity. It applies physics formulas to compute the results based on time and initial conditions.",
        image: "/other_projects/GravityCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Gravity%20Calculator",
        category: "Other",
        technologies: ["Java", "Physics", "Math Calculations"],
    },
    {
        title: "Linear Equation Calculator",
        description: "Java Program for Solving Linear Equations.",
        detailedDescription:
            "A Java application that solves linear equations in one variable. Users can input coefficients and constants, and the program computes the solution.",
        image: "/other_projects/LinearEquationCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Linear%20Equation%20Calculator",
        category: "Other",
        technologies: ["Java", "Math Calculations"],
    },
    {
        title: "GPA Calculator (CLI)",
        description: "Command-Line Tool for Calculating GPA.",
        detailedDescription:
            "A command-line tool developed in Python for calculating GPA. Users can input course grades and credit hours, and the program computes the GPA.",
        image: "/other_projects/GPACalculatorCLI.png",
        sourceUrl: "https://github.com/av1155/GPA-Calculator",
        category: "Other",
        technologies: ["Python", "CLI"],
    },
    {
        title: "Mastermind with Progressive Difficulty",
        description: "Java-based Mastermind game with progressive difficulty.",
        detailedDescription:
            "An implementation of the Mastermind game in Java, featuring progressive difficulty levels. As the player advances, the game becomes more challenging, testing the player's logic and deduction skills.",
        image: "/other_projects/MastermindProgressiveDifficulty.png",
        sourceUrl: "https://github.com/av1155/Mastermind-Game",
        category: "Other",
        technologies: ["Java", "Game Development", "Algorithms"],
    },
    {
        title: "Snake Game in Java",
        description: "Classic snake game implemented in Java using Java Swing.",
        detailedDescription:
            "A classic snake game developed in Java using Java Swing for the GUI. The game features smooth controls, score tracking, and increasing difficulty as the snake grows.",
        image: "/other_projects/SnakeGame.png",
        sourceUrl: "https://github.com/av1155/SnakeGame/tree/main",
        category: "Other",
        technologies: ["Java", "Java Swing", "Game Development"],
    },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<"All" | "Main" | "Other">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter((project) => {
        if (activeCategory === "All") return true;
        return project.category === activeCategory;
    });

    return (
        <>
            <AOSInitializer />
            <div
                id="projects"
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130 animate-gradient-move py-24 sm:py-32"
            >
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
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

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center text-white" data-aos="fade-down">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h2>
                        <p className="mt-6 text-lg leading-8">
                            A collection of some of my favorite and most challenging projects.
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="mt-10 flex justify-center space-x-4">
                        {["All", "Main", "Other"].map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 transform ${
                                    activeCategory === category
                                        ? "bg-white bg-opacity-80 text-indigo-700"
                                        : "bg-white bg-opacity-20 text-white hover:text-indigo-700"
                                } hover:bg-opacity-100 hover:scale-105`}
                                onClick={() =>
                                    setActiveCategory(category as "All" | "Main" | "Other")
                                }
                                data-aos="fade-up"
                            >
                                {category === "All" ? "All" : `${category} Projects`}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 ">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.title}
                                className="group relative bg-white bg-opacity-20 border border-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-200 p-4 h-full flex flex-col hover:bg-white hover:bg-opacity-30 cursor-pointer "
                                data-aos="zoom-in"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Content Wrapper */}
                                <div className="flex-grow">
                                    {/* Image */}
                                    <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-90 transition duration-200 ">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw,
                             (max-width: 1024px) 50vw,
                             33vw"
                                            style={{ objectFit: "cover" }}
                                            className="rounded-lg"
                                            draggable={false}
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h3 className="mt-6 text-lg font-bold text-white">
                                        {project.title}
                                    </h3>
                                    {/* Description */}
                                    <p className="mt-2 text-sm text-white">{project.description}</p>
                                </div>
                                {/* Buttons */}
                                <div
                                    className="mt-auto flex space-x-3 pt-4"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white bg-opacity-80 hover:bg-opacity-100 transform hover:scale-105 transition duration-200"
                                        >
                                            See Live
                                        </Link>
                                    )}
                                    {project.sourceUrl && (
                                        <Link
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white bg-opacity-80 hover:bg-opacity-100 transform hover:scale-105 transition duration-200"
                                        >
                                            Source Code
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal for Detailed View */}
                    {selectedProject && (
                        <Transition appear show={!!selectedProject} as={Fragment}>
                            <Dialog
                                as="div"
                                className="relative z-50"
                                aria-labelledby="project-title"
                                aria-describedby="project-description"
                                onClose={() => setSelectedProject(null)}
                            >
                                {/* Background Overlay */}
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                                </Transition.Child>

                                {/* Modal Content */}
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300 transform"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200 transform"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                                                {/* Close Button */}
                                                <button
                                                    onClick={() => setSelectedProject(null)}
                                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1 hover:bg-gray-100"
                                                    aria-label="Close modal"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                {/* Modal Content */}
                                                <div className="bg-white px-6 pt-6 pb-4">
                                                    <Dialog.Title className="text-2xl font-bold text-gray-900">
                                                        {selectedProject.title}
                                                    </Dialog.Title>
                                                    {/* Image */}
                                                    <div className="mt-4">
                                                        <Image
                                                            src={selectedProject.image}
                                                            alt={selectedProject.title}
                                                            width={800}
                                                            height={600}
                                                            className="rounded-lg"
                                                            draggable={false}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    {/* Description */}
                                                    <p className="mt-4 text-gray-700">
                                                        {selectedProject.detailedDescription}
                                                    </p>
                                                    {/* Technologies */}
                                                    <div className="mt-4">
                                                        <h4 className="text-lg font-semibold text-gray-800">
                                                            Technologies Used:
                                                        </h4>
                                                        <ul className="mt-2 flex flex-wrap gap-2">
                                                            {selectedProject.technologies.map(
                                                                (tech) => (
                                                                    <li
                                                                        key={tech}
                                                                        className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                                                                    >
                                                                        {tech}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                    {/* Buttons */}
                                                    <div className="mt-6 flex space-x-3">
                                                        {selectedProject.liveUrl && (
                                                            <Link
                                                                href={selectedProject.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 transition duration-200"
                                                            >
                                                                See Live
                                                            </Link>
                                                        )}
                                                        {selectedProject.sourceUrl && (
                                                            <Link
                                                                href={selectedProject.sourceUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-500 transition duration-200"
                                                            >
                                                                Source Code
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    )}
                </div>
            </div>
        </>
    );
}
