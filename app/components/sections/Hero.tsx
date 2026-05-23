"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/25 to-black/80" />

      {/* <div className="absolute inset-0 z-0 backdrop-blur-[2px]" /> */}
      <div className="absolute inset-0 z-0 backdrop-blur-[1px]" />

      {/* Content */}
      {/* <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"> */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-16 md:pb-24 text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300"
        >
          Dubai Mall
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          // className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
          className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
        >
          More Than A Mall.
          <br />
          A Global Destination.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          // className="mt-6 max-w-2xl text-neutral-300 md:text-lg"
          className="mt-6 max-w-xl text-neutral-300 md:text-lg"
        >
          Where luxury retail, entertainment, culture, and global experiences converge.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border border-white/50 flex justify-center">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>

    </section>
  );
}