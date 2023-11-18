import { createApp } from 'vue'
import Main from './Main.vue'
import './main.css'
import { router } from './router'

const app = createApp(Main).use(router)
app.mount('#aroni')
