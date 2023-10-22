<template>
  <div>
    <form action="" @submit="registrati">
      <div class="flex flex-col gap-4">
        <input
          v-model="utente.email"
          class="w-full border border-gray-800 px-4 py-2 rounded-lg"
          placeholder="email"
          type="email"
          name=""
          id=""
        />
        <input
          v-model="utente.nickname"
          class="w-full border border-gray-800 px-4 py-2 rounded-lg"
          placeholder="text"
          type="text"
          name=""
          id=""
        />
        <input
          v-model="utente.password"
          class="w-full border border-gray-800 px-4 py-2 rounded-lg"
          placeholder="password"
          type="password"
          name=""
          id=""
        />
        <UButton type="submit">
          <span class="mx-auto"> Registrati </span>
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup>
const utente = reactive({
  email: '',
  password: '',
  nickname: ''
})

async function registrati () {
  await $fetch('/api/utente/registrati', { method: 'POST', body: utente })
}
</script>
