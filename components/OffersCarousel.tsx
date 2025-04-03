"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { OfferCard } from "@/components/ui/offercard"
import type { Offer } from "@/types/offers"
import { Button } from "@/components/ui/button"

interface OffersCarouselProps {
  offers: Offer[]
  title?: string
}

export function OffersCarousel({ offers, title }: OffersCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1))
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  if (!offers.length) return null

  return (
    <div className="relative w-full">
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      )}

      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className="w-full flex-shrink-0">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>

        {offers.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {offers.map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

