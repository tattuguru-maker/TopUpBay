"use client";

import { cn } from "@/lib/cn";
import { categories } from "@/lib/data/products";

interface CategoryTabsProps {
  active: string;
  onChange: (id: string) => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "px-4 py-2 rounded-[var(--radius-md)] body-base font-medium whitespace-nowrap transition-colors",
            active === cat.id
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-bg-secondary)] text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-fg)]"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
