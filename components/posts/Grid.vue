<template>
  <div>
    <div v-for="post of postStore.posts" :key="post.id" class="flex items-center gap-4 p-4">
      <PostsCard post="post" />
      <img class="h-[50px] w-[50px] rounded-lg object-cover" src="https://source.unsplash.com/random" alt="">
      <div>
        <NuxtLink :to="`/dashboard/articoli/${post.id}`">
          <p>{{ post.titolo }}</p>
        </NuxtLink>
        <p>{{ post.desc }}</p>
      </div>
      <div class="ml-auto flex gap-4">
        <NuxtLink :to="`/dashboard/articoli/${post.id}`">
          <UButton>Modifica</UButton>
        </NuxtLink>
        <UButton @click="postStore.elimina(post.id)" color="red" size="xs"> Elimina </UButton>
      </div>
    </div>
  </div>
</template>


<script setup lang="js">
// server 
import { usePostStore } from '@/stores/post';
const postStore = usePostStore();


onMounted( async () => {
  await postStore.init(); // chiamata api
})


</script>