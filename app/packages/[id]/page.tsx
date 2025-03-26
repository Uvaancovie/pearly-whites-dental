"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packageData = {
  "teeth-whitening": {
    title: "Teeth Whitening Package",
    description: "Achieve a brighter, whiter smile with our professional Zoom Whitening.",
    benefits: [
      "One 45-minute whitening session",
      "Immediate results",
      "Safe & professional treatment",
      "Long-lasting brightness",
    ],
    price: "R1,500",
    img: "/whitening.jpg",
  },
  "implant-package": {
    title: "Dental Implant Package",
    description: "Replace missing teeth with long-lasting, natural-looking implants.",
    benefits: [
      "Includes consultation",
      "Titanium implant placement",
      "Custom crown fitting",
      "5-year durability guarantee",
    ],
    price: "R8,500",
    img: "/implants.jpg",
  },
  "aligners-package": {
    title: "Invisalign Clear Aligners",
    description: "Straighten your teeth with virtually invisible aligners.",
    benefits: [
      "Custom-fit clear aligners",
      "Comfortable & removable",
      "Faster results than braces",
      "No food restrictions",
    ],
    price: "R12,000",
    img: "/aligners.jpg",
  },
};

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packageData[id as keyof typeof packageData];

  if (!pkg) {
    return <p className="text-center mt-20 text-xl">Package not found.</p>;
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <Image
            src={pkg.img}
            alt={pkg.title}
            width={600}
            height={350}
            className="w-full rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold mb-4">{pkg.title}</CardTitle>
          <p className="text-lg mb-4">{pkg.description}</p>
          <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc pl-5 mb-4">
            {pkg.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
          <Button className="w-full">Book Now</Button>
          <Link href="/packages" className="block mt-4 text-center text-blue-500">
            ← Back to Packages
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageDetail;
