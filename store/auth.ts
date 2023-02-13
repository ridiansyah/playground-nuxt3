import { defineStore } from 'pinia'
import { toast } from '@privyid/persona/core'
import axios from 'axios'

export const useAuthStore = defineStore('auth-store', () => {
    async function postRegister(payload: FormData) {
        return await
            axios
                .post('/api/v1/register', payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response: any) => {
                    return true
                })
                .catch(error => {
                    toast({
                        type: 'error',
                        title: 'Something went wrong',
                        text: error,
                    })
                    return false
                });
    }
    return { postRegister }
})
