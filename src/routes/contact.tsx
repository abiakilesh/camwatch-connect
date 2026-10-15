import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, MessageCircle, Info } from "lucide-react";
import { PageHero } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categories, services } from "@/lib/data";
import { SITE, waLink, mapsLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SHOPYINDIA | CCTV Shop in Saravanampatti, Coimbatore" },
      { name: "description", content: "Call +91 88071 44013 or WhatsApp +91 96774 68769 for CCTV quotes. Keeranatham Rd, opp. CHIL SEZ IT Park, Saravanampatti." },
      { property: "og:title", content: "Contact SHOPYINDIA" },
      { property: "og:description", content: "Let's secure your property — get a free quote." },
    ],
  }),
  component: Contact,
});

const options = Array.from(new Set([...categories.map((c) => c.name), ...services.map((s) => s.name), "Other"]));
const field = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [error, setError] = useState("");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const product = String(f.get("product") || "");
    const msg = String(f.get("message") || "").trim();
    if (name.length < 2) return setError("Please enter your name.");
    if (!/^[+\d][\d\s-]{8,14}$/.test(phone)) return setError("Please enter a valid phone number.");
    if (!product) return setError("Please choose a product or service.");
    setError("");
    const text = `Hello SHOPYINDIA,\nName: ${name}\nPhone: ${phone}\nInterested in: ${product}\nMessage: ${msg || "-"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <PageHero title="Let's Secure Your Property" sub="Send us your requirement and our team will get back to you with options and pricing." />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold text-primary">Enquiry Form</h2>
            <input name="name" placeholder="Your name" maxLength={80} className={field} aria-label="Name" />
            <input name="phone" type="tel" placeholder="Phone number" maxLength={16} className={field} aria-label="Phone number" />
            <select name="product" defaultValue="" className={field} aria-label="Product or service">
              <option value="" disabled>Select product or service</option>
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
            <textarea name="message" rows={4} maxLength={600} placeholder="Your message" className={field} aria-label="Message" />
            {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
            <p className="flex gap-2 text-xs text-muted-foreground"><Info className="h-4 w-4 shrink-0 text-accent" />You will be redirected to WhatsApp to send your enquiry.</p>
            <Button type="submit" variant="cta" size="lg" className="w-full"><MessageCircle />Submit Enquiry</Button>
          </form>
          <div className="space-y-5">
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-card">
              <h2 className="text-2xl font-bold">SHOPYINDIA CCTV Sales & Services</h2>
              <p className="mt-4 flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" />{SITE.address}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="cta"><a href={SITE.phonePrimary.tel}><Phone />{SITE.phonePrimary.display}</a></Button>
                <Button asChild variant="light"><a href={SITE.phoneSecondary.tel}><Phone />{SITE.phoneSecondary.display}</a></Button>
              </div>
            </div>
            <iframe title="Map showing SHOPYINDIA address" loading="lazy" className="h-72 w-full rounded-2xl border"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`} />
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-accent hover:underline">Open in Google Maps →</a>
          </div>
        </div>
      </section>
    </>
  );
}
