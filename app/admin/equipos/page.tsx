"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Plus,
  Users,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronRight,
  Shield
} from "lucide-react"

const mockEquipos = [
  { 
    id: 1, 
    nombre: "Primer Equipo", 
    categoria: "Senior",
    jugadores: 22,
    entrenador: "José García",
    competicion: "Primera Autonómica",
    color: "bg-blue-500"
  },
  { 
    id: 2, 
    nombre: "Juvenil A", 
    categoria: "Juvenil",
    jugadores: 18,
    entrenador: "Carlos Martín",
    competicion: "Liga Juvenil Preferente",
    color: "bg-green-500"
  },
  { 
    id: 3, 
    nombre: "Cadete A", 
    categoria: "Cadete",
    jugadores: 20,
    entrenador: "Miguel Sánchez",
    competicion: "Liga Cadete",
    color: "bg-purple-500"
  },
  { 
    id: 4, 
    nombre: "Infantil A", 
    categoria: "Infantil",
    jugadores: 16,
    entrenador: "Ana López",
    competicion: "Liga Infantil",
    color: "bg-orange-500"
  },
  { 
    id: 5, 
    nombre: "Alevín A", 
    categoria: "Alevín",
    jugadores: 14,
    entrenador: "Pedro Ruiz",
    competicion: "Liga Alevín",
    color: "bg-pink-500"
  },
  { 
    id: 6, 
    nombre: "Benjamín", 
    categoria: "Benjamín",
    jugadores: 12,
    entrenador: "Laura Díaz",
    competicion: "Liga Benjamín",
    color: "bg-cyan-500"
  },
]

export default function AdminEquiposPage() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-heading font-bold text-zinc-900">Gestión de Equipos</h1>
          <p className="text-zinc-600">{mockEquipos.length} equipos en el club</p>
        </div>
        <Link href="/admin/equipos/nuevo">
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Equipo
          </Button>
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">{mockEquipos.length}</p>
              <p className="text-sm text-zinc-500">Equipos</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">
                {mockEquipos.reduce((acc, e) => acc + e.jugadores, 0)}
              </p>
              <p className="text-sm text-zinc-500">Jugadores</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">{mockEquipos.length}</p>
              <p className="text-sm text-zinc-500">Entrenadores</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">6</p>
              <p className="text-sm text-zinc-500">Categorías</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {mockEquipos.map((equipo, index) => (
          <motion.div
            key={equipo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`h-2 ${equipo.color}`} />
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg">{equipo.nombre}</h3>
                  <p className="text-sm text-zinc-500">{equipo.categoria}</p>
                </div>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setMenuOpen(menuOpen === equipo.id ? null : equipo.id)}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                  {menuOpen === equipo.id && (
                    <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-zinc-200 py-1 z-10">
                      <Link href={`/admin/equipos/${equipo.id}/editar`}>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center gap-2">
                          <Edit className="w-4 h-4" /> Editar
                        </button>
                      </Link>
                      <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 text-red-600 flex items-center gap-2">
                        <Trash2 className="w-4 h-4" /> Eliminar
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Jugadores</span>
                  <span className="font-medium">{equipo.jugadores}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Entrenador</span>
                  <span className="font-medium">{equipo.entrenador}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Competición</span>
                  <span className="font-medium text-xs">{equipo.competicion}</span>
                </div>
              </div>

              <Link href={`/admin/equipos/${equipo.id}`}>
                <Button variant="outline" className="w-full mt-4 gap-2">
                  Ver plantilla <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
