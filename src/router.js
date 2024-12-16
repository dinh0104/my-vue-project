import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Navbar from "./components/InsideNav.vue";
import About from "./components/About.vue";
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
        }
    ]
})

export default router