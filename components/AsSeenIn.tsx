"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type Logo = {
    src: string;
    h: string;
    desc_h: string;
};

const logos: Logo[] = [
    { src: "/img/artboard-1.png", h: "h-4", desc_h: "md:h-7" },
    { src: "/img/artboard-2.png", h: "h-8", desc_h: "md:h-11" },
    { src: "/img/artboard-3.png", h: "h-5", desc_h: "md:h-10" },
    { src: "/img/artboard-4.png", h: "h-7", desc_h: "md:h-10" },
    { src: "/img/artboard-5.png", h: "h-6", desc_h: "md:h-9" },
];

const chunk = (arr: any[], size: number) =>
    arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);

const groups: Logo[][] = chunk(logos, 3);

export default function AsSeenIn() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <section className="w-full flex flex-col items-center">

            <p className="text-center text-gry/50 mb-4 tracking-wide">as seen in</p>

            <div className="hidden md:flex w-full opacity-60 items-center justify-between px-32">
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo.src}
                        className={`${logo.h} ${logo.desc_h} w-auto`}
                        alt="logo"
                    />
                ))}
            </div>

            <div className="md:hidden w-full overflow-hidden px-6" ref={emblaRef}>
                <div className="flex">
                    {groups.map((group, i) => (
                        <div
                            key={i}
                            className="min-w-full flex justify-center gap-8 snap-start items-center"
                        >
                            {group.map((logo, j) => (
                                <img
                                    key={j}
                                    src={logo.src}
                                    className={`${logo.h} w-auto opacity-60`}
                                    alt="logo"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 mt-3 md:hidden">
                {groups.map((_, i) => (
                    <span
                        key={i}
                        className={
                            "w-2 h-2 rounded-full transition-all " +
                            (i === selectedIndex ? "bg-black" : "bg-gray-300")
                        }
                    />
                ))}
            </div>
        </section>
    );
}
