<template>
  <div class="task-assign">
    <select
      :id="uniqueId"
      :value="value"
      @change="onChange"
    >
      <option
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        v-text="user.name"
      />
    </select>

    <label>
      <img class="avatar" :src="avatarSrc">
      <div class="label-wrapper">
        <span class="label">{{ value ? 'Assigned to' : 'Assign to' }}</span>
        <span
          class="value"
          v-if="selectedUser"
          v-text="selectedUser.name"
        />
      </div>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TaskAssign',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Number
  },
  computed: {
    ...mapState('tasks', [
      'users'
    ]),
    uniqueId () {
      return 'assign_' + this._uid
    },
    selectedUser () {
      return this.users.find(u => u.id === this.value)
    },
    avatarSrc () {
      if (this.selectedUser) {
        return this.selectedUser.avatar
      } else {
        return require('../assets/images/assign-to-placeholder.svg')
      }
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', parseInt(e.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
.task-assign {
  position: relative;
}

select {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

label {
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.label-wrapper {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(#000, .5);
}

.value {
  margin-top: 6px;
}
</style>
