<template>
  <div class="task-due-date">
    <input
      :id="uniqueId"
      type="date"
      :value="value"
      @change="onChange"
      v-flatpickr
    >
    <label :for="uniqueId">
      <span class="label">{{ value ? 'Due Date' : 'Add Due Date' }}</span>
      <span
        class="value"
        v-if="value"
        v-text="formattedValue"
      />
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import Flatpickr from '../directives/Flatpickr'

export default {
  name: 'TaskDueDate',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String
  },
  computed: {
    ...mapState('tasks', [
      'users'
    ]),
    uniqueId () {
      return 'priority_' + this._uid
    },
    formattedValue () {
      return moment(this.value).format('MMM D, YYYY')
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  },
  directives: {
    Flatpickr
  }
}
</script>

<style lang="scss" scoped>
.task-due-date {
  position: relative;
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
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
