import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createHead } from '@vueuse/head'

const app = createApp(App)
app.use(createHead())
app.mount('#app')
