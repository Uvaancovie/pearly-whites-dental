import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Offer } from "@/types/offers"

interface OfferCardProps {
  offer: Offer
  className?: string
}

export function OfferCard({ offer, className = "" }: OfferCardProps) {
  return (
    <div className={`group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 ${className}`}>
      {offer.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={offer.image || "/placeholder.svg?height=160&width=320"}
            alt={offer.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {offer.isPopular && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg font-semibold">
              ⭐ Popular
            </Badge>
          )}
        </div>
      )}
      <div className="p-6">
        {offer.month && (
          <div className="inline-block text-sm font-semibold text-primary mb-2 bg-primary/10 px-3 py-1 rounded-full">
            {offer.month} Special
          </div>
        )}
        <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary transition-colors duration-200">
          {offer.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{offer.description}</p>

        <div className="flex items-center justify-between mb-4">
          {offer.price && (
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-primary">{offer.price}</span>
              {offer.originalPrice && (
                <span className="text-sm text-gray-500 line-through bg-gray-100 px-2 py-1 rounded">
                  {offer.originalPrice}
                </span>
              )}
            </div>
          )}
          {offer.validUntil && (
            <div className="text-xs text-gray-500 flex items-center bg-gray-50 px-2 py-1 rounded-full">
              <Calendar className="h-3 w-3 mr-1" />
              Valid until {offer.validUntil}
            </div>
          )}
        </div>

        {offer.additionalInfo && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">{offer.additionalInfo}</p>
          </div>
        )}

        <Link href="/contact" className="w-full">
          <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
            Book Now
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

