"use client";
import { useState } from "react";

const IMAGES = [
    "/img/woman-4.png",
    "/img/woman-5.png",
    "/img/woman-4.png",
    "/img/woman-5.png",
    "/img/woman-4.png",
];

const ProductCarousel = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % IMAGES.length);
    const prev = () => setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

    return (
        <div className="w-full flex flex-col items-center">

            {/* MAIN IMAGE */}
            <div className="relative w-full max-w-2xl">
                <img
                    src={IMAGES[index]}
                    className="w-full h-auto object-cover rounded-lg"
                />

                {/* LEFT ARROW */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                    <img src="/svg/arrow-left.svg" />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                    <img src="/svg/arrow-right.svg" />
                </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 mt-4">
                {IMAGES.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        onClick={() => setIndex(i)}
                        className={`
              w-14 h-14 object-cover rounded-md cursor-pointer
              border-2 transition
              ${index === i ? "border-blu" : "border-transparent opacity-70"}
            `}
                    />
                ))}
            </div>

            {/* CAPTION */}
            <p className="mt-4 text-gry text-sm tracking-wide">White Robe</p>
        </div>
    );
}

export default ProductCarousel;
