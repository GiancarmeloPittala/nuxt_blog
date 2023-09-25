<template>

  <div>
    <h1>Articoli {{ postStore.total }}</h1>

    <PostsFormCreate />
  </div>

</template>

<script setup>
import { usePostStore } from '@/stores/post';
const postStore = usePostStore();
</script>