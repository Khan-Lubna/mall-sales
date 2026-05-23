"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const venues = [
  {
    name: "Dubai Mall Performing Arts Center",
    capacity: "2,500",
    type: "Theater & Concert Hall",
    features: [
      "State-of-the-art acoustics",
      "Multi-configuration seating",
      "Professional production facilities",
      "VIP hospitality suites",
    ],
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    name: "Exposition & Convention Hub",
    capacity: "10,000+",
    type: "Trade Shows & Conventions",
    features: [
      "15,000 sq ft column-free space",
      "Modular exhibition halls",
      "Business center & meeting rooms",
      "Premium catering facilities",
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    name: "Fashion Avenue Runway Hall",
    capacity: "1,200",
    type: "Fashion Shows & Brand Launches",
    features: [
      "Seasonal runways",
      "Professional lighting",
      "Media & VIP areas",
      "Luxury retail integration",
    ],
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
];

export default function Venues() {
  return (
    <section
      id="venues"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Venue Solutions
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Purpose-Built Spaces
            <br />
            For Every Experience
          </h2>
        </Reveal>

        {/* Featured Venue */}
        <Reveal className="group relative mb-16 overflow-hidden rounded-[2.5rem]">
          <div className="relative h-[65vh] md:h-[85vh]">
            <Image
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
              alt="Performing Arts Center"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
                World-Class Venues
              </p>

              <h3 className="mb-6 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
                Designed For Scale,
                <br />
                Built For Impact
              </h3>

              <p className="max-w-xl text-lg text-neutral-300">
                Each venue offers specialized infrastructure to host everything
                from intimate brand activations to large-scale international
                productions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Venues Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {venues.map((venue, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md"
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h4 className="mb-2 text-xl font-semibold tracking-[-0.03em]">
                  {venue.name}
                </h4>
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
                  {venue.type}
                </p>
                <p className="mb-6 text-2xl font-bold text-white">
                  {venue.capacity} capacity
                </p>

                <ul className="mb-6 flex-1 space-y-2">
                  {venue.features.map((feature, i) => (
                    <li key={i} className="text-sm text-neutral-400">
                      • {feature}
                    </li>
                  ))}
                </ul>

                <button className="self-start rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black">
                  Book Venue
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Supporting Infrastructure */}
        <Reveal className="mt-16 rounded-[2rem] border border-white/5 bg-white/[0.03] p-6 md:p-12 backdrop-blur-md">
          <h3 className="mb-8 text-2xl font-bold leading-[1] tracking-[-0.03em] md:text-3xl">
            Supporting Infrastructure
          </h3>

        <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-white">
                Production Services
              </h4>
              <p className="text-sm text-neutral-400">
                In-house AV, lighting, staging, and technical support teams
                available for all events.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-white">
                Security & Logistics
              </h4>
              <p className="text-sm text-neutral-400">
                Dedicated security teams, crowd management, and logistics
                coordination included.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-white">
                Marketing Support
              </h4>
              <p className="text-sm text-neutral-400">
                Integrated promotion across Dubai Mall channels reaching 100M+
                annual visitors.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}