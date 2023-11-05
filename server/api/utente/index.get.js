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

 
  // prende tutti gli utenti
  const utenti = await prisma.utente.findMany({
    select: {
      id: true,
      email: true,
      nickname: true,
      nome: true,
      permessi: true
    },
    skip,
    take,
  })
  
  // conteggio dei utenti 
  const count = await prisma.utente.count()

  return { data: utenti, count } 
})