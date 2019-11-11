<template>
  <div class="task-priority">
    <select
      :id="uniqueId"
      :value="value"
      @change="onChange"
    >
      <option
        v-for="(value, key) in priorities"
        :key="key"
        :value="key"
        v-text="value"
      />
    </select>

    <label :for="uniqueId">
      <span class="label">{{ value ? 'Priority' : 'Add Priority' }}</span>
      <span
        class="value"
        v-show="value"
        v-text="priorities[value]"
      />
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const PRIORITY_LOW = 'low'
const PRIORITY_MEDIUM = 'medium'
const PRIORITY_HIGH = 'high'

export default {
  name: 'TaskPriority',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number]
  },
  computed: {
    ...mapState('tasks', [
      'users'
    ]),
    uniqueId () {
      return 'priority_' + this._uid
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  },
  created () {
    this.priorities = {
      [PRIORITY_LOW]: 'Low',
      [PRIORITY_MEDIUM]: 'Medium',
      [PRIORITY_HIGH]: 'High'
    }
  }
}
</script>

<style lang="scss" scoped>
.task-priority {
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
