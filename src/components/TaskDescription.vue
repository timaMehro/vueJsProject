<template>
  <div class="task-description">
    <label :for="uniqueId">Description</label>
    <resizable-textarea>
    <textarea
      :id="uniqueId"
      placeholder="Add description"
      :value="value"
      @input="onInput"
    />
    </resizable-textarea>
  </div>
</template>

<script>
import ResizableTextarea from '../helper/ResizableTextarea'
export default {
  name: 'TaskDescription',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: String
  },
  computed: {
    uniqueId () {
      return 'description_' + this._uid
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  components: {
     ResizableTextarea
   }
}
</script>

<style lang="scss" scoped>
.task-description {
  margin-top: 30px;
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 15px;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .5;
}

textarea {
  display: block;
  padding: 0;
  width: 100%;
  max-width: 680px;
  font-size: 1.125rem;
  background-color: transparent;
  border: 1px solid red;
  resize: vertical;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: inherit;
    opacity: .5;
  }
}
</style>
