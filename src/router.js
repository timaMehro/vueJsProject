import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const Auth = () => import('./views/Auth')
const Tasks = () => import('./views/Tasks')
const Task = () => import('./views/Task')

Vue.use(Router)

function guardAuth (to, from, next) {
  let { authenticated } = store.state.auth

  if (authenticated) {
    next()
  } else {
    next({ name: 'auth', replace: true })
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'tasks' }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
      beforeEnter: guardAuth,
      children: [
        {
          path: 'create',
          name: 'create-task',
          component: Task,
          beforeEnter: guardAuth
        },
        {
          path: ':id',
          name: 'task',
          props: true,
          component: Task,
          beforeEnter: guardAuth
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})
