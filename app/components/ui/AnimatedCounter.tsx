"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    decimals?: number;
}

export default function AnimatedCounter({
    end,
    suffix = "",
    decimals = 0,
}: AnimatedCounterProps) {
    return (
        <CountUp
            end={end}
            duration={2.5}
            decimals={decimals}
            separator=","
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
        />
    );
}