import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Award } from "lucide-react";

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-dental-light to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 shadow-sm mb-6">
          <Award className="mr-2 h-4 w-4" />
          Award-Winning Dental Care
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Our Premium <span className="text-gradient">Dental Services</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Experience world-class dental care with our state-of-the-art treatments 
          and personalized approach to oral health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Zoom Whitening",
            description: "Get a brighter, whiter smile in just one session with our advanced whitening technology.",
            img: "/zoom-whitening.jpg",
            badge: "Popular",
            rating: 4.9,
          },
          {
            title: "Porcelain Veneers",
            description: "Transform your teeth for the perfect smile with custom-crafted porcelain veneers.",
            img: "/veneers.jpg",
            badge: "Premium",
            rating: 4.8,
          },
          {
            title: "Dental Implants",
            description: "Replace missing teeth with natural-looking, permanent implants that last a lifetime.",
            img: "/dental-implants.jpg",
            badge: "Advanced",
            rating: 4.9,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-primary">
                  {service.badge}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <Link href="/contact">
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
