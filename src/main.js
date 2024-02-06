import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createHead} from '@vueuse/head'

const head = createHead()

createApp(App).use(head).use(store).use(router).mount('#app')
