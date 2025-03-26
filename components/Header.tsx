"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, Calendar, Star } from "lucide-react"

export default function Header() {
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
              Trusted by over 10,000+ patients
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Pearly Whites Dental March Special
            </h1>

            <p className="text-lg text-gray-700">
              Experience painless, state-of-the-art dental care with our award-winning team. We are committed to giving
              you the confident smile you deserve.
            </p>

            {/* Special offer */}
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="font-medium text-primary">New Patient Special: Free Consultation & X-Rays</p>
              <p className="text-sm text-gray-600 mt-1">Limited time offer. Book your appointment today!</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 text-base font-medium">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>

              <Button variant="outline" size="lg" className="gap-2 text-base font-medium">
                <PhoneCall className="h-5 w-5" />
                Call Now
              </Button>
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

          {/* Right column: Form */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Request Your Appointment</h3>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="cleaning">Cleaning & Check-up</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="invisalign">Invisalign</option>
                  <option value="implants">Dental Implants</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" className="w-full text-base font-medium">
                Request Appointment
              </Button>
            </form>

            <p className="mt-4 text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

