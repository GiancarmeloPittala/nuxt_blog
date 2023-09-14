<template>
  <div>
    <h1 class="text-red-900">
      test
    </h1>
    {{  testStore.text }}
  </div>
</template>


<script setup>
import { useTestStore } from '~/stores/test';
const testStore = useTestStore()



</script>