import { useUtenteStore } from "~/stores/utente";

export default defineNuxtRouteMiddleware(to => {
  // skip middleware on server
  if (process.server) return
  
  const utenteStore = useUtenteStore();
  
  // Se l'utente non lè loggato redirigere nella home
  if ( 
      !utenteStore.loggedIn || 
      utenteStore.utente.permessi !== 'GUEST' )
    useRouter().push('/')



  
})