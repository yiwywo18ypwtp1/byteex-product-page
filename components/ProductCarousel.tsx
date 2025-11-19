"use client";
import { useState } from "react";

type ProductCarouselProps = {
    images: { url: string }[];
};

const ProductCarousel = ({ images }: ProductCarouselProps) => {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    console.log(images);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="flex items-center justify-evenly w-full max-w-2xl relative">
                <button
                    onClick={prev}
                    className="w-3 cursor-pointer"
                >
                    <img src="/svg/arrow-prev.svg" />
                </button>

                <img
                    src={images[index].url}
                    className="w-74 h-auto md:w-109 object-cover"
                />

                <button
                    onClick={next}
                    className="w-3 cursor-pointer"
                >
                    <img src="/svg/arrow-next.svg" />
                </button>

                <div className="flex gap-1 mt-4 absolute bottom-3">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.url}
                            onClick={() => setIndex(i)}
                            className={`
                                w-6 h-6 md:h-9 md:w-9 object-cover cursor-pointer
                                border-2 transition
                                ${index === i ? "border-white" : "border-transparent opacity-70"}
                            `}
                        />
                    ))}
                </div>
            </div>

            <p className="mt-2 text-gry text-sm tracking-wide">White Robe</p>
        </div>
    );
}

export default ProductCarousel;
