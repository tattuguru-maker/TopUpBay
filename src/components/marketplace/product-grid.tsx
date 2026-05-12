"use client";

import { useState } from "react";
import { products } from "@/lib/data/products";
import { ProductCard } from "./product-card";
import { CategoryTabs } from "./category-tabs";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="container-page py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="heading-h2 text-[var(--color-fg)]">Popular Products</h2>
        </div>

        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="body-lg text-[var(--color-fg-muted)] text-center py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
