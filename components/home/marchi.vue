<template>
  <section id="marchi" class="bg-gray-800 flex gap-8 justify-center py-14 rounded-lg flex-wrap ">
    <img v-for="i of 8" :key="i" style="aspect-ratio: 1 / 1;" class="object-cover object-center rounded-lg w-24 " :src="`https://source.unsplash.com/random?brand+${i}`"  />
  </section>
</template>


<script setup>
</script>