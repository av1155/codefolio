"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
    name: string;
    href: string;
}

const navigation: NavItem[] = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Change header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Invoke handleScroll once to set the initial state based on current scroll position
        handleScroll();

        // Clean up the event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex items-center hover:scale-105 transition-transform duration-300"
                >
                    <span className="sr-only">Andrea A. Venti Fuentes</span>
                    <div className="relative h-10 w-10 overflow-hidden hover:ring-2 hover:ring-teal-400 transition-all">
                        <Image
                            alt="Portfolio Logo"
                            src="/favicon.jpg"
                            fill
                            sizes="40px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="ml-3 text-xl font-bold transition-colors duration-300 text-gray-900">
                        Andrea Venti
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 ${
                        mobileMenuOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-label="Toggle main menu"
                >
                    <div className="relative w-6 h-6">
                        <Bars3Icon
                            className={`absolute top-0 left-0 h-6 w-6 transition-opacity duration-300 ease-in-out ${
                                mobileMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <XMarkIcon
                            className={`absolute top-0 left-0 h-6 w-6 transition-opacity duration-300 ease-in-out ${
                                mobileMenuOpen ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`text-lg font-semibold leading-6 transition duration-300 ${
                                isActive(href)
                                    ? scrolled
                                        ? "text-indigo-600"
                                        : "text-indigo-800"
                                    : scrolled
                                      ? "text-gray-900 hover:text-indigo-600"
                                      : "text-gray-900 hover:text-indigo-800"
                            } transform hover:scale-105`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 z-50 w-80 h-70 bg-white rounded-sm shadow-lg px-5 pr-6 py-4 transition-transform duration-300 transform ${
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{
                    transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out",
                }}
            >
                <div className="flex items-center justify-between pl-2">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Andrea A. Venti Fuentes</span>
                        <div className="relative h-10 w-10 overflow-hidden">
                            <Image
                                alt="Portfolio Logo"
                                src="/favicon.jpg"
                                fill
                                sizes="40px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="ml-3 text-xl font-bold text-gray-900">Andrea Venti</span>
                    </Link>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-md p-2.5 text-gray-700"
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="h-6 w-6 transition-opacity duration-300 ease-in-out" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="mt-6 space-y-2">
                    {navigation.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`block rounded-lg px-3 py-2 text-lg font-semibold leading-7 ${
                                isActive(href)
                                    ? "text-indigo-600"
                                    : "text-gray-900 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Background Blur Overlay */}
            <div
                className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/25 transition-opacity duration-300 ${
                    mobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMobileMenuOpen(false)}
            />
        </header>
    );
}
