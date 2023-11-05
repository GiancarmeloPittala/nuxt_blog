<template>
  <div>
    <h1 class="text-xl font-semibold text-center mb-4">Login</h1>

    <form action="" @submit.prevent="utenteStore.login(utente)">
      <div class="flex flex-col gap-4 max-w-3xl mx-auto">
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
          <span class="mx-auto"> Login </span>
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUtenteStore } from '~/stores/utente';
const utenteStore = useUtenteStore();
const utente = reactive({
  password: '',
  nickname: ''
})


</script>
