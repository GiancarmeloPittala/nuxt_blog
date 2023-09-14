<template>
  <div>
    test
    {{  testStore.text }}
  </div>
</template>


<script setup>
import { useTestStore } from '~/stores/test';
const testStore = useTestStore()



</script>