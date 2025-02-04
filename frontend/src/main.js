import App from './App.vue'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import './assets/index.css'
import './assets/main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: false
		}
	}
})

app.mount('#app')
