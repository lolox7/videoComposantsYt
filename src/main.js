import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

import MaListe from "./components/MaListe.vue"
app.components("MaListe", MaListe)