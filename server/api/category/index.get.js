import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
  // paginazione 

  let { take, skip, orderBy } = getQuery(event)

  if (!take) take = 25
  else if ( take > 250 ) take = 250; // limite consentito

  take = Number( take )

  if (!skip) skip = 0;
  else if ( skip < 0 ) skip = 0;

  skip = Number( skip )

 
  // prende tutti gli categorie
  const categorie = await prisma.categorie.findMany({
    skip,
    take,
  })
  
  // conteggio dei categorie 
  const count = await prisma.categorie.count()

  return { data: categorie, count } 
})