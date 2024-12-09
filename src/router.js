import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Navbar from "./components/InsideNav.vue";
import LazuLight from "./components/group-profiles/Lazu-profile.vue";
import Obsydia from "./components/group-profiles/Obsydia-profile.vue";
import Ethyria from "./components/group-profiles/Ethyria-profile.vue";
import Luxiem from "./components/group-profiles/Luxiem-profile.vue";
import Noctyx from "./components/group-profiles/Noctyx-profile.vue";
import Iluna from "./components/group-profiles/Iluna-profile.vue";
import Xsoleil from "./components/group-profiles/Xsoleil-profile.vue";
import Krisis from "./components/group-profiles/Krisis-profile.vue";
import TTT from "./components/group-profiles/TTT-profile.vue";
import Denauth from "./components/group-profiles/Denauth-profile.vue";
import EliraGallery from "./components/gallery/EliraGallery.vue";
import FinanaGallery from "./components/gallery/FinanaGallery.vue";
import RosemiGallery from "./components/gallery/RosemiGallery.vue";
import PetraGallery from "./components/gallery/PetraGallery.vue";
import CharacterProfile from "./components/CharacterProfile.vue";
import GroupProfile from "./components/GroupProfile.vue";

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
            path: '/streamer/:name',
            name: 'StreamerDetails',
            component: CharacterProfile
        },
        {
            path: '/group/:name',
            name: 'GroupDetails',
            component: GroupProfile
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
            path: '/ethyria',
            name: 'Ethyria',
            component: Ethyria
        },
        {
            path: '/luxiem',
            name: 'Luxiem',
            component: Luxiem
        },
        {
            path: '/noctyx',
            name: 'Noctyx',
            component: Noctyx
        },
        {
            path: '/iluna',
            name: 'Iluna',
            component: Iluna
        },
        {
            path: '/xsoleil',
            name: 'Xsoleil',
            component: Xsoleil
        },
        {
            path: '/krisis',
            name: 'Krisis',
            component: Krisis
        },
        {
            path: '/ttt',
            name: 'TTT',
            component: TTT
        },
        {
            path: '/denauth',
            name: 'Denauth',
            component: Denauth
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