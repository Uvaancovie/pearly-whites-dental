"use client"

import React from "react"
import { motion } from "framer-motion"
import { BeforeAfterCarousel } from "./BeforeAfterCarousel"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Camera, Sparkles, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

// Subset of images for landing page (first 3)
const landingPageImages = [
  {
    id: "cosmetic-veneers-transformation",
    before: "/before&after/before1.jpg",
    after: "/before&after/after1.jpg",
    title: "Complete Smile Makeover",
    description: "Dramatic transformation with porcelain veneers",
    treatment: "Porcelain Veneers",
    duration: "2 weeks",
    beforeAlt: "Patient's teeth before porcelain veneer treatment showing discolored and misaligned teeth",
    afterAlt: "Patient's beautiful smile after porcelain veneer treatment showing perfectly aligned white teeth"
  },
  {
    id: "teeth-whitening-professional", 
    before: "/before&after/before2.jpg",
    after: "/before&after/after2.jpg",
    title: "Professional Whitening Results",
    description: "6 shades whiter in just one session",
    treatment: "Zoom Professional Whitening",
    duration: "1 hour",
    beforeAlt: "Patient's stained teeth before professional Zoom whitening treatment",
    afterAlt: "Patient's bright white smile after professional Zoom whitening treatment"
  },
  {
    id: "dental-implant-restoration",
    before: "/before&after/before3.jpg", 
    after: "/before&after/after3.jpg",
    title: "Dental Implant Restoration",
    description: "Natural-looking tooth replacement",
    treatment: "Dental Implant + Crown",
    duration: "3 months",
    beforeAlt: "Patient with missing tooth before dental implant treatment",
    afterAlt: "Patient's complete smile after dental implant and crown restoration"
  }
]

const BeforeAfterSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full -ml-32 -mb-32 opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Real Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Smile Transformations
            <span className="block text-blue-600">That Change Lives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the dramatic before and after results achieved by Dr. Devin Chetty. 
            Each transformation represents a life changed through the power of a confident smile.
          </p>
        </motion.div>

        {/* Featured Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Successful Transformations</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-600">Patient Satisfaction</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Celebrity Clients</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <BeforeAfterCarousel 
            images={landingPageImages}
            autoPlay={true}
            showThumbnails={false}
          />
        </motion.div>

        {/* Treatment Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🦷</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Porcelain Veneers</h3>
            <p className="text-gray-600">Complete smile makeovers with custom-crafted veneers</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Whitening</h3>
            <p className="text-gray-600">Zoom whitening for dramatically whiter teeth in one session</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Dental Implants</h3>
            <p className="text-gray-600">Natural-looking replacements for missing teeth</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied patients who have experienced life-changing smile transformations with Dr. Devin Chetty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/before-after">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  View More Results
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterSection
