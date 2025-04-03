"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offers = [
  {
    id: "whitening-march",
    title: "April Whitening Special",
    description: "Brighten your smile with our exclusive deals!",
    img: "/client1.jpg",
    price: "From R6000",
  },
  {
    id: "checkup-march",
    title: "April Checkup Special",
    description: "Complete checkup, cleaning & X-ray at an unbeatable price!",
    img: "/march-whitening.jpg",
    price: "R1200",
  },
];

const Offers = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">April Special Offers</h1>
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
                <CardTitle className="text-xl font-semibold">{offer.title}</CardTitle>
                <p className="text-gray-600">{offer.description}</p>
                <p className="font-bold text-primary mt-2">{offer.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
