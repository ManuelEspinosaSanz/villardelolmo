"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Users, 
  Newspaper, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Calendar,
  ArrowRight,
  UserPlus,
  FileText,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    name: "Total Socios",
    value: "247",
    change: "+12",
    trend: "up",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    name: "Socios Activos",
    value: "231",
    change: "+8",
    trend: "up",
    icon: Users,
    color: "bg-green-500"
  },
  {
    name: "Noticias Publicadas",
    value: "56",
    change: "+3",
    trend: "up",
    icon: Newspaper,
    color: "bg-purple-500"
  },
  {
    name: "Visitas (mes)",
    value: "3,421",
    change: "+18%",
    trend: "up",
    icon: Eye,
    color: "bg-orange-500"
  }
]

const recentSocios = [
  { id: 1, nombre: "María García López", fecha: "Hace 2 días", tipo: "Adulto", estado: "activo" },
  { id: 2, nombre: "Pedro Martínez Ruiz", fecha: "Hace 5 días", tipo: "Juvenil", estado: "activo" },
  { id: 3, nombre: "Ana Fernández Díaz", fecha: "Hace 1 semana", tipo: "Infantil", estado: "pendiente" },
  { id: 4, nombre: "Carlos Sánchez Gil", fecha: "Hace 1 semana", tipo: "Adulto", estado: "activo" },
]

const recentNoticias = [
  { id: 1, titulo: "Victoria del primer equipo ante el CD Nuevo Baztán", fecha: "Hace 1 día", estado: "publicada" },
  { id: 2, titulo: "Jornada de convivencia de la cantera", fecha: "Hace 3 días", estado: "publicada" },
  { id: 3, titulo: "Inscripciones abiertas temporada 2026/27", fecha: "Hace 5 días", estado: "borrador" },
]

const alertas = [
  { id: 1, mensaje: "5 socios con cuota pendiente de pago", tipo: "warning" },
  { id: 2, mensaje: "3 carnets próximos a caducar", tipo: "info" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-zinc-900">
          Bienvenido al Panel de Administración
        </h1>
        <p className="text-zinc-600 mt-1">
          Gestiona el club desde aquí. Hoy es {new Date().toLocaleDateString("es-ES", { 
            weekday: "long", 
            day: "numeric", 
            month: "long", 
            year: "numeric" 
          })}.
        </p>
      </motion.div>

      {/* Alertas */}
      {alertas.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          {alertas.map((alerta) => (
            <div
              key={alerta.id}
              className={`flex items-center gap-3 p-4 rounded-xl ${
                alerta.tipo === "warning" 
                  ? "bg-amber-50 border border-amber-200 text-amber-800" 
                  : "bg-blue-50 border border-blue-200 text-blue-800"
              }`}
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{alerta.mensaje}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-heading font-bold text-zinc-900">{stat.value}</p>
              <p className="text-sm text-zinc-600 mt-1">{stat.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Socios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-zinc-200 overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-zinc-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="font-heading font-bold text-lg">Últimos Socios</h2>
            </div>
            <Link href="/admin/socios">
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-zinc-100">
            {recentSocios.map((socio) => (
              <div key={socio.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-zinc-600">
                      {socio.nombre.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">{socio.nombre}</p>
                    <p className="text-sm text-zinc-500">{socio.tipo} · {socio.fecha}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  socio.estado === "activo" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {socio.estado}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Noticias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-zinc-200 overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-zinc-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="font-heading font-bold text-lg">Últimas Noticias</h2>
            </div>
            <Link href="/admin/noticias">
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todas <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-zinc-100">
            {recentNoticias.map((noticia) => (
              <div key={noticia.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
                <div className="flex-1 min-w-0 pr-4">
                  <p className="font-medium text-zinc-900 truncate">{noticia.titulo}</p>
                  <p className="text-sm text-zinc-500">{noticia.fecha}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ${
                  noticia.estado === "publicada" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-zinc-100 text-zinc-700"
                }`}>
                  {noticia.estado}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl border border-zinc-200 p-6"
      >
        <h2 className="font-heading font-bold text-lg mb-4">Acciones Rápidas</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/socios/nuevo">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <UserPlus className="w-4 h-4" />
              Nuevo Socio
            </Button>
          </Link>
          <Link href="/admin/noticias/nueva">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Nueva Noticia
            </Button>
          </Link>
          <Link href="/admin/estadisticas">
            <Button variant="outline" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              Ver Estadísticas
            </Button>
          </Link>
          <Link href="/admin/configuracion">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Configuración
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
