import { Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container-page py-12 lg:py-20">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <h1 className="heading-display text-[var(--color-fg)]">
          Recommended For You
        </h1>
        <p className="body-lg text-[var(--color-fg-muted)] max-w-xl">
          Instant delivery on game top-ups, gift cards, and digital subscriptions.
          Best prices, trusted sellers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" size="lg">
            Browse All Products
          </Button>
          <Button variant="filled" size="lg">
            How It Works
          </Button>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
        <div className="surface-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-primary)]/10 flex items-center justify-center">
            <Zap className="h-6 w-6 text-[var(--color-primary)]" />
          </div>
          <h3 className="body-lg font-semibold text-[var(--color-fg)]">Instant Delivery</h3>
          <p className="body-sm text-[var(--color-fg-muted)]">Get your codes within seconds after payment</p>
        </div>
        <div className="surface-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-green)]/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-[var(--color-green)]" />
          </div>
          <h3 className="body-lg font-semibold text-[var(--color-fg)]">Buyer Protection</h3>
          <p className="body-sm text-[var(--color-fg-muted)]">100% money-back guarantee on all purchases</p>
        </div>
        <div className="surface-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-secondary)]/10 flex items-center justify-center">
            <Clock className="h-6 w-6 text-[var(--color-secondary)]" />
          </div>
          <h3 className="body-lg font-semibold text-[var(--color-fg)]">24/7 Support</h3>
          <p className="body-sm text-[var(--color-fg-muted)]">Our team is always ready to help you</p>
        </div>
      </div>
    </section>
  );
}
