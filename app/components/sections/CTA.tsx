"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0">

        <Image
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6"
          alt="Dubai Mall"
          fill
          className="object-cover"
        />

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Atmosphere Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 text-center">

        <Reveal className="max-w-5xl">

          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-neutral-400">
            The Future Of Global Retail
          </p>

          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Build The Next
            Global Experience
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Dubai Mall is where world-class brands, immersive experiences,
            and global audiences come together to shape the future of retail,
            luxury, entertainment, and culture.
          </p>

          {/* CTA Button */}
          <div className="mt-12">

            <button className="rounded-full border border-white/10 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">

              Start The Conversation

            </button>

          </div>

        </Reveal>

      </div>

    </section>
  );
}