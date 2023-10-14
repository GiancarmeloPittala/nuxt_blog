<template>
  <div class="flex flex-col gap-[100px]">
    <HomeHero />
    <HomeHero />
    <HomeHero />
    <HomeHero />
    <HomeHero />
    <HomeHero />
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
const postStore = usePostStore()
</script>
