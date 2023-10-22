<template>
  <div class="container mx-auto flex flex-col gap-[100px]">
    <HomeHero />
    <HomeMarchi />
    <HomePost />
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
const postStore = usePostStore()

onMounted( async () => {
  await postStore.init()
})


</script>
