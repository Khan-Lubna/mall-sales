"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleY: scrollYProgress,
            }}
            className="fixed right-3 top-0 z-[999] h-full w-[3px] origin-top bg-gradient-to-b from-white via-neutral-300 to-neutral-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] md:right-4"
        />
    );
}