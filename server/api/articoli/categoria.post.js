// /api/articoli/categoria | POST

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( async event => {
 // creazione del dato sul database ( server ) 
  let { articoliId, categorieId } = await readBody(event); // body

  console.log( articoliId, categorieId )
  if( !articoliId ) throw 'Campo articoliId Obbligatorio!'
  if( !categorieId ) throw 'Campo categorieId Obbligatorio!'

  // sanificazione dati 
  articoliId = String(articoliId).trim()
  categorieId = String(categorieId).trim()
  // fine sanificazione
  // 1 1
  // 1 1
  // Controllo l'univocità delle chiavi primaria

  const esiste = await prisma.articolo_catagoria.findUnique({
    where: { articoliId_categorieId: {articoliId, categorieId} }
  })

  if ( esiste ) throw 'L\'articolo ha già questa categoria!' 

  const new_category = await prisma.articolo_catagoria.create({ data: { 
    articoliId, categorieId 
  } })

  return { data: new_category } 
})

