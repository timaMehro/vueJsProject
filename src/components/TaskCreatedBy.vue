<template>
  <div class="task-created-by">
    <label>Created By</label>
    <span v-if="selectedUser">{{ selectedUser.name }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TaskCreatedBy',
  props: {
    value: Number
  },
  computed: {
    ...mapState('tasks', [
      'users'
    ]),
    uniqueId () {
      return 'description_' + this._uid
    },
    selectedUser () {
      return this.users.find(u => u.id === this.value)
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.task-created-by {
  padding-top: 20px;
  border-top: solid 1px rgba(#000, .1);
}

label {
  display: block;
  margin-bottom: 4px;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .5;
}
</style>
