import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";
import { categories } from "@/lib/data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

const generalMsg = "Hello SHOPYINDIA, I would like to enquire about CCTV cameras.";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="SHOPYINDIA CCTV Sales & Services logo" width={64} height={64} className="h-16 w-16" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-extrabold text-primary">SHOPY<span className="text-accent">INDIA</span></span>
            <span className="block text-[10px] font-semibold tracking-widest text-muted-foreground">CCTV SALES & SERVICES</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-semibold text-primary transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
          <a href={SITE.phonePrimary.tel} className="flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> {SITE.phonePrimary.display}
          </a>
          <Button asChild variant="cta"><Link to="/contact">Get a Quote</Link></Button>
        </nav>
        <button className="lg:hidden text-primary" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background px-4 pb-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b py-3 font-semibold text-primary">
              {n.label}
            </Link>
          ))}
          <Button asChild variant="cta" className="mt-4 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link></Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-20 text-primary-foreground lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="SHOPYINDIA logo" width={80} height={80} loading="lazy" className="h-20 w-20 rounded-full bg-primary-foreground p-1" />
          <p className="mt-3 font-bold">CCTV Sales & Services</p>
          <p className="mt-1 text-accent font-semibold">Smart Security. Reliable Solutions.</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-accent">Quick Links</h3>
          {nav.map((n) => <Link key={n.to} to={n.to} className="block py-1 text-sm opacity-80 hover:opacity-100">{n.label}</Link>)}
        </div>
        <div>
          <h3 className="mb-3 font-bold text-accent">Products</h3>
          {categories.slice(0, 8).map((c) => <Link key={c.name} to="/products" className="block py-1 text-sm opacity-80 hover:opacity-100">{c.name}</Link>)}
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="mb-3 font-bold text-accent">Contact</h3>
          <a href={SITE.phonePrimary.tel} className="flex gap-2"><Phone className="h-4 w-4 text-accent" />{SITE.phonePrimary.display}</a>
          <a href={SITE.phoneSecondary.tel} className="flex gap-2"><Phone className="h-4 w-4 text-accent" />{SITE.phoneSecondary.display}</a>
          <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className="flex gap-2"><MessageCircle className="h-4 w-4 text-accent" />WhatsApp Enquiry</a>
          <p className="flex gap-2 opacity-80"><MapPin className="h-4 w-4 shrink-0 text-accent" />{SITE.address}</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SHOPYINDIA CCTV Sales & Services. All rights reserved.
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <>
      <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-card transition-transform hover:scale-110 lg:bottom-6">
        <MessageCircle className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 lg:hidden">
        <a href={SITE.phonePrimary.tel} className="flex items-center justify-center gap-2 bg-primary py-4 font-semibold text-primary-foreground"><Phone className="h-5 w-5" />Call Now</a>
        <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent py-4 font-semibold text-accent-foreground"><MessageCircle className="h-5 w-5" />WhatsApp</a>
      </div>
    </>
  );
}

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl opacity-85">{sub}</p>
        <div className="mt-5 h-1 w-20 rounded bg-accent" />
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-bold tracking-widest text-accent uppercase">{kicker}</p>
      <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-muted-foreground">{children}</p>}
    </div>
  );
}
