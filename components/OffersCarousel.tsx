"use client"

import { useState, useEffect, useCallback } from "react"
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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1))
  }, [offers.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1))
  }, [offers.length])

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  if (!offers.length) return null

  return (
    <div className="relative w-full">
      {title && (
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h3>
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border border-gray-100">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className="w-full flex-shrink-0 p-4">
              <OfferCard offer={offer} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300" />
            </div>
          ))}
        </div>

        {offers.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg border-2 border-gray-200 hover:border-primary/30 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg border-2 border-gray-200 hover:border-primary/30 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Next slide</span>
            </Button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-primary shadow-md" 
                      : "w-2 bg-gray-300 hover:bg-gray-400"
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

