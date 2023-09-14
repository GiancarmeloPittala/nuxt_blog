import { defineStore } from 'pinia'


export const useTestStore = defineStore('test', {
  state: () => ({ text: 'pippo' }),
  getters: {
    getText: state => state.text
  },
  actions: {}
})
