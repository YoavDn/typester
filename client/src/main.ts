import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import { createAuth0 } from '@auth0/auth0-vue';

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
app.use(VueApexCharts)

// app.use(
//     createAuth0({
//         domain: import.meta.env.VITE_DOMAIN,
//         client_id: import.meta.env.VITE_CLIENT_ID,
//         redirect_uri: import.meta.env.VITE_REDIRECT_URI
//     })
// );

app.mount('#app')
