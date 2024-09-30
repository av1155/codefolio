"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
                        <h4 className="text-xl font-semibold mb-4">About Me</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Software Engineer & Innovator passionate about building modern,
                            efficient, and scalable software solutions.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resume"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="https://github.com/av1155"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="h-8 w-8 text-gray-400 hover:text-white transition-colors duration-200"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/andrea-venti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="h-8 w-8 text-gray-400 hover:text-white transition-colors duration-200"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center border-t border-gray-700 pt-8 text-gray-400">
                    <p>© {year} Andrea A. Venti Fuentes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
