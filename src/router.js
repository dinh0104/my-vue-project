import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import About from "./components/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Homepage
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router