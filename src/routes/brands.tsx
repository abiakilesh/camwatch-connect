import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { BrandGrid, CtaBand } from "@/components/Sections";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "CCTV Brands – CP PLUS, Hikvision, Dahua & More | SHOPYINDIA" },
      { name: "description", content: "Explore CP PLUS, Hikvision, Prama, Dahua, Honeywell, Matrix, Secureye and Godrej security products in Coimbatore." },
      { property: "og:title", content: "Brands – SHOPYINDIA CCTV" },
      { property: "og:description", content: "Security products from popular brands." },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Explore Security Products from Popular Brands" sub="Ask us about current models and availability from these brands." />
      <section className="py-16"><div className="mx-auto max-w-7xl px-4"><BrandGrid /></div></section>
      <CtaBand />
    </>
  ),
});
