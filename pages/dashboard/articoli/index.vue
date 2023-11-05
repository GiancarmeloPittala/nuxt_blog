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

    <PostsGrid /> 
    <div class="flex gap-4 justify-between">
      <UPagination v-model="postStore.page" :total="postStore.total" :max="6" :page-count="postStore.take" @update:model-value="upgade_page"  />
      <USelect v-model="postStore.take" :options="[5,10,20]" @change="upgade_page"/>
    </div>


  </div>

</template>

<script setup>

definePageMeta({
  layout: 'dashboard'
})

import { usePostStore } from '@/stores/post';
const postStore = usePostStore();


function upgade_page () {
  postStore.skip = (postStore.page - 1) * postStore.take
  postStore.init()
}


</script>