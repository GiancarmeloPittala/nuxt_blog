<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="link of links" :key="'link' + i">
          <NuxtLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <UIcon
              :name="link.icon"
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <span class="ml-3">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const links = reactive([
  {
    to: '/dashboard/articoli',
    icon: 'i-heroicons-home',
    label: 'Articoli'
  },
  {
    to: '/dashboard/utenti',
    icon: 'i-heroicons-users',
    label: 'Utenti'
  },
])
</script>
