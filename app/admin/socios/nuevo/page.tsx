"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  CreditCard,
  Save,
  CheckCircle
} from "lucide-react"

export default function NuevoSocioPage() {
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    direccion: "",
    codigoPostal: "",
    localidad: "",
    fechaNacimiento: "",
    tipoSocio: "Adulto",
    metodoPago: "domiciliacion"
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
        className="flex items-center gap-4"
      >
        <Link href="/admin/socios">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-heading font-bold text-zinc-900">Nuevo Socio</h1>
          <p className="text-zinc-600">Registra un nuevo socio en el club</p>
        </div>
      </motion.div>

      {/* Success message */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">Socio registrado correctamente</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos personales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="font-heading font-bold text-lg">Datos Personales</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos *</Label>
              <Input
                id="apellidos"
                value={formData.apellidos}
                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dni">DNI/NIE *</Label>
              <Input
                id="dni"
                value={formData.dni}
                onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fechaNacimiento">Fecha de nacimiento *</Label>
              <Input
                id="fechaNacimiento"
                type="date"
                value={formData.fechaNacimiento}
                onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                required
              />
            </div>
          </div>
        </motion.div>

        {/* Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="font-heading font-bold text-lg">Contacto</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input
                id="direccion"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="codigoPostal">Código Postal</Label>
              <Input
                id="codigoPostal"
                value={formData.codigoPostal}
                onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="localidad">Localidad</Label>
              <Input
                id="localidad"
                value={formData.localidad}
                onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
              />
            </div>
          </div>
        </motion.div>

        {/* Tipo de socio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-heading font-bold text-lg">Tipo de Socio</h2>
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {["Infantil", "Juvenil", "Adulto", "Veterano"].map((tipo) => (
              <button
                key={tipo}
                type="button"
                onClick={() => setFormData({ ...formData, tipoSocio: tipo })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  formData.tipoSocio === tipo
                    ? "border-primary bg-primary/5"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <p className="font-medium">{tipo}</p>
                <p className="text-sm text-zinc-500 mt-1">
                  {tipo === "Infantil" && "Hasta 12 años"}
                  {tipo === "Juvenil" && "13-17 años"}
                  {tipo === "Adulto" && "18-64 años"}
                  {tipo === "Veterano" && "65+ años"}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Método de pago */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="font-heading font-bold text-lg">Método de Pago</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: "domiciliacion", label: "Domiciliación bancaria", desc: "Pago mensual automático" },
              { id: "tarjeta", label: "Tarjeta de crédito", desc: "Pago único anual" },
              { id: "efectivo", label: "Efectivo", desc: "Pago en oficina del club" }
            ].map((metodo) => (
              <button
                key={metodo.id}
                type="button"
                onClick={() => setFormData({ ...formData, metodoPago: metodo.id })}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  formData.metodoPago === metodo.id
                    ? "border-primary bg-primary/5"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <p className="font-medium">{metodo.label}</p>
                <p className="text-sm text-zinc-500 mt-1">{metodo.desc}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-end gap-3"
        >
          <Link href="/admin/socios">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button type="submit" className="bg-primary hover:bg-primary/90 gap-2">
            <Save className="w-4 h-4" />
            Registrar Socio
          </Button>
        </motion.div>
      </form>
    </div>
  )
}
