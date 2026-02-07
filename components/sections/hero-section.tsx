"use client"
import localFont from "next/font/local"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

const myFont = localFont({
  src:'../../public/fonts/Valentine Cute.ttf',
  variable:'--font-valentine',
})
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(135,206,235,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative heart */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Heart 
                className="w-16 h-16 text-primary fill-primary animate-pulse" 
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          {/* Main title */}
          <h1 className={`${myFont.variable} text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight text-balance`}>
            Para Ti Cuervito
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Un pequeño rincón en el mundo digital donde guardo nuestros momentos más especiales, 
            nuestras aventuras juntos y todo el amor que siento por ti.
          </p>

          {/* Date */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">14 de Febrero</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 mx-auto rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
