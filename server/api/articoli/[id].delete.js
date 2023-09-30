import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
 // creazione del dato sul database ( server ) 
  const { id } = getRouterParams(event); // params

  // await prisma.articoli.delete({ where: { id } })
  await prisma.articoli.update({ where: { id }, data: { stato: 'bozza' } })


  return { msg: 'l\'articolo è stato eliminato' } 
})