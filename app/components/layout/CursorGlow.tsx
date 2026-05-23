"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        damping: 40,
        stiffness: 200,
    });

    const smoothY = useSpring(mouseY, {
        damping: 50,
        stiffness: 160
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        // Use setTimeout to defer state update outside the effect body
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 150);
            mouseY.set(e.clientY - 150);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [mounted, mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <motion.div
            style={{
                x: smoothX,
                y: smoothY,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[1] h-[380px] w-[380px] rounded-full bg-neutral-300/[0.08] blur-[140px]"
        />
    );
}