<template>
  <div>
    <h1 class="text-xl font-semibold text-center mb-4">
      Registrazione
    </h1>

    <form action="" @submit="registrati">
      <div class="flex flex-col gap-4 max-w-3xl mx-auto">
        <input
          v-model="utente.email"
          class="w-full border border-gray-300 px-4 py-2 rounded-xl"
          placeholder="email"
          type="email"
          name=""
          id=""
        />
        <input
          v-model="utente.nickname"
          class="w-full border border-gray-300 px-4 py-2 rounded-xl"
          placeholder="text"
          type="text"
          name=""
          id=""
        />
        <input
          v-model="utente.password"
          class="w-full border border-gray-300 px-4 py-2 rounded-xl"
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
