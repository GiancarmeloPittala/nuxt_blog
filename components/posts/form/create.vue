<template>
  <div class="grid grid-cols-2 gap-4">
    <UInput
      v-model="articolo.titolo"
      type="text"
      id="titolo"
      placeholder="Titolo"
    />
    <UInput
      v-model="articolo.desc"
      type="text"
      id="descrizione"
      placeholder="Descrizione"
    />
    <UButton
      :disabled="buttonDisabled()"
      @click="creaPost"
      class="col-span-2"
      type="submit"
    >
      crea
    </UButton>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
const toast = useToast()
const postStore = usePostStore()

const articolo = ref({ titolo: '', desc: '' })

onMounted(() => {
  postStore.init()
})

function buttonDisabled () {
  const { titolo, desc } = articolo.value

  if (titolo === '' && desc === '') return true

  return false
}

async function creaPost () {
  try {
    await postStore.create(articolo.value) // 200 -299 OK
    reset() // pulisco il form
    // notifica utente
    toast.add({ title: 'Articolo correttamente creato' })
  } catch (error) {
    // 400 - 599
    toast.add({ color: 'red', title: 'Si è verificato un errore' })
  }
}

function reset () {
  articolo.value.titolo = ''
  articolo.value.desc = ''
}
</script>
