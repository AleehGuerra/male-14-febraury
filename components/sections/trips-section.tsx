"use client"

import { MapPin, Calendar, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Replace with your actual trips
const trips = [
  {
    id: 1,
    destination: "Varadero",
    date: "Agosto 2024",
    description: "Fue nuestro primer viaje juntos, lleno de risas, playas y momentos inolvidables.",
    memory: "Aqui fue donde supe que te quería para mi y lucharia por ti toda la vida",
    emoji: "🏖",
  },
  {
    id: 2,
    destination: "Fábrica de Arte Cubano",
    date: "Julio 2025",
    description: "Visita a la Fábrica de Arte Cubano, nuestra salida mas soñada",
    memory: "Nuestro Beso sobre la Pared de Besos.",
    emoji: "🎨",
  },
  {
    id: 3,
    destination: "Varadero",
    date: "Julio 2025",
    description: "Nuestro Segundo viaje a Varadero",
    memory: "Nuestra recogida de conchas en la playa, aun las guardo con cariño",
    emoji: "🌊",
  },

]

export function TripsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/30" />
            <MapPin className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nuestras Aventuras
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Cada viaje juntos es un capítulo más en nuestra historia de amor
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {trips.map((trip, index) => (
              <div
                key={trip.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1 w-full">
                  <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{trip.emoji}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-serif text-2xl font-semibold text-foreground">
                              {trip.destination}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{trip.date}</span>
                          </div>
                          <p className="text-foreground/80 mb-4">
                            {trip.description}
                          </p>
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                            <Heart className="w-4 h-4 text-accent fill-accent mt-0.5 shrink-0" />
                            <p className="text-sm italic text-muted-foreground">
                              {trip.memory}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md shrink-0" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
