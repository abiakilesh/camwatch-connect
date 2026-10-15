import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { CtaBand } from "@/components/Sections";
import { BrandShowcase } from "@/components/BrandShowcase";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "CCTV Brands – CP PLUS, Hikvision, Dahua & More | SHOPYINDIA" },
      { name: "description", content: "Explore CP PLUS, Hikvision, Prama, Dahua, Honeywell, Matrix, Secureye and Godrej security products in Coimbatore." },
      { property: "og:title", content: "Brands – SHOPYINDIA CCTV" },
      { property: "og:description", content: "Security products from popular brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Our CCTV & Security Brands" sub="Explore the advantages and everyday uses of cameras and security solutions from popular brands." />
      <BrandShowcase />
      <CtaBand />
    </>
  ),
});
