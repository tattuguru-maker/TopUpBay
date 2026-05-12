"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
  Home,
  Store,
  LayoutGrid,
} from "lucide-react";

const navLinks = [
  { label: "Games", href: "#", hasDropdown: true },
  { label: "Gift Cards", href: "#", hasDropdown: true },
  { label: "Gaming Gift Cards", href: "#", hasDropdown: true },
  { label: "Subscriptions", href: "#", hasDropdown: true },
  { label: "Software", href: "#", hasDropdown: true },
  { label: "Store", href: "#" },
  { label: "Upcoming", href: "#" },
  { label: "Topups", href: "#" },
];

const categoryTabs = [
  { label: "Games", href: "#" },
  { label: "Giftcards", href: "#" },
  { label: "Xbox", href: "#" },
  { label: "PSN", href: "#" },
  { label: "Steam", href: "#" },
  { label: "Nintendo", href: "#" },
];

export function Header() {
  return (
    <>
      {/* ───── Desktop Header ───── */}
      <header className="sticky top-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        {/* Top bar */}
        <div className="container-page">
          {/* Desktop top row */}
          <div className="hidden lg:flex h-16 items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/driffle-logo.svg"
                alt="TopUpBay"
                width={120}
                height={28}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Search bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-2.5">
                <Search className="h-5 w-5 text-[var(--color-fg-muted)] shrink-0" />
                <input
                  type="text"
                  placeholder="Search for games, gift cards and more"
                  className="bg-transparent text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] outline-none w-full"
                />
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4 shrink-0">
              <button className="flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                <span className="text-base">🇺🇸</span>
                <span>USD &bull; English</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors">
                <ShoppingCart className="h-5 w-5 text-[var(--color-fg-muted)]" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors">
                <svg
                  className="h-5 w-5 text-[var(--color-fg-muted)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <Link
                href="#"
                className="bg-[var(--color-purple)] hover:bg-[var(--color-purple-deep)] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Desktop navigation row */}
          <nav className="hidden lg:flex items-center gap-1 h-10 -mb-px overflow-x-auto scrollbar-none">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] whitespace-nowrap transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </Link>
            ))}
            <Link
              href="#"
              className="flex items-center gap-1 px-3 py-2 text-sm whitespace-nowrap transition-colors"
            >
              Save with{" "}
              <span className="text-[var(--color-purple)] font-bold">plus</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] whitespace-nowrap transition-colors"
            >
              Explore eSIMs 📱
            </Link>
          </nav>

          {/* ───── Mobile Header ───── */}
          <div className="flex lg:hidden flex-col">
            {/* Mobile top row */}
            <div className="flex items-center justify-between h-14 gap-3">
              <button className="p-2 -ml-2 rounded-lg hover:bg-[var(--color-bg-secondary)]">
                <Menu className="h-5 w-5 text-[var(--color-fg)]" />
              </button>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/driffle-logo.svg"
                  alt="TopUpBay"
                  width={100}
                  height={24}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-[var(--color-bg-secondary)]">
                  <svg className="h-5 w-5 text-[var(--color-fg-muted)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-13h4V22H4.5A1.5 1.5 0 0 1 3 20.5ZM20.5 2H10.47L12 3.5h8.5V18l1.5 1.53V3.5A1.5 1.5 0 0 0 20.5 2ZM3.55 2 2 3.55l1 1V7h3.45L12 12.55V22h1.5v-7.95l5.55 5.55 1.41-1.41L3.55 2Z" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--color-bg-secondary)]">
                  <User className="h-5 w-5 text-[var(--color-fg-muted)]" />
                </button>
              </div>
            </div>

            {/* Mobile search bar */}
            <div className="pb-3">
              <div className="flex items-center gap-2 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-3 py-2.5">
                <Search className="h-4 w-4 text-[var(--color-fg-muted)] shrink-0" />
                <input
                  type="text"
                  placeholder="Search for games, gift cards and more"
                  className="bg-transparent text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] outline-none w-full"
                />
              </div>
            </div>

            {/* Mobile category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-3 -mx-4 px-4">
              {categoryTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className="px-4 py-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-fg)] whitespace-nowrap hover:border-[var(--color-border-strong)] transition-colors"
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ───── Mobile Bottom Navigation ───── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]">
        <div className="flex items-center justify-around h-14">
          <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[var(--color-fg)]">
            <Home className="h-5 w-5" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[var(--color-fg-muted)]">
            <Store className="h-5 w-5" />
            <span className="text-[10px] font-medium">Store</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[var(--color-fg-muted)]">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-[10px] font-medium">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[var(--color-fg-muted)]">
            <LayoutGrid className="h-5 w-5" />
            <span className="text-[10px] font-medium">Categories</span>
          </button>
        </div>
      </nav>
    </>
  );
}
