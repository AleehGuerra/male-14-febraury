"use client"

import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main message */}
        <div className="mb-8">
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Te amo por hoy, mañana y siempre. Y aunque la tortuga llegue a la luna, le buscare otro satélite que perseguir para seguir amandote
          </p>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
            <span className="text-muted-foreground">Por siempre tuyo</span>
            <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-border" />
          <Heart className="w-4 h-4 text-primary/50" />
          <div className="h-px w-16 bg-border" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          Hecho con{" "}
          <Heart className="w-3 h-3 inline-block text-accent fill-accent mx-1" />{" "}
          para ti Cuervito • {currentYear}
        </p>
        <p className="text-xl mt-6 mb-6 text-muted-foreground font-bold">Ahora cierra los ojos y preparate para oler tu regalo</p>
      </div>
    </footer>
  )
}
