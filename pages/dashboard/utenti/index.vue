<template>
  <div>
    <div class="flex gap-4">
      <h1>Utenti {{ utenteStore.total }}</h1>
      <NuxtLink to="/dashboard/articoli/create">
        <UButton> Crea nuovo </UButton>
      </NuxtLink>
    </div>

    <UTable v-model="selected" :rows="utenteStore.utenti" :columns="columns">
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})
const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => useRouter().push('/dashboard/utenti/' + row.id )
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

const columns = [
  {
    key: 'email',
    label: 'email'
  },
  {
    key: 'nickname',
    label: 'nickname'
  },
  {
    key: 'nome',
    label: 'nome'
  },
  {
    key: 'permessi',
    label: 'permessi'
  },
  {
    key: 'actions'
  }
]

import { useUtenteStore } from '@/stores/utente'
const utenteStore = useUtenteStore()

onMounted(() => {
  utenteStore.init()
})

const selected = ref([utenteStore.utenti[1]])
</script>
