"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offers = [
  {
    id: "zoom-whitening",
    title: "Zoom Whitening",
    description:
      "Advanced in-chair whitening includes full check-up & cleaning. Take-home kit optional (price on request).",
    img: "/zoom-whitening.jpg",
    price: "R6 200",
  },
  {
    id: "kids-cleaning",
    title: "Kids Check-up & Cleaning",
    description: "Gentle exam and professional cleaning for your child’s bright smile.",
    img: "/kids-special-may.jpg",
    price: "R650",
  },
  {
    id: "checkup-cleaning",
    title: "Check-up & Cleaning Special",
    description: "Complete check-up, cleaning & X-ray package at a great rate.",
    img: "/checkup-cleaning-may.jpg",
    price: "R1 000",
  },
  {
    id: "pensioners-day",
    title: "Pensioners’ Day – Every Thursday",
    description:
      "Free consultation, specialised treatment plans & denture evaluation. Medical aid rates on all treatments.",
    img: "/pensioner-special-may.jpg",
    price: "Medical Aid rates",
  },
];

export default function OffersPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        May & June Special Offers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Link key={offer.id} href={`/offers/${offer.id}`} passHref>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardHeader>
                <Image
                  src={offer.img}
                  alt={offer.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {offer.title}
                </CardTitle>
                <p className="text-gray-600">{offer.description}</p>
                <p className="font-bold text-primary mt-2">{offer.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
