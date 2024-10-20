export interface Project {
    title: string;
    slug: string;
    description: string;
    detailedDescription: string;
    image: string;
    liveUrl?: string;
    sourceUrl?: string;
    category: "Projects" | "Programs";
    technologies: string[];
    languages: string[];
    blurDataURL?: string;
}

export const projects: Project[] = [
    // Main Projects
    {
        title: "FlaskKeyring",
        slug: "flaskkeyring",
        description: "A secure password manager built with Flask, PostgreSQL, and Bootstrap.",
        detailedDescription:
            "FlaskKeyring is a fully-functional, full-stack web application demonstrating my expertise in software development and cybersecurity principles. This password manager is built with a robust stack including Python, Flask, PostgreSQL, JavaScript, HTML, CSS, Bootstrap, jQuery, and AJAX. I utilized SQLite for local testing before updating the remote PostgreSQL database, ensuring robust quality control. FlaskKeyring features secure user authentication, an intuitive UI/UX, and Flask-Mail integration with Mailgun for custom domain email services. Features such as password reset for forgotten password and password changes are implemented using a combination of PostgreSQL, Flask-Mail, and Mailgun.",
        image: "/projects/FlaskKeyring.png",
        liveUrl: "https://flaskkeyring.tech",
        sourceUrl: "https://github.com/av1155/FlaskKeyring",
        category: "Projects",
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
        languages: ["Python", "JavaScript"],
    },
    {
        title: "IndexNet Engine",
        slug: "indexnext-engine",
        description:
            "A Java-based search engine simulation utilizing the PageRank algorithm and web crawling.",
        detailedDescription:
            "IndexNet Engine is a Java-based search engine simulator replicating web crawling and page ranking functionalities similar to Google's PageRank algorithm. This project demonstrates object-oriented programming and advanced algorithms, such as B-Trees for efficient data indexing and external sorting techniques for managing large datasets that exceed memory limits.",
        image: "/projects/indexNet-engine.png",
        liveUrl: "https://github.com/av1155/IndexNet-Engine/blob/main/README.md",
        sourceUrl: "https://github.com/av1155/IndexNet-Engine/tree/main/src/main/java/edu/aav66",
        category: "Projects",
        technologies: ["Java", "Algorithms", "Data Structures", "PageRank", "Web Crawling"],
        languages: ["Java"],
    },
    {
        title: "Portfolio Website",
        slug: "portfolio-website",
        description:
            "A personal portfolio website showcasing projects, skills, and software engineering experience.",
        detailedDescription:
            "A Next.js-based portfolio website featuring responsive design, project showcases, an about page, resume, and a contact form. The website is powered by AOS for animations, TypeScript for functionality, Tailwind CSS for styling, and Headless UI for project page modals. It is hosted on Vercel, utilizing modern build tools like PostCSS and pnpm for efficient development workflows.",
        image: "/projects/PortfolioWebsite.png",
        liveUrl: "https://www.andrea-venti.com",
        sourceUrl: "https://github.com/av1155/codefolio",
        category: "Projects",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Formspree"],
        languages: ["TypeScript", "JavaScript"],
    },
    {
        title: "The .dotfiles Project",
        slug: "dotfiles-project",
        description: "Cross-platform Unix automation and environment setup mastery.",
        detailedDescription:
            "The .dotfiles repository is a cross-platform solution automating development environment setup on macOS, Arch Linux, WSL, and Debian-based systems. It includes a dynamic .zshrc and .zprofile that configure environments based on the OS and architecture of the device. The repository also features a powerful macOS bootstrap script for installing essential tools, managing Tmux sessions, configuring Neovim, handling Conda environments, and setting up shell plugins. This project ensures consistency and efficiency across platforms, from MacBooks to Raspberry Pis.",
        image: "/projects/Dotfiles+Bootstrap.png",
        sourceUrl: "https://github.com/av1155/.dotfiles",
        category: "Projects",
        technologies: [
            "Git",
            "Bash",
            "Zsh",
            "Shell Scripting",
            "macOS",
            "Arch Linux",
            "Debian Linux",
            "WSL",
            "Homebrew",
            "Neovim",
            "Miniforge",
            "Tmux",
        ],
        languages: ["Bash"],
    },
    {
        title: "Raspberry Pi 5 Codepi Setup Guide",
        slug: "raspberrypi5-setup",
        description:
            "A comprehensive guide for setting up a Raspberry Pi 5 as a portable development environment.",
        detailedDescription:
            "This guide provides step-by-step instructions for configuring a Raspberry Pi 5 to work seamlessly with an iPad Pro via USB-C Thunderbolt 4 and USB Ethernet. It covers SSH setup with Blink Shell, remote access through RealVNC Viewer, and setting up Code-Server and Neovim for a portable development environment. This setup offers developers a stable, portable, and powerful platform that enhances productivity and flexibility.",
        image: "/projects/CodepiSetup.png",
        sourceUrl: "https://github.com/av1155/RaspberryPi5-FullSetup",
        category: "Projects",
        technologies: [
            "Raspberry Pi",
            "Linux",
            "Debian",
            "SSH",
            "VNC",
            "Code-Server",
            "Docker",
            "Blink Shell",
        ],
        languages: ["Bash"],
    },
    {
        title: "Empirical Evaluation of Classic Sorting Algorithms",
        slug: "evaluation-of-sorting-algorithms",
        description:
            "An empirical study of Quick Sort, Merge Sort, and Heap Sort with memory profiling.",
        detailedDescription:
            "This project benchmarks Quick Sort, Merge Sort, and Heap Sort algorithms, evaluating their performance across different dataset sizes (10,000 to 800,000 elements). The analysis includes comparisons, execution time, and memory usage, with results presented through detailed comparison tables and graphs. The study also compares algorithm performance on non-decreasing and non-increasing input orders, providing insights into real-world efficiency.",
        image: "/projects/SortingAlgorithmEvaluation.png",
        sourceUrl: "https://github.com/av1155/sorting-algorithm-performance-analysis",
        category: "Projects",
        technologies: [
            "Python",
            "Sorting Algorithms",
            "Matplotlib",
            "NumPy",
            "Pandas",
            "Memory Profiling",
        ],
        languages: ["Python"],
    },
    {
        title: "Space Invaders Clone",
        slug: "space-invaders",
        description:
            "An interactive Java game simulation of the classic Space Invaders, featuring real-time rendering and dynamic gameplay.",
        detailedDescription:
            "This Java Swing project recreates Space Invaders with modern enhancements, featuring real-time rendering, advanced collision detection, and comprehensive game state management. The game architecture uses object-oriented principles and efficient data structures to manage game elements. Randomized behaviors enhance replayability, while bounding box algorithms ensure accurate collision detection at high frame rates. Event-driven timers and state control overcome synchronization challenges between animations and game logic. The project showcases understanding of game loops, graphics manipulation, and memory optimization, delivering a nostalgic yet challenging experience.",
        image: "/projects/spaceInvaders.png",
        liveUrl: "https://github.com/av1155/SpaceInvaders/releases/tag/v1.0.0",
        sourceUrl: "https://github.com/av1155/SpaceInvaders/tree/main/src/main/java/edu/aav66",
        category: "Projects",
        technologies: [
            "Java",
            "Java Swing",
            "Data Structures",
            "Collision Detection",
            "OOP",
            "Game Development",
        ],
        languages: ["Java"],
    },
    {
        title: "Snake Game in Java",
        slug: "snake-game",
        description:
            "A classic snake game implemented in Java using Java Swing and advanced data structures.",
        detailedDescription:
            "This classic Snake game is developed in Java using Java Swing for the graphical interface. The game leverages data structures such as arrays to track the snake's body parts and a deque (double-ended queue) to manage the direction of movement. Each move involves shifting elements in the array to simulate the snake's body following its head. Randomized algorithms are used to generate the position of the apple on the grid, while collision detection algorithms ensure the game ends when the snake collides with the walls or its own body. The game features score tracking, increasing difficulty as the snake grows, and smooth, responsive controls.",
        image: "/projects/SnakeGame.png",
        sourceUrl: "https://github.com/av1155/SnakeGame/tree/main",
        category: "Projects",
        technologies: [
            "Java",
            "Java Swing",
            "Data Structures",
            "Collision Detection",
            "OOP",
            "Game Development",
        ],
        languages: ["Java"],
    },
    {
        title: "GPA Calculator Webapp",
        slug: "gpa-calculator-website",
        description: "A simple, elegant web app for calculating semester and cumulative GPA.",
        detailedDescription:
            "The GPA Calculator web app allows students to manage their academic performance easily. Users can add and remove courses, input grades and credit hours, and calculate both semester and cumulative GPAs. Developed without external UI frameworks, this project highlights expertise in raw JavaScript, HTML and CSS web technologies.",
        image: "/projects/GPACalculatorWeb.png",
        liveUrl: "https://av1155.github.io/GPA-Calculator-Webapp/",
        sourceUrl: "https://github.com/av1155/GPA-Calculator-Webapp",
        category: "Projects",
        technologies: ["JavaScript", "HTML", "CSS"],
        languages: ["JavaScript"],
    },
    {
        title: "PyPassManager CLI",
        slug: "pypassmanager",
        description: "A CLI-based password manager built with Python and Fernet encryption.",
        detailedDescription:
            "PyPassManager is a command-line password manager that combines Python with Fernet encryption and the Colorama library. It offers secure 256-bit encryption, rapid key generation, and fast user authentication. The tool uses a file-based system for storing encrypted data and enhances security with Pwinput for password input.",
        image: "/projects/PyPassManager.png",
        sourceUrl: "https://github.com/av1155/PyPassManager",
        category: "Projects",
        technologies: ["Python", "Cryptography", "Fernet", "CLI", "Encryption", "Colorama"],
        languages: ["Python"],
    },
    {
        title: "Mastermind Trilogy",
        slug: "mastermind",
        description:
            "A Java-based Mastermind game trilogy featuring AI, progressive difficulty, and dynamic guesses.",
        detailedDescription:
            "The Mastermind Trilogy reimagines the classic game of Mastermind through three projects. MastermindAI features an advanced AI opponent, Mastermind with Progressive Difficulty introduces scaling difficulty, and Mastermind with Dynamic Guess Generation adds unpredictability through strategy-based gameplay.",
        image: "/projects/MastermindAI.png",
        sourceUrl: "https://github.com/av1155/MastermindAI",
        category: "Projects",
        technologies: ["Java", "Algorithms", "Game Development", "Artificial Intelligence"],
        languages: ["Java"],
    },
    {
        title: "StockfolioHub",
        slug: "stockfoliohub",
        description:
            "A real-time stock trading application built with Flask, Python, and the IEX API.",
        detailedDescription:
            "StockfolioHub is a dynamic full-stack web application that revolutionizes the way users interact with the stock market. Built with Flask and Python, and integrating real-time data from the IEX API, StockfolioHub offers a responsive and up-to-date trading experience.",
        image: "/projects/StockfolioHub.png",
        liveUrl: "https://stockfoliohub-fc1d02d45c81.herokuapp.com/",
        sourceUrl: "https://github.com/av1155/Finance-WebApp",
        category: "Projects",
        technologies: ["Python", "Flask", "IEX API", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        languages: ["Python", "JavaScript"],
    },
    {
        title: "PlanetPath",
        slug: "planetpath",
        description: "Mapping sustainable routes with Streamlit and Geopy integration.",
        detailedDescription:
            "PlanetPath is an interactive Streamlit web app developed to promote environmental awareness. By using the Geopy library for precise distance calculations, the app helps users understand their carbon footprint and make eco-conscious transportation choices. This project won 2nd place at the UHack Hackathon.",
        image: "/projects/PlanetPath.png",
        liveUrl:
            "https://a-projectspython-projectsplanetpathstreamlit-planetpath-v2swas.streamlit.app/",
        sourceUrl: "https://github.com/av1155/PlanetPath",
        category: "Programs",
        technologies: ["Python", "Streamlit", "Geopy"],
        languages: ["Python"],
    },
    {
        title: "Weather Alert Program",
        slug: "weather-alert-program",
        description:
            "A Python-based weather alert system integrated with Twilio and OpenWeatherMap APIs.",
        detailedDescription:
            "This project demonstrates proficiency in Python and API integration by creating a Weather Alert Program. It provides real-time weather updates for any location using the OpenWeatherMap API and integrates with Twilio to send SMS alerts, keeping users informed with timely notifications.",
        image: "/projects/WeatherAlertService.png",
        sourceUrl: "https://github.com/av1155/Weather-Alert-Service",
        category: "Programs",
        technologies: ["Python", "Twilio API", "OpenWeatherMap API", "SMS Integration"],
        languages: ["Python"],
    },
    {
        title: "Task Automation Toolkit",
        slug: "task-automation-toolkit",
        description: "A collection of useful Bash scripts for task automation.",
        detailedDescription:
            "This repository contains a set of Bash scripts designed to automate various tasks, improving efficiency and productivity. These scripts cover tasks like system maintenance, file management, and routine operation automation.",
        image: "/projects/BashScripts.png",
        sourceUrl: "https://github.com/av1155/scripts",
        category: "Projects",
        technologies: ["Bash", "Shell Scripting", "Automation", "Unix"],
        languages: ["Bash"],
    },
    {
        title: "Custom Neovim Configuration",
        slug: "neovim-config",
        description: "A streamlined and efficient Neovim setup tailored for productivity.",
        detailedDescription:
            "This Neovim configuration is built using Lua to provide a fast, clean, and flexible development environment. It integrates essential plugins, custom key mappings, and performance optimizations to enhance coding workflows, ideal for developers looking for a customizable Neovim setup.",
        image: "/projects/NeovimConfiguration.png",
        sourceUrl: "https://github.com/av1155/Neovim-Config",
        category: "Projects",
        technologies: ["Neovim", "Lua", "Vimscript", "Text Editors"],
        languages: ["Lua"],
    },

    // Other Projects
    {
        title: "FlaskKeyring iOS App",
        slug: "flaskkeyring-ios",
        description: "A WebKit port for FlaskKeyring, adapted for iOS.",
        detailedDescription:
            "This project adapts the FlaskKeyring application for iOS devices using WebKit, providing a native app experience for managing passwords. It demonstrates my ability to transition web applications into mobile platforms using iOS development tools.",
        image: "/programs/FlaskKeyringIOS.png",
        sourceUrl: "https://github.com/av1155/FlaskKeyringiOSApp",
        category: "Projects",
        technologies: ["iOS", "WebKit", "Swift", "Xcode"],
        languages: ["Swift"],
    },
    {
        title: "Number Theory Program",
        slug: "number-theory-program",
        description: "A C++ console program for performing number theory operations.",
        detailedDescription:
            "This program is a console-based application developed in C++ to perform a variety of number theory operations. Users can calculate the greatest common divisor (GCD) using the Euclidean algorithm, find additive and multiplicative inverses in modular arithmetic, and verify if two numbers are inverses of each other. It features a user-friendly interactive menu system and demonstrates a clear understanding of fundamental number theory concepts and modular arithmetic.",
        image: "/programs/NumberTheoryProgram.png",
        sourceUrl: "https://github.com/av1155/LearnCpp/tree/main/NumberTheory",
        category: "Programs",
        technologies: ["C++", "Console Application", "Number Theory", "Modular Arithmetic"],
        languages: ["C++"],
    },
    {
        title: "Mastermind with Dynamic Guess Generation",
        slug: "mastermind-dynamic",
        description: "A Mastermind game with an adaptive computer algorithm for guess generation.",
        detailedDescription:
            "An extension of the classic Mastermind game, this project features an adaptive computer algorithm that refines its guesses based on the player's inputs. It demonstrates my ability to develop complex algorithms and adaptive game mechanics.",
        image: "/programs/MastermindDynamicGuess.png",
        sourceUrl: "https://gist.github.com/av1155/7fe25750ab291e56f59ae9b056cdc733",
        category: "Programs",
        technologies: ["Java", "Algorithms", "Game Development"],
        languages: ["Java"],
    },
    {
        title: "Python Learning Resources",
        slug: "python-learning-resources",
        description: "A web app compiling resources for learning Python.",
        detailedDescription:
            "This web app compiles various resources, including tutorials, exercises, and project ideas, to help learners enhance their Python programming skills. It is an excellent starting point for beginners and intermediate programmers.",
        image: "/programs/PythonLearningResources.png",
        sourceUrl: "https://github.com/av1155/Python-Learning-Resources",
        liveUrl:
            "https://projectspython-projectsweb-appspython-learning-resourc-wnpi0o.streamlit.app/",
        category: "Projects",
        technologies: ["Python", "Streamlit"],
        languages: ["Python"],
    },
    {
        title: "Dynamic Matrices",
        slug: "dynamic-matrices",
        description:
            "A C program that dynamically allocates memory for matrices and performs operations.",
        detailedDescription:
            "This program is written in C and utilizes dynamic memory allocation to create and manipulate matrices. It includes functionality for matrix addition, subtraction, and multiplication. The program ensures that the correct dimensions are checked before performing operations. This project demonstrates the efficient handling of memory in C and understanding of matrix operations.",
        image: "/programs/DynamicMatrices.png",
        sourceUrl: "https://github.com/UM-CSC322-24F/labtask-6-av1155/blob/main/DynamicMatrices.c",
        category: "Programs",
        technologies: [
            "C",
            "Dynamic Memory Allocation",
            "Algorithms",
            "Linear Algebra",
            "Matrices",
        ],
        languages: ["C"],
    },
    {
        title: "Sort Pointers",
        slug: "sort-pointers",
        description: "A pointer-based sorting algorithm implementation in C.",
        detailedDescription:
            "This C program implements sorting algorithms like quicksort, mergesort, and bubble sort using pointers. It focuses on how sorting can be performed using pointer manipulation instead of array indexing, demonstrating a deep understanding of memory addresses and pointer arithmetic. The project is particularly useful for learning low-level memory management.",
        image: "/programs/SortPointers.png",
        sourceUrl: "https://github.com/UM-CSC322-24F/labtask-5-av1155/blob/main/SortPointers.c",
        category: "Programs",
        technologies: ["C", "Pointers", "Sorting Algorithms", "Memory Management"],
        languages: ["C"],
    },
    {
        title: "Bitwise Operations",
        slug: "bitwise-operations",
        description: "A C++ program demonstrating various bitwise operations.",
        detailedDescription:
            "This C++ program showcases the use of bitwise operators to perform tasks such as checking if a number is even or odd, swapping variables without using a temporary variable, and performing binary shifts. It is designed to help users grasp the importance of bitwise operations in low-level programming and optimization.",
        image: "/programs/BitOps.png",
        sourceUrl: "https://github.com/UM-CSC322-24F/labtask-5-av1155/blob/main/BitOps.c",
        category: "Programs",
        technologies: ["C", "Bitwise Operations", "Binary Arithmetic", "Optimization"],
        languages: ["C"],
    },
    {
        title: "Tax Calculator",
        slug: "tax-calculator",
        description: "A simple C program to calculate taxes based on income brackets.",
        detailedDescription:
            "This C program allows users to input their annual income and calculates the tax owed based on predefined income tax brackets. The program is structured to handle progressive tax rates and provides clear output with tax breakdowns. It demonstrates conditionals, arithmetic operations, and user input handling in C.",
        image: "/programs/TaxCalculator.png",
        sourceUrl: "https://github.com/UM-CSC322-24F/labtask-4-av1155/blob/main/TaxCalculator.c",
        category: "Programs",
        technologies: ["C", "Math"],
        languages: ["C"],
    },
    {
        title: "Oxygen Pressure Calculator",
        slug: "oxygen-pressure-calculator",
        description:
            "A C program that calculates oxygen pressure based on depth in underwater diving.",
        detailedDescription:
            "This C program calculates the oxygen pressure experienced by a diver at different depths underwater. It includes options for inputting different depths and calculates the partial pressure of oxygen using a simplified model. It is ideal for use in diving simulations or training, providing an accurate representation of pressure changes with depth.",
        image: "/programs/OxygenPressureCalculator.png",
        sourceUrl:
            "https://github.com/UM-CSC322-24F/labtask-4-av1155/blob/main/OxygenPressureCalculator.c",
        category: "Programs",
        technologies: ["C", "Physics", "Math"],
        languages: ["C"],
    },
    {
        title: "Kangaroo Roadkill Probability Calculator",
        slug: "kangaroo-roadkill-probability-calculator",
        description:
            "A C console program to calculate the expected number of kangaroo roadkills based on density, road length, and other factors.",
        detailedDescription:
            "This C program calculates the expected number of kangaroo roadkills in a region based on user inputs for the region size, road length, and the number of kangaroos. The program uses predefined constants for road width and kill probability to calculate the number of expected kills. It prompts users to input the side of a square region in kilometers, the road length, and the number of kangaroos, then computes the kangaroo density and the road surface area to predict the likelihood of roadkills. The program emphasizes accurate input validation and outputs the result in a clear format.",
        image: "/programs/KangarooRoadkillCalculator.png",
        sourceUrl: "https://github.com/UM-CSC322-24F/labtask-3-av1155/blob/main/RooKill.c",
        category: "Programs",
        technologies: ["C", "Console Application", "Math"],
        languages: ["C"],
    },
    {
        title: "Projectile Motion Calculator",
        slug: "projectile-motion-calculator",
        description: "A Java application for calculating projectile motion parameters.",
        detailedDescription:
            "This Java application calculates various parameters of projectile motion, such as range, maximum height, and time of flight, based on user inputs. It applies physics formulas to compute results, providing a practical application of mathematical and programming skills.",
        image: "/programs/ProjectileMotionCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/ProjectileMotionCalculator",
        category: "Programs",
        technologies: ["Java", "Physics", "Math"],
        languages: ["Java"],
    },
    {
        title: "PyFun",
        slug: "pyfun",
        description:
            "A collection of fun Python programs including a lottery simulator, Pig Latin translator, and Rock-Paper-Scissors game.",
        detailedDescription:
            "PyFun is a set of fun Python programs, including a lottery simulator, a Pig Latin translator, and a Rock-Paper-Scissors game. It showcases fundamental Python programming concepts and user interaction.",
        image: "/programs/PyFun.png",
        sourceUrl: "https://github.com/av1155/PyFun",
        category: "Programs",
        technologies: ["Python", "Console Application", "Game Development"],
        languages: ["Python"],
    },
    {
        title: "String Edit",
        slug: "string-edit",
        description: "A Java program for performing various string manipulation tasks.",
        detailedDescription:
            "This Java program performs string manipulation tasks such as reversing strings, changing case, and finding substrings. It showcases proficiency in string handling and manipulation using Java.",
        image: "/programs/StringEdit.png",
        sourceUrl: "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/StringEdit",
        category: "Programs",
        technologies: ["Java", "String Manipulation"],
        languages: ["Java"],
    },
    {
        title: "Volume Comparison",
        slug: "volume-comparison",
        description: "A Java tool for calculating and comparing the volumes of 3D shapes.",
        detailedDescription:
            "This Java application calculates and compares the volumes of various 3D shapes, such as spheres, cylinders, and cubes. Users can input dimensions to compute results, demonstrating practical application of geometry and programming skills.",
        image: "/programs/VolumeComparison.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/VolumeComparison",
        category: "Programs",
        technologies: ["Java", "Math"],
        languages: ["Java"],
    },
    {
        title: "Gravity Calculator",
        slug: "gravity-calculator",
        description:
            "A Java program for calculating speed and distance of falling objects under gravity.",
        detailedDescription:
            "This Java program calculates the speed and distance of an object in free fall under gravity, applying physics formulas based on time and initial conditions. It showcases practical applications of programming and physics.",
        image: "/programs/GravityCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Gravity%20Calculator",
        category: "Programs",
        technologies: ["Java", "Physics", "Math"],
        languages: ["Java"],
    },
    {
        title: "Linear Equation Calculator",
        slug: "linear-equation-calculator",
        description: "A Java program for solving linear equations in one variable.",
        detailedDescription:
            "This Java application solves linear equations in one variable. Users can input coefficients and constants, and the program computes the solution, providing a simple tool for solving mathematical problems.",
        image: "/programs/LinearEquationCalculator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Linear%20Equation%20Calculator",
        category: "Programs",
        technologies: ["Java", "Math"],
        languages: ["Java"],
    },
    {
        title: "GPA Calculator (CLI)",
        slug: "gpa-calculator-cli",
        description: "A Node.js command-line tool for calculating semester and overall GPA.",
        detailedDescription:
            "This GPA Calculator is a command-line interface (CLI) tool developed in Node.js that allows users to calculate both semester and overall GPA. The tool prompts users for course names, grades, and credit hours, and it handles the conversion of letter grades to GPA points using a predefined scale. It uses JavaScript's Map for grade conversion and provides a clear user flow with validation to ensure correct input for both semester and cumulative GPA calculations. Challenges included ensuring robust input validation and handling edge cases such as GPA and credit input formats.",
        image: "/programs/GPACalculatorCLI.png",
        sourceUrl: "https://github.com/av1155/GPA-Calculator",
        category: "Programs",
        technologies: ["JavaScript", "Node.js", "Console Application"],
        languages: ["JavaScript"],
    },
    {
        title: "Mastermind with Progressive Difficulty",
        slug: "mastermind-progressive-difficulty",
        description: "A Java-based Mastermind game with progressively increasing difficulty.",
        detailedDescription:
            "This implementation of the Mastermind game in Java features progressive difficulty levels. As the player advances, the game becomes more challenging, testing logic and deduction skills. The project highlights the use of algorithms for game progression.",
        image: "/programs/MastermindProgressiveDifficulty.png",
        sourceUrl: "https://github.com/av1155/Mastermind-Game",
        category: "Programs",
        technologies: ["Java", "Game Development", "Algorithms"],
        languages: ["Java"],
    },
    {
        title: "Bakery Shop Simulator",
        slug: "bakery-shop-simulator",
        description: "A Java console application simulating a bakery's order system.",
        detailedDescription:
            "The Bakery Shop Simulator is a simple Java console-based application where users can order pastries, coffees, sandwiches, and loaves of bread. The program dynamically calculates the subtotal, tax, and total cost based on user input. It demonstrates basic input handling and arithmetic operations, providing a hands-on example of a small business ordering system.",
        image: "/programs/BakeryShopSimulator.png",
        sourceUrl:
            "https://github.com/av1155/CodeHub/tree/main/Projects/Java_Projects/Bakery%20Shop",
        category: "Programs",
        technologies: ["Java", "Console Application"],
        languages: ["Java"],
    },
];
