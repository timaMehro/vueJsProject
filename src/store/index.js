import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import auth from './modules/auth'
import tasks from './modules/tasks'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth
  })
})

export default new Vuex.Store({
  modules: { auth, tasks },
  plugins: [ vuexLocalStorage.plugin ]
})
