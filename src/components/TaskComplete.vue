<template>
  <div class="task-complete">
    <input :id="uniqueId" type="checkbox" :checked="isCompleted" @change="onChange">
    <label :for="uniqueId">
      <div class="label-wrapper">
        <span class="label">{{ value ? 'Completed on' : 'Mark as complete' }}</span>
        <span
          class="value"
          v-if="value"
          v-text="formattedValue"
        />
      </div>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15.5" fill="white" stroke="#CCCCCC"/>
        <path d="M23.5 11.5L13.5 21L9 16.5" stroke="#CCCCCC" stroke-width="1.5"/>
      </svg>
    </label>
  </div>
</template>

<script>
import moment from 'moment'

const TODAY = moment().format('YYYY-MM-DD')

export default {
  name: 'TaskComplete',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String
  },
  computed: {
    isCompleted () {
      return !!this.value
    },
    uniqueId () {
      return 'task_complete_' + this._uid
    },
    formattedValue () {
      return moment(this.value).format('MMM D, YYYY')
    }
  },
  methods: {
    onChange (e) {
      if (e.target.checked) {
        this.$emit('change', TODAY)
      } else {
        this.$emit('change', null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input[type=checkbox] {
  display: none;
}

label {
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 20px;
  }

  circle,
  path {
    stroke: #ccc;
    transition: stroke .1s, fill .1s;
  }
}

label:hover {
  circle,
  path {
    stroke: #202531;
  }
}

input[type=checkbox]:checked + label {
  circle {
    stroke: #D9AE4F;
    fill: #D9AE4F;
  }

  path {
    stroke: #fff;
  }
}

.label-wrapper {
  display: flex;
  flex-direction: column;
  text-align: right;
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
