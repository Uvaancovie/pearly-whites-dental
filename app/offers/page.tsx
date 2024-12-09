"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const metadata = {
  title: "🌟 December Dazzle Smile Special! 🌟 - Pearly Whites Dental Studio",
  description: "🎄✨ Get Holiday-Ready with a Brighter Smile! Trusted by over 100+ clients. Limited slots available before December 31st. Book now!",
  keywords: [
    "December Dazzle Special",
    "Teeth Whitening Special",
    "Pearly Whites Dental Studio",
    "Dentist Umhlanga",
    "Holiday Smile Makeover",
  ],
  openGraph: {
    title: "🌟 December Dazzle Smile Special! 🌟",
    description:
      "🎄✨ Get Holiday-Ready with a Brighter Smile! Trusted by 100+ clients. Offer ends December 31st. Call now: 086 155 5111.",
    url: "https://www.pearlywhitesdental.co.za/offers",
    type: "website",
    images: [
      {
        url: "/december-special.jpeg",
        width: 1200,
        height: 630,
        alt: "December Dazzle Smile Special",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌟 December Dazzle Smile Special! 🌟",
    description: "🎄✨ Get Holiday-Ready with a Brighter Smile! Offer ends December 31st.",
    images: ["/december-special.jpeg"],
  },
};

const Offers = () => {
  const [daysLeft, setDaysLeft] = useState<number | string>("");

  // Countdown Timer Logic for Days Remaining
  useEffect(() => {
    const targetDate = new Date("2023-12-31T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setDaysLeft("Ends 31st December 2024");
      } else {
        const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
        setDaysLeft(days);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-grey text-gold">
      {/* Header Section */}
      <header className="bg-dark-grey text-gold py-16 text-center">
        <h1 className="text-4xl font-bold">🌟 December Dazzle Smile Special! 🌟</h1>
        <p className="mt-4 text-lg">🎄✨ Get Holiday-Ready with a Brighter Smile! ✨🎄</p>
      </header>

      {/* Special Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/december-special.jpeg"
              alt="December Special"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Shine Bright Like the Holiday Lights!
            </h2>
            <p className="text-lg mb-4">
              Be the star of every selfie with a whiter, brighter smile this holiday season!
            </p>
            <p className="text-lg mb-4">
              📅 Offer ends in:{" "}
              <span className="font-bold">
                {typeof daysLeft === "string" ? daysLeft : `${daysLeft} days`}
              </span>
            </p>
            <p className="text-lg mb-4">📍 Visit us: 6 Lagoon Drive, Umhlanga Rocks, Durban, 4320</p>
            <p className="text-lg mb-4 text-red-600">📞 Call Now: <span className="font-bold text-gold">086 155 5111</span></p>
            <p className="text-lg font-semibold">💎 Trusted by over 100+ happy clients!</p>
            <a
              href="tel:0861555111"
              className="mt-6 inline-block bg-gold text-red-400 px-6 py-3 rounded-full shadow-lg hover:bg-dark hover:text-gold transition transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
