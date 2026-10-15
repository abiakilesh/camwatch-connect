// Single place to update business contact details.
export const SITE = {
  name: "SHOPYINDIA",
  tagline: "CCTV SALES & SERVICES",
  phonePrimary: { display: "+91 88071 44013", tel: "tel:+918807144013" },
  phoneSecondary: { display: "+91 96774 68769", tel: "tel:+919677468769" },
  whatsappNumber: "919677468769",
  address:
    "Keeranatham Rd, Opp. to IT Park, CHIL SEZ IT Park, Saravanampatti, Keeranatham, Tamil Nadu – 641035",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productMessage(product: string) {
  return `Hello SHOPYINDIA, I am interested in your ${product} options. Please share the available models, specifications, and price.`;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
