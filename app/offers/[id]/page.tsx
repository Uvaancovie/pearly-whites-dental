"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const offerData = {
  "whitening-march": {
    title: "April Whitening Special",
    description: "Choose the best option for a brighter smile. Save on our individual session or bring a buddy and save even more!",
    img: "/x-ray-checkup.jpg",
    price: "R6000 / R5500 each (with buddy)",
    details: [
      "Individual Whitening: R6000 (down from R7500)",
      "Buddy Whitening: R5500 each if you bring a friend",
      "Safe & professional treatment",
      "Instant whitening results",
      "Includes aftercare kit",
    ],
  },
  "checkup-march": {
    title: "April Checkup Special",
    description: "Get a complete dental checkup package—checkup, cleaning, and X-ray—at a dramatically reduced price.",
    img: "/march-whitening.jpg",
    price: "R1200",
    details: [
      "Complete Checkup, Cleaning & X-Ray package",
      "Reduced from R1800 to R1200",
      "Comprehensive oral health evaluation",
      "Professional dental care",
    ],
  },
};

const OfferDetail = () => {
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
          <h3 className="text-xl font-semibold mb-2">Offer Details:</h3>
          <ul className="list-disc pl-5 mb-4">
            {offer.details.map((detail, index) => (
              <li key={index}>{detail}</li>
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
};

export default OfferDetail;
