import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/Layout";
import { categories, brands, services } from "@/lib/data";
import { SITE, waLink, productMessage } from "@/lib/site";

export function CategoryGrid({ limit }: { limit?: number }) {
  const list = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => (
        <article key={c.name} className="group flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
          <div className={`mb-5 flex h-28 items-center justify-center rounded-xl ${i % 2 ? "bg-primary" : "bg-navy-deep"}`}>
            <c.icon className="h-14 w-14 text-accent transition-transform group-hover:scale-110" aria-hidden />
          </div>
          <h3 className="text-xl font-bold text-primary">{c.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          {c.items && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.items.map((it) => (
                <li key={it}>
                  <a href={waLink(productMessage(it))} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary hover:bg-accent hover:text-accent-foreground">{it}</a>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto flex gap-2 pt-5">
            <Button asChild variant="cta" className="flex-1">
              <a href={waLink(productMessage(c.name))} target="_blank" rel="noopener noreferrer"><MessageCircle />Enquire on WhatsApp</a>
            </Button>
            <Button asChild variant="navyOutline" size="icon" aria-label={`Call about ${c.name}`}>
              <a href={SITE.phonePrimary.tel}><Phone /></a>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}

const res = [
  { t: "2MP Cameras", p: ["Suitable for basic surveillance requirements.", "Ideal for homes, small shops, and entrances.", "Available in compatible HD or IP models."] },
  { t: "5MP Cameras", p: ["Higher image detail than 2MP cameras.", "Suitable for retail shops, offices, and commercial properties.", "Availability depends on the selected product and technology."] },
  { t: "8MP / 4K Cameras", p: ["High-resolution surveillance for suitable recording systems.", "Ideal for locations that require greater image detail.", "Requires compatible cameras, recorders, storage, and network infrastructure as applicable."] },
];

export function Resolutions() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Camera Guide" title="Choose the Right CCTV Camera Resolution" />
        <div className="grid gap-6 md:grid-cols-3">
          {res.map((r, i) => (
            <div key={r.t} className={`rounded-2xl p-8 shadow-card ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <p className="text-5xl font-extrabold text-accent">{r.t.split(" ")[0]}</p>
              <h3 className={`mt-2 text-xl font-bold ${i === 1 ? "" : "text-primary"}`}>{r.t}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {r.p.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{x}</li>)}
              </ul>
              <Button asChild variant={i === 1 ? "cta" : "navyOutline"} className="mt-6 w-full">
                <a href={waLink(productMessage(r.t.replace("Cameras", "CCTV camera")))} target="_blank" rel="noopener noreferrer">Enquire</a>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="cta" size="lg">
            <a href={waLink("Hello SHOPYINDIA, can you help me choose the right CCTV camera resolution for my property?")} target="_blank" rel="noopener noreferrer">Ask Us Which Camera Is Right for You</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function BrandGrid() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {brands.map((b) => (
          <div key={b.name} className="flex flex-col items-center justify-center rounded-2xl border bg-card p-6 text-center shadow-card">
            <span className="text-xl font-extrabold tracking-tight text-primary">{b.name}</span>
            {b.url && (
              <a href={b.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline">
                Official website <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Brand names are trademarks of their respective owners. Product availability varies — contact us to confirm current models.
      </p>
    </>
  );
}

const packages = [
  { t: "Home Security Package", p: ["Suitable camera options for homes and small shops", "Compatible recording system", "Required cabling and power accessories", "Installation quotation on request"], b: "Enquire for Home Package" },
  { t: "Business Security Package", p: ["Multiple-camera surveillance options", "Suitable DVR or NVR", "Storage and power accessories", "Installation and configuration quotation on request"], b: "Enquire for Business Package" },
  { t: "Advanced Security Package", p: ["Higher-resolution camera options", "Network-based monitoring options", "Suitable recording and storage configuration", "System design based on property requirements"], b: "Enquire for Advanced Package" },
];

export function Packages() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Packages" title="Complete CCTV Camera Packages">
          Installation charges, cabling, storage, and accessories depend on the final quotation.
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pk) => (
            <div key={pk.t} className="flex flex-col rounded-2xl border-t-4 border-accent bg-card p-8 shadow-card">
              <h3 className="text-xl font-bold text-primary">{pk.t}</h3>
              <p className="mt-1 font-bold text-accent">Contact for Price</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pk.p.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{x}</li>)}
              </ul>
              <Button asChild variant="cta" className="mt-auto w-full">
                <a href={waLink(productMessage(pk.t))} target="_blank" rel="noopener noreferrer" className="mt-6">{pk.b}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <div key={s.name} className="rounded-2xl border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15"><s.icon className="h-6 w-6 text-accent" /></div>
          <h3 className="mt-4 font-bold text-primary">{s.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-navy-deep py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold">Need help choosing a security system?</h2>
          <p className="mt-2 opacity-80">Talk to our team about models, installation and pricing.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><Link to="/contact">Get a Free Quote</Link></Button>
          <Button asChild variant="light" size="lg"><a href={SITE.phonePrimary.tel}><Phone />Call Now</a></Button>
        </div>
      </div>
    </section>
  );
}
