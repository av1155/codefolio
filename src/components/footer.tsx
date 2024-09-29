// File: src/app/footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    // Initialize the year state with the current year
    const [year] = useState(new Date().getFullYear().toString());

    // Ref to the footer container
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            offset: 0, // Trigger animation as soon as the element is rendered
        });

        // Manually trigger AOS to animate the footer
        if (footerRef.current) {
            AOS.refresh(); // Refresh AOS to detect new elements
        }
    }, []);

    return (
        <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-size-130 text-white py-12">
            <div ref={footerRef} className="max-w-7xl mx-auto px-6 lg:px-8" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">About Me</h4>
                        <p className="text-gray-400">
                            Software Engineer & Innovator passionate about building modern,
                            efficient, and scalable software.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume" className="text-gray-400 hover:text-white">
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Connect with Me</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/andrea-venti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    aria-label="LinkedIn"
                                >
                                    {/* LinkedIn Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.5c-1.13 0-2.05-.92-2.05-2.05S4.19 3.4 5.32 3.4s2.05.92 2.05 2.05S6.45 7.5 5.32 7.5zM20.45 20.45h-3.53v-5.8c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.22 1.51-2.22 3.04v5.91h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/av1155"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    aria-label="GitHub"
                                >
                                    {/* GitHub Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.47 0 12.22c0 5.4 3.44 9.98 8.21 11.6.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.54 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.43.38.82 1.12.82 2.27v3.37c0 .32.22.7.82.58A12.19 12.19 0 0 0 24 12.22C24 5.47 18.63 0 12 0z" />
                                    </svg>
                                </a>
                            </li>
                            {/* Add more social media links here */}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400">
                    <p>© {year} Andrea A. Venti Fuentes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
