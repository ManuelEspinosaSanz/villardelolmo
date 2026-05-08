import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const plans = [
  {
    name: "Simpatizante",
    price: "30",
    description: "Apoya al club desde cualquier lugar",
    features: [
      "Carnet de socio digital",
      "Newsletter mensual",
      "10% descuento en tienda",
    ],
  },
  {
    name: "Adulto",
    price: "60",
    description: "Membresía completa para mayores de 18",
    features: [
      "Carnet físico y digital",
      "Entrada gratuita a partidos",
      "20% descuento en tienda",
      "Voto en Asamblea",
      "Descuentos en actividades",
    ],
    highlighted: true,
  },
  {
    name: "Juvenil",
    price: "25",
    description: "Para menores de 18 años",
    features: [
      "Carnet físico y digital",
      "Entrada gratuita a partidos",
      "15% descuento en tienda",
      "Actividades especiales",
    ],
  },
]

export const metadata = {
  title: "Hazte Socio | UD Villar del Olmo",
  description: "Únete a la familia verdiblanca y disfruta de ventajas exclusivas.",
}

export default function SociosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Hazte Socio
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Únete a la familia verdiblanca y apoya a tu club.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`p-8 border ${plan.highlighted ? 'border-primary bg-primary/5' : 'border-border'}`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/año</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto">
                    <Button 
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Solicitar
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Already member */}
        <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Ya eres socio?
            </h2>
            <p className="text-muted-foreground mb-8">
              Accede a tu área personal para gestionar tu membresía.
            </p>
            <Link href="/socios/login">
              <Button variant="outline" size="lg">
                Acceder
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
