"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type LogoItem = {
    url: string;
};

type AsSeenInProps = {
    logos: LogoItem[];
};

export default function AsSeenIn({ logos }: AsSeenInProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    // mobile: группировка по 3 логотипа
    const chunk = (arr: any[], size: number) =>
        arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);

    const groups = chunk(logos, 3);

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

            {/* DESKTOP */}
            <div className="hidden md:flex w-full opacity-60 items-center justify-between px-32">
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo.url}
                        className="h-6 md:h-10 w-auto"
                        alt={`logo-${i}`}
                    />
                ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden w-full overflow-hidden px-6" ref={emblaRef}>
                <div className="flex">
                    {groups.map((group: any, i: number) => (
                        <div
                            key={i}
                            className="min-w-full flex justify-center gap-8 snap-start items-center"
                        >
                            {group.map((logo: any, j: number) => (
                                <img
                                    key={j}
                                    src={logo.url}
                                    className="h-8 w-auto opacity-60"
                                    alt={`logo-${i}-${j}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 mt-3 md:hidden">
                {groups.map((_: any, i: number) => (
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
