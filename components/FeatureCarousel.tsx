"use client";

import { useState, useEffect, ReactNode } from "react";

function chunk<T>(arr: T[], size: number) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

type Props = {
    children: ReactNode[];
    dotted?: boolean;
};

export default function FeatureCarousel({ children, dotted = false }: Props) {
    const [index, setIndex] = useState(0);
    const [groups, setGroups] = useState<ReactNode[][]>([]);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 768) {
                setGroups(chunk(children, 1));
            } else {
                setGroups(chunk(children, 3));
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [children]);

    const prev = () => setIndex((i) => (i - 1 + groups.length) % groups.length);
    const next = () => setIndex((i) => (i + 1) % groups.length);

    if (groups.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center gap-3 justify-center relative md:pt-10">
            <button
                onClick={prev}
                className="absolute left-5 md:left-35"
            >
                <img src="/svg/arrow-prev.svg" />
            </button>

            <div className="flex px-6 md:gap-6">
                {groups[index].map((el, i) => (
                    <div key={i} className="w-72 h-72 md:w-80 md:h-fit flex items-center justify-center">
                        {el}
                    </div>
                ))}
            </div>

            <button
                onClick={next}
                className="absolute right-5 md:right-35"
            >
                <img src="/svg/arrow-next.svg" />
            </button>

            {dotted && (
                <div className="flex gap-2">
                    {groups.map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition ${i === index ? "bg-black" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
