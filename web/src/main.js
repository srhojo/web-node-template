import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'


// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
