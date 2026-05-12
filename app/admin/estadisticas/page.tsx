"use client"

import { motion } from "framer-motion"
import {
  Users,
  TrendingUp,
  Eye,
  Newspaper,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

const stats = [
  { label: "Visitas totales", value: "12,543", change: "+18%", trend: "up", icon: Eye },
  { label: "Socios activos", value: "231", change: "+12", trend: "up", icon: Users },
  { label: "Noticias vistas", value: "8,921", change: "+24%", trend: "up", icon: Newspaper },
  { label: "Nuevos socios (mes)", value: "8", change: "-2", trend: "down", icon: TrendingUp },
]

const visitasMensuales = [
  { mes: "Ene", visitas: 2100 },
  { mes: "Feb", visitas: 2400 },
  { mes: "Mar", visitas: 2800 },
  { mes: "Abr", visitas: 3200 },
  { mes: "May", visitas: 3421 },
]

const topNoticias = [
  { titulo: "Victoria del primer equipo ante el CD Nuevo Baztán", visitas: 1234 },
  { titulo: "Jornada de convivencia de la cantera", visitas: 892 },
  { titulo: "Inscripciones abiertas temporada 2026/27", visitas: 756 },
  { titulo: "Nuevo patrocinador para el equipo juvenil", visitas: 543 },
]

const sociosPorCategoria = [
  { categoria: "Adulto", cantidad: 145, porcentaje: 59 },
  { categoria: "Juvenil", cantidad: 42, porcentaje: 17 },
  { categoria: "Infantil", cantidad: 38, porcentaje: 15 },
  { categoria: "Veterano", cantidad: 22, porcentaje: 9 },
]

export default function AdminEstadisticasPage() {
  const maxVisitas = Math.max(...visitasMensuales.map(v => v.visitas))

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-heading font-bold text-zinc-900">Estadísticas</h1>
        <p className="text-zinc-600">Resumen de actividad y métricas del club</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            className="bg-white rounded-xl border border-zinc-200 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-heading font-bold mt-3">{stat.value}</p>
            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Visitas Mensuales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-lg">Visitas Mensuales</h2>
            <select className="text-sm border border-zinc-200 rounded-lg px-3 py-1.5">
              <option>Últimos 5 meses</option>
              <option>Último año</option>
            </select>
          </div>
          
          <div className="flex items-end justify-between h-48 gap-4">
            {visitasMensuales.map((item, index) => (
              <div key={item.mes} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.visitas / maxVisitas) * 100}%` }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="w-full bg-primary/80 rounded-t-lg min-h-[20px]"
                />
                <span className="text-xs text-zinc-500">{item.mes}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Socios por Categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <h2 className="font-heading font-bold text-lg mb-6">Socios por Categoría</h2>
          
          <div className="space-y-4">
            {sociosPorCategoria.map((item, index) => (
              <div key={item.categoria}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.categoria}</span>
                  <span className="text-sm text-zinc-500">{item.cantidad} ({item.porcentaje}%)</span>
                </div>
                <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.porcentaje}%` }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Noticias */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-zinc-200 p-6"
      >
        <h2 className="font-heading font-bold text-lg mb-6">Noticias Más Vistas</h2>
        
        <div className="space-y-4">
          {topNoticias.map((noticia, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-heading font-bold text-zinc-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-medium">{noticia.titulo}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Eye className="w-4 h-4" />
                <span className="font-medium">{noticia.visitas.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
