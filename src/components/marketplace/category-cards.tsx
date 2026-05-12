import Image from "next/image";

const categories = [
  {
    label: "ROBLOX",
    sublabel: "GIFT CARDS",
    image: "/images/categories/roblox.webp",
    mobileImage: "/images/categories/roblox-mobile.webp",
    href: "#",
    color: "from-purple-900/80",
  },
  {
    label: "RANDOM GAME KEYS",
    sublabel: "GAMES",
    image: "/images/categories/random-keys.webp",
    mobileImage: "/images/categories/random-keys-mobile.webp",
    href: "#",
    color: "from-amber-900/80",
  },
  {
    label: "XBOX",
    sublabel: "SUBSCRIPTIONS",
    image: "/images/categories/xbox.webp",
    mobileImage: "/images/categories/xbox.webp",
    href: "#",
    color: "from-green-900/80",
  },
  {
    label: "PlayStation Store",
    sublabel: "GIFT CARDS",
    image: "/images/categories/playstation-store.webp",
    mobileImage: "/images/categories/playstation-store.webp",
    href: "#",
    color: "from-blue-900/80",
    mobileOnly: true,
  },
];

export function CategoryCards() {
  return (
    <section className="container-page py-3">
      {/* Desktop: 3 cards in a row (hide PlayStation on desktop) */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {categories
          .filter((c) => !c.mobileOnly)
          .map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="relative rounded-2xl overflow-hidden aspect-[3/1] group"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="33vw"
              />
            </a>
          ))}
      </div>

      {/* Mobile: 2x2 grid including PlayStation */}
      <div className="grid md:hidden grid-cols-2 gap-3">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className="relative rounded-xl overflow-hidden aspect-[4/3] group"
          >
            <Image
              src={cat.mobileImage}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="50vw"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
