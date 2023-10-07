<template>
  <div class="max-w-lg mx-auto p-4">
    <UForm
      v-if="!pending"
      :schema="schema"
      :state="state"
      @submit.prevent.stop="submit"
    >
      <UFormGroup label="titolo" name="titolo">
        <UInput placeholder="titolo" v-model="state.titolo" />
      </UFormGroup>
      <UFormGroup label="desc" name="desc">
        <UInput placeholder="desc" v-model="state.desc" />
      </UFormGroup>
      <UButton type="submit">Modifica</UButton>
    </UForm>

    <div v-else class="flex items-center space-x-4">
      <USkeleton
        class="h-12 w-12 bg-gray-400"
        :ui="{ rounded: 'rounded-full' }"
      />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px] bg-gray-400" />
        <USkeleton class="h-4 w-[200px] bg-gray-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast()
const { id } = useRoute().params
const { data: post, pending } = await useFetch('/api/articoli/' + id)

import { object, string } from 'yup'

const schema = object({
  titolo: string().min(5, 'Minimo 5 char').max(255).required('Required'),
  desc: string().min(8, 'Must be at least 8 characters').max(64000)
})

const state = ref(post.value.data)

async function submit (event) {
  // Do something with event.data

  try {
    toast.add({ color: 'yellow', title: 'Modifica in corso! ...' })    
    await $fetch(`/api/articoli/${id}`, {
      body: {
        titolo: state.value.titolo,
        desc: state.value.desc
      },
      method: 'PUT'
    })
    toast.add({ color: 'green', title: 'Post modificato correttamente!' })

  } catch (error) {
    console.error( error )
    toast.add({ color: 'red', title: 'Si è verificato un errore' })
  }
}
</script>
