import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Navbar from "./components/InsideNav.vue";
import LazuLight from "./components/sub-nav/Lazu-sub-nav.vue";
import Obsydia from "./components/sub-nav/Obsydia-sub-nav.vue";
import EliraProfile from "./components/profiles/EliraProfile.vue";
import EliraGallery from "./components/profiles/gallery/EliraGallery.vue";
import FinanaProfile from "./components/profiles/FinanaProfile.vue";
import RosemiProfile from "./components/profiles/RosemiProfile.vue";
import PetraProfile from "./components/profiles/PetraProfile.vue";

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
            path: '/home',
            name: 'Navbar',
            component: Navbar
        },
        {
            path: '/lazulight',
            name: 'LazuLight',
            component: LazuLight
        },
        {
            path: '/Obsydia',
            name: 'Obsydia',
            component: Obsydia
        },
        {
            path: '/elira-pendora',
            name: 'EliraPendora',
            component: EliraProfile
        },
        {
            path: '/gallery',
            name: 'EliraGallery',
            component: EliraGallery
        },
        {
            path: '/finana-ryugu',
            name: 'FinanaRyugu',
            component: FinanaProfile
        },
        {
            path: '/rosemi-lovelock',
            name: 'RosemiLovelock',
            component: RosemiProfile
        },
        {
            path: '/petra-gurin',
            name: 'PetraGurin',
            component: PetraProfile
        }
    ]
})

export default router