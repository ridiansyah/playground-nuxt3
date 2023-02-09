import { defineStore } from 'pinia'
import { toast } from '@privyid/persona/core'

export const useCountriesStore = defineStore('countries-store', () => {
    const countryList = ref([])

    async function getCountryData() {
        return await $fetch('https://countriesnow.space/api/v0.1/countries/positions', {
            method: 'GET',
        }).then((response: any) => {
            countryList.value = response.data?.map((obj: {
                iso2: string,
                name: string,
                lat: number,
                long: number,
            }) => ({
                value: obj.iso2,
                text: obj?.name,
                lat: obj?.lat,
                long: obj?.long,
                latlong: obj?.lat + "," + obj?.long,
            }))
            return countryList.value
        })
            .catch(error => {
                countryList.value = []
                toast({
                    type: 'error',
                    title: 'Something went wrong',
                    text: error,
                })
                return countryList.value
            });
    }
    return { getCountryData, countryList }
})
