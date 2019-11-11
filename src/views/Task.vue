<template>
  <modal>
    <form v-if="task" class="task" action="#" method="POST" @submit.prevent>
      <task-title v-model="task.title" />
      <div class="task-header">
        <task-assign v-model="task.assigned_to" v-on:change="(...args)=>this.saveAuto(['assigned_to',...args])" />
        <task-due-date v-model="task.due_date"  v-on:change="(...args)=>this.saveAuto(['due_date',...args])"/>
        <task-priority v-model="task.priority" v-on:change="(...args)=>this.saveAuto(['priority',...args])" />
        <task-complete v-model="task.resolved_date" v-on:change="(...args)=>this.saveAuto(['resolved_date',...args])" />
      </div>
      <task-description v-model="task.description" v-on:change="(...args)=>this.saveAuto(['description',...args])"/>
      <task-images v-model="task.images" :id="id" v-on:change="(...args)=>this.saveAuto(['assigned_to',...args])" />
      <task-created-by :value="task.created_by" v-on:change="(...args)=>this.saveAuto(['created_by',...args])" />
    </form>
  </modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Modal from '../components/Modal'
import TaskTitle from '../components/TaskTitle'
import TaskAssign from '../components/TaskAssign'
import TaskDueDate from '../components/TaskDueDate'
import TaskPriority from '../components/TaskPriority'
import TaskComplete from '../components/TaskComplete'
import TaskDescription from '../components/TaskDescription'
import TaskImages from '../components/TaskImages'
import TaskCreatedBy from '../components/TaskCreatedBy'

export default {
  name: 'Task',
  props: {
    id: [String, Number]
  },
  data () {
    return {
      task: null,
      welcomeMsg: "Hello World"
    }
  },
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('tasks', [
      'getTaskById'
    ])
  },
  methods: {
    ...mapActions('tasks', [
      'fetchTask',
      'saveTask',
      'createTask'
    ]),
    async cloneExistingTask () {
      let task = this.getTaskById(this.id)

      if (!task) {
        task = await this.fetchTask(parseInt(this.id))
      }

      if (task) {
        this.task = { ...task }
      }
    },
    async cloneNewTask () {
      let task = await this.createTask({
        project: 1,
        created_by: this.user.id
      })

      if (task) {
        this.task = { ...task }
      }
    },
    saveAuto(value) {
      const peroperties = value[0]
      const values = value[1]
      this.saveTask({
        id: this.id,
        [peroperties]: values
      })
    }
  },
  created () {
    if (this.id) {
      this.cloneExistingTask()
    } else {
      this.cloneNewTask(event.target.value)
    }
  },
  components: {
    Modal,
    TaskTitle,
    TaskAssign,
    TaskDueDate,
    TaskPriority,
    TaskComplete,
    TaskDescription,
    TaskImages,
    TaskCreatedBy
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 42px 56px;
}

.task-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding: 16px 0;
  border-bottom: solid 1px rgba(#000, .1);
}
</style>
