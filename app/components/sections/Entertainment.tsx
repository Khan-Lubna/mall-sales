"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const attractions = [
  {
    title: "Dubai Aquarium",
    description:
      "One of the world’s largest suspended aquariums attracting millions annually.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  },
  {
    title: "Olympic Ice Rink",
    description:
      "A full-scale Olympic-sized ice rink creating year-round entertainment.",
    image:
      "https://images.unsplash.com/photo-1515703407324-5f753afd8be8",
  },
  {
    title: "VR Park",
    description:
      "Immersive virtual reality experiences blending retail with entertainment.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420",
  },
];

export default function Entertainment() {
  return (
    <section
      id="entertainment"
      className="relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black px-6 py-14 md:py-24"
    >

      <div className="mx-auto max-w-7xl">

        <Reveal className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Attractions & Entertainment
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            More Than Shopping.
            <br />
            A Destination Experience.
          </h2>
        </Reveal>

        <Reveal className="group relative mb-10 overflow-hidden rounded-[2.5rem]">

          <div className="relative h-[65vh] md:h-[80vh]">

            <Image
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25"
              alt="Entertainment"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-xl">

              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
                Global Entertainment Hub
              </p>

              <h3 className="mb-6 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-5xl">
                Entertainment That Drives Foot Traffic At Global Scale
              </h3>

              <p className="text-lg text-neutral-300">
                From world-class attractions to immersive experiences,
                Dubai Mall transforms retail into destination entertainment.
              </p>

            </div>

          </div>
        </Reveal>

        {/* Attraction Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          {attractions.map((item, index) => (

            <Reveal
              key={index}
              delay={index * 0.15}
              className="group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md"
            >

              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-neutral-400">
                  {item.description}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}