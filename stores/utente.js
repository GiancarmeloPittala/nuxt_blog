import { defineStore } from 'pinia'

export const useUtenteStore = defineStore('utenteStore', {
  state: () => ({ utente: {} }),
  getters: {

  },
  actions: {
    async registrazione(nickname, email, password){
      try {
        $fetch('/api/utente/registrati', { method: 'POST', body: {
          nickname,
          email,
          password
        }})
      } catch (error) {
        console.error( error )
      }

    }
  }
})
