<template>
  <button @click="$emit('click')">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.46617 8.39188L14.5372 15.4629L15.605 14.3952L8.5339 7.32414L7.46617 8.39188ZM0.395098 1.32083L7.46617 8.39188L8.5339 7.32414L1.46283 0.253098L0.395098 1.32083ZM7.46617 7.32414L0.39509 14.3952L1.46282 15.4629L8.5339 8.39188L7.46617 7.32414ZM14.5372 0.253098L7.46617 7.32414L8.5339 8.39188L15.605 1.32083L14.5372 0.253098Z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ModalCloseButton'
}
</script>

<style lang="scss" scoped>
button {
  margin: 0;
  padding: 10px;
  font-size: 0;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
