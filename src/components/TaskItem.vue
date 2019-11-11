<template>
  <router-link :to="{ name: 'task', params: { id: task.id } }">
    <img v-if="assignedTo" class="avatar" :src="assignedTo.avatar">
    <div v-else class="avatar" />
    <div class="details">
      <p class="title">{{ task.title }}</p>
      <p
        v-if="task.due_date"
        :class="{ 'due-date': true, 'overdue': isOverdue }"
        v-text="`Due ${formattedDueDate}`"
      />
    </div>
    <div class="project">
     <p class="project-name">{{ project.name }}</p>
      <p class="project-team">{{ project.team }}</p> 
    </div>
    <complete-task-button
      :task="task"
      @click.native.prevent
    />
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import CompleteTaskButton from './CompleteTaskButton'

const TODAY = moment().startOf('day')

export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  computed: {
    ...mapGetters('tasks', [
      'getProjectById',
      'getUserById'
    ]),
    project () {
      return this.getProjectById(this.task.project)
    },
    createdBy () {
      return this.getUserById(this.task.created_by)
    },
    assignedTo () {
      return this.getUserById(this.task.assigned_to)
    },
    formattedDueDate () {
      return moment(this.task.due_date).format('MMM D, YYYY')
    },
    isOverdue () {
      return moment(this.task.due_date).isBefore(TODAY)
    }
  },
  components: {
    CompleteTaskButton
  }
}
</script>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  padding: 30px;
  color: inherit;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(#000, .15);
  border-radius: 6px;
  transition: box-shadow .15s ease-out;

  &:hover {
    box-shadow: 0 4px 20px rgba(#000, .1);
  }
}

.avatar {
  flex: 0 0 auto;
  margin-right: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
}

.details {
  flex-grow: 3;
  width: 0;
  margin-right: 28px;
}

.title {
  margin: 0;
  margin-bottom: 6px;
  font-size: 1.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.due-date {
  margin: 0;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .5;

  &.overdue {
    color: #E40000;
    font-weight: 600;
  }
}

.project {
  flex-grow: 2;
  width: 0;
}

.project-name {
  margin: 0;
  margin-bottom: 6px;
  font-size: 1.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-team {
  margin: 0;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .5;
}

a + a {
  margin-top: 12px;
}
</style>
