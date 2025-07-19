"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Instagram } from "lucide-react";
import { OffersCarousel } from "@/components/OffersCarousel";
import { getOffersByMonth, getSchoolHolidayOffers } from "@/lib/offers";
import type { Offer } from "@/types/offers";

export default function Header() {
  const instagramRef = useRef<HTMLDivElement>(null);
  const [mayOffers, setMayOffers] = useState<Offer[]>([]);
  const [schoolHolidayOffers, setSchoolHolidayOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  // Load Instagram embed script
  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  // Fetch offers
  useEffect(() => {
    async function loadOffers() {
      try {
        const [mayOffers, holidayOffers] = await Promise.all([
          getOffersByMonth("May"),
          getSchoolHolidayOffers()
        ]);
        setMayOffers(mayOffers);
        setSchoolHolidayOffers(holidayOffers);
      } catch (error) {
        console.error("Failed to load offers:", error);
      } finally {
        setLoading(false);
      }
    }
    loadOffers();
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Smiling patient with dentist"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column: Main content */}
          <div className="space-y-6 max-w-xl">
            {/* Trust badge */}
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
              Trusted by over 100+ patients
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Pearly Whites Dental School Holiday Specials
            </h1>

            <p className="text-lg text-gray-700">
              Experience painless, state-of-the-art dental care with our award-winning team.
              Perfect time for the family during school holidays!
            </p>

            {/* School Holiday Offers Carousel */}
            {!loading && schoolHolidayOffers.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md p-4">
                <h3 className="font-semibold text-primary mb-3">
                  🎉 School Holiday Specials
                </h3>
                <OffersCarousel offers={schoolHolidayOffers} />
              </div>
            )}

            {/* May Offers Carousel - Fallback */}
            {!loading && schoolHolidayOffers.length === 0 && mayOffers.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md p-4">
                <h3 className="font-semibold text-primary mb-3">
                  May Special Offers
                </h3>
                <OffersCarousel offers={mayOffers} />
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" passHref>
                <Button size="lg" className="gap-2 text-base font-medium">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>

              <Link
                href="https://www.instagram.com/pearlywhitesdentalstudio_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2 text-base font-medium">
                  <Instagram className="h-5 w-5" />
                  Follow Us
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="sr-only">Patient {i}</span>
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-gray-900">4.9/5</strong> from 200+ reviews
              </span>
            </div>
          </div>

          {/* Right column: Instagram Feed */}
          <div className="rounded-xl overflow-hidden shadow-xl bg-white">
            <div className="p-4 border-b flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-gray-800" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Pearly Whites Dental Studio</h3>
                <p className="text-sm text-gray-500">
                  Follow us for smile transformations
                </p>
              </div>
            </div>

            <div ref={instagramRef} className="instagram-embed-container overflow-hidden max-h-[500px]">
              {/* Instagram Feed Embed */}
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/pearlywhitesdentalstudio_/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
              >
                {/* … rest of the embed markup … */}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add TypeScript declaration for the Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
