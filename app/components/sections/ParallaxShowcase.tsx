"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxShowcase() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [0.5, 1, 0.7]
    );

    return (
        <section
            ref={ref}
            className="relative h-[90vh] md:h-[120vh] overflow-hidden"
        >

            {/* Background Image */}
            <motion.div
                style={{
                    scale,
                    opacity,
                }}
                className="absolute inset-0"
            >

                <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                    alt="Dubai Mall"
                    fill
                    className="object-cover"
                />

            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />

            {/* Content */}
            <motion.div
                style={{ y }}
                className="relative z-10 flex h-full items-center justify-center px-6 text-center"
            >

                <div className="max-w-4xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.5em] text-neutral-300">
                        A Global Destination
                    </p>

                    <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                        Where Retail,
                        Entertainment & Culture,
                        Converge
                    </h2>

                </div>

            </motion.div>
        </section>
    );
}