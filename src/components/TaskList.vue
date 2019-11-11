<template>
  <div class="task-list">
    <h2>{{ heading }}</h2>
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  props: {
    heading: String,
    tasks: Array
  },
  components: {
    TaskItem
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
}
</style>
