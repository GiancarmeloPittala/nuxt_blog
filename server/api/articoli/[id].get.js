import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
 // Data un id, tornare tutti i dati del post
  const { id } = getRouterParams(event); // params

  const post = await prisma.articoli.findUnique({ where: { id }, include: { tags: true } })

  return { data: post } 
})