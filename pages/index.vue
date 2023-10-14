<template>
  <div>
    <section class="grid grid-cols-2 gap-12">
       <img class="object-cover object-center rounded-lg" src="https://source.unsplash.com/random" alt="aaaa">
       <div>
        <h1 class="text-4xl font-sans font-semibold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, hic.</h1>
        <p class="font-thin ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates inventore minima eius deleniti, culpa fuga autem dolores quam cumque quos!</p>
        <button>Explora</button>
       </div>
    </section>
  </div>
</template>


<script setup> 
import { usePostStore } from '@/stores/post';
const postStore = usePostStore();
</script>


