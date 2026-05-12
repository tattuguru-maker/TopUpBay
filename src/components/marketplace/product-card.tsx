import type { Product } from "@/lib/data/products";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group surface-card-hover overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)] flex items-center justify-center overflow-hidden">
        <div className="w-16 h-16 rounded-[var(--radius-xl)] bg-[var(--color-border-strong)] flex items-center justify-center">
          <span className="text-2xl font-bold text-[var(--color-fg-muted)]">
            {product.name.charAt(0)}
          </span>
        </div>

        {/* Discount badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white body-sm font-semibold px-2 py-0.5 rounded-[var(--radius-sm)]">
            -{product.discount}%
          </span>
        )}

        {/* Popular/Best Seller badge */}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-[var(--color-purple)] text-white body-sm font-semibold px-2 py-0.5 rounded-[var(--radius-sm)]">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Platform tag */}
        <span className="body-sm text-[var(--color-fg-muted)] bg-[var(--color-bg-tertiary)] self-start px-2 py-0.5 rounded-[var(--radius-sm)]">
          {product.platform}
        </span>

        {/* Title */}
        <h3 className="body-lg font-semibold text-[var(--color-fg)] line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-[#f7c948] text-[#f7c948]" />
          <span className="body-sm text-[var(--color-fg-muted)]">{product.rating}</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="body-lg font-bold text-[var(--color-fg)]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="body-sm text-[var(--color-fg-muted)] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="p-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
