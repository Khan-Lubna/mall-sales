"use client";

import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    value: 100,
    suffix: "M+",
    label: "Annual Visitors",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Retail Stores",
  },
  {
    value: 5.9,
    suffix: "M",
    decimals: 1,
    label: "Square Feet",
  },
  {
    value: 200,
    suffix: "+",
    label: "Dining Experiences",
  },
];

export default function WhyMall() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-8 md:py-14" id="why-mall">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal className="mb-6">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Why Dubai Mall
          </p>

          <h2 className="max-w-3xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            The World’s Most
            <br />
            Visited Retail Destination
          </h2>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] md:p-8"
            >
              <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
                {/* {item.number} */}
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </h3>

              <p className="text-base text-neutral-400 md:text-lg">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}