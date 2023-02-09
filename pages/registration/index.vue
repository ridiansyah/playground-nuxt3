<template>
  <div class="flex h-screen items-center justify-center">
    <p-card class="w-4/12">
      <p-heading class="mb-6 t" element="h4"> Registration </p-heading>
      <p-input-group class="mt-2 mb-2">
        <p-input-group-addon> +62 </p-input-group-addon>
        <p-divider />
        <p-input type="number" placeholder="Phone Number" />
      </p-input-group>
      <p-input-password class="mt-2 mb-2" placeholder="Password" />
      <p-select
        class="w-full mt-2 mb-2"
        v-model="value"
        :options="country"
        placeholder="Country"
      />
      <p-button class="mt-4 w-full block mb-1" color="primary"
        ><span class="w-full text-center">Register</span></p-button
      >
      <p-subheading
        >Already Register?
        <span class="text-blue-40 cursor-pointer" @click="navigateTo(`/login`)"
          >Login Here</span
        ></p-subheading
      >
    </p-card>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Nuxt 3 Playground | Registration",
});
definePageMeta({
  layout: false,
});
const country = ref([
  { text: "Indonesia", value: "id" },
  { text: "England", value: "en" },
  { text: "Tuvalu", value: "tv" },
]);
const value = ref("");
</script>
