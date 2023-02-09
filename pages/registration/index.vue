<template>
  <div class="flex h-screen items-center justify-center">
    <p-card class="w-4/12">
      <p-heading class="mb-6 t" element="h4"> Registration </p-heading>
      <pre>
        {{ form }}
      </pre>
      <p-form-group :error="errorMessage('phone')">
        <p-input-group>
          <p-input-group-addon> +62 </p-input-group-addon>
          <p-divider />
          <p-input
            v-model="form.phone"
            type="number"
            id="phone"
            placeholder="Phone Number"
          />
        </p-input-group>
      </p-form-group>
      <p-form-group :error="errorMessage('password')">
        <p-input-password
          id="password"
          v-model="form.password"
          placeholder="Password"
        />
      </p-form-group>
      <p-form-group :error="errorMessage('country')">
        <p-select
          class="w-full"
          id="country"
          v-model="form.country"
          :adapter="countryAdapter"
          placeholder="Country"
          loadingText="Loading..."
        />
      </p-form-group>
      <p-button
        class="mt-4 w-full block mb-1"
        color="primary"
        @click="navigateTo(`/registration/otp`)"
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
import { useCountriesStore } from "~~/store/countries";
import { storeToRefs } from "pinia";
import { defineAsyncAdapter } from "@privyid/persona/core";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, numeric } from "@vuelidate/validators";

useHead({
  title: "Nuxt 3 Playground | Registration",
});
definePageMeta({
  layout: false,
});

const countryStore = useCountriesStore();
const { getCountryData } = countryStore;
const { countryList } = storeToRefs(countryStore);
const countryAdapter = defineAsyncAdapter(async () => {
  const response = await getCountryData();
  return response;
}, []);

const form = reactive({
  phone: "",
  password: "",
  country: "",
  device_token: null,
  device_type: 2,
});

const rules = {
  phone: {
    required,
    minLength: minLength(7),
    maxLength: maxLength(15),
    numeric,
  },
  password: { required, minLength: minLength(6) },
  country: { required },
};
const v$ = useVuelidate(rules, form, { $autoDirty: true });

function errorMessage(key: string) {
  const message = v$.value[key].$errors[0]?.$message ?? "";
  return message as string;
}

async function checkRegister() {
  const isValidForm = await v$.value.$validate();
  if (isValidForm) {
  }
}
</script>
