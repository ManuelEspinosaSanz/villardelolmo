"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock
} from "lucide-react"

const mockNoticias = [
  { 
    id: 1, 
    titulo: "Victoria del primer equipo ante el CD Nuevo Baztán", 
    extracto: "Gran partido de nuestro equipo senior que consiguió tres puntos importantes fuera de casa.",
    imagen: "/images/news-1.jpg",
    categoria: "Primer Equipo",
    estado: "publicada",
    fecha: "2026-05-10",
    autor: "Admin"
  },
  { 
    id: 2, 
    titulo: "Jornada de convivencia de la cantera", 
    extracto: "Más de 100 niños y niñas disfrutaron de una jornada llena de actividades y diversión.",
    imagen: "/images/news-2.jpg",
    categoria: "Cantera",
    estado: "publicada",
    fecha: "2026-05-08",
    autor: "Admin"
  },
  { 
    id: 3, 
    titulo: "Inscripciones abiertas temporada 2026/27", 
    extracto: "Ya puedes inscribirte para la próxima temporada. Plazas limitadas.",
    imagen: "/images/about-club.jpg",
    categoria: "Club",
    estado: "borrador",
    fecha: "2026-05-05",
    autor: "Admin"
  },
  { 
    id: 4, 
    titulo: "Nuevo patrocinador para el equipo juvenil", 
    extracto: "Comercial Villar se une como patrocinador oficial de nuestro equipo juvenil.",
    imagen: "/images/hero-stadium.jpg",
    categoria: "Club",
    estado: "publicada",
    fecha: "2026-05-01",
    autor: "Admin"
  },
]

export default function AdminNoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  const noticiasFiltradas = mockNoticias.filter(n => 
    n.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-heading font-bold text-zinc-900">Gestión de Noticias</h1>
          <p className="text-zinc-600">{mockNoticias.length} noticias en total</p>
        </div>
        <Link href="/admin/noticias/nueva">
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Nueva Noticia
          </Button>
        </Link>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <Input
          placeholder="Buscar noticias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white"
        />
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {noticiasFiltradas.map((noticia, index) => (
          <motion.div
            key={noticia.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={noticia.imagen}
                alt={noticia.titulo}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                  {noticia.categoria}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  noticia.estado === "publicada" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-zinc-100 text-zinc-700"
                }`}>
                  {noticia.estado}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-lg line-clamp-2">{noticia.titulo}</h3>
              <p className="text-sm text-zinc-600 mt-2 line-clamp-2">{noticia.extracto}</p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(noticia.fecha).toLocaleDateString("es-ES")}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Link href={`/noticias/${noticia.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/admin/noticias/${noticia.id}/editar`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <div className="relative">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => setMenuOpen(menuOpen === noticia.id ? null : noticia.id)}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                    {menuOpen === noticia.id && (
                      <div className="absolute right-0 bottom-full mb-1 w-40 bg-white rounded-lg shadow-lg border border-zinc-200 py-1 z-10">
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50">
                          Duplicar
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 text-red-600 flex items-center gap-2">
                          <Trash2 className="w-4 h-4" /> Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
