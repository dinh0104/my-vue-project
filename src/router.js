import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Navbar from "./components/InsideNav.vue";
import About from "./components/About.vue";
import EliraGallery from "./components/gallery/EliraGallery.vue";
import FinanaGallery from "./components/gallery/FinanaGallery.vue";
import RosemiGallery from "./components/gallery/RosemiGallery.vue";
import PetraGallery from "./components/gallery/PetraGallery.vue";
import CharacterProfile from "./components/CharacterProfile.vue";
import GroupProfile from "./components/GroupProfile.vue";
import CharacterGallery from "./components/CharacterGallery.vue";

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
            path: '/navbar',
            name: 'Navbar',
            component: Navbar
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: About
        },
        {
            path: '/streamer/:name',
            name: 'StreamerDetails',
            component: CharacterProfile
        },
        {
            path: '/streamer/:name/gallery',
            name: 'StreamerGallery',
            component: CharacterGallery
        },
        {
            path: '/group/:name',
            name: 'GroupDetails',
            component: GroupProfile
        },
        {
            path: '/elira-pendora/gallery',
            name: 'EliraGallery',
            component: EliraGallery
        },
        {
            path: '/finana-ryugu/gallery',
            name: 'FinanaGallery',
            component: FinanaGallery
        },
        {
            path: '/rosemi-lovelock/gallery',
            name: 'RosemiGallery',
            component: RosemiGallery
        },
        {
            path: '/petra-gurin/gallery',
            name: 'PetraGallery',
            component: PetraGallery
        }
    ]
})

export default router