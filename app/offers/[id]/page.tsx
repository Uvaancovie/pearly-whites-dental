"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const offerData = {
  "zoom-whitening": {
    title: "Zoom Whitening",
    description:
      "Advanced in-chair whitening includes a full check-up & cleaning. Take-home kit optional (price on request).",
    img: "/zoom-whitening.jpg",
    price: "R6 200",
    details: [
      
      "Full oral exam & professional cleaning",
      "Instant, dramatic results",
      "Safe & comfortable",
      "Includes optional take-home tray kit",
    ],
  },
  "kids-cleaning": {
    title: "Kids Check-up & Cleaning",
    description: "Gentle check-up and professional cleaning tailored for children.",
    img: "/kids-special-may.jpg",
    price: "R650",
    details: [
      "Kid-friendly exam",
      "Plaque removal & polishing",
      "Fluoride application (if needed)",
      "Fun, stress-free environment",
    ],
  },
  "checkup-cleaning": {
    title: "Check-up & Cleaning Special",
    description:
      "Complete dental check-up, full professional cleaning & X-rays at an unbeatable R1 000.",
    img: "/checkup-cleaning-may.jpg",
    price: "R1 000",
    details: [
      "Comprehensive oral exam",
      "Scaling & polishing",
      
      "Personalised oral hygiene advice",
    ],
  },
  "pensioners-day": {
    title: "Pensioners’ Day – Every Thursday",
    description:
      "Free consultation, specialized treatment plans & denture evaluation. ",
    img: "/pensioner-day-may.jpg",
    price: "",
    details: [
      "Complimentary consultation",
      "Customised care plan",
      "Denture check & fitting",
      "Safe, senior-friendly environment",
    ],
  },
};

export default function OfferDetail() {
  const { id } = useParams();
  const offer = offerData[id as keyof typeof offerData];

  if (!offer) {
    return <p className="text-center mt-20 text-xl">Offer not found.</p>;
  }

  const handleClaimOffer = () => {
    const whatsappUrl = `https://wa.me/27655541518?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(
      offer.title
    )}%20offer.%20Please%20provide%20more%20details.`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <Image
            src={offer.img}
            alt={offer.title}
            width={600}
            height={350}
            className="w-full rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold mb-4">{offer.title}</CardTitle>
          <p className="text-lg mb-4">{offer.description}</p>
          <h3 className="text-xl font-semibold mb-2">Details:</h3>
          <ul className="list-disc pl-5 mb-4">
            {offer.details.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
          <p className="text-2xl font-bold text-primary mb-4">{offer.price}</p>
          <Button className="w-full" onClick={handleClaimOffer}>
            Claim Offer
          </Button>
          <Link href="/offers" className="block mt-4 text-center text-blue-500">
            ← Back to Offers
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
