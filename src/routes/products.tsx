import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { CategoryGrid, Resolutions, Packages, CtaBand } from "@/components/Sections";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "CCTV Cameras & Security Products | SHOPYINDIA Coimbatore" },
      { name: "description", content: "HD, IP, Wi-Fi, solar, 360° CCTV cameras, DVR/NVR, fire alarms, biometric systems, UPS and networking products in Coimbatore." },
      { property: "og:title", content: "Products – SHOPYINDIA CCTV" },
      { property: "og:description", content: "Browse 14 categories of CCTV and security products and enquire on WhatsApp." },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Our Products" sub="CCTV cameras, recorders, fire safety, biometrics, power backup and networking — tap any card to enquire on WhatsApp." />
      <section className="py-16"><div className="mx-auto max-w-7xl px-4"><CategoryGrid /></div></section>
      <Resolutions />
      <Packages />
      <CtaBand />
    </>
  ),
});
