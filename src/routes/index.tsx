import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-cctv.jpg";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/Layout";
import { CategoryGrid, Resolutions, BrandGrid, Packages, ServiceGrid, CtaBand } from "@/components/Sections";
import { trust } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHOPYINDIA | CCTV Camera Shop in Coimbatore – Sales & Installation" },
      { name: "description", content: "CCTV camera sales and installation in Saravanampatti, Coimbatore. HD, IP, Wi-Fi & solar cameras, DVR/NVR, fire alarms, biometrics and UPS." },
      { property: "og:title", content: "SHOPYINDIA – CCTV Sales & Services, Coimbatore" },
      { property: "og:description", content: "Smart security solutions for your home & business in Coimbatore." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold tracking-widest text-accent">CCTV SALES & SERVICES · COIMBATORE</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-primary md:text-6xl">
              Smart Security Solutions for Your <span className="text-accent">Home & Business</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Discover reliable CCTV cameras, advanced surveillance systems, fire safety equipment, biometric access control, and complete security solutions from SHOPYINDIA.
            </p>
            <p className="mt-3 font-semibold text-primary">Quality Products | Professional Installation | Reliable Service</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg"><Link to="/products">Explore Products</Link></Button>
              <Button asChild variant="navyOutline" size="lg"><Link to="/contact">Get a Free Quote</Link></Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a href={SITE.phonePrimary.tel} className="flex items-center gap-2 text-primary hover:text-accent"><Phone className="h-4 w-4 text-accent" />Call: {SITE.phonePrimary.display}</a>
              <a href={waLink("Hello SHOPYINDIA, I would like to enquire about CCTV cameras.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-accent"><MessageCircle className="h-4 w-4 text-accent" />WhatsApp: {SITE.phoneSecondary.display}</a>
            </div>
          </div>
          <img src={hero} alt="Navy and white bullet CCTV security camera mounted on a wall" width={1200} height={1008} className="rounded-3xl shadow-card" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-14 md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
              <t.icon className="h-6 w-6 shrink-0 text-accent" /><span className="text-sm font-bold text-primary">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Our Products" title="Security Products for Every Need" />
          <CategoryGrid limit={6} />
          <div className="mt-10 text-center"><Button asChild variant="navyOutline" size="lg"><Link to="/products">View All 14 Categories</Link></Button></div>
        </div>
      </section>

      <Resolutions />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Brands" title="Explore Security Products from Popular Brands" />
          <BrandGrid />
        </div>
      </section>

      <div className="bg-secondary"><Packages /></div>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Services" title="Complete Security Services" />
          <ServiceGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
