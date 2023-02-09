<template>
  <div class="flex h-screen items-center justify-center">
    <p-card class="w-4/12">
      <p-heading class="mb-6 t" element="h4"> Login </p-heading>
      <p-input-group class="mt-2 mb-2">
        <p-input-group-addon> +62 </p-input-group-addon>
        <p-divider />
        <p-input type="number" placeholder="Phone Number" />
      </p-input-group>
      <p-input-password placeholder="Password" class="mt-2 mb-2" />
      <p-button class="mt-4 w-full block mb-1" color="primary"
        ><span class="w-full text-center">Login</span></p-button
      >
      <p-subheading
        >Not Registered?
        <span
          class="text-blue-40 cursor-pointer"
          @click="navigateTo(`/registration`)"
          >Register Here</span
        ></p-subheading
      >
    </p-card>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Nuxt 3 Playground | Login",
});
definePageMeta({
  layout: false,
});
</script>
