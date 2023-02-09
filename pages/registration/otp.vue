<template>
  <div class="flex h-screen items-center justify-center">
    <p-card class="w-4/12">
      <p-heading class="mb-6 t" element="h4"> OTP Confirmation </p-heading>
      <p-input-pin length="4" />
      <p-button class="mt-4 w-full block mb-1" color="primary"
        ><span class="w-full text-center">Verification</span></p-button
      >
      <span
        class="text-blue-40 cursor-pointer"
        @click="navigateTo(`/registration/otp`)"
        >Resend OTP</span
      >
    </p-card>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Nuxt 3 Playground | OTP Confirmation",
});
definePageMeta({
  layout: false,
});
</script>
