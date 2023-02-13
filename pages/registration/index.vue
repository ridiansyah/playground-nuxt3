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
        @click="checkRegister()"
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
import { useAuthStore } from "~~/store/auth";
import { storeToRefs } from "pinia";
import { defineAsyncAdapter } from "@privyid/persona/core";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, numeric } from "@vuelidate/validators";
import { toast } from "@privyid/persona/core";

useHead({
  title: "Nuxt 3 Playground | Registration",
});
definePageMeta({
  layout: false,
});

const loadingRegister = ref(false);

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
  device_token: "",
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

const authStore = useAuthStore();
const { postRegister } = authStore;
async function handleRegister(data: FormData) {
  const API = await postRegister(data);
  if (API) {
    loadingRegister.value = false;
    toast({
      type: "success",
      title: "Success",
      text: "Mantap Gan",
    });
  } else {
    loadingRegister.value = false;
  }
}

async function checkRegister() {
  loadingRegister.value = true;
  const isValidForm = await v$.value.$validate();
  if (isValidForm) {
    let tempFormData = new FormData();
    tempFormData.append("phone", "62" + form?.phone);
    tempFormData.append("password", form?.password);
    tempFormData.append("country", form?.country);
    tempFormData.append(
      "latlong",
      countryList.value.find(
        (obj: {
          value: string;
          text: string;
          lat: number;
          long: number;
          latlong: string;
        }) => obj.value === form?.country
      )?.latlong ?? ""
    );
    tempFormData.append("device_token", form?.device_token);
    tempFormData.append("device_type", Number(form?.device_type));
    console.log(tempFormData);
    handleRegister(tempFormData);
  } else {
    loadingRegister.value = false;
    return;
  }
}
</script>
