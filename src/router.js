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
import EliraProfile from "./components/profiles/Lazulight/EliraProfile.vue";
import EliraGallery from "./components/profiles/Lazulight/gallery/EliraGallery.vue";
import FinanaProfile from "./components/profiles/Lazulight/FinanaProfile.vue";
import FinanaGallery from "./components/profiles/Lazulight/gallery/FinanaGallery.vue";
import RosemiProfile from "./components/profiles/Obsydia/RosemiProfile.vue";
import RosemiGallery from "./components/profiles/Obsydia/gallery/RosemiGallery.vue";
import PetraProfile from "./components/profiles/Obsydia/PetraProfile.vue";
import PetraGallery from "./components/profiles/Obsydia/gallery/PetraGallery.vue";
import EnnaProfile from "./components/profiles/Ethyria/EnnaProfile.vue";
import MillieProfile from "./components/profiles/Ethyria/MillieProfile.vue";
import ReimuProfile from "./components/profiles/Ethyria/ReimuProfile.vue";
import IkeProfile from "./components/profiles/Luxiem/IkeProfile.vue";
import LucaProfile from "./components/profiles/Luxiem/LucaProfile.vue";
import ShuProfile from "./components/profiles/Luxiem/ShuProfile.vue";
import VoxProfile from "./components/profiles/Luxiem/VoxProfile.vue";
import AlbanProfile from "./components/profiles/Noctyx/AlbanProfile.vue";
import FulgurProfile from "./components/profiles/Noctyx/FulgurProfile.vue";
import SonnyProfile from "./components/profiles/Noctyx/SonnyProfile.vue";
import UkiProfile from "./components/profiles/Noctyx/UkiProfile.vue";

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
            path: '/rosemi-lovelock/gallery',
            name: 'RosemiGallery',
            component: RosemiGallery
        },
        {
            path: '/petra-gurin',
            name: 'PetraGurin',
            component: PetraProfile
        },
        {
            path: '/petra-gurin/gallery',
            name: 'PetraGallery',
            component: PetraGallery
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
        },
        {
            path: '/ike-eveland',
            name: 'IkeEveland',
            component: IkeProfile
        },
        {
            path: '/luca-kaneshiro',
            name: 'LucaKaneshiro',
            component: LucaProfile
        },
        {
            path: '/shu-yamino',
            name: 'ShuYamino',
            component: ShuProfile
        },
        {
            path: '/vox-akuma',
            name: 'VoxAkuma',
            component: VoxProfile
        },
        {
            path: '/alban-knox',
            name: 'AlbanKnox',
            component: AlbanProfile
        },
        {
            path: '/fulgur-ovid',
            name: 'FulgurOvid',
            component: FulgurProfile
        },
        {
            path: '/sonny-brisko',
            name: 'SonnyBrisko',
            component: SonnyProfile
        },
        {
            path: '/uki-violeta',
            name: 'UkiVioleta',
            component: UkiProfile
        }
    ]
})

export default router