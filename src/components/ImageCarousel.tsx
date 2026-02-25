"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { useSwipeable } from "react-swipeable";

interface ImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

interface ImageCarouselProps {
    images: ImageProps[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div className="mt-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-7">A Glimpse of Me</h2>

            <div className="relative w-full max-w-lg mx-auto overflow-hidden bg-white bg-opacity-20 rounded-lg shadow-md p-4">
                <div {...handlers} className="relative h-0" style={{ paddingBottom: "133.333%" }}>
                    {images.map((image, index) => (
                        <Transition
                            as="div"
                            key={index}
                            show={currentIndex === index}
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="absolute inset-0"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover rounded-lg shadow-md"
                                draggable={false}
                                priority={index === 0}
                                placeholder="blur"
                                blurDataURL={image.blurDataURL}
                            />
                        </Transition>
                    ))}

                    {/* Left and Right Click Areas */}
                    <div
                        onClick={prevSlide}
                        className="absolute top-0 left-0 h-full w-1/5 cursor-pointer z-10"
                    ></div>
                    <div
                        onClick={nextSlide}
                        className="absolute top-0 right-0 h-full w-1/5 cursor-pointer z-10"
                    ></div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute z-20 top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 rounded-full p-2 shadow-md"
                    aria-label="Previous Slide"
                >
                    <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute z-20 top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 rounded-full p-2 shadow-md"
                    aria-label="Next Slide"
                >
                    <ChevronRightIcon className="h-6 w-6 text-gray-800" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 w-2 rounded-full transition-all duration-500 transform ${
                                idx === currentIndex
                                    ? "bg-white scale-125"
                                    : "bg-gray-400 scale-100"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
