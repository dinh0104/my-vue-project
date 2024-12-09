import { createApp } from 'vue'
import './style.css'
import './character.styles.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
