import axios from 'axios'

const state = {
    projects: [],
    tasks: [],
    users: [],
    images: []
}

const getters = {
    getProjectById: state => {
        return (id) => state.projects.find(p => p.id === id)
    },
    getTaskById: state => {
        return (id) => state.tasks.find(t => t.id === id)
    },
    getUserById: state => {
        return (id) => state.users.find(u => u.id === id)
    }
}

const actions = {
    async fetchUsers({ commit }) {
        try {
            let { data: users } = await axios.get('/users')
            commit('updateUsers', users)
            return users
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async fetchProjects({ commit }) {
        try {
            let { data: projects } = await axios.get('/projects')
            commit('updateProjects', projects)
            return projects
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async fetchTasks({ commit }) {
        try {
            let { data: tasks } = await axios.get('/tasks')
            commit('updateTasks', tasks)
            return tasks
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async fetchTask({ commit }, id) {
        try {
            let { data: task } = await axios.get(`/tasks/${id}`)
            commit('updateTask', task)
            return task
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async saveTask({ commit }, task) {
        try {
            let { data: savedTask } = await axios.put(`/tasks/${task.id}`, task)
            commit('updateTask', savedTask)
            return savedTask
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async createTask({ commit }, task) {
        console.log(task)
        try {
            let { data: createdTask } = await axios.post('/tasks', task)
            commit('addTask', createdTask)
            return createdTask
        } catch (e) {
            console.error(e)
            return null
        }
    },
    async saveImage({ commit }, image) {
        try {
            const BASE_URL = ''
            const url = `${BASE_URL}/src/assets/images/fileUploadImages`
            let { data: savedImage } = await axios.post(url, image)
            commit('updateImage', saveImage)
            return saveImage
        } catch (e) {
            console.error(e)
            return null
        }
    }
}

const mutations = {
    updateProjects(state, projects) {
        state.projects = projects
    },
    updateImage(state, tasks) {
        state.images = images
    },
    updateTasks(state, tasks) {
        state.tasks = tasks
    },
    updateUsers(state, users) {
        state.users = users
    },
    updateTask(state, task) {
        let index = state.tasks.findIndex(t => t.id === task.id)
        Object.assign(state.tasks[index], task)
            // state.tasks[index] = task
    },
    updateImage(state, image) {
        state.image = image
    },
    addTask(state, task) {
        state.tasks.push(task)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}