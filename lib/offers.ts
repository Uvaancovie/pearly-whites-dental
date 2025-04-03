import type { Offer } from "@/types/offers";

// This is a mock data function that would typically fetch from an API or database
export async function getOffers(): Promise<Offer[]> {
  // In a real application, you would fetch this data from your API or database
  return [
    
    {
      id: "april-whitening",
      title: "Teeth Whitening Special",
      description: "Professional in-office whitening treatment for a brighter smile",
      price: "R6000",
      originalPrice: "75000",
      discount: "20%",
      validUntil: "April 30, 2025",
      image: "/client2.jpg",
      category: "cosmetic",
      isPopular: false,
      month: "April",
    },
    {
      id: "april-xray",
      title: "Comprehensive X-Ray Package",
      description: "Full mouth X-rays with detailed dental assessment",
      price: "R1200",
      originalPrice: "R1800",
      discount: "33%",
      validUntil: "April 30, 2025",
      image: "/client3.jpg",
      category: "diagnostic",
      isPopular: false,
      month: "April",
    },
  ]
}

export async function getOffersByMonth(month: string): Promise<Offer[]> {
  const allOffers = await getOffers()
  return allOffers.filter((offer) => offer.month?.toLowerCase() === month.toLowerCase())
}

export async function getPopularOffers(limit = 3): Promise<Offer[]> {
  const allOffers = await getOffers()
  return allOffers.filter((offer) => offer.isPopular).slice(0, limit)
}

