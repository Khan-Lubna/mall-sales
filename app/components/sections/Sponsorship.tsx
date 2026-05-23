"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const tiers = [
  {
    name: "Premier Partner",
    price: "Custom",
    audience: "10M+",
    description:
      "Exclusive naming rights and category exclusivity across all Dubai Mall experiences.",
    benefits: [
      "Exclusive category exclusivity",
      "Naming rights to venues/events",
      "Integrated brand activations",
      "VIP hospitality suites",
    ],
  },
  {
    name: "Signature Partner",
    price: "$250K+",
    audience: "5M+",
    description:
      "Premium placement in key experiences with significant brand visibility.",
    benefits: [
      "Prominent signage placement",
      "Event sponsorship opportunities",
      "Digital integration",
      "Social media amplification",
    ],
  },
  {
    name: "Experience Partner",
    price: "$100K+",
    audience: "2.5M+",
    description:
      "Targeted activation within specific experiences and attractions.",
    benefits: [
      "Experience-specific branding",
      "Guest touchpoints",
      "Photo opportunity placements",
      "Seasonal campaigns",
    ],
  },
];

const stats = [
  {
    value: 90,
    suffix: "%",
    label: "Brand Recall Increase",
  },
  {
    value: 150,
    suffix: "+",
    label: "Brand Partners",
  },
  {
    value: 50,
    suffix: "M+",
    label: "Social Impressions",
  },
];

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Brand Partnerships
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Partnership
            <br />
            Tiers & Opportunities
          </h2>
        </Reveal>

        {/* Featured Image */}
        <Reveal className="relative mb-24 h-[50vh] overflow-hidden rounded-[2.5rem] md:h-[70vh]">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Brand Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl">
              Amplify Your Brand
              <br />
              At Global Scale
            </h3>
            <p className="text-neutral-300">
              Dubai Mall partnerships deliver measurable impact through strategic
              brand placement, integrated activations, and access to premium
              audiences.
            </p>
          </div>
        </Reveal>

        {/* Tiers */}
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="flex flex-col rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md"
            >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold tracking-[-0.03em]">
                  {tier.name}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {tier.description}
                </p>
                <p className="text-3xl font-bold text-white">
                  {tier.price}
                  <span className="text-sm font-normal text-neutral-400 ml-2">
                    {tier.audience} audience
                  </span>
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-neutral-300">
                    • {benefit}
                  </li>
                ))}
              </ul>

              <button className="rounded-full border border-white/10 bg-white/10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black">
                Learn More
              </button>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-8 border-t border-white/5 pt-20 md:grid-cols-3">
          {stats.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <h3 className="mb-3 text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl">
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                />
              </h3>
              <p className="text-lg text-neutral-400">{item.label}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-24 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-12 text-center backdrop-blur-md">
          <h3 className="mb-6 text-3xl font-bold leading-[1] tracking-[-0.03em]">
            Ready To Activate?
          </h3>

          <p className="mb-10 max-w-2xl mx-auto text-lg text-neutral-400">
            Our partnerships team will craft a custom activation strategy that
            aligns with your brand objectives and target audience.
          </p>

          <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
            Start Partnership Discussion
          </button>
        </Reveal>
      </div>
    </section>
  );
}