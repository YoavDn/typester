import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { useTestStore } from './stores/test'


import App from './App.vue'
import router from './router'
import './assets/style/main.scss'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

app.use(pinia)
app.use(router)

app.mount('#app')
