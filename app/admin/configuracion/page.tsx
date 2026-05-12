"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Settings,
  Globe,
  Mail,
  Bell,
  Shield,
  Palette,
  Save,
  CheckCircle,
  Upload
} from "lucide-react"

export default function AdminConfiguracionPage() {
  const [saved, setSaved] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "contacto", label: "Contacto", icon: Mail },
    { id: "redes", label: "Redes Sociales", icon: Globe },
    { id: "notificaciones", label: "Notificaciones", icon: Bell },
    { id: "seguridad", label: "Seguridad", icon: Shield },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-heading font-bold text-zinc-900">Configuración</h1>
          <p className="text-zinc-600">Ajustes generales del sitio web</p>
        </div>
        <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 gap-2">
          <Save className="w-4 h-4" />
          Guardar cambios
        </Button>
      </motion.div>

      {/* Success */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">Configuración guardada correctamente</span>
        </motion.div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:w-64 flex-shrink-0"
        >
          <div className="bg-white rounded-xl border border-zinc-200 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          {activeTab === "general" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="font-heading font-bold text-lg mb-6">Información del Club</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombreClub">Nombre del club</Label>
                    <Input id="nombreClub" defaultValue="C.D. Unión Deportiva Villar del Olmo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="abreviatura">Abreviatura</Label>
                    <Input id="abreviatura" defaultValue="UD Villar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fundacion">Año de fundación</Label>
                    <Input id="fundacion" defaultValue="1985" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cif">CIF</Label>
                    <Input id="cif" defaultValue="G12345678" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="descripcion">Descripción</Label>
                    <textarea
                      id="descripcion"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 h-24 resize-none"
                      defaultValue="Club de fútbol de Villar del Olmo, Madrid. Formando jugadores y personas desde 1985."
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="font-heading font-bold text-lg mb-6">Logo y Colores</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-3 block">Logo del club</Label>
                    <div className="border-2 border-dashed border-zinc-200 rounded-xl p-6 text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                        <Palette className="w-8 h-8 text-primary" />
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 gap-2">
                        <Upload className="w-4 h-4" />
                        Cambiar logo
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="colorPrimario">Color primario</Label>
                      <div className="flex gap-2">
                        <Input id="colorPrimario" defaultValue="#2a5a3a" />
                        <div className="w-12 h-10 rounded-lg bg-primary border border-zinc-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="colorSecundario">Color secundario</Label>
                      <div className="flex gap-2">
                        <Input id="colorSecundario" defaultValue="#ffffff" />
                        <div className="w-12 h-10 rounded-lg bg-white border border-zinc-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contacto" && (
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="font-heading font-bold text-lg mb-6">Información de Contacto</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="info@udvillardelolmo.es" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" defaultValue="918 76 54 32" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input id="direccion" defaultValue="Campo Municipal de Fútbol, Villar del Olmo, Madrid" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="horario">Horario de atención</Label>
                  <Input id="horario" defaultValue="Lun-Vie: 17:00-20:00" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "redes" && (
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="font-heading font-bold text-lg mb-6">Redes Sociales</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input id="facebook" placeholder="https://facebook.com/..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input id="instagram" placeholder="https://instagram.com/..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter / X</Label>
                  <Input id="twitter" placeholder="https://twitter.com/..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input id="youtube" placeholder="https://youtube.com/..." />
                </div>
              </div>
            </div>
          )}

          {activeTab === "notificaciones" && (
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="font-heading font-bold text-lg mb-6">Notificaciones</h2>
              <div className="space-y-4">
                {[
                  { label: "Nuevo socio registrado", desc: "Recibe una notificación cuando un nuevo socio se registre" },
                  { label: "Comentarios en noticias", desc: "Notificaciones de nuevos comentarios" },
                  { label: "Pagos pendientes", desc: "Alertas de cuotas pendientes de pago" },
                  { label: "Resumen semanal", desc: "Recibe un resumen semanal de actividad" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "seguridad" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="font-heading font-bold text-lg mb-6">Cambiar Contraseña</h2>
                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Contraseña actual</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nueva contraseña</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Actualizar contraseña
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="font-heading font-bold text-lg mb-6">Sesiones Activas</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
                    <div>
                      <p className="font-medium">Este dispositivo</p>
                      <p className="text-sm text-zinc-500">Madrid, España - Chrome</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      Activa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
