import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createHead} from '@vueuse/head'
import VueYandexMetrika from 'vue3-yandex-metrika'

const head = createHead()

createApp(App).use(head).use(store).use(router).use(VueYandexMetrika, {
	id: 96397865,
	router: router,
	env: process.env.NODE_ENV
    // other options
}).mount('#app')
