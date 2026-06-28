"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeline = [
  { year: "1970", event: "Fundación del club por un grupo de vecinos apasionados" },
  { year: "1985", event: "Inauguración del campo municipal" },
  { year: "2000", event: "Creación de la escuela de fútbol base" },
  { year: "2015", event: "Renovación completa de instalaciones" },
  { year: "2020", event: "Celebración del 50 aniversario" },
]

const values = [
  {
    number: "01",
    title: "FORMACIÓN",
    description: "Nuestro principal objetivo es formar futbolistas y personas con valores.",
  },
  {
    number: "02",
    title: "RESPETO",
    description: "El respeto a compañeros, rivales y árbitros es fundamental en nuestro club.",
  },
  {
    number: "03",
    title: "COMUNIDAD",
    description: "Somos parte activa del tejido social de Villar del Olmo.",
  },
  {
    number: "04",
    title: "PASIÓN",
    description: "El amor por el fútbol y por nuestros colores nos define.",
  },
]

export default function HistoriaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 relative">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center text-white/60 hover:text-white mb-8 text-sm transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="tracking-[0.1em] uppercase">Volver</span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
                NUESTRA
                <br />
                <span className="text-white/40">HISTORIA</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg md:text-xl max-w-xl">
                Mas de 50 anos de pasion, esfuerzo y futbol en el corazon de Madrid.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 1 — Historia del Club: Imagen izquierda + Texto derecha */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Imagen del equipo */}
              <FadeIn>
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/historia-equipo-real.jpg"
                    alt="Equipo C.D. Unión Deportiva Villar del Olmo"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              
              {/* Texto historia del club */}
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
                    Historia del Club
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Décadas formando futbolistas
                  </h2>
                  <div className="space-y-4 text-foreground/70 leading-relaxed">
                    <p>
                      El C.D. Unión Deportiva Villar del Olmo nació con la idea de acercar el fútbol a los jóvenes del municipio y crear un espacio donde competir, aprender y crecer dentro de un ambiente de equipo.
                    </p>
                    <p>
                      Con el paso de los años, el club se ha convertido en un punto de encuentro para muchas familias de Villar del Olmo y alrededores. Por sus equipos han pasado generaciones de jugadores que han defendido sus colores con ilusión, esfuerzo y respeto por este deporte.
                    </p>
                    <p>
                      Hoy, el club mantiene esa misma esencia: seguir impulsando el fútbol base, cuidar la cantera y representar al pueblo dentro y fuera del campo.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 2 — Historia del Pueblo: Texto izquierda + Imagen derecha */}
        <section className="py-20 md:py-32 bg-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Texto historia del pueblo */}
              <FadeIn>
                <div className="space-y-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
                    Historia del Pueblo
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Villar del Olmo
                  </h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Villar del Olmo es un municipio del este de la Comunidad de Madrid, situado en un entorno natural que conserva el carácter tranquilo y cercano de los pueblos de la comarca. Su historia está ligada a la repoblación medieval y al desarrollo de pequeñas comunidades rurales que fueron dando forma a la identidad del municipio.
                    </p>
                    <p>
                      Esa identidad sigue muy presente hoy: un pueblo donde la vida social, las familias y las actividades deportivas tienen un papel importante. En ese contexto, el fútbol se ha convertido en una forma de unión entre generaciones, vecinos y jugadores que comparten algo más que un escudo.
                    </p>
                    <p>
                      El C.D. Unión Deportiva Villar del Olmo representa esa conexión entre pueblo y deporte: competir con orgullo, formar desde la base y mantener vivo el sentimiento de pertenencia.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Imagen del ayuntamiento */}
              <FadeIn delay={0.2}>
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/historia-ayuntamiento-real.jpg"
                    alt="Ayuntamiento de Villar del Olmo"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
            <FadeIn className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-6 block">
                    Lo que nos define
                  </span>
                  <h2 className="text-headline text-4xl md:text-5xl text-foreground">
                    NUESTROS<br />
                    <span className="text-muted-foreground">VALORES</span>
                  </h2>
                </div>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 gap-1" staggerDelay={0.1}>
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-10 md:p-12 bg-secondary/50 group hover:bg-primary transition-colors duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-xs font-semibold text-primary group-hover:text-white/60 tracking-[0.2em] mb-6 block transition-colors">
                      {value.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-white mb-4 tracking-tight transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-40 bg-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
            <FadeIn>
              <div className="text-center mb-20">
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-6 block">
                  Nuestra trayectoria
                </span>
                <h2 className="text-headline text-4xl md:text-5xl text-background">
                  HITOS DEL CLUB
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex gap-8 md:gap-16 items-start py-8 border-b border-background/10 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-5xl md:text-7xl font-bold text-primary w-32 md:w-40 shrink-0 tracking-tighter">
                      {item.year}
                    </div>
                    <div className="pt-3 md:pt-5">
                      <p className="text-background text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                        {item.event}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-20 text-center">
            <FadeIn>
              <h2 className="text-headline text-3xl md:text-4xl text-foreground mb-6">
                FORMA PARTE DE NUESTRA HISTORIA
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Inscripciones abiertas para todas las categorías.
              </p>
              <Link href="/contacto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-sm font-semibold tracking-[0.15em] px-12 py-6 h-auto"
                  >
                    CONTACTAR
                  </Button>
                </motion.div>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
