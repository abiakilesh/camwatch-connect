import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { ServiceGrid, CtaBand } from "@/components/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "CCTV Installation in Saravanampatti | SHOPYINDIA Services" },
      { name: "description", content: "CCTV installation, maintenance, DVR/NVR setup, remote viewing, fire alarm and biometric setup in Coimbatore." },
      { property: "og:title", content: "Services – SHOPYINDIA CCTV" },
      { property: "og:description", content: "Professional CCTV and security services in Coimbatore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Our Services" sub="From choosing the right camera to installation and support. Some services are subject to availability — contact us to confirm." />
      <section className="py-16"><div className="mx-auto max-w-7xl px-4"><ServiceGrid /></div></section>
      <CtaBand />
    </>
  ),
});
