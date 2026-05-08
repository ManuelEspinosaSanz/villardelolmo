"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClubLogo } from "@/components/club-logo"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function LoginSociosPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    alert("Funcionalidad próximamente disponible")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20 flex items-center justify-center py-16">
        <div className="w-full max-w-md px-6">
          <Link 
            href="/socios" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>

          <div className="text-center mb-10">
            <ClubLogo className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              Área de Socios
            </h1>
            <p className="text-muted-foreground mt-2">
              Accede con tu email y contraseña
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Tu contraseña"
                  required
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full h-12"
              disabled={isLoading}
            >
              {isLoading ? "Accediendo..." : "Acceder"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            ¿No tienes cuenta?{" "}
            <Link href="/socios" className="text-primary hover:underline">
              Hazte socio
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
