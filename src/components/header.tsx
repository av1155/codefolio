"use client";

import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to check if the link is active
    const isActive = (href: string) => pathname === href;

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
            >
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <span className="sr-only">Andrea A. Venti Fuentes</span>
                        <div className="relative h-10 w-10">
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
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        aria-label="Open main menu"
                    >
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-lg font-semibold leading-6 transition-colors duration-300 ${
                                isActive(item.href)
                                    ? "text-indigo-600"
                                    : "text-gray-900 hover:text-indigo-600"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
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
                        <div
                            className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    {/* Mobile Menu Panel */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-end">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative w-full max-w-sm bg-white px-6 py-6 shadow-lg sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href="/"
                                            className="flex items-center"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Andrea A. Venti Fuentes</span>
                                            <div className="relative h-10 w-10">
                                                <Image
                                                    alt="Portfolio Logo"
                                                    src="/favicon.jpg"
                                                    fill
                                                    sizes="40px"
                                                    className="rounded-full object-cover"
                                                    priority
                                                />
                                            </div>
                                            <span className="ml-3 text-xl font-bold text-gray-900">
                                                Andrea Venti
                                            </span>
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="rounded-md p-2.5 text-gray-700"
                                            aria-label="Close menu"
                                        >
                                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="space-y-2">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 ${
                                                        isActive(item.href)
                                                            ? "text-indigo-600"
                                                            : "text-gray-900 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </header>
    );
}
