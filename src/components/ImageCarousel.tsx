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
        <div className="relative w-full max-w-lg mx-auto">
            {/* Image Container */}
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
                            className="object-cover rounded-lg"
                            draggable={false}
                            priority={true}
                            loading="eager"
                            placeholder="blur"
                            blurDataURL={image.blurDataURL}
                        />
                    </Transition>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 duration-200 rounded-full p-2"
                aria-label="Previous Slide"
            >
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 duration-200 rounded-full p-2"
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
                            idx === currentIndex ? "bg-white scale-125" : "bg-gray-400 scale-100"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
