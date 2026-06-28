import { createClient } from './server'
import type { Database } from '../database.types'

type ContactoMensajeInsert = Database['public']['Tables']['contacto_mensajes']['Insert']

// Enviar mensaje de contacto
export async function enviarMensajeContacto(mensaje: ContactoMensajeInsert) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('contacto_mensajes')
    .insert(mensaje)
    .select()
    .single()

  if (error) throw error
  return data
}
