<template>
  <button :class="{ 'active': isComplete }" @click="onClick">
    <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67233 8.65966L1.67545 4.99937L0.324707 6.47432L5.63818 11.3403L16.6564 1.75445L15.3437 0.245559L5.67233 8.65966Z"/>
    </svg>
  </button>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'

const TODAY = moment().format('YYYY-MM-DD')

export default {
  name: 'CompleteTaskButton',
  props: {
    task: Object
  },
  computed: {
    isComplete () {
      return !!this.task.resolved_date
    }
  },
  methods: {
    ...mapActions('tasks', [
      'saveTask'
    ]),
    onClick () {
      this.saveTask({
        id: this.task.id,
        resolved_date: (this.isComplete ? null : TODAY)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #ccc;
  border: solid 1px #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: color .2s, border-color .2s, background-color .2s;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #777;
    border-color: #777;
  }

  &.active {
    color: #fff;
    border-color: #D9AE4F;
    background-color: #D9AE4F;
  }
}
</style>
