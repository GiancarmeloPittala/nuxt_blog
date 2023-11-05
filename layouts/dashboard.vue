<template>
  <div>
    <!-- SEO -->
    <DashboardAside />
    <main class="py-4 px-4 sm:ml-64"> 
      <slot />
    </main>
  </div>
</template>


<script setup>
definePageMeta({
  middleware: 'is-auth'
})
</script>