import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
  // paginazione 

  // sporco 
  let { take, skip, orderBy } = getQuery(event)

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
    orderBy: [ { created_at: 'asc'  }],
    where:{ stato: 'attivo'}
  })
  
  // conteggio dei articoli 
  const count = await prisma.articoli.count({ where:{ stato: 'attivo'}})

  return { data: articoli, count } 
})