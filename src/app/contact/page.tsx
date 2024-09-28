"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xpwavdjb");

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
                        Contact Me
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Looking for a skilled programmer to boost your projects? I&apos;m your guy!
                    </p>
                </div>

                <div className="mt-12 mx-auto max-w-xl">
                    {state.succeeded ? (
                        <p className="text-center text-green-500">
                            Thanks for your message! I will get back to you soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid gap-y-6">
                            <input
                                type="hidden"
                                name="_subject"
                                value="Contact request from personal website"
                            />

                            <div className="relative">
                                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <label htmlFor="email-field" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email-field"
                                    placeholder="Your email"
                                    required
                                    className="block w-full pl-10 rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="message-field" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message-field"
                                    rows={8}
                                    required
                                    placeholder="Your message"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
