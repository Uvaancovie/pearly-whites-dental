"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users } from "lucide-react"

const Awareness: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -mr-32 -mt-32 opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -ml-48 -mb-48 opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left column - Bio */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1 text-sm font-medium mb-2">
              Celebrity Dentist
            </Badge>

            <h2 className="text-4xl font-bold mb-4 text-slate-800">Meet Dr. Devin Chetty</h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              A renowned dental professional with over a decade of experience, trusted by 100+ celebrity clients. Dr.
              Chetty specializes in advanced cosmetic and restorative dentistry to give you the perfect smile.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-gray-800" />
                <span className="text-slate-700">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-800" />
                <span className="text-slate-700">100+ Celebrity Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gray-800" />
                <span className="text-slate-700">Award-Winning</span>
              </div>
            </div>

            <Link href="/contact">
              <Button className="mt-4 bg-black hover:bg-gray-800">Book a Consultation</Button>
            </Link>
          </motion.div>

          {/* Right column - Celebrity Grid */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Image
                  src="/header.jpg"
                  alt="Dr. Devin Chetty celebrity dentist consulting with patient in modern dental office"
                  className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Dr. Chetty with Celebrity Client</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Image
                  src="/jesse-kriel.jpg"
                  alt="Jesse Kriel, professional rugby player and satisfied dental patient of Dr. Devin Chetty"
                  className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Jesse Kriel</p>
                </div>
              </div>

              {/* Testimonial overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-xl p-5 max-w-[250px] rotate-2 hidden md:block">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm italic text-slate-600">
                  Dr  Chetty transformed my smile completely. The best dentist I have ever visited
                </p>
                <p className="text-sm font-semibold mt-2 text-slate-800">— Professional Athlete</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-black">10+</p>
            <p className="text-slate-600 mt-2">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-black">100+</p>
            <p className="text-slate-600 mt-2">Celebrity Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-black">5,000+</p>
            <p className="text-slate-600 mt-2">Successful Procedures</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awareness
