"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const diningCards = [
  {
    title: "Fine Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    title: "Global Cuisine",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
  {
    title: "Luxury Hospitality",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-14 md:py-24"
    >

      {/* Atmosphere Glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-200/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal className="mb-12">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-neutral-500">
            Dining Experiences
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Culinary Experiences
            From Around The World
          </h2>

        </Reveal>

        {/* Featured Dining Showcase */}
        <Reveal className="group relative mb-16 overflow-hidden rounded-[2.5rem]">

          <div className="relative h-[65vh] md:h-[85vh]">

            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Dining Experience"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-8 left-6 max-w-xl md:bottom-12 md:left-12">

              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
                Global Culinary Destination
              </p>

              <h3 className="text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
                Dining Designed
                As An Experience
              </h3>

              <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-lg">
                From Michelin-inspired concepts to globally celebrated cuisines,
                Dubai Mall offers world-class hospitality experiences
                in unforgettable settings.
              </p>

            </div>

          </div>

        </Reveal>

        {/* Dining Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          {diningCards.map((card, index) => (
            <Reveal
              key={index}
              delay={index * 0.15}
              className="group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

              </div>

              <div className="p-6 md:p-8">

                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {card.title}
                </h3>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}