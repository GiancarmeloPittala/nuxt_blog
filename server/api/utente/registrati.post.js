import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// pool => connessine al database 
// chiudere il pool fare il $disconnect
import bcrypt from 'bcryptjs';

export default defineEventHandler(async event => {
  try {
    // creazione del dato sul database ( server ) 
    let { nickname, email, password } = await readBody(event); // body
  
    // sanificazione dati 
    nickname = String(nickname).trim()
    email = String(email).trim()
    password = String(password).trim()
    // fine sanificazione
  
    // cryptare la password 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const new_user = await prisma.utente.create({
      data: {
        email,
        nickname,
        password: hash
      }
    })
    return { data: new_user }

  } catch (error) {
    console.error( error )
  } finally {
    prisma.$disconnect();
  }
})