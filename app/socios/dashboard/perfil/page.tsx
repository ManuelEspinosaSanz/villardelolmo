"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Save,
  Camera,
  Shield,
  CheckCircle
} from "lucide-react"

const mockUser = {
  nombre: "Carlos",
  apellidos: "García López",
  email: "carlos.garcia@email.com",
  telefono: "612 345 678",
  direccion: "Calle Mayor 15, Villar del Olmo",
  fechaNacimiento: "1985-06-15",
  dni: "12345678A",
  numeroSocio: "00247",
  fechaAlta: "2018-09-01",
  tipoSocio: "Adulto",
  avatar: null
}

export default function PerfilSocioPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(mockUser)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setIsEditing(false)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Mi Perfil</h1>
          <p className="text-muted-foreground mt-1">Gestiona tu información personal</p>
        </div>
        <div className="flex gap-3">
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-primary/90"
            >
              Editar perfil
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-primary hover:bg-primary/90"
              >
                <Save className="w-4 h-4 mr-2" />
                Guardar cambios
              </Button>
            </>
          )}
        </div>
      </motion.div>

      {/* Success message */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Cambios guardados correctamente</span>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Avatar y datos básicos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-4xl font-heading font-bold mx-auto">
                {formData.nombre[0]}{formData.apellidos[0]}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <h2 className="text-xl font-heading font-bold mt-4">
              {formData.nombre} {formData.apellidos}
            </h2>
            <p className="text-muted-foreground">Socio #{formData.numeroSocio}</p>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Socio {formData.tipoSocio}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Miembro desde {new Date(formData.fechaAlta).toLocaleDateString("es-ES", { 
                  month: "long", 
                  year: "numeric" 
                })}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Formulario de datos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-heading font-bold mb-6">Información Personal</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apellidos" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Apellidos
                </Label>
                <Input
                  id="apellidos"
                  value={formData.apellidos}
                  onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefono" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="direccion" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  Dirección
                </Label>
                <Input
                  id="direccion"
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Fecha de nacimiento
                </Label>
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                  disabled={!isEditing}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dni" className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  DNI
                </Label>
                <Input
                  id="dni"
                  value={formData.dni}
                  disabled
                  className="h-12 bg-muted/50"
                />
                <p className="text-xs text-muted-foreground">El DNI no se puede modificar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Seguridad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-2xl border border-border p-6 md:p-8"
      >
        <h3 className="text-lg font-heading font-bold mb-6">Seguridad</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-muted/30 rounded-xl">
          <div>
            <p className="font-medium">Contraseña</p>
            <p className="text-sm text-muted-foreground">Última actualización hace 3 meses</p>
          </div>
          <Button variant="outline">
            Cambiar contraseña
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
