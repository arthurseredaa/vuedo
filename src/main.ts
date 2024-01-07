import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/login.vue";
import Home from "@/pages/home.vue";
import Profile from "@/pages/profile.vue";

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
