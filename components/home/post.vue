<template>
  <div>
    <div v-for="category of categories.data" :key="category.id">
      <p class="font-bold tsxt-2xl capitalize">
        {{ category.titolo }}
      </p>
      <div>
        <div
          v-for="post of postStore.posts.filter(p => {
            const ids = p.categorie.map(c => c.categorieId)
            return ids.includes(category.id)
          })"
        >
          <PostsCard :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
const postStore = usePostStore()

const { data: categories } = await useFetch('/api/category')
</script>
