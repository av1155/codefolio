export interface Project {
    title: string;
    slug: string; // Added slug field
    description: string;
    detailedDescription: string;
    image: string;
    liveUrl?: string;
    sourceUrl?: string;
    category: "Main" | "Other";
    technologies: string[];
}

export const projects: Project[] = [
    // Main Projects
    {
        title: "FlaskKeyring",
        slug: "flaskkeyring",
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
        slug: "indexnext-engine",
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
        slug: "dotfiles-project",
        description: "Cross-Platform Unix Mastery & Automated Environment Setup",
        detailedDescription:
            "The .dotfiles repository is a cross-platform solution designed to automate and streamline the setup of development environments on macOS, Arch Linux, WSL (Windows Subsystem for Linux), and Debian-based systems. It includes a universal .zshrc and .zprofile that dynamically configure environments depending on the operating system and architecture. Additionally, the repository features a powerful macOS bootstrap script that automates the installation of essential development tools, applications, package managers like Homebrew, and configurations for macOS. The repository handles tasks such as managing Tmux sessions, configuring Neovim, handling Conda environments, and setting up shell plugins. The core philosophy is to ensure consistency and efficiency across various platforms, whether you're on a MacBook, an Arch Linux desktop, or a Raspberry Pi.",
        image: "/main_projects/Dotfiles+Bootstrap.png",
        sourceUrl: "https://github.com/av1155/.dotfiles",
        category: "Main",
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
    },
    {
        title: "Raspberry Pi 5 Codepi Setup Guide",
        slug: "raspberrypi5-setup",
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
        title: "Empirical Evaluation of Classic Sorting Algorithms",
        slug: "evaluation-of-sorting-algorithms",
        description:
            "An in-depth empirical study of Quick Sort, Merge Sort, and Heap Sort with varying dataset sizes and memory profiling.",
        detailedDescription:
            "This project benchmarks three fundamental sorting algorithms (Quick Sort, Merge Sort, and Heap Sort) by evaluating their performance across different dataset sizes (from 10,000 to 800,000 elements). The analysis includes the number of comparisons, execution time in seconds, and memory consumption, with all results visualized through comprehensive comparison tables and graphs. The study also explores algorithm performance on non-decreasing and non-increasing input orders, comparing empirical data with theoretical time complexities to gain insights into real-world efficiency. Memory profiling was added to assess memory usage during execution, further enriching the analysis.",
        image: "/main_projects/SortingAlgorithmEvaluation.png",
        sourceUrl: "https://github.com/av1155/sorting-algorithm-performance-analysis",
        category: "Main",
        technologies: [
            "Python",
            "Sorting Algorithms",
            "Matplotlib",
            "Numpy",
            "Pandas",
            "Tracemalloc",
        ],
    },
    {
        title: "Portfolio Website",
        slug: "portfolio-website",
        description:
            "A personal portfolio website showcasing projects, skills, and experience as a software engineer.",
        detailedDescription:
            "This project is a Next.js-based portfolio website designed to display key projects, an about page, a resume, and a contact form. It features a responsive layout, animations powered by AOS (Animate on Scroll), and integrations like Formspree for the contact form. Built with TypeScript and Tailwind CSS, the site highlights Andrea's software engineering expertise, providing a visually engaging and user-friendly platform for potential collaborators or employers. The website is hosted on Vercel and leverages modern build tools like PostCSS and pnpm.",
        image: "/main_projects/PortfolioWebsite.png",
        liveUrl: "https://www.andrea-venti.com",
        sourceUrl: "https://github.com/av1155/codefolio",
        category: "Main",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Formspree"],
    },
    {
        title: "GPA Calculator Webapp",
        slug: "gpa-calculator-website",
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
        slug: "pypassmanager",
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
        slug: "space-invaders",
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
        title: "Snake Game in Java",
        slug: "snake-game",
        description: "Classic snake game implemented in Java using Java Swing.",
        detailedDescription:
            "A classic snake game developed in Java using Java Swing for the GUI. The game features smooth controls, score tracking, and increasing difficulty as the snake grows.",
        image: "/main_projects/SnakeGame.png",
        sourceUrl: "https://github.com/av1155/SnakeGame/tree/main",
        category: "Main",
        technologies: ["Java", "Java Swing", "Game Development"],
    },
    {
        title: "Mastermind Trilogy",
        slug: "mastermind",
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
        slug: "stockfoliohub",
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
        slug: "planetpath",
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
        slug: "weather-alert-program",
        description: "Weather Alert Program with Twilio and API Integration.",
        detailedDescription:
            "This project is an impressive demonstration of my proficiency in Python programming and API integration. I have created a Weather Alert Program that provides real-time weather updates for any location through OpenWeatherMap API. To make it more convenient for users, I have also integrated Twilio, a messaging API, that sends prompt SMS weather alerts.",
        image: "/main_projects/WeatherAlertService.png",
        sourceUrl: "https://github.com/av1155/Weather-Alert-Service",
        category: "Main",
        technologies: ["Python", "Twilio API", "OpenWeatherMap API", "SMS Integration"],
    },
    {
        title: "My Bash Scripts Repository",
        slug: "bash-scripts",
        description: "Collection of Useful Bash Scripts.",
        detailedDescription:
            "This repository contains a collection of Bash scripts that automate various tasks, improving efficiency and productivity. The scripts cover tasks like system maintenance, file management, and automation of routine operations.",
        image: "/main_projects/BashScripts.png",
        sourceUrl: "https://github.com/av1155/scripts",
        category: "Main",
        technologies: ["Bash", "Shell Scripting", "Automation", "Unix"],
    },
    {
        title: "Custom Neovim Configuration",
        slug: "neovim-config",
        description: "A streamlined and efficient Neovim setup designed for productivity.",
        detailedDescription:
            "This Neovim configuration is built with Lua to provide a clean, fast, and flexible development environment. It integrates essential plugins, custom key mappings, and performance optimizations to enhance your coding workflow. Perfect for developers who want a customizable setup that maximizes Neovim’s potential.",
        image: "/main_projects/NeovimConfiguration.png",
        sourceUrl: "https://github.com/av1155/Neovim-Config",
        category: "Main",
        technologies: ["Neovim", "Lua", "Vimscript", "Text Editors"],
    },

    // Other Projects
    {
        title: "FlaskKeyring iOS App",
        slug: "flaskkeyring-ios",
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
        slug: "mastermind-dynamic",
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
        slug: "python-learning-resources",
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
        slug: "projectile-motion-calcualtor",
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
        slug: "bakery-shop-simulator",
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
        title: "CodeHub",
        slug: "codehub",
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
        slug: "pyfun",
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
        slug: "string-edit",
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
        slug: "volume-comparison",
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
        slug: "gravity-calculator",
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
        slug: "linear-equation-caculator",
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
        slug: "gpa-calculator-cli",
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
        slug: "mastermind-progressive-difficulty",
        description: "Java-based Mastermind game with progressive difficulty.",
        detailedDescription:
            "An implementation of the Mastermind game in Java, featuring progressive difficulty levels. As the player advances, the game becomes more challenging, testing the player's logic and deduction skills.",
        image: "/other_projects/MastermindProgressiveDifficulty.png",
        sourceUrl: "https://github.com/av1155/Mastermind-Game",
        category: "Other",
        technologies: ["Java", "Game Development", "Algorithms"],
    },
];
