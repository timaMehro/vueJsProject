import AxiosMockAdapter from 'axios-mock-adapter'
import users from './users'
import projects from './projects'
import tasks, { NEW_TASK } from './tasks'

const TASK_PATH = /\/tasks\/(\d+)/
const ACCESS_TOKEN = /Token (.+)/

function postAuth (config) {
  let { email, password } = JSON.parse(config.data)
  let user = users.find(u => {
    return (u.email === email && u.password === password)
  })

  if (user) {
    return [200, { accessToken: user.id }]
  } else {
    return [400]
  }
}

function deleteAuth () {
  return [200]
}

function getMe (config) {
  let accessToken = config.headers.Authorization
  let user = null

  if (accessToken && ACCESS_TOKEN.test(accessToken)) {
    let id = parseInt(accessToken.match(ACCESS_TOKEN)[1])
    user = users.find(u => u.id === id)
  }

  if (user) {
    return [200, { ...user }]
  } else {
    return [400]
  }
}

function getUsers () {
  return [200, [ ...users ]]
}

function getTasks () {
  return [200, [ ...tasks ]]
}

function getProjects () {
  return [200, [ ...projects ]]
}

function getTask (config) {
  let id = parseInt(config.url.match(TASK_PATH)[1])
  let task = tasks.find(t => t.id === id)

  if (task) {
    return [200, { ...task }]
  } else {
    return [404]
  }
}

function putTask (config) {
  let id = parseInt(config.url.match(TASK_PATH)[1])
  let index = tasks.findIndex(t => t.id === id)

  if (index >= 0) {
    Object.assign(tasks[index], JSON.parse(config.data))
    return [200, { ...tasks[index] }]
  } else {
    return [404]
  }
}

function postTask (config) {
  let data = JSON.parse(config.data)
  let task = { ...NEW_TASK, ...data }

  task.id = Math.floor(Math.random() * 1000)
  tasks.push(task)

  return [200, { ...task }]
}

function postImage (config) {
  if (config.data instanceof FormData) {
    let file = config.data.get('file')
    let fileUrl = URL.createObjectURL(file)

    return [200, fileUrl]
  } else {
    return [400]
  }
}

export function createMockAdapter (axios) {
  const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 })

  // auth endpoints
  mock.onPost('/auth').reply(postAuth)
  mock.onDelete('/auth').reply(deleteAuth)
  mock.onGet('/me').reply(getMe)

  // task endpoints
  mock.onGet('/users').reply(getUsers)
  mock.onGet('/projects').reply(getProjects)
  mock.onGet('/tasks').reply(getTasks)
  mock.onPost('/tasks').reply(postTask)
  mock.onGet(TASK_PATH).reply(getTask)
  mock.onPut(TASK_PATH).reply(putTask)

  // image endpoints
  mock.onPost('/images').reply(postImage)
}
