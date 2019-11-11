import axios from 'axios'

const state = {
  authenticated: false,
  authToken: null,
  user: null
}

const actions = {
  async login ({ commit, dispatch }, user) {
    try {
      let res = await axios.post('/auth', user)
      commit('updateToken', res.data.accessToken)
      await dispatch('fetchUser')

      return true
    } catch (e) {
      console.error(e)
      return false
    }
  },

  async fetchUser ({ commit }) {
    try {
      let res = await axios.get('/me')
      commit('updateUser', res.data)
      return res
    } catch (e) {
      console.error(e)
      return null
    }
  },

  async logout ({ commit }) {
    try {
      await axios.delete('/auth')
      commit('resetAuth')
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}

const mutations = {
  updateToken (state, token) {
    state.authenticated = true
    state.authToken = token
  },

  updateUser (state, user) {
    state.user = user
  },

  resetAuth (state) {
    state.authenticated = false
    state.authToken = null
    state.user = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
