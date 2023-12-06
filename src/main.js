import {createApp} from 'vue';
import App from './App.vue';
import store from './store';
import {appAxios} from "@/utils/appAxios";
import {routes} from '@/routes';
import {createRouter, createWebHashHistory} from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

const app = createApp(App)

library.add(faUserSecret)

app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
