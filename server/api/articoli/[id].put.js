import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  // Data un id, tornare tutti i dati del post
  const { id } = getRouterParams(event) // params
  const body = await readBody(event)

  // controlli 
  console.log( body )

  if ( !body.titolo ) new Error('error')

  const post = await prisma.articoli.update({ 
    where: { id }, 
    data: body 
  })

  return { data: post }
})
