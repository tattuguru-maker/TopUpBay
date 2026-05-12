"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    desktop: "/images/banners/invincible-vs.webp",
    mobile: "/images/banners/invincible-vs-mobile.webp",
    alt: "Invincible VS — Power Unleashed",
    href: "#",
  },
  {
    desktop: "/images/banners/pragmata.webp",
    mobile: "/images/banners/pragmata-mobile.webp",
    alt: "Pragmata — Cosmic Survival",
    href: "#",
  },
  {
    desktop: "/images/banners/heroes-olden-era.webp",
    mobile: "/images/banners/heroes-olden-era-mobile.webp",
    alt: "Heroes of Might and Magic — Olden Era",
    href: "#",
  },
  {
    desktop: "/images/banners/far-far-west.webp",
    mobile: "/images/banners/far-far-west-mobile.webp",
    alt: "Far Far West — Rule the Frontier",
    href: "#",
  },
  {
    desktop: "/images/banners/crimson-desert.webp",
    mobile: "/images/banners/crimson-desert-mobile.webp",
    alt: "Crimson Desert",
    href: "#",
  },
  {
    desktop: "/images/banners/lego-batman.webp",
    mobile: "/images/banners/lego-batman-mobile.webp",
    alt: "LEGO Batman — Legacy of the Dark Knight",
    href: "#",
  },
];

const sideBanners = [
  {
    image: "/images/banners/forza-horizon-6.png",
    alt: "Forza Horizon 6 — Pre-Order",
    href: "#",
  },
  {
    image: "/images/banners/playstation-store.webp",
    alt: "PlayStation Store — Gift Cards",
    href: "#",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="container-page pt-4 pb-2">
      <div className="flex gap-4">
        {/* Main carousel */}
        <div className="relative flex-1 min-w-0">
          <div className="relative aspect-[16/7] lg:aspect-[16/7] rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)]">
            {slides.map((slide, i) => (
              <a
                key={slide.alt}
                href={slide.href}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Desktop image */}
                <Image
                  src={slide.desktop}
                  alt={slide.alt}
                  fill
                  className="object-cover hidden md:block"
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  priority={i === 0}
                />
                {/* Mobile image */}
                <Image
                  src={slide.mobile}
                  alt={slide.alt}
                  fill
                  className="object-cover md:hidden"
                  sizes="100vw"
                  priority={i === 0}
                />
              </a>
            ))}

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-white w-5"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side banners — desktop only */}
        <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
          {sideBanners.map((banner) => (
            <a
              key={banner.alt}
              href={banner.href}
              className="relative flex-1 rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] hover:opacity-90 transition-opacity"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
