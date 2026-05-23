"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const stats = [
  {
    value: "500+",
    label: "Annual Events",
  },
  {
    value: "10M+",
    label: "Event Attendees",
  },
  {
    value: "Global",
    label: "Brand Exposure",
  },
];

const venues = [
  {
    name: "The Dubai Mall Arena",
    capacity: "15,000+",
    type: "Concerts & Live Events",
    features: ["Premium acoustics", "LED facade", "VIP suites"],
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
  },
  {
    name: "Fashion Avenue Atrium",
    capacity: "3,000",
    type: "Fashion Shows & Brand Launches",
    features: ["Runway-ready", "Media center", "Luxury backdrop"],
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    name: "Waterfront Promenade",
    capacity: "20,000+",
    type: "Product Launches & Festivals",
    features: ["Outdoor space", "Dubai Fountain views", "Flexible layout"],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Events & Partnerships
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            A Global Platform
            <br />
            For Brands & Experiences
          </h2>
        </Reveal>

        {/* Main Feature */}
        <Reveal className="group relative mb-16 overflow-hidden rounded-[2.5rem]">
          <div className="relative h-[65vh] md:h-[85vh]">
            <Image
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
              alt="Events"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
                Global Activations
              </p>

              <h3 className="mb-6 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
                Where The World&apos;s Biggest Brands Create Cultural Moments
              </h3>

              <p className="max-w-xl text-lg text-neutral-300">
                From luxury launches and celebrity appearances to immersive
                activations and live entertainment, Dubai Mall is built to
                host experiences at global scale.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Venues Grid */}
        <div className="mb-12">

          <Reveal className="mb-12">
            <h3 className="text-2xl font-bold leading-[1] tracking-[-0.03em] md:text-3xl">
              Event Venues & Capabilities
            </h3>
          </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
            {venues.map((venue, index) => (
              <Reveal
                key={index}
                delay={index * 0.1}
                className="group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <h4 className="mb-2 text-xl font-semibold tracking-[-0.03em]">
                    {venue.name}
                  </h4>
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
                    {venue.type}
                  </p>
                  <p className="mb-4 text-2xl font-bold text-white">
                    {venue.capacity}
                  </p>
                  <ul className="space-y-1">
                    {venue.features.map((feature, i) => (
                      <li key={i} className="text-sm text-neutral-400">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {stats.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="rounded-[2rem] border border-white/5 bg-white/[0.03] p-6 md:p-10 backdrop-blur-xl"
            >
              <h3 className="mb-4 text-4xl tracking-[-0.03em] md:text-5xl font-bold">
                {item.value}
              </h3>

              <p className="text-lg text-neutral-400">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="flex flex-col items-center justify-center rounded-[2.5rem] border border-white/5 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Partner With Us
          </p>

          <h3 className="mb-6 max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
            Bring Your Next Global Experience To Dubai Mall
          </h3>

          <p className="mb-10 max-w-2xl text-lg text-neutral-400">
            Unlock access to one of the world&apos;s most influential audiences
            through unforgettable activations and premium destination exposure.
          </p>

          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
            Start Partnership Conversation
          </button>
        </Reveal>

      </div>
    </section>
  );
}