export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  platform: string;
  rating: number;
  badge?: string;
}

export const categories = [
  { id: "all", label: "All" },
  { id: "game-topup", label: "Game Top-Ups" },
  { id: "gift-cards", label: "Gift Cards" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "game-keys", label: "Game Keys" },
  { id: "software", label: "Software" },
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "PUBG Mobile UC",
    category: "game-topup",
    image: "/images/pubg.svg",
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    platform: "Mobile",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Free Fire Diamonds",
    category: "game-topup",
    image: "/images/freefire.svg",
    price: 2.99,
    originalPrice: 3.99,
    discount: 25,
    platform: "Mobile",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Steam Wallet Code",
    category: "gift-cards",
    image: "/images/steam.svg",
    price: 10.0,
    platform: "PC",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Xbox Game Pass Ultimate",
    category: "subscriptions",
    image: "/images/xbox.svg",
    price: 12.99,
    originalPrice: 14.99,
    discount: 13,
    platform: "Xbox / PC",
    rating: 4.9,
    badge: "Popular",
  },
  {
    id: "5",
    name: "PlayStation Plus Premium",
    category: "subscriptions",
    image: "/images/playstation.svg",
    price: 15.99,
    originalPrice: 17.99,
    discount: 11,
    platform: "PlayStation",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Valorant Points",
    category: "game-topup",
    image: "/images/valorant.svg",
    price: 9.99,
    platform: "PC",
    rating: 4.6,
  },
  {
    id: "7",
    name: "Netflix Gift Card",
    category: "gift-cards",
    image: "/images/netflix.svg",
    price: 25.0,
    platform: "All Devices",
    rating: 4.9,
  },
  {
    id: "8",
    name: "Spotify Premium",
    category: "subscriptions",
    image: "/images/spotify.svg",
    price: 9.99,
    originalPrice: 11.99,
    discount: 17,
    platform: "All Devices",
    rating: 4.7,
  },
  {
    id: "9",
    name: "Genshin Impact Genesis Crystals",
    category: "game-topup",
    image: "/images/genshin.svg",
    price: 14.99,
    originalPrice: 19.99,
    discount: 25,
    platform: "Multi-platform",
    rating: 4.5,
  },
  {
    id: "10",
    name: "Roblox Gift Card",
    category: "gift-cards",
    image: "/images/roblox.svg",
    price: 10.0,
    platform: "Multi-platform",
    rating: 4.8,
  },
  {
    id: "11",
    name: "Discord Nitro",
    category: "subscriptions",
    image: "/images/discord.svg",
    price: 9.99,
    originalPrice: 12.99,
    discount: 23,
    platform: "All Devices",
    rating: 4.6,
  },
  {
    id: "12",
    name: "Minecraft Java Edition",
    category: "game-keys",
    image: "/images/minecraft.svg",
    price: 19.99,
    originalPrice: 26.95,
    discount: 26,
    platform: "PC",
    rating: 4.9,
    badge: "Best Seller",
  },
];
