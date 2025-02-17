"use client";

import AOSInitializer from "@/components/AOSInitializer";
import BackgroundShape from "@/components/BackgroundShape";
import { useForm, ValidationError } from "@formspree/react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
    const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "";
    const [state, handleSubmit] = useForm(formKey);

    return (
        <>
            <AOSInitializer />
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-130">
                {/* Background Decorative Shape */}
                <div className="absolute inset-0">
                    <BackgroundShape />
                </div>

                {/* Main Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
                    <h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl"
                        data-aos="fade-down"
                    >
                        Contact Me
                    </h1>
                    <p className="mt-6 text-lg leading-8" data-aos="fade-up">
                        Looking for a skilled programmer to boost your projects?
                    </p>

                    {/* Contact Form */}
                    <div className="mt-12 mx-auto max-w-xl" data-aos="zoom-in">
                        {state.succeeded ? (
                            <div className="text-center text-green-600 bg-green-50 p-4 rounded-md">
                                <h2 className="text-2xl font-semibold">Thank You!</h2>
                                <p className="mt-2">
                                    Your message has been successfully sent. I&apos;ll be in touch
                                    soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid gap-y-6">
                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="Contact request from personal website"
                                />

                                {/* Email */}
                                <div className="relative">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
                                    />
                                    <label htmlFor="email-field" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email-field"
                                        placeholder="Your email"
                                        required
                                        className="block w-full pl-10 rounded-md border border-white bg-white bg-opacity-20 px-4 py-3 text-white placeholder-white focus:border-indigo-300 focus:ring-indigo-300"
                                    />
                                    <div className="absolute left-0 -bottom-5 w-full">
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="relative">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
                                    />
                                    <label htmlFor="name-field" className="sr-only">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name-field"
                                        placeholder="Your name"
                                        required
                                        className="block w-full pl-10 rounded-md border border-white bg-white bg-opacity-20 px-4 py-3 text-white placeholder-white focus:border-indigo-300 focus:ring-indigo-300"
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label htmlFor="message-field" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message-field"
                                        rows={8}
                                        required
                                        placeholder="Your message"
                                        className="block w-full rounded-md border border-white bg-white bg-opacity-20 px-4 py-3 text-white placeholder-white focus:border-indigo-300 focus:ring-indigo-300"
                                    ></textarea>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                {/* Send Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-white bg-opacity-80 px-4 py-3 font-semibold text-indigo-700 shadow-md hover:bg-opacity-100 transform hover:scale-105 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
