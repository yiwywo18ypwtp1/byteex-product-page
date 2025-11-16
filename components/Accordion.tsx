"use client";

import { useState } from "react";

type Item = {
    title: string;
    text: string;
};

const Accordion = ({ items }: { items: Item[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i));
    };

    return (
        <div className="flex flex-col w-full border-t border-lgt-gry">
            {items.map((item, i) => {
                const isOpen = openIndex === i;

                return (
                    <div key={i} className="border-b border-lgt-gry py-2">
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-xl text-blu font-medium">
                                {item.title}
                            </span>

                            <span className="text-5xl text-blu font-extralight transition-transform duration-300">
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 linear ${isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <p className="text-gry text-sm max-w-[90%]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div >
    );
};

export default Accordion;
