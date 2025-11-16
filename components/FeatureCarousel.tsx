"use client";

import { useState, ReactNode } from "react";

type FeatureCarouselProps = {
    children: ReactNode[];
    dotted?: boolean;
};

const FeatureCarousel = ({ children, dotted = false }: FeatureCarouselProps) => {
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i - 1 + children.length) % children.length);

    const next = () =>
        setIndex((i) => (i + 1) % children.length);

    return (
        <div className="w-full flex flex-col items-center justify-center relative">
            <button
                onClick={prev}
                className="absolute left-5 md:left-20 text-2xl text-gry"
            >
                <img src="/svg/arrow-prev.svg" />
            </button>

            <div className="max-w-72 h-72 flex flex-col items-center justify-center text-center px-6">
                {children[index]}
            </div>

            <button
                onClick={next}
                className="absolute right-5 md:right-20 text-2xl"
            >
                <img src="/svg/arrow-next.svg" />
            </button>

            {dotted && (
                <div className="flex gap-2 mt-4">
                    {children.map((_, i) => (
                        <span
                            key={i}
                            className={
                                "w-2 h-2 rounded-full transition-all " +
                                (i === index ? "bg-gry" : "bg-gray-300 opacity-70")
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FeatureCarousel;
