import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
  state: () => ({ posts: [], total: 0, page: 1, take: 5, skip: 0 }),
  getters: {
    getTitoli: state => state.posts.map( p => String(p.titolo).trim() )
  },
  actions: {
    async init () {

      // take = 3; quanti elementi voglio
      // skip = 2 ; indice di partenza

      // skip = ( page - 1 ) * take

      // [ 0, 1, 2, 3, 4, 5, 6]
      const { take, skip } = this;
      const { data, count } = await $fetch('/api/articoli', { query: { take, skip }})

      this.posts = data
      this.total = count
    },
    async create (new_articolo) {
      // form => usePostStore.create => /api/articoli [post] => usePostStore.create [new data]
      const { data } = await $fetch('/api/articoli', { method: 'POST', body: new_articolo })
      this.posts.unshift( data ); // inserimento in testa
      this.total ++;
    }
  }
})
