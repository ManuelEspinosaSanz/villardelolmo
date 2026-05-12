"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Eye,
  Upload,
  CheckCircle
} from "lucide-react"

export default function NuevaNoticiaPage() {
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({
    titulo: "",
    extracto: "",
    contenido: "",
    categoria: "Club",
    estado: "borrador",
    imagenDestacada: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/admin/noticias">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold text-zinc-900">Nueva Noticia</h1>
            <p className="text-zinc-600">Crea una nueva noticia para el sitio</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Eye className="w-4 h-4" />
            Vista previa
          </Button>
        </div>
      </motion.div>

      {/* Success */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">Noticia guardada correctamente</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-zinc-200 p-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título *</Label>
                  <Input
                    id="titulo"
                    value={formData.titulo}
                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                    placeholder="Escribe el título de la noticia"
                    className="text-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="extracto">Extracto</Label>
                  <Input
                    id="extracto"
                    value={formData.extracto}
                    onChange={(e) => setFormData({ ...formData, extracto: e.target.value })}
                    placeholder="Breve descripción de la noticia"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-zinc-200 p-6"
            >
              <Label htmlFor="contenido" className="mb-4 block">Contenido *</Label>
              <textarea
                id="contenido"
                value={formData.contenido}
                onChange={(e) => setFormData({ ...formData, contenido: e.target.value })}
                placeholder="Escribe el contenido completo de la noticia..."
                className="w-full h-64 px-3 py-2 rounded-lg border border-zinc-200 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                required
              />
              <p className="text-sm text-zinc-500 mt-2">Soporta formato Markdown</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publicar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-zinc-200 p-6"
            >
              <h3 className="font-heading font-bold mb-4">Publicar</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Estado</Label>
                  <select
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                  >
                    <option value="borrador">Borrador</option>
                    <option value="publicada">Publicada</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <Save className="w-4 h-4" />
                  Guardar
                </Button>
              </div>
            </motion.div>

            {/* Categoría */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-zinc-200 p-6"
            >
              <h3 className="font-heading font-bold mb-4">Categoría</h3>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              >
                <option value="Club">Club</option>
                <option value="Primer Equipo">Primer Equipo</option>
                <option value="Cantera">Cantera</option>
                <option value="Eventos">Eventos</option>
              </select>
            </motion.div>

            {/* Imagen destacada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-zinc-200 p-6"
            >
              <h3 className="font-heading font-bold mb-4">Imagen Destacada</h3>
              <div className="border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <ImageIcon className="w-10 h-10 text-zinc-300 mx-auto" />
                <p className="text-sm text-zinc-500 mt-2">Arrastra una imagen o haz clic</p>
                <Button variant="outline" size="sm" className="mt-4 gap-2">
                  <Upload className="w-4 h-4" />
                  Subir imagen
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </form>
    </div>
  )
}
