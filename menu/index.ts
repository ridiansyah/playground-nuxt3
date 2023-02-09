import IconHome from '@carbon/icons-vue/lib/home/20'
import { defineMenu } from '@privyid/persona/core'

export default defineMenu([
  {
    items: [
      {
        name: 'home',
        label: 'Homepage',
        url: '/',
        icon: IconHome
      },
      {
        name: 'home',
        label: 'Login',
        url: '/login',
        icon: IconHome
      },
    ]
  },
])
