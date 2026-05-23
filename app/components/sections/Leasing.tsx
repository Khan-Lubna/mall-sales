"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const leasingPaths = [
  {
    title: "Luxury Flagship",
    description:
      "Premium retail spaces for world-class luxury brands seeking iconic presence.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    highlights: [
      "Prime Fashion Avenue locations",
      "Custom fit-out allowances",
      "Exclusive brand clustering",
    ],
    footTraffic: "10M+ annually",
  },
  {
    title: "Mid-Tier Retail",
    description:
      "High-visibility spaces for established brands looking to scale in a premium environment.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    highlights: [
      "Strategic center locations",
      "Optimized space configurations",
      "Flexible lease terms",
    ],
    footTraffic: "15M+ annually",
  },
  {
    title: "F&B & Hospitality",
    description:
      "Dining and hospitality spaces ranging from quick-service to fine dining concepts.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    highlights: [
      "Waterfront dining spots",
      "Food court placements",
      "Licensed hospitality venues",
    ],
    footTraffic: "8M+ annually",
  },
  {
    title: "Pop-Up & Experiences",
    description:
      "Flexible short-term spaces for brand activations, pop-ups, and experiential concepts.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    highlights: [
      "Turnkey activation spaces",
      "Week-to-month terms",
      "Pre-built infrastructure",
    ],
    footTraffic: "12M+ annually",
  },
];

const stats = [
  {
    value: 95,
    suffix: "%",
    label: "Occupancy Rate",
  },
  {
    value: 15,
    suffix: "%",
    label: "Average Sales Growth",
  },
  {
    value: 30,
    suffix: "+",
    label: "New Brands Annually",
  },
];

export default function Leasing() {
  return (
    <section
      id="leasing"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Leasing Opportunities
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Your Dubai Mall
            <br />
            Placement Strategy
          </h2>
        </Reveal>

        {/* Leasing Paths */}
        <div className="grid gap-6">
          {leasingPaths.map((path, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="grid items-center gap-8 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-6 md:p-10 backdrop-blur-md md:grid-cols-2"
            >
              <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] md:h-[400px]">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                  {path.title}
                </h3>

                <p className="mb-6 text-neutral-400">
                  {path.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {path.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-neutral-300">
                      • {highlight}
                    </li>
                  ))}
                </ul>

                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Foot Traffic:{" "}
                  <span className="text-white">{path.footTraffic}</span>
                </p>

                <button className="mt-6 rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-1">
                  Explore Options
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 border-t border-white/5 pt-10 md:grid-cols-3">
          {stats.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <h3 className="mb-2 text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl">
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  decimals={0}
                />
              </h3>
              <p className="text-lg text-neutral-400">{item.label}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-12 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-6 md:p-12 text-center backdrop-blur-md">
          <h3 className="mb-6 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
            Ready To Join Dubai Mall?
          </h3>

          <p className="mb-10 max-w-2xl mx-auto text-lg text-neutral-400">
            Contact our leasing team to explore available spaces and create a
            tailored placement strategy for your brand.
          </p>

          <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
            Schedule Leasing Consultation
          </button>
        </Reveal>
      </div>
    </section>
  );
}