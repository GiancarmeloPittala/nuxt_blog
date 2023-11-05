import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs';

export default defineEventHandler(async event => {
  try {
    // creazione del dato sul database ( server ) 
    let { nickname, password } = await readBody(event); // body
    
    // la prima occorrenza di 
    const user = await prisma.utente.findUnique({ where: { nickname }})

    if ( !user )
     throw 'Utente non trovato'

    // controllare la password
    const { password: hash } = user;

    if ( !bcrypt.compareSync( password, hash ) ){
      throw 'Password errata! '
    }
  
    // spread operator
    return { data: { ... user, password: undefined } }

  } catch (error) {
    throw createError({
      statusCode: 400,
      message: error
    })
  } finally {
    prisma.$disconnect();
  }
})