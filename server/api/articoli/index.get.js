import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
  // paginazione 

  let { take, skip } = getQuery(event)

  if (!take) take = 25
  else if ( take > 250 ) take = 250; // limite consentito

  take = Number( take )

  if (!skip) skip = 0;
  else if ( skip < 0 ) skip = 0;

  skip = Number( skip )

 
  // prende tutti gli articoli
  const articoli = await prisma.articoli.findMany({
    skip,
    take, 
    orderBy: [ { created_at: 'asc'  }]
  })
  
  // conteggio dei articoli 
  const count = await prisma.articoli.count()

  return { data: articoli, count } 
})