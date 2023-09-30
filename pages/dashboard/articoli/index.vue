<template>

  <div>
    <div class="flex gap-4">
      <h1>Articoli {{ postStore.total }}</h1>
      <NuxtLink to="/dashboard/articoli/create"> 
        <UButton>
          Crea nuovo 
        </UButton>
      </NuxtLink>
    </div>


  </div>

</template>

<script setup>
import { usePostStore } from '@/stores/post';
const postStore = usePostStore();
</script>