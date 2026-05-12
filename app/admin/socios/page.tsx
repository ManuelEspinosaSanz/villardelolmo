"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const mockSocios = [
  { id: 1, nombre: "Carlos García López", email: "carlos@email.com", telefono: "612345678", tipo: "Adulto", estado: "activo", fechaAlta: "2018-09-01", numeroSocio: "00247" },
  { id: 2, nombre: "María Fernández Díaz", email: "maria@email.com", telefono: "623456789", tipo: "Adulto", estado: "activo", fechaAlta: "2019-03-15", numeroSocio: "00298" },
  { id: 3, nombre: "Pedro Martínez Ruiz", email: "pedro@email.com", telefono: "634567890", tipo: "Juvenil", estado: "activo", fechaAlta: "2020-09-01", numeroSocio: "00312" },
  { id: 4, nombre: "Ana Sánchez Gil", email: "ana@email.com", telefono: "645678901", tipo: "Infantil", estado: "pendiente", fechaAlta: "2023-01-20", numeroSocio: "00401" },
  { id: 5, nombre: "Luis Rodríguez Pérez", email: "luis@email.com", telefono: "656789012", tipo: "Adulto", estado: "activo", fechaAlta: "2017-06-10", numeroSocio: "00189" },
  { id: 6, nombre: "Elena Torres Vega", email: "elena@email.com", telefono: "667890123", tipo: "Adulto", estado: "inactivo", fechaAlta: "2015-02-28", numeroSocio: "00095" },
  { id: 7, nombre: "Miguel Ángel Herrera", email: "miguel@email.com", telefono: "678901234", tipo: "Veterano", estado: "activo", fechaAlta: "2010-09-01", numeroSocio: "00042" },
  { id: 8, nombre: "Laura Jiménez Mora", email: "laura@email.com", telefono: "689012345", tipo: "Adulto", estado: "activo", fechaAlta: "2021-11-05", numeroSocio: "00356" },
]

const tiposFiltro = ["Todos", "Adulto", "Juvenil", "Infantil", "Veterano"]
const estadosFiltro = ["Todos", "activo", "pendiente", "inactivo"]

export default function AdminSociosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tipoFiltro, setTipoFiltro] = useState("Todos")
  const [estadoFiltro, setEstadoFiltro] = useState("Todos")
  const [selectedSocios, setSelectedSocios] = useState<number[]>([])
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  const sociosFiltrados = mockSocios.filter(socio => {
    const matchSearch = socio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       socio.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       socio.numeroSocio.includes(searchTerm)
    const matchTipo = tipoFiltro === "Todos" || socio.tipo === tipoFiltro
    const matchEstado = estadoFiltro === "Todos" || socio.estado === estadoFiltro
    return matchSearch && matchTipo && matchEstado
  })

  const toggleSelectAll = () => {
    if (selectedSocios.length === sociosFiltrados.length) {
      setSelectedSocios([])
    } else {
      setSelectedSocios(sociosFiltrados.map(s => s.id))
    }
  }

  const toggleSelect = (id: number) => {
    setSelectedSocios(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-heading font-bold text-zinc-900">Gestión de Socios</h1>
          <p className="text-zinc-600">{mockSocios.length} socios registrados</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
          <Link href="/admin/socios/nuevo">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Socio
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-zinc-200 p-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <Input
              placeholder="Buscar por nombre, email o N de socio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
              className="px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
            >
              {tiposFiltro.map(tipo => (
                <option key={tipo} value={tipo}>{tipo === "Todos" ? "Todos los tipos" : tipo}</option>
              ))}
            </select>
            <select
              value={estadoFiltro}
              onChange={(e) => setEstadoFiltro(e.target.value)}
              className="px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
            >
              {estadosFiltro.map(estado => (
                <option key={estado} value={estado}>{estado === "Todos" ? "Todos los estados" : estado}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-zinc-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedSocios.length === sociosFiltrados.length && sociosFiltrados.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-zinc-300"
                  />
                </th>
                <th className="p-4 text-left text-sm font-semibold text-zinc-600">Socio</th>
                <th className="p-4 text-left text-sm font-semibold text-zinc-600">Contacto</th>
                <th className="p-4 text-left text-sm font-semibold text-zinc-600">Tipo</th>
                <th className="p-4 text-left text-sm font-semibold text-zinc-600">Estado</th>
                <th className="p-4 text-left text-sm font-semibold text-zinc-600">Fecha Alta</th>
                <th className="p-4 text-right text-sm font-semibold text-zinc-600">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {sociosFiltrados.map((socio) => (
                <tr key={socio.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedSocios.includes(socio.id)}
                      onChange={() => toggleSelect(socio.id)}
                      className="rounded border-zinc-300"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {socio.nombre.split(" ").map(n => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900">{socio.nombre}</p>
                        <p className="text-sm text-zinc-500">#{socio.numeroSocio}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-zinc-900">{socio.email}</p>
                    <p className="text-sm text-zinc-500">{socio.telefono}</p>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-zinc-900">{socio.tipo}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      socio.estado === "activo" ? "bg-green-100 text-green-700" :
                      socio.estado === "pendiente" ? "bg-amber-100 text-amber-700" :
                      "bg-zinc-100 text-zinc-700"
                    }`}>
                      {socio.estado}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-zinc-500">
                      {new Date(socio.fechaAlta).toLocaleDateString("es-ES")}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/admin/socios/${socio.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/socios/${socio.id}/editar`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <div className="relative">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => setMenuOpen(menuOpen === socio.id ? null : socio.id)}
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                        {menuOpen === socio.id && (
                          <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-zinc-200 py-1 z-10">
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center gap-2">
                              <Mail className="w-4 h-4" /> Enviar email
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center gap-2 text-red-600">
                              <Trash2 className="w-4 h-4" /> Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-zinc-200">
          <p className="text-sm text-zinc-600">
            Mostrando {sociosFiltrados.length} de {mockSocios.length} socios
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
