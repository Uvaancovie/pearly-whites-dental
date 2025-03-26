"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening Package",
    description: "Get a brighter smile with our professional whitening service.",
    img: "/whitening.jpg",
    price: "R1,500",
  },
  {
    id: "dental-implant-2.png",
    title: "Dental Implant Package",
    description: "Restore missing teeth with durable implants.",
    img: "/implants.jpg",
    price: "R8,500",
  },
  {
    id: "aligners-package",
    title: "Invisalign Clear Aligners",
    description: "Straighten your teeth discreetly with aligners.",
    img: "/aligners.jpg",
    price: "R12,000",
  },
];

const Packages = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Link key={pkg.id} href={`/packages/${pkg.id}`} passHref>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardHeader>
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">{pkg.title}</CardTitle>
                <p className="text-gray-600">{pkg.description}</p>
                <p className="font-bold text-primary mt-2">{pkg.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Packages;
