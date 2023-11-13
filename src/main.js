import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createHead } from '@vueuse/head'
import router from './router'

const app = createApp(App).use(router)
app.use(createHead())
app.mount('#app')
