import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-secondary)]">
            <Menu className="h-5 w-5 text-[var(--color-fg)]" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="heading-h3 text-[var(--color-fg)]">
              Top<span className="text-[var(--color-primary)]">Up</span>Bay
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
            Game Top-Ups
          </Link>
          <Link href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
            Gift Cards
          </Link>
          <Link href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
            Subscriptions
          </Link>
          <Link href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
            Game Keys
          </Link>
        </nav>

        {/* Search + Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-3 py-2 border border-[var(--color-border)]">
            <Search className="h-4 w-4 text-[var(--color-fg-muted)]" />
            <input
              type="text"
              placeholder="Search games, cards..."
              className="bg-transparent body-base text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] outline-none w-48"
            />
          </div>
          <button className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-secondary)] transition-colors">
            <ShoppingCart className="h-5 w-5 text-[var(--color-fg-muted)]" />
          </button>
          <button className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-secondary)] transition-colors">
            <User className="h-5 w-5 text-[var(--color-fg-muted)]" />
          </button>
        </div>
      </div>
    </header>
  );
}
