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
        description:
            "A full-stack, zero-knowledge password manager with client-side AES-GCM encryption and secure REST APIs for ultimate security.",
        detailedDescription:
            "FlaskKeyring is a comprehensive password management solution utilizing a zero-knowledge model with client-side AES-GCM encryption and PBKDF2-derived keys, ensuring sensitive information remains secure end-to-end. User encryption keys are derived from their master password, stored only on the client. Flask-Login powers user authentication, while Flask-Mail and a self-hosted Synology MailPlus Server support secure email validation and password recovery. The application leverages REST APIs, a responsive Bootstrap interface, and Jinja2 for dynamic templating. For deployment, it uses Heroku with PostgreSQL for production and SQLite for local testing. Key database elements include the master password hash, encrypted passwords, IV, and salt, all designed to protect user data with strong client-side encryption.",
        image: "/projects/FlaskKeyring.png",
        liveUrl: "https://www.flaskkeyring.com",
        sourceUrl: "https://github.com/av1155/FlaskKeyring",
        category: "Projects",
        technologies: [
            "Python",
            "Flask",
            "JavaScript",
            "PostgreSQL",
            "REST API",
            "Web Cryptography API",
            "Bootstrap",
            "HTML",
            "CSS",
            "Jinja2",
            "SQLAlchemy",
            "Flask-Login",
            "Flask-Mail",
            "SQLite",
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
        title: "BridgeChat",
        slug: "bridgechat",
        description:
            "A real-time chat application with integrated on-the-fly translation that breaks language barriers across platforms.",
        detailedDescription:
            "BridgeChat is a comprehensive real-time chat application designed to facilitate seamless communication between users of different languages. It integrates automatic message translation based on each user's preferred language, ensuring a smooth conversation flow without language limitations. Built with Flutter for cross-platform support (web, mobile, and desktop) and Firebase for authentication, real-time messaging, and backend services, BridgeChat emphasizes privacy with username-based registration. The project also features robust CI/CD pipelines, extensive documentation covering system architecture, testing, and deployment, and is designed to scale for future enhancements.",
        image: "/projects/BridgeChat.png",
        liveUrl: "https://av1155-bridgechat.web.app/",
        sourceUrl: "https://github.com/av1155/bridgechat",
        category: "Projects",
        technologies: [
            "Flutter",
            "Firebase",
            "Dart",
            "Cloud Functions",
            "Real-Time Messaging",
            "CI/CD",
        ],
        languages: ["Dart"],
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
        title: "Matrix Chain Multiplication Analysis",
        slug: "matrix-chain-multiplication-analysis",
        description:
            "A Go and Python project analyzing computation cost reduction for matrix chain multiplication using dynamic programming.",
        detailedDescription:
            "This project evaluates computation-cost reduction strategies for matrix chain multiplication using dynamic programming and compares it to sequential left-to-right multiplication. The analysis is performed using sequences of matrix dimensions, generating detailed results and visualizations for empirical insights. The project is implemented in Go for computational efficiency and Python for data analysis and visualization.",
        image: "/projects/matrix_chain_multiplication_analysis.png",
        sourceUrl: "https://github.com/av1155/matrix-chain-multiplication-analysis",
        category: "Projects",
        technologies: ["Go", "Python", "Dynamic Programming", "Data Analysis", "Visualization"],
        languages: ["Go", "Python"],
    },
    {
        title: "Empirical Evaluation of Classic Sorting Algorithms",
        slug: "evaluation-of-sorting-algorithms",
        description:
            "An empirical study of Quick Sort, Merge Sort, and Heap Sort with memory profiling.",
        detailedDescription:
            "This project benchmarks Quick Sort, Merge Sort, and Heap Sort algorithms, evaluating their performance across different dataset sizes (10,000 to 800,000 elements). The analysis includes comparisons, execution time, and memory usage, with results presented through detailed comparison tables and graphs. The study also compares algorithm performance on non-decreasing and non-increasing input orders, providing insights into real-world efficiency.",
        image: "/projects/SortingAlgorithmEvaluation.png",
        sourceUrl:
            "https://gitfront.io/r/av1155/AbQeNWzfig3F/sorting-algorithm-performance-analysis/",
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
        title: "Kruskal & Prim Implementation",
        slug: "kruskal-prim-implementation",
        description:
            "A Python project implementing and comparing Kruskal's and Prim's algorithms for computing the Minimum Spanning Tree (MST) of a graph.",
        detailedDescription:
            "This project provides Python implementations of two classic graph algorithms—Kruskal's and Prim's—for finding the Minimum Spanning Tree (MST) in an undirected, weighted graph. It includes scripts that execute both algorithms on sample input graphs, along with a performance evaluation module that uses NetworkX to generate random graphs and matplotlib to visualize execution times across various graph sizes and densities. Detailed documentation, user manuals, and performance reports (in PDF and CSV formats) support a comprehensive understanding of the algorithms, their implementations, and their efficiency.",
        image: "/programs/kruskal_prim_implementation.png",
        sourceUrl: "https://github.com/av1155/kruskal-prim-implementation",
        category: "Programs",
        technologies: [
            "Python",
            "Graph Algorithms",
            "Kruskal's Algorithm",
            "Prim's Algorithm",
            "NetworkX",
            "Matplotlib",
            "Pandas",
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
        description: "A Streamlit-powered web app curating resources for Python learning.",
        detailedDescription:
            "This web app, built with Streamlit in Python, offers a curated collection of resources to support Python learners at various levels. It includes interactive sections for tutorials, exercises, and project ideas, all structured to enhance learning experiences directly within a streamlined web interface. Streamlit’s features make it easy for users to explore resources, making this app a valuable tool for beginners and intermediate Python enthusiasts.",
        image: "/programs/PythonLearningResources.png",
        sourceUrl: "https://github.com/av1155/Python-Learning-Resources",
        liveUrl:
            "https://projectspython-projectsweb-appspython-learning-resourc-wnpi0o.streamlit.app/",
        category: "Projects",
        technologies: ["Python", "Streamlit"],
        languages: ["Python"],
    },
    {
        title: "Boat Management System",
        slug: "boat-management-system",
        description: "A C project for managing boats and their storage details in a marina.",
        detailedDescription:
            "This C project serves as a comprehensive boat management system for marinas, allowing users to add, remove, and display boat information, process payments, and track monthly fees based on storage location. The project includes support for different storage types (slip, land, trailer, storage) with respective rates, dynamically expands memory for new entries, and validates user input. It also supports file-based data persistence, enabling data to be saved and loaded from CSV files, and displays boats in alphabetical order for easy inventory management. Key features include robust memory management, user input validation, and structured output of all data entries.",
        image: "/projects/BoatManagementSystem.png",
        sourceUrl: "https://gist.github.com/av1155/bf9f2d478d3621722cb672e3a5e7f116",
        category: "Projects",
        technologies: ["C", "File Handling", "Dynamic Memory Allocation", "Structs", "Enums"],
        languages: ["C"],
    },
    {
        title: "Stream Editor (svi)",
        slug: "stream-editor-svi",
        description:
            "A C project that mimics the functionality of a stream editor, applying a list of edit commands to text files.",
        detailedDescription:
            "The Stream Editor (svi) is a C-based program that processes lines of text from standard input according to a set of commands provided in a file. This project supports a variety of edit operations, including inserting, appending, deleting, and substituting text with optional line range specifications. Commands are stored using efficient data structures, including enums and unions, and are executed with robust error handling. The program features a modular design with a Makefile for easy compilation and testing, ensuring maintainability and scalability. Key functionalities include handling complex edit operations with dynamic memory, user-friendly syntax for commands, and high-performance line processing.",
        image: "/projects/StreamEditorSvi.png",
        sourceUrl: "https://gist.github.com/av1155/ab4ac9f92869ed1422afb37d45180e92",
        category: "Projects",
        technologies: [
            "C",
            "File Handling",
            "Dynamic Memory Allocation",
            "Structs",
            "Enums",
            "Makefile",
        ],
        languages: ["C"],
    },
    {
        title: "Dynamic Structs",
        slug: "dynamic-structs",
        description: "A C program to manage dynamically allocated structures with relational data.",
        detailedDescription:
            "This C program allows users to create and store information about people, including their names, ages, and best friends. The program dynamically allocates memory for each person, storing up to ten entries and allowing users to assign best friends within the list. It demonstrates dynamic memory allocation, struct manipulation, and relational data management through pointers, offering clear input validation and structured output for all entries.",
        image: "/programs/DynamicStructs.png",
        sourceUrl: "https://gist.github.com/av1155/65dcb1dd20eca77ac6edae5cdeb8aae0",
        category: "Programs",
        technologies: ["C", "Dynamic Memory Allocation", "Structs", "Pointer Relationships"],
        languages: ["C"],
    },
    {
        title: "Species Log",
        slug: "species-log",
        description: "A C program for recording and categorizing animal species.",
        detailedDescription:
            "This C program allows users to log various animal species, including their name, size, and type (mammal, insect, bird, or fish). It dynamically expands memory as needed to accommodate new entries, enabling users to input multiple species until 'exit' is entered. The program includes robust input validation and displays all recorded species in a structured format, making it useful for demonstrating dynamic memory allocation, enums, and struct-based data storage in C.",
        image: "/programs/SpeciesLog.png",
        sourceUrl: "https://gist.github.com/av1155/bc348c6653199835e32b302aa3d2c9c6",
        category: "Programs",
        technologies: ["C", "Dynamic Memory Allocation", "Enums", "Structs"],
        languages: ["C"],
    },
    {
        title: "Dynamic Matrices",
        slug: "dynamic-matrices",
        description:
            "A C program that dynamically allocates memory for matrices and performs matrix multiplication.",
        detailedDescription:
            "This program, written in C, demonstrates dynamic memory allocation for matrix creation and performs matrix multiplication. It includes input validation to ensure compatible dimensions before multiplication. The project focuses on basic memory handling and matrix manipulation in C, making it ideal for practicing dynamic allocation and understanding row-major matrix storage.",
        image: "/programs/DynamicMatrices.png",
        sourceUrl: "https://gist.github.com/av1155/1a21178fcea0061dce9922f9d99b4af2",
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
        description: "A C program demonstrating sorting using pointers.",
        detailedDescription:
            "This C program demonstrates sorting with pointers through a basic implementation of bubble sort. It initializes an array of integers and an array of pointers to these integers, sorting both by using pointers for in-place comparisons and swaps. This program is helpful for understanding fundamental pointer usage and basic sorting logic.",
        image: "/programs/SortPointers.png",
        sourceUrl: "https://gist.github.com/av1155/22c35597ba9c4eb0f80b21587a855cfd",
        category: "Programs",
        technologies: ["C", "Pointers", "Sorting Algorithms", "Memory Management"],
        languages: ["C"],
    },
    {
        title: "Bitwise Operations",
        slug: "bitwise-operations",
        description: "A C program demonstrating bitwise operations for specific checks.",
        detailedDescription:
            "This C program demonstrates the use of bitwise operations to perform basic checks, including determining if a number is even or odd, checking if a specific bit is set, and verifying if all bits in a given range are on. It provides a straightforward way to explore bitwise logic, helping users understand practical applications of bitwise operators in C.",
        image: "/programs/BitOps.png",
        sourceUrl: "https://gist.github.com/av1155/4a379b143a6d296d26b9afb545ef8510",
        category: "Programs",
        technologies: ["C", "Bitwise Operations", "Binary Arithmetic", "Optimization"],
        languages: ["C"],
    },
    {
        title: "Tax Calculator",
        slug: "tax-calculator",
        description: "A C program to compute taxes based on income and deductions.",
        detailedDescription:
            "This C program allows users to input their income and deductions to calculate taxable income and the resulting tax owed. The program assigns a tax group based on predefined income brackets and applies appropriate tax rates, with a maximum tax cap. It demonstrates conditional statements, user input handling, and arithmetic operations in C.",
        image: "/programs/TaxCalculator.png",
        sourceUrl: "https://gist.github.com/av1155/8bce594c9f69b2c0a79a5fe9aedb4cbe",
        category: "Programs",
        technologies: ["C", "Math"],
        languages: ["C"],
    },
    {
        title: "Oxygen Pressure Calculator",
        slug: "oxygen-pressure-calculator",
        description: "A C program for calculating oxygen pressure at different depths underwater.",
        detailedDescription:
            "This C program calculates the partial pressure of oxygen (O2) based on depth in feet and the percentage of oxygen in the gas mix. It computes the ambient pressure at a given depth and the corresponding O2 pressure, assigning a pressure group and checking if it exceeds maximum and contingency safety limits. This project illustrates pressure calculation and input validation in C.",
        image: "/programs/OxygenPressureCalculator.png",
        sourceUrl: "https://gist.github.com/av1155/8830c79d08f6221875306eff86b263d6",
        category: "Programs",
        technologies: ["C", "Physics", "Math"],
        languages: ["C"],
    },
    {
        title: "Kangaroo Roadkill Probability Calculator",
        slug: "kangaroo-roadkill-probability-calculator",
        description:
            "A C program to estimate the expected number of kangaroo roadkills based on environmental and road factors.",
        detailedDescription:
            "This C program estimates the expected number of kangaroo roadkills within a defined region based on user input for region size, road length, and kangaroo population. It calculates kangaroo density from the region’s area, determines road surface area using an average road width, and applies a probability constant to estimate potential roadkill occurrences. This program emphasizes user input validation and provides clear output, helping users understand how environmental factors influence roadkill probability.",
        image: "/programs/KangarooRoadkillCalculator.png",
        sourceUrl: "https://gist.github.com/av1155/79b43b8c7218e0dccd0adf49db0087b3",
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
        title: "Batch Executor",
        slug: "batch-executor",
        description: "A C program that executes commands from a file in batch mode.",
        detailedDescription: `
        Batch Executor is a C program designed to execute a series of shell commands specified in a file. 
        The program reads each command, spawns a child process using \`fork()\`, and executes the command 
        in the background with \`execvp()\`. It ensures that all commands are executed concurrently and waits 
        for all processes to complete before terminating. This project demonstrates a strong understanding 
        of process management, inter-process communication, and system-level programming concepts in Unix/Linux.`,
        image: "/programs/BatchExecutor.png",
        sourceUrl: "https://gist.github.com/av1155/9602cf8e075cee1ce3d0f38d35ab4c39",
        category: "Programs",
        technologies: ["C", "Process Management", "Fork", "Execvp", "Waitpid", "Unix/Linux"],
        languages: ["C"],
    },
    {
        title: "Qualities Parser",
        slug: "qualities-parser",
        description: "A C program to extract, process, and save user-described qualities.",
        detailedDescription: `
        Qualities Parser is a C program that collects user input to extract self-described qualities 
        starting with the phrase "I am". It writes these qualities to a file, concatenates them into 
        a single string, displays the results, and deletes the file after confirmation. The program 
        uses dynamic string manipulation and file handling to efficiently process the data, ensuring 
        robustness through input validation and error handling. It also demonstrates mastery of basic 
        string and file operations in C.`,
        image: "/programs/QualitiesParser.png",
        sourceUrl: "https://gist.github.com/av1155/cb220cc301ca238dcae9e57951c09fcf",
        category: "Programs",
        technologies: ["C", "File Handling", "String Manipulation", "Memory Management"],
        languages: ["C"],
    },
    {
        title: "Sentence Analyzer",
        slug: "sentence-analyzer",
        description: "A C program for sentence and word-level analysis using regex.",
        detailedDescription: `
        Sentence Analyzer is a robust C program that performs sentence-level analysis on user input. 
        It splits text into sentences based on punctuation (.!?), checks each sentence against a user-provided 
        regular expression to determine matches, and counts the number of words in each sentence. This program 
        demonstrates the use of advanced C features, including regex handling, tokenization with strtok_r, 
        and memory-safe string manipulation, providing an efficient and interactive tool for text analysis.`,
        image: "/programs/SentenceAnalyzer.png",
        sourceUrl: "https://gist.github.com/av1155/fef215ccd527c205449920b44e81c012",
        category: "Programs",
        technologies: ["C", "Regex", "Text Analysis", "Tokenization"],
        languages: ["C"],
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
