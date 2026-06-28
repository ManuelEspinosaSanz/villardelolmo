"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion"

export function AboutSection() {
  return (
    <section className="py-24 md:py-40 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <FadeIn>
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-6 block">
                Sobre nosotros
              </span>
              <h2 className="text-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Pasión por el Fútbol
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Un club de pueblo, una cantera con valores y una forma de entender el fútbol desde el compromiso, el esfuerzo y el sentimiento de equipo.
                </p>
                <p>
                  El C.D. Unión Deportiva Villar del Olmo forma parte de la vida deportiva del municipio desde hace décadas. Un club cercano, construido alrededor del fútbol base, el esfuerzo diario y el compromiso de familias, jugadores y entrenadores.
                </p>
                <p>
                  Más que competir, el objetivo siempre ha sido formar. Formar futbolistas, pero sobre todo personas que entiendan el valor del compañerismo, el respeto y la pertenencia a un equipo.
                </p>
              </div>
              <Link
                href="/historia"
                className="group inline-flex items-center gap-4 mt-10"
              >
                <span className="text-sm font-semibold text-foreground tracking-[0.1em] uppercase group-hover:text-primary transition-colors">
                  Conoce nuestra historia
                </span>
                <span className="w-12 h-12 flex items-center justify-center border border-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
