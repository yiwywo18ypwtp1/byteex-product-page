"use client";

import { useEffect, useRef, ReactNode } from "react";

type ScrollProps = {
    children: ReactNode;
    speed?: number;
}

const AutoScrollRow = ({ children, speed = 0.4 }: ScrollProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let scrollAmount = 0;

        function tick() {
            scrollAmount += speed;

            if (el === null) return

            el.scrollLeft = scrollAmount;

            const halfWidth = el.scrollWidth / 2;

            if (scrollAmount >= halfWidth) {
                scrollAmount = 0;
                el.scrollLeft = 0;
            }

            requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }, [speed]);

    return (
        <div
            ref={ref}
            className="w-full overflow-x-scroll scroll-hide whitespace-nowrap"
        >
            <div
                ref={ref}
                className="flex flex-row gap-1"
                style={{ width: "max-content" }}
            >
                <div className="flex flex-row gap-1">
                    {children}
                </div>

                <div className="flex flex-row gap-1">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AutoScrollRow;