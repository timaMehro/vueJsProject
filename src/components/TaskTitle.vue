<template>
  <input
    type="text"
    placeholder="Add a Title"
    :value="value"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TaskTitle',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: String
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  width: 100%;
  font-size: 2.25rem;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: inherit;
    opacity: .5;
  }
}
</style>
