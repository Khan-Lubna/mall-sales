import Hero from "@/components/sections/Hero";
import WhyMall from "@/components/sections/WhyMall";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Venues from "@/components/sections/Venues";
import Leasing from "@/components/sections/Leasing";
import Sponsorship from "@/components/sections/Sponsorship";
import CTA from "@/components/sections/CTA";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import ParallaxShowcase from "@/components/sections/ParallaxShowcase";
import Loader from "@/components/layout/Loader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <SmoothScroll />
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhyMall />
      <Retail />
      <ParallaxShowcase />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
      <Venues />
      <Leasing />
      <Sponsorship />
      <CTA />
    </main>
  );
}