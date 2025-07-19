"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'

interface BeforeAfterImage {
  id: string
  before: string
  after: string
  title: string
  description: string
  treatment: string
  duration: string
  beforeAlt: string
  afterAlt: string
}

interface BeforeAfterCarouselProps {
  images: BeforeAfterImage[]
  autoPlay?: boolean
  showThumbnails?: boolean
}

export function BeforeAfterCarousel({ 
  images, 
  autoPlay = true, 
  showThumbnails = true 
}: BeforeAfterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // 6 seconds per slide

    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  if (!images.length) return null

  const currentImage = images[currentIndex]

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">{currentImage.title}</h3>
              <p className="text-blue-100 mt-1">{currentImage.treatment}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <span className="text-sm text-blue-100">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Image Comparison */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-2 gap-0"
            >
              {/* Before Image */}
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={currentImage.before}
                    alt={currentImage.beforeAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={currentIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      BEFORE
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-600">Before</h4>
                        <Image
                          src={currentImage.before}
                          alt={currentImage.beforeAlt}
                          width={400}
                          height={300}
                          className="rounded-lg w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-600">After</h4>
                        <Image
                          src={currentImage.after}
                          alt={currentImage.afterAlt}
                          width={400}
                          height={300}
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={currentImage.after}
                    alt={currentImage.afterAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={currentIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Details */}
        <div className="p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Treatment</h4>
              <p className="text-gray-600">{currentImage.treatment}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
              <p className="text-gray-600">{currentImage.duration}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Result</h4>
              <p className="text-gray-600">{currentImage.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-6 flex justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-blue-600 ring-2 ring-blue-200'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Image
                  src={image.before}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-1 left-1 text-white text-xs font-semibold">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
