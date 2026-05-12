"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RecentProduct {
  id: string;
  name: string;
  image: string;
  region: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  fromPrice: number;
  currency: string;
}

const recentProducts: RecentProduct[] = [
  {
    id: "r1",
    name: "Elden Ring (PC) - Steam - Digital Key",
    image: "/images/products/elden-ring.webp",
    region: "GLOBAL",
    price: 28.52,
    fromPrice: 28.52,
    currency: "$",
  },
  {
    id: "r2",
    name: "Forza Horizon 6 (Global) (PC / Xbox Series X|S) - ...",
    image: "/images/products/forza-horizon-6.jpg",
    region: "GLOBAL",
    price: 36.21,
    fromPrice: 38.52,
    originalPrice: 59.99,
    discount: 36,
    currency: "$",
  },
  {
    id: "r3",
    name: "Minecraft: Java & Bedrock Edition (PC) - ...",
    image: "/images/products/minecraft.webp",
    region: "GLOBAL",
    price: 18.99,
    fromPrice: 18.99,
    currency: "$",
  },
  {
    id: "r4",
    name: "Helldivers 2 (PC) - Steam - Digital Key",
    image: "/images/products/helldivers-2.webp",
    region: "GLOBAL",
    price: 16.79,
    fromPrice: 18.25,
    originalPrice: 39.99,
    discount: 47,
    currency: "$",
  },
  {
    id: "r5",
    name: "Satisfactory (PC) - Steam - Digital Key",
    image: "/images/products/satisfactory.webp",
    region: "GLOBAL",
    price: 26.25,
    fromPrice: 27.93,
    originalPrice: 49.99,
    discount: 46,
    currency: "$",
  },
  {
    id: "r6",
    name: "Valheim (PC) - Steam - Digital Key",
    image: "/images/products/valheim.webp",
    region: "GLOBAL",
    price: 12.99,
    fromPrice: 14.5,
    currency: "$",
  },
  {
    id: "r7",
    name: "Ready or Not (PC) - Steam - Digital Key",
    image: "/images/products/ready-or-not.webp",
    region: "GLOBAL",
    price: 22.5,
    fromPrice: 25.0,
    originalPrice: 39.99,
    discount: 38,
    currency: "$",
  },
  {
    id: "r8",
    name: "Borderlands 3 (PC) - Steam - Digital Key",
    image: "/images/products/borderlands-3.webp",
    region: "GLOBAL",
    price: 7.99,
    fromPrice: 9.92,
    originalPrice: 59.99,
    discount: 83,
    currency: "$",
  },
  {
    id: "r9",
    name: "Slay the Spire (PC) - Steam - Digital Key",
    image: "/images/products/slay-the-spire.webp",
    region: "GLOBAL",
    price: 8.5,
    fromPrice: 10.78,
    originalPrice: 24.99,
    discount: 57,
    currency: "$",
  },
  {
    id: "r10",
    name: "Gotham Knights (PC) - Steam - Digital Key",
    image: "/images/products/gotham-knights.webp",
    region: "GLOBAL",
    price: 6.99,
    fromPrice: 8.25,
    originalPrice: 49.99,
    discount: 84,
    currency: "$",
  },
];

export function RecentlyViewed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="container-page py-6">
      <h2 className="heading-h2 text-[var(--color-fg)] mb-5">
        Recently viewed
      </h2>

      <div className="relative group/carousel">
        {/* Scroll arrows — desktop */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-strong)] items-center justify-center hover:bg-[var(--color-bg-tertiary)] transition-colors opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-[var(--color-fg)]" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-strong)] items-center justify-center hover:bg-[var(--color-bg-tertiary)] transition-colors opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-[var(--color-fg)]" />
        </button>

        {/* Scrollable product row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-2 -mx-1 px-1"
        >
          {recentProducts.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group flex-shrink-0 w-[170px] sm:w-[190px] lg:w-[210px] rounded-2xl bg-[var(--color-bg-secondary)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="210px"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col gap-1.5">
                {/* Title */}
                <h3 className="text-[13px] font-medium text-[var(--color-fg)] line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </h3>

                {/* Region */}
                <span className="text-[11px] font-bold tracking-wider text-[var(--color-green)] uppercase">
                  {product.region}
                </span>

                {/* Price badge */}
                <div className="flex">
                  <span className="inline-flex items-center gap-1.5 bg-[var(--color-purple-deep)] text-white text-[12px] font-semibold pl-2 pr-3 py-1.5 rounded-lg">
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        P
                      </text>
                    </svg>
                    from {product.currency}
                    {product.fromPrice.toFixed(2)}
                  </span>
                </div>

                {/* Price row */}
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] text-[var(--color-fg-muted)]">
                    from
                  </span>
                  <span className="text-[18px] font-bold text-[var(--color-fg)]">
                    {product.currency}
                    {product.price.toFixed(2)}
                  </span>
                  {product.discount && (
                    <span className="text-[11px] font-bold text-white bg-[var(--color-pink)] px-1.5 py-0.5 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
