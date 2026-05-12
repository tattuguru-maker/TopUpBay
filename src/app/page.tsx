import { HeroSection } from "@/components/marketplace/hero-section";
import { CategoryCards } from "@/components/marketplace/category-cards";
import { RecentlyViewed } from "@/components/marketplace/recently-viewed";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <RecentlyViewed />
    </>
  );
}
