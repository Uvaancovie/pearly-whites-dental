// src/lib/offers.ts
import type { Offer } from "@/types/offers";

export async function getOffers(): Promise<Offer[]> {
  return [
    // — May/June Check-up & Cleaning Offer —
    {
      id: "may-june-checkup",
      title: "Check-up & Cleaning Special",
      description: "Full check-up, professional cleaning & X-ray",
      price: "R1 000",
      originalPrice: "R1 800",
      discount: "44%",
      validUntil: "June 30, 2025",
      image: "/checkup-cleaning-may.jpg",
      category: "preventive",
      isPopular: true,
      month: "May",
    },

    // — Kids Dental Check-up & Cleaning —
    {
      id: "kids-check-clean",
      title: "Kids Check-up & Cleaning",
      description: "Gentle exam + cleaning for your little one",
      price: "R650",
      originalPrice: "",
      discount: "",
      validUntil: "June 30, 2025",
      image: "/kids-special-may.jpg",
      category: "family",
      isPopular: true,
      month: "May",
    },

    // — Pensioners’ Day Every Thursday —
    {
      id: "pensioners-day",
      title: "Pensioners’ Day – Every Thursday",
      description:
        "Free consultation, specialized treatment plans & denture evaluation. Medical aid rates on all treatments.",
      price: "",
      originalPrice: "",
      discount: "",
      validUntil: "Ongoing",
      image: "/pensioner-special-may.jpg",
      category: "senior",
      isPopular: false,
      month: "May",
    },

    // — Zoom Advanced In-Chair Whitening —
    {
      id: "zoom-advanced-whitening",
      title: "Zoom Advanced In-Chair Whitening",
      description: "Includes full check-up & cleaning",
      price: "R6 200",
      originalPrice: "",
      discount: "",
      validUntil: "May 31, 2025",
      image: "/zoom-whitening.jpg",
      category: "cosmetic",
      isPopular: false,
      month: "May",
    },
  ];
}

export async function getOffersByMonth(month: string): Promise<Offer[]> {
  const all = await getOffers();
  return all.filter((o) => o.month?.toLowerCase() === month.toLowerCase());
}

export async function getPopularOffers(limit = 3): Promise<Offer[]> {
  const all = await getOffers();
  return all.filter((o) => o.isPopular).slice(0, limit);
}

export async function getOfferById(id: string): Promise<Offer | undefined> {
  const all = await getOffers();
  return all.find((o) => o.id === id);
}