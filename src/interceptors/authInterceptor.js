import store from '../store'

export default function authInterceptor (config) {
  let { authenticated, authToken } = store.state.auth

  if (authenticated) {
    config.headers['Authorization'] = `Token ${authToken}`
  }

  return config
}
