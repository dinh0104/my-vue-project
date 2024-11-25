import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Navbar from "./components/InsideNav.vue";
import LazuLight from "./components/sub-nav/Lazu-sub-nav.vue";
import Obsydia from "./components/sub-nav/Obsydia-sub-nav.vue";
import Ethyria from "./components/sub-nav/Ethyria-sub-nav.vue";
import Luxiem from "./components/sub-nav/Luxiem-sub-nav.vue";
import Noctyx from "./components/sub-nav/Noctyx-sub-nav.vue";
import Iluna from "./components/sub-nav/Iluna-sub-nav.vue";
import Xsoleil from "./components/sub-nav/Xsoleil-sub-nav.vue";
import Krisis from "./components/sub-nav/Krisis-sub-nav.vue";
import TTT from "./components/sub-nav/TTT-sub-nav.vue";
import Denauth from "./components/sub-nav/Denauth-sub-nav.vue";
import EliraProfile from "./components/profiles/Lazulight/EliraProfile.vue";
import EliraGallery from "./components/profiles/Lazulight/gallery/EliraGallery.vue";
import FinanaProfile from "./components/profiles/Lazulight/FinanaProfile.vue";
import FinanaGallery from "./components/profiles/Lazulight/gallery/FinanaGallery.vue";
import RosemiProfile from "./components/profiles/Obsydia/RosemiProfile.vue";
import PetraProfile from "./components/profiles/Obsydia/PetraProfile.vue";
import EnnaProfile from "./components/profiles/Ethyria/EnnaProfile.vue";
import MillieProfile from "./components/profiles/Ethyria/MillieProfile.vue";
import ReimuProfile from "./components/profiles/Ethyria/ReimuProfile.vue";

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
            path: '/elira-pendora',
            name: 'EliraPendora',
            component: EliraProfile
        },
        {
            path: '/elira-pendora/gallery',
            name: 'EliraGallery',
            component: EliraGallery
        },
        {
            path: '/finana-ryugu',
            name: 'FinanaRyugu',
            component: FinanaProfile
        },
        {
            path: '/finana-ryugu/gallery',
            name: 'FinanaGallery',
            component: FinanaGallery
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
        },
        {
            path: '/enna-alouette',
            name: 'EnnaAlouette',
            component: EnnaProfile
        },
        {
            path: '/millie-parfait',
            name: 'MillieParfait',
            component: MillieProfile
        },
        {
            path: '/reimu-endou',
            name: 'ReimuEndou',
            component: ReimuProfile
        }
    ]
})

export default router