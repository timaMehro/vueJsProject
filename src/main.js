import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import authInterceptor from './interceptors/authInterceptor'
import { createMockAdapter } from './mock/mockAdapter'
import 'normalize.css'
import './styles/global.css'

Vue.config.productionTip = false

axios.interceptors.request.use(authInterceptor)
createMockAdapter(axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')