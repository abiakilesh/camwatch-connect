import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Home, Lightbulb, Headphones } from "lucide-react";
import install from "@/assets/install.jpg";
import { PageHero } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/Sections";

const points = [
  { t: "Our Product Range", d: "CCTV cameras, recorders, wireless surveillance, fire alarms, biometrics and power backup.", i: Boxes },
  { t: "Home and Business Security", d: "Solutions for homes, shops, offices and commercial establishments.", i: Home },
  { t: "Product Selection Assistance", d: "We help match products to your needs, layout and budget.", i: Lightbulb },
  { t: "Contact Our Team", d: "Ask about models, installation options and pricing.", i: Headphones },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SHOPYINDIA | CCTV Sales & Services Coimbatore" },
      { name: "description", content: "SHOPYINDIA is your local partner for CCTV and security solutions in Saravanampatti, Coimbatore." },
      { property: "og:title", content: "About SHOPYINDIA" },
      { property: "og:description", content: "Your local partner for security solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Your Local Partner for Security Solutions" sub="CCTV Sales & Services in Saravanampatti, Coimbatore." />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>SHOPYINDIA CCTV Sales & Services provides security product solutions for homes, shops, offices, and commercial establishments. Our product range includes CCTV cameras, recording systems, wireless surveillance, fire alarm systems, biometric devices, and power backup solutions.</p>
            <p>We help customers explore suitable products based on their security needs, property layout, and budget. Contact our team to enquire about available models, installation options, and pricing.</p>
            <Button asChild variant="cta" size="lg"><Link to="/contact">Contact Our Team</Link></Button>
          </div>
          <img src={install} alt="Technician installing a dome CCTV camera on an office ceiling" width={1200} height={800} loading="lazy" className="rounded-3xl shadow-card" />
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.t} className="rounded-2xl border bg-card p-6 shadow-card">
              <p.i className="h-8 w-8 text-accent" />
              <h2 className="mt-3 font-bold text-primary">{p.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
