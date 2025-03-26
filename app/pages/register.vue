<script setup lang="ts">
const name = ref("")
const email = ref("")
const password = ref("")

async function login() {
  console.log("login", email.value, password.value)

  const res = await $fetch("/api/register", {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
      password: password.value,
    },
  })
}
</script>

<template>
  <form @submit.prevent="login" class="flex flex-col">
    <input v-model="name" type="text" name="name" placeholder="Name" class="border" />
    <input v-model="email" type="email" name="email" placeholder="Email" class="border" />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="Password"
      class="border"
    />
    <button type="submit" class="bg-black text-white">Register</button>
  </form>
  <NuxtLink to="/login">Back to login</NuxtLink>
</template>
