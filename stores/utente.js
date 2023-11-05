import { defineStore } from 'pinia'


export const useUtenteStore = defineStore('utenteStore', {
  persist: true,
  state: () => ({ utente: {}, utenti: [], total: 0 }),
  getters: {
    loggedIn: state => state.utente.id !== undefined
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

    },
    async login (utente) {
      try {
        const toast = useToast();
        toast.add({ title: 'Login in corso, si prega di attendere ...'})
        const { data } = await $fetch('/api/utente/login', { method: 'POST', body: utente })
        toast.add({ title: 'Login effettuata con successo! '})

        // memorizzo il dato nello store
        this.utente = data;
      } catch (error) {
        toast.add({ color:'red', title: 'Errore ...', description: error.response._data.message })
      }
    
    },
    async init () {
      try {
        const { data, count } = await $fetch('/api/utente')
        this.utenti = data;
        this.total = count;
      } catch (error) {
        toast.add({ color:'red', title: 'Errore ...', description: error.response._data.message })
      }
    
    }
    

  }
})
