"use client"

import { useState, useEffect } from "react"
import { Heart, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Replace with your actual messages
const messages = [
  {
    id: 1,
    text: "Uno está enamorado cuando se da cuenta que la otra persona es única",
  },
  {
    id: 2,
    text: "El amor consiste en encontrar a alguien con quien compartir tus rarezas",
  },
  {
    id: 3,
    text: "Te veo, me veo y me transfiguro en multitud de colores y de tiempos.",
  },
  {
    id: 4,
    text: "Sos un torbellino de nubes negras y soles brillantes, si el clima fuese lógico y no tan científico",
  },
  {
    id: 5,
    text: "Eres el alcohol mas amargo, el vino mas dulce y el refugio de los poetas muertos, eres magia negra y fuego azul",
  },
  {
    id: 6,
    text: "Mil y una noches no bastarían de historias para alisar tus curvas y entender tu alma",
  },
]

export function MessagesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % messages.length)
  }

  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/30" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Palabras del Corazón
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mensajes que nacen del amor más puro que siento por ti
          </p>
        </div>

        {/* Message carousel */}
        <div className="relative">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Message */}
            <div className="min-h-[120px] flex items-center justify-center">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-center text-foreground leading-relaxed transition-opacity duration-500">
                "{messages[currentIndex].text}"
              </p>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al mensaje ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 rounded-full bg-background shadow-md hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 rounded-full bg-background shadow-md hidden sm:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-12">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className={`w-4 h-4 text-primary/30 ${
                i === 2 ? "text-accent fill-accent w-6 h-6" : ""
              }`}
              fill={i === 2 ? "currentColor" : "none"}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
