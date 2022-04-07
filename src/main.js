import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { store } from "./store"


import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App)
app.use(BootstrapVue3)
app.use(store)
app.mount("#app")