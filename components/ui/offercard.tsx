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
    <div className={`rounded-lg overflow-hidden shadow-md bg-white ${className}`}>
      {offer.image && (
        <div className="relative h-40 w-full">
          <Image
            src={offer.image || "/placeholder.svg?height=160&width=320"}
            alt={offer.title}
            fill
            className="object-cover"
          />
          {offer.isPopular && <Badge className="absolute top-2 right-2 bg-primary text-white">Popular</Badge>}
        </div>
      )}
      <div className="p-4">
        {offer.month && <div className="text-sm font-medium text-primary mb-1">{offer.month} Special</div>}
        <h3 className="font-bold text-lg mb-1">{offer.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{offer.description}</p>

        <div className="flex items-center justify-between mb-3">
          {offer.price && (
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{offer.price}</span>
              {offer.originalPrice && <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>}
            </div>
          )}
          {offer.validUntil && (
            <div className="text-xs text-gray-500 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Valid until {offer.validUntil}
            </div>
          )}
        </div>

        <Link href="/offers" className="w-full">
          <Button variant="outline" className="w-full justify-between">
            Book Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

