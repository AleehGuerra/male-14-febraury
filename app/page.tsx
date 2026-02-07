"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { TripsSection } from "@/components/sections/trips-section"
import { MessagesSection } from "@/components/sections/messages-section"
import { Footer } from "@/components/sections/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Decorative floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingHearts />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <TripsSection />
        <MessagesSection />
        <Footer />
      </div>
    </main>
  )
}

function FloatingHearts() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-10"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        >
          <svg
            width={20 + i * 5}
            height={20 + i * 5}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </>
  )
}
