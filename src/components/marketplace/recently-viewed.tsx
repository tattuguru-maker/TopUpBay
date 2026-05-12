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
              className="group flex-shrink-0 w-[170px] sm:w-[200px] lg:w-[220px]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)] mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="220px"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-[var(--color-fg)] line-clamp-2 mb-1 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                {product.name}
              </h3>

              {/* Region */}
              <span className="text-[11px] font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">
                {product.region}
              </span>

              {/* Price badge */}
              <div className="mt-1.5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-[var(--color-pink)] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H11.5v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.65c.09 1.71 1.37 2.66 2.85 2.97V19h1.72v-1.67c1.52-.29 2.72-1.16 2.72-2.74 0-2.2-1.88-2.95-3.63-3.45z" />
                  </svg>
                  from {product.currency}
                  {product.fromPrice.toFixed(2)}
                </span>
              </div>

              {/* Price row */}
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-xs text-[var(--color-fg-muted)]">
                  from
                </span>
                <span className="text-base font-bold text-[var(--color-fg)]">
                  {product.currency}
                  {product.price.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xs font-semibold text-[var(--color-pink)] bg-[var(--color-pink)]/10 px-1.5 py-0.5 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
