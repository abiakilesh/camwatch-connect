import { useState } from "react";
import { ExternalLink, MessageCircle, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandProfiles } from "@/lib/brand-profiles";
import { productMessage, waLink } from "@/lib/site";

export function BrandShowcase() {
  const [paused, setPaused] = useState(false);
  return (
    <>
      <section className="border-b bg-secondary py-6" aria-label="Company logos">
        <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between px-4">
          <h2 className="text-sm font-bold text-primary">Our Security Brands</h2>
          <Button variant="navyOutline" size="icon" aria-label={paused ? "Play logo animation" : "Pause logo animation"} title={paused ? "Play logo animation" : "Pause logo animation"} onClick={() => setPaused((value) => !value)}>
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
        </div>
        <div className="brand-logo-window">
          <div className="brand-logo-track" style={{ animationPlayState: paused ? "paused" : undefined }}>
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} className="brand-logo-group" aria-hidden={duplicate ? true : undefined}>
                {brandProfiles.map((brand) => (
                  <div key={brand.name} className="flex h-24 w-52 shrink-0 items-center justify-center rounded-lg border bg-logo-surface px-4">
                    <img src={brand.logo} alt={duplicate ? "" : `${brand.name} logo`} width={800} height={300} className="h-20 w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16" aria-label="Brand advantages and uses">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandProfiles.map((brand) => (
              <article key={brand.name} className="flex min-w-0 flex-col rounded-lg border bg-card p-6 shadow-card">
                <div className="mb-5 flex h-28 items-center justify-center rounded-lg bg-logo-surface">
                  <img src={brand.logo} alt={`${brand.name} company logo`} width={800} height={300} loading="lazy" className="h-24 w-full object-contain" />
                </div>
                <h2 className="text-xl font-extrabold text-primary">{brand.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{brand.description}</p>
                <div className="mt-auto pt-6">
                  <Button asChild variant="cta" className="w-full"><a href={waLink(productMessage(`${brand.name} security products`))} target="_blank" rel="noopener noreferrer"><MessageCircle />Enquire on WhatsApp</a></Button>
                  <Button asChild variant="link" className="mt-2 h-auto w-full text-primary"><a href={brand.url} target="_blank" rel="noopener noreferrer">Official website<ExternalLink className="h-3 w-3" /></a></Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">Brand names and logos belong to their respective owners. Features vary by model; contact us to confirm current products and availability.</p>
        </div>
      </section>
    </>
  );
}