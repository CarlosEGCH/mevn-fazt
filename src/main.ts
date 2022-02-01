import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//npm install bootstrap@4.6.0 bootstrap-vue@2.21.2

createApp(App)
.use(router)
.mount('#app')
