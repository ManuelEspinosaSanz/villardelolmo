"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClubLogo } from "@/components/club-logo"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "INICIO", href: "/" },
  { name: "NOTICIAS", href: "/noticias" },
  { name: "EL CLUB", href: "/club" },
  { name: "CONTACTO", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-background/98 backdrop-blur-xl shadow-sm" 
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12 xl:px-20">
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ClubLogo className="h-12 w-12 transition-transform" />
            </motion.div>
            <div className="hidden sm:block">
              <span className={cn(
                "text-xs font-semibold tracking-[0.2em] transition-colors block",
                scrolled ? "text-primary" : "text-white"
              )}>
                C.D. UNIÓN DEPORTIVA
              </span>
              <span className={cn(
                "text-lg font-bold tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}>
                VILLAR DEL OLMO
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-5 py-2"
              >
                <span className={cn(
                  "text-xs font-semibold tracking-[0.15em] transition-colors",
                  scrolled ? "text-foreground group-hover:text-primary" : "text-white/90 group-hover:text-white"
                )}>
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/socios/login">
              <motion.span 
                className={cn(
                  "text-xs font-semibold tracking-[0.1em] transition-colors cursor-pointer",
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
                )}
                whileHover={{ x: 3 }}
              >
                ACCESO SOCIOS
              </motion.span>
            </Link>
            <Link href="/socios">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold tracking-[0.1em] px-6 py-5 group"
                >
                  HAZTE SOCIO
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú</span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary lg:hidden"
          >
            <motion.nav 
              className="flex flex-col justify-center items-center h-full gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-bold text-white tracking-tight hover:opacity-70 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 mt-8"
              >
                <Link href="/socios/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                    ACCESO SOCIOS
                  </Button>
                </Link>
                <Link href="/socios" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                    HAZTE SOCIO
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
