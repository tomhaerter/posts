<script setup lang="ts">
const email = ref("")
const password = ref("")

async function login() {
  console.log("login", email.value, password.value)

  await $fetch("/api/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  })
}
</script>

<template>
  <form @submit.prevent="login" class="flex flex-col">
    <input v-model="email" type="email" name="email" placeholder="Email" class="border" />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="Password"
      class="border"
    />
    <button type="submit" class="bg-black text-white">Login</button>
  </form>
</template>
