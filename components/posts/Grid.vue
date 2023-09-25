<template>
  <div>
    <div v-for="post of postStore.posts" :key="post.id" class="flex gap-4 p-4">
      <img class="h-[50px] w-[50px] rounded-lg object-cover" src="https://source.unsplash.com/random" alt="">
      <div>
        <p>{{ post.titolo }}</p>
        <p>{{ post.desc }}</p>
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