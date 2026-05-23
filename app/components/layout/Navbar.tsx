"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  {
    label: "Why Mall",
    href: "why-mall",
  },
  {
    label: "Retail",
    href: "retail",
  },
  {
    label: "Luxury",
    href: "luxury",
  },
  {
    label: "Dining",
    href: "dining",
  },
  {
    label: "Entertainment",
    href: "entertainment",
  },
  {
    label: "Events",
    href: "events",
  },
  {
    label: "Venues",
    href: "venues",
  },
  {
    label: "Leasing",
    href: "leasing",
  },
  {
    label: "Partnership",
    href: "sponsorship",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section.id);
          setScrolled(window.scrollY > 40);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[95%] max-w-5xl -translate-x-1/2">

      <div className={clsx(
        "flex items-center justify-between rounded-full px-5 py-3 md:px-6 md:py-4 transition-all duration-500",
        scrolled
          ? "border border-white/10 bg-black/40 backdrop-blur-xl"
          : "border border-transparent bg-transparent"
      )}
      >

        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white transition-opacity duration-300 hover:opacity-80"
        >
          Dubai Mall
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={clsx(
                "text-sm transition-all duration-300 hover:-translate-y-[1px]",
                activeSection === link.href
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}

        </nav>

      </div>

    </header >
  );
}