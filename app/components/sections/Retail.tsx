"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const brands = [
  "/logos/apple.png",
  "/logos/chanel.png",
  "/logos/dior.png",
  "/logos/gucci.png",
  "/logos/louis-vuitton.png",
  "/logos/nike.png",
  "/logos/prada.png",
  "/logos/zara.png",
];

const cards = [
  {
    title: "Luxury Fashion",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    title: "Flagship Experiences",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    title: "Global Retail Reach",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
];

export default function Retail() {
  return (
    <section
      id="retail"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 pb-12 md:pb-20"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal className="mb-6">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Retail Ecosystem
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Home To The World’s
            Most Iconic Brands
          </h2>
        </Reveal>

        {/* Brand Marquee */}
        <div className="mb-12 overflow-hidden border-y border-white/5 py-6">

          <div className="flex brand-marquee animate-[marquee_30s_linear_infinite] gap-20">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="relative h-12 w-32 flex-shrink-0 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={brand}
                  alt="brand"
                  fill
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>

        {/* Retail Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          {cards.map((card, index) => (
            <Reveal
              key={index}
              delay={index * 0.15}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.06]"
            >
              <div className="relative h-[420px] md:h-[500px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {card.title}
                  </h3>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}