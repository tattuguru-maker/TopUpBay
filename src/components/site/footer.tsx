export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="heading-h4 text-[var(--color-fg)] mb-4">
              Top<span className="text-[var(--color-primary)]">Up</span>Bay
            </h3>
            <p className="body-base text-[var(--color-fg-muted)]">
              Your trusted destination for instant game top-ups, gift cards, and digital keys.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="body-lg font-semibold text-[var(--color-fg)] mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Game Top-Ups</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Gift Cards</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Subscriptions</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Game Keys</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="body-lg font-semibold text-[var(--color-fg)] mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Help Center</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">FAQs</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="body-lg font-semibold text-[var(--color-fg)] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="body-base text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
          <p className="body-sm text-[var(--color-fg-muted)] text-center">
            &copy; {new Date().getFullYear()} TopUpBay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
