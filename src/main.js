import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { yandexMap } from 'vue-yandex-maps';
// import YmapPlugin from 'vue-yandex-maps'
// const settings = {
//   apiKey: '6a1b09a0-dfe3-473d-b3dc-de781a109967'
// }

// const ymaps3Vue = await ymaps3.import('@yandex/ymaps3-vuefy');
// const vuefy = ymaps3Vue.vuefy.bindTo(Vue);
// const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = vuefy.module(ymaps3);

createApp(App).use(store).use(router).mount('#app')
