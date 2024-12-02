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
import EnnaGallery from "./components/profiles/Ethyria/gallery/EnnaGallery.vue";
import MillieProfile from "./components/profiles/Ethyria/MillieProfile.vue";
import MillieGallery from "./components/profiles/Ethyria/gallery/MillieGallery.vue";
import ReimuProfile from "./components/profiles/Ethyria/ReimuProfile.vue";
import ReimuGallery from "./components/profiles/Ethyria/gallery/ReimuGallery.vue";
import IkeProfile from "./components/profiles/Luxiem/IkeProfile.vue";
import LucaProfile from "./components/profiles/Luxiem/LucaProfile.vue";
import ShuProfile from "./components/profiles/Luxiem/ShuProfile.vue";
import VoxProfile from "./components/profiles/Luxiem/VoxProfile.vue";
import AlbanProfile from "./components/profiles/Noctyx/AlbanProfile.vue";
import FulgurProfile from "./components/profiles/Noctyx/FulgurProfile.vue";
import SonnyProfile from "./components/profiles/Noctyx/SonnyProfile.vue";
import UkiProfile from "./components/profiles/Noctyx/UkiProfile.vue";
import AiaProfile from "./components/profiles/Iluna/AiaProfile.vue";
import AsterProfile from "./components/profiles/Iluna/AsterProfile.vue";
import ScarleProfile from "./components/profiles/Iluna/ScarleProfile.vue";
import RenProfile from "./components/profiles/Iluna/RenProfile.vue";
import MariaProfile from "./components/profiles/Iluna/MariaProfile.vue";
import DoppioProfile from "./components/profiles/Xsoleil/DoppioProfile.vue";
import KotokaProfile from "./components/profiles/Xsoleil/KotokaProfile.vue";
import MelocoProfile from "./components/profiles/Xsoleil/MelocoProfile.vue";
import VerProfile from "./components/profiles/Xsoleil/VerProfile.vue";
import VantaProfile from "./components/profiles/Krisis/VantaProfile.vue";
import ZaliProfile from "./components/profiles/Krisis/ZaliProfile.vue";
import WilsonProfile from "./components/profiles/Krisis/WilsonProfile.vue";
import ClaudeProfile from "./components/profiles/TTT/ClaudeProfile.vue";
import ViviProfile from "./components/profiles/TTT/ViviProfile.vue";
import RyomaProfile from "./components/profiles/Denauth/RyomaProfile.vue";
import TwistyProfile from "./components/profiles/Denauth/TwistyProfile.vue";
import KlaraProfile from "./components/profiles/Denauth/KlaraProfile.vue";

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
            path: '/enna-alouette/gallery',
            name: 'EnnaGallery',
            component: EnnaGallery
        },
        {
            path: '/millie-parfait',
            name: 'MillieParfait',
            component: MillieProfile
        },
        {
            path: '/millie-parfait/gallery',
            name: 'MillieGallery',
            component: MillieGallery
        },
        {
            path: '/reimu-endou',
            name: 'ReimuEndou',
            component: ReimuProfile
        },
        {
            path: '/reimu-endou/gallery',
            name: 'ReimuGallery',
            component: ReimuGallery
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
        },
        {
            path: '/maria-marionette',
            name: 'MariaMarionette',
            component: MariaProfile
        },
        {
            path: '/aia-amare',
            name: 'AiaAmare',
            component: AiaProfile
        },
        {
            path: '/aster-arcadia',
            name: 'AsterArcadia',
            component: AsterProfile
        },
        {
            path: '/scarle-yonaguni',
            name: 'ScarleYonaguni',
            component: ScarleProfile
        },
        {
            path: '/ren-zotto',
            name: 'RenZotto',
            component: RenProfile
        },
        {
            path: '/doppio-dropscythe',
            name: 'DoppioDropscythe',
            component: DoppioProfile
        },
        {
            path: '/kotoka-torahime',
            name: 'KotokaTorahime',
            component: KotokaProfile
        },
        {
            path: '/meloco-kyoran',
            name: 'MelocoKyoran',
            component: MelocoProfile
        },
        {
            path: '/ver-vermillion',
            name: 'VerVermillion',
            component: VerProfile
        },
        {
            path: '/vantacrow-bringer',
            name: 'VantacrowBringer',
            component: VantaProfile
        },
        {
            path: '/vezalius-bandage',
            name: 'VezaliusBandage',
            component: ZaliProfile
        },
        {
            path: '/yu-q-wilson',
            name: 'YuQWilson',
            component: WilsonProfile
        },
        {
            path: '/claude-clawmark',
            name: 'ClaudeClawmark',
            component: ClaudeProfile
        },
        {
            path: '/victoria-brightshield',
            name: 'VictoriaBrightshield',
            component: ViviProfile
        },
        {
            path: '/ryoma-barrenwort',
            name: 'RyomaBarrenwort',
            component: RyomaProfile
        },
        {
            path: '/twisty-amanozako',
            name: 'TwistyAmanozako',
            component: TwistyProfile
        },
        {
            path: '/klara-charmwood',
            name: 'KlaraCharmwood',
            component: KlaraProfile
        },
    ]
})

export default router