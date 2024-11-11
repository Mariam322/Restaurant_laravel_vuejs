import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { routes } from "./routes";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

import App from './App.vue'
let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router).use(PrimeVue);
app.use(router);
app.mount("#app")