import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import LazuLight from "./components/sub-nav/Lazu-sub-nav.vue";
import EliraProfile from "./components/profiles/EliraProfile.vue";

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
            path: '/lazulight',
            name: 'LazuLight',
            component: LazuLight
        },
        {
            path: '/elira-pendora',
            name: 'EliraPendora',
            component: EliraProfile
        }
    ]
})

export default router