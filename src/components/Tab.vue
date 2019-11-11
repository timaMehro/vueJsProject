<template>
  <button
    :class="{ 'tab': true, active }"
    @click="$emit('click')"
    v-text="label"
  />
</template>

<script>
export default {
  name: 'Tab',
  props: {
    label: String,
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
.tab {
  padding: 10px 4px;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  background: transparent;
  border: none;
  border-bottom: solid 2px transparent;
  cursor: pointer;
  transition: color .2s, border-bottom-color .2s;

  &:hover {
    color: #D9AE4F;
  }

  &:focus {
    outline: none;
  }

  &.active {
    color: #D9AE4F;
    border-bottom-color: #D9AE4F;
  }
}

.tab + .tab {
  margin-left: 20px;
}
</style>
