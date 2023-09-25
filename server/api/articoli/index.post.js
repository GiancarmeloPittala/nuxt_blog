import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
 // creazione del dato sul database ( server ) 
  let { titolo, desc } = await readBody(event); // body

  // sanificazione dati 
  titolo = String(titolo).trim()
  desc = String(desc).trim()
  // fine sanificazione

  const new_articolo = await prisma.articoli.create({ data: { titolo, desc } })

  return { data: new_articolo } 
})