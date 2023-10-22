<template>
  <button 
  v-if="colorMode.value == 'light'" 
  @click="colorMode.value = 'dark'">
    Dark
  </button>
  <button v-else @click="colorMode.value = 'light'">Light</button>

</template>

<script setup>
const colorMode = useColorMode();
</script>
