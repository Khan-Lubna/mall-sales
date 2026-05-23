"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const luxuryCards = [
  {
    title: "Luxury Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    title: "Exclusive Boutiques",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
  },
  {
    title: "Global Prestige",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
];

export default function Luxury() {
  return (
    <section
      id="luxury"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-14 md:py-24"
    >

      {/* Atmosphere Glow */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal className="mb-12">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-neutral-500">
            Luxury Experiences
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Where Global Luxury
            Finds Its Home
          </h2>

        </Reveal>

        {/* Featured Showcase */}
         <Reveal className="group relative mb-16 overflow-hidden rounded-[2.5rem]">

          <div className="relative h-[65vh] md:h-[85vh]">

            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Luxury Shopping"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-8 left-6 max-w-xl md:bottom-12 md:left-12">
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
                Global Luxury Destination
              </p>

              <h3 className="text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
                Home To The World’s
                Most Prestigious Brands
              </h3>
            </div>
          </div>
        </Reveal>

        {/* Luxury Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          {luxuryCards.map((card, index) => (
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