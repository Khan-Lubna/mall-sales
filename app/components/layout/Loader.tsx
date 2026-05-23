"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>

            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-center"
                    >

                        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-neutral-400">
                            Dubai Mall
                        </p>

                        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                            Global Destination
                        </h1>

                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>
    );
}