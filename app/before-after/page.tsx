"use client"

import React from "react"
import { motion } from "framer-motion"
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  Camera,
  Smile,
  Star
} from "lucide-react"
import Link from "next/link"

// SEO-optimized before/after data
const beforeAfterImages = [
  {
    id: "cosmetic-veneers-transformation",
    before: "/before&after/before1.jpg",
    after: "/before&after/after1.jpg",
    title: "Complete Smile Makeover with Porcelain Veneers",
    description: "Dramatic smile transformation with custom porcelain veneers",
    treatment: "Porcelain Veneers",
    duration: "2 weeks",
    beforeAlt: "Patient's teeth before porcelain veneer treatment showing discolored and misaligned teeth",
    afterAlt: "Patient's beautiful smile after porcelain veneer treatment showing perfectly aligned white teeth"
  },
  {
    id: "teeth-whitening-professional",
    before: "/before&after/before2.jpg", 
    after: "/before&after/after2.jpg",
    title: "Professional Zoom Whitening Results",
    description: "6 shades whiter in just one session with Zoom whitening",
    treatment: "Zoom Professional Whitening",
    duration: "1 hour",
    beforeAlt: "Patient's stained teeth before professional Zoom whitening treatment",
    afterAlt: "Patient's bright white smile after professional Zoom whitening treatment"
  },
  {
    id: "dental-implant-restoration",
    before: "/before&after/before3.jpg",
    after: "/before&after/after3.jpg", 
    title: "Dental Implant & Crown Restoration",
    description: "Natural-looking tooth replacement with dental implant and crown",
    treatment: "Dental Implant + Crown",
    duration: "3 months",
    beforeAlt: "Patient with missing tooth before dental implant treatment",
    afterAlt: "Patient's complete smile after dental implant and crown restoration"
  }
]

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "Comprehensive examination and digital smile analysis to understand your goals",
    icon: Camera,
    duration: "60 minutes"
  },
  {
    step: "2", 
    title: "Custom Treatment Plan",
    description: "Personalized treatment plan designed specifically for your unique needs",
    icon: Sparkles,
    duration: "Same day"
  },
  {
    step: "3",
    title: "Professional Treatment",
    description: "Expert execution using state-of-the-art technology and premium materials",
    icon: Award,
    duration: "Varies by treatment"
  },
  {
    step: "4",
    title: "Beautiful Results",
    description: "Reveal your stunning new smile and enjoy the confidence that comes with it",
    icon: Smile,
    duration: "Immediate"
  }
]

const BeforeAfter = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Real Patient Results
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Before & After
              <span className="block text-blue-600">Smile Transformations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Witness the life-changing transformations achieved by Dr. Devin Chetty. 
              Each smile tells a story of confidence restored and dreams realized.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">5,000+</span>
                </div>
                <p className="text-gray-600">Successful Transformations</p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">4.9/5</span>
                </div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">10+</span>
                </div>
                <p className="text-gray-600">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterCarousel 
              images={beforeAfterImages}
              autoPlay={true}
              showThumbnails={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Dr. Chetty's Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              The Chetty Method
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Dr. Devin Chetty&apos;s Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every smile transformation follows our proven 4-step process, combining 
              advanced technology with artistic vision to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center justify-center text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                Why Choose Dr. Chetty
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                The Celebrity Standard of Care
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Trusted by over 100 celebrities and thousands of patients, Dr. Chetty 
                delivers results that exceed expectations using the latest technology 
                and premium materials.
              </p>
              
              <div className="space-y-4">
                {[
                  "Advanced 3D smile design technology",
                  "Premium materials and techniques",
                  "Personalized treatment plans",
                  "Celebrity-level discretion and care",
                  "Comprehensive aftercare support"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready for Your Transformation?</h3>
                  <p className="text-gray-600 mb-6">
                    Join thousands of satisfied patients who have transformed their lives with a beautiful smile.
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                      Book Your Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeforeAfter
